import { motion } from 'framer-motion'
import ExpandedContent from './ExpandedContent'
import type { Item, CardId } from '../types'
import React from 'react'

export function PanelCard({
  item, isActive, setActiveId, registerRef
}: {
  item: Item,
  isActive: boolean,
  setActiveId: (id: CardId | null)=>void,
  registerRef: (id: CardId, el: HTMLElement | null)=>void
}){
  return (
    <motion.div
      key={item.id}
      layout
      transition={{ layout: { duration: 0.24, ease: [0.2, 0.8, 0.2, 1] } }}
      onClick={() => { if (!isActive) { setActiveId(item.id); } }}
      ref={(el) => registerRef(item.id, el as HTMLElement | null)}
      className={`card${isActive ? ' expanded' : ''}`}
    >
      <div className="card-header">
        <h3 className="card-title">{item.title}</h3>
        <p className="card-subtitle">{item.subtitle}</p>
      </div>
      <div className="card-toggle" aria-hidden="true">{isActive ? '✕' : '→'}</div>

      {/* Expanded content shown inline */}
      <div className="card-body">
        <ExpandedContent>{item.body}</ExpandedContent>
      </div>
    </motion.div>
  )
}
