import { BygSubscription, BygVerification } from '@/index'

export interface BygUser {
  id: number
  email: string
  username: string
  createdAt: string
  bio: string | null
  avatarUrl: string | null
  bannerUrl: string | null
  color: string | null
  subscriptionState: BygSubscription
  verification: BygVerification
}
