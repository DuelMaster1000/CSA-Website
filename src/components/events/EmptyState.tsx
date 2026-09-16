interface EmptyStateProps {
  title: string
  description: string
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="border-line bg-paper flex flex-col items-center gap-3 border border-dashed px-6 py-16 text-center">
      <h3 className="font-display text-navy-950 text-xl font-medium">{title}</h3>
      <p className="text-navy-800/75 max-w-md text-sm leading-relaxed sm:text-base">
        {description}
      </p>
    </div>
  )
}
