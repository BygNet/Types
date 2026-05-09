export interface BygSongLinkPlatformLink {
  platform: string
  displayName: string
  url: string
}

export interface BygSongLinkInfo {
  requestedUrl: string
  finalUrl: string
  pageUrl: string | null
  pageId: string | null
  entityUniqueId: string | null
  title: string | null
  artistName: string | null
  thumbnailUrl: string | null
  links: BygSongLinkPlatformLink[]
}
