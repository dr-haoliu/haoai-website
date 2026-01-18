import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24 lg:py-32', className)}>
      {children}
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
  className?: string
}

export function SectionHeader({ 
  title, 
  subtitle, 
  description, 
  className 
}: SectionHeaderProps) {
  return (
    <div className={cn('text-center max-w-3xl mx-auto mb-12', className)}>
      {subtitle && (
        <p className="text-primary-600 font-semibold mb-2 dark:text-primary-400">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {description}
        </p>
      )}
    </div>
  )
}