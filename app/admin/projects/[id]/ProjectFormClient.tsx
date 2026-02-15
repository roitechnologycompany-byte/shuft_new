'use client'
import ProjectForm from '../ProjectForm'
export default function ProjectFormClient({ project }: { project: Record<string, unknown> }) {
  return <ProjectForm initial={project as Parameters<typeof ProjectForm>[0]['initial']} />
}
