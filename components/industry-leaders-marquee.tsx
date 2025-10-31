"use client"

import Image from "next/image"

interface IndustryLeader {
  name: string
  logo: string
}

interface IndustryLeadersMarqueeProps {
  items: IndustryLeader[]
  speed?: number
  pauseOnHover?: boolean
}

export function IndustryLeadersMarquee({ items, speed = 4, pauseOnHover = true }: IndustryLeadersMarqueeProps) {
  return (
    <div className={`w-full overflow-hidden bg-background py-8 ${pauseOnHover ? "hover:pause" : ""}`}>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .marquee-container {
          display: flex;
          width: max-content;
          animation: scroll ${speed}s linear infinite;
        }
        
        ${pauseOnHover ? `
          .marquee-container:hover {
            animation-play-state: paused;
          }
        ` : ""}
        
        .marquee-item {
          flex-shrink: 0;
          width: 150px; /* ↓ reduced from 200px for tighter spacing */
          margin-right: 24px; /* Add a consistent gap */
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      <div className="marquee-container">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="marquee-item">
            <div className="w-35 h-32 relative mb-2 flex items-center justify-center">
              <Image
                src={item.logo || "/placeholder.svg"}
                alt={item.name}
                width={140}
                height={128}
                className="object-contain p-2"
              />
            </div>
            <p className="text-center text-xs font-medium text-foreground text-balance">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
