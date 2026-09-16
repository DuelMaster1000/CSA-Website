/** Abstract system-map motif for the hero — a subtle, purposeful nod to network/systems thinking. */
export function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 420 420"
      className="h-full w-full"
      role="img"
      aria-label="Abstract diagram of connected nodes"
    >
      <g stroke="#B8862E" strokeWidth="1" opacity="0.5">
        <line x1="60" y1="80" x2="210" y2="150" />
        <line x1="210" y1="150" x2="350" y2="90" />
        <line x1="210" y1="150" x2="150" y2="280" />
        <line x1="210" y1="150" x2="320" y2="260" />
        <line x1="150" y1="280" x2="70" y2="330" />
        <line x1="150" y1="280" x2="320" y2="260" />
        <line x1="320" y1="260" x2="360" y2="350" />
      </g>
      <g fill="#F7F5EF">
        <circle cx="60" cy="80" r="5" />
        <circle cx="350" cy="90" r="4" />
        <circle cx="70" cy="330" r="4" />
        <circle cx="360" cy="350" r="5" />
      </g>
      <g fill="#B8862E">
        <circle cx="210" cy="150" r="7" />
        <circle cx="150" cy="280" r="6" />
        <circle cx="320" cy="260" r="6" />
      </g>
    </svg>
  )
}
