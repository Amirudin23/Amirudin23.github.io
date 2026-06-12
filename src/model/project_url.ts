export type Platform = 'Web' | 'Android' | 'iOS' | 'GitHub'

export interface ProjectUrl {
  name: string
  url: string
  platform: Platform
}