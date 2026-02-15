import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export async function GET() {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const [
    productsCount,
    applicationsCount,
    newApplicationsCount,
    blogCount,
    faqCount,
    projectsCount,
    reviewsCount,
    pendingReviewsCount,
    recentApplications,
  ] = await Promise.all([
    prisma.product.count(),
    prisma.application.count(),
    prisma.application.count({ where: { status: 'new' } }),
    prisma.blogPost.count(),
    prisma.faq.count(),
    prisma.project.count(),
    prisma.review.count(),
    prisma.review.count({ where: { isApproved: false } }),
    prisma.application.findMany({ orderBy: { createdAt: 'desc' }, take: 5 }),
  ])

  return NextResponse.json({
    stats: {
      products: productsCount,
      applications: applicationsCount,
      newApplications: newApplicationsCount,
      blog: blogCount,
      faq: faqCount,
      projects: projectsCount,
      reviews: reviewsCount,
      pendingReviews: pendingReviewsCount,
    },
    recentApplications,
  })
}
