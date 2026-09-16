interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  const alignment =
    align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="text-accent-dark text-sm font-semibold tracking-widest uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-navy-950 text-3xl font-medium sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-navy-800/80 max-w-2xl text-base leading-relaxed sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
