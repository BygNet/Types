import { BygSubscription } from '../unions/subscription'

type BygUser = {
  id: number
  email: string
  username: string
  passHash: string
  createdAt: number
  bio: string | null
  avatarUrl: string | null
  bannerUrl: string | null
  subscriptionState: BygSubscription
}
