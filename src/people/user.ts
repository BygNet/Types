import { BygSubscription } from '../unions/subscription'

export interface BygUser {
  id: number
  email: string
  username: string
  createdAt: string
  bio: string | null
  avatarUrl: string | null
  bannerUrl: string | null
  subscriptionState: BygSubscription
}
