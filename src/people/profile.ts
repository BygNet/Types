import { BygUser } from '@/index'

export interface BygProfile {
  user: BygUser
  followerCount: number
  followingCount: number
  isFollowing?: boolean
}
