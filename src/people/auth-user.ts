import { BygSubscription } from '@/index'

export interface BygAuthUser {
  id: number
  email: string
  username: string
  displayName: string | null
  pronouns: string | null
  songLinkUrl: string | null
  avatarUrl: string | null
  bannerUrl: string | null
  bio: string | null
  subscriptionState: BygSubscription | null
  emailVerificationCode: string | null
  twoFactorEnabled: boolean
}
