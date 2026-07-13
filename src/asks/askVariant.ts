export interface BygAskVariant {
  id: string
  icon: string
  colors: {
    primary: string
    secondary: string
    background: string
    foreground: string
    text: string
  }
}

export const BygDefaultAskVariant: BygAskVariant = {
  colors: {
    background: '#41174a',
    foreground: '#57176365',
    primary: '#e323a3',
    secondary: '#c241dc',
    text: '#f5ddfa',
  },
  icon: 'solar:question-square-bold-duotone',
  id: 'ask',
}

export const BygConfessVariant: BygAskVariant = {
  colors: {
    background: '#0f4258',
    foreground: '#1c6d8f66',
    primary: '#57a9d0',
    secondary: '#3db596',
    text: '#cee9f8',
  },
  icon: 'solar:star-bold-duotone',
  id: 'confess',
}

export const BygHotTakeVariant: BygAskVariant = {
  colors: {
    background: '#4d1506',
    foreground: '#9a493466',
    primary: '#eb5e39',
    secondary: '#f43e7e',
    text: '#f3bec9',
  },
  icon: 'solar:fire-bold-duotone',
  id: 'hot-take',
}

export const BygComplimentVariant: BygAskVariant = {
  colors: {
    background: '#26154c',
    foreground: '#44238366',
    primary: '#926ef2',
    secondary: '#b35aeb',
    text: '#d6c5f2',
  },
  icon: 'solar:heart-bold-duotone',
  id: 'compliment',
}

export const BygRateMeVariant: BygAskVariant = {
  colors: {
    background: '#37290f',
    foreground: '#4c3a1966',
    primary: '#e4b04c',
    secondary: '#9acc5e',
    text: '#f1f2d4',
  },
  icon: 'solar:cup-bold-duotone',
  id: 'rate-me',
}

export const BygAskVariants: BygAskVariant[] = [
  BygDefaultAskVariant,
  BygConfessVariant,
  BygHotTakeVariant,
  BygComplimentVariant,
  BygRateMeVariant,
]

export function getAskVariantById(id: string): BygAskVariant {
  return (
    BygAskVariants.find(
      (variant: BygAskVariant): boolean => variant.id === id
    ) ?? BygDefaultAskVariant
  )
}

export function getAskGradient(variant: BygAskVariant): string {
  return `${variant.colors.primary}, ${variant.colors.secondary}`
}
