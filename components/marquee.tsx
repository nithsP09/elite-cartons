"use client"

interface MarqueeProps {
  items: string[]
  speed?: number
  direction?: "left" | "right"
  pauseOnHover?: boolean
}

export function Marquee({ items, speed = 50, direction = "left", pauseOnHover = true }: MarqueeProps) {
  const animationDuration = `${speed}s`
  const animationDirection = direction === "left" ? "marquee-left" : "marquee-right"

  return (
    <div className="w-full overflow-hidden bg-gradient-to-r from-background via-background to-background">
      <style>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes marquee-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .marquee-content {
          animation: ${animationDirection} ${animationDuration} linear infinite;
          ${pauseOnHover ? "animation-play-state: running;" : ""}
        }
        
        .marquee-content:hover {
          ${pauseOnHover ? "animation-play-state: paused;" : ""}
        }
      `}</style>

      <div className="flex gap-8 py-6 marquee-content">
        {/* First set of items */}
        {items.map((item, index) => (
          <div
            key={`item-${index}`}
            className="flex-shrink-0 px-6 py-3 bg-card rounded-lg border border-border text-card-foreground font-medium whitespace-nowrap"
          >
            {item}
          </div>
        ))}

        {/* Duplicate set for seamless loop */}
        {items.map((item, index) => (
          <div
            key={`item-duplicate-${index}`}
            className="flex-shrink-0 px-6 py-3 bg-card rounded-lg border border-border text-card-foreground font-medium whitespace-nowrap"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
