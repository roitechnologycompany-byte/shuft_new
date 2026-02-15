'use client'
import BlogPostForm from '../BlogPostForm'
export default function BlogFormClient({ post }: { post: Record<string, unknown> }) {
  return <BlogPostForm initial={post as Parameters<typeof BlogPostForm>[0]['initial']} />
}
