import { BygUser } from './user'

export interface BygProfile {
  user: BygUser
  followerCount: number
  followingCount: number
  isFollowing?: boolean
}
