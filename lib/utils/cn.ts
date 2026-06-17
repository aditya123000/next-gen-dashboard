import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge class names with Tailwind CSS classes
 * Combines clsx for conditional classes and tailwind-merge for deduplication
 * 
 * @param inputs - Class names (strings, objects, arrays)
 * @returns Merged class string with Tailwind conflicts resolved
 * 
 * @example
 * cn('px-2 py-1', 'bg-blue-500', { 'text-white': true })
 * // => 'px-2 py-1 bg-blue-500 text-white'
 * 
 * cn('px-2 py-1', 'px-4 py-2') 
 * // => 'py-2 px-4' (tailwind-merge deduplicates)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Type-safe class name builder with variants
 * Useful for components with multiple variants
 */
export type VariantProps<T extends Record<string, string>> = {
  [K in keyof T]?: T[K]
}

/**
 * Helper to create variant-aware class names
 */
export function variantClass<T extends Record<string, string>>(
  base: string,
  variant: keyof T | undefined,
  variants: T,
  defaultVariant?: keyof T
): string {
  const selectedVariant = variant || defaultVariant
  return cn(base, selectedVariant ? variants[selectedVariant] : '')
}

/**
 * Combine multiple conditional class objects
 */
export function classNames(
  ...classes: (string | undefined | null | false | Record<string, boolean>)[]
): string {
  return cn(...classes)
}

/**
 * Format class names with prefixes
 * Useful for component libraries
 */
export function prefixClass(
  prefix: string,
  ...classes: (string | undefined | null | false)[]
): string {
  const filtered = classes.filter(Boolean) as string[]
  if (filtered.length === 0) return ''
  return filtered.map(cls => `${prefix}-${cls}`).join(' ')
}

// Re-export for convenience
export { clsx }