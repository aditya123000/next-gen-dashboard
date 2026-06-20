import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export type VariantProps<T extends Record<string, string>> = {
  [K in keyof T]?: T[K]
}

export function variantClass<T extends Record<string, string>>(
  base: string,
  variant: keyof T | undefined,
  variants: T,
  defaultVariant?: keyof T
): string {
  const selectedVariant = variant || defaultVariant
  return cn(base, selectedVariant ? variants[selectedVariant] : '')
}

export function classNames(
  ...classes: (string | undefined | null | false | Record<string, boolean>)[]
): string {
  return cn(...classes)
}

export function prefixClass(
  prefix: string,
  ...classes: (string | undefined | null | false)[]
): string {
  const filtered = classes.filter(Boolean) as string[]
  if (filtered.length === 0) return ''
  return filtered.map(cls => `${prefix}-${cls}`).join(' ')
}

export { clsx }