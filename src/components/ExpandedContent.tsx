import React from 'react'
import type { InfoCard } from '../types'

export default function ExpandedContent({
  children,
  infoCards,
}: {
  children: React.ReactNode,
  infoCards?: InfoCard[],
}) {
  return (
    <div className="expanded-content">
      {children}
      {infoCards && infoCards.length > 0 && (
        <div className="info-grid">
          {infoCards.map((card, index) => (
            <div className="info-card" key={index}>
              {card.title && <h4>{card.title}</h4>}
              <p>{card.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
