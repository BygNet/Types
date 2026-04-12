import { BygSubscription } from '@/index'

export interface BygAuthUser {
  id: number
  email: string
  username: string
  avatarUrl: string | null
  bannerUrl: string | null
  bio: string | null
  subscriptionState: BygSubscription | null
  emailVerificationCode: string | null
  twoFactorEnabled: boolean
}
