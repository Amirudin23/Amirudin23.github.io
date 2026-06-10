import type { ProjectUrl } from "./project_url"

export interface Project {
  project_id: number
  project_name: string
  project_description: string
  year: number
  project_image: string
  technologies: string[]
  project_url: ProjectUrl[]
}

