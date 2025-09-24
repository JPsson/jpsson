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
      className={`card relative w-full p-4 text-left ${isActive ? 'expanded z-30' : 'cursor-pointer'}`}
    >
      <div className="space-y-1">
        <h3 className="text-sm leading-tight" style={{fontFamily:'"Press Start 2P", monospace'}}>{item.title}</h3>
        <p className="text-muted text-[11px]">{item.subtitle}</p>
      </div>
      <div className="absolute right-2 top-2 text-xs">{isActive ? '✕' : '→'}</div>

      {/* Expanded content shown inline */}
      <div className="card-body mt-4">
        <ExpandedContent>{item.body}</ExpandedContent>
      </div>
    </motion.div>
  )
}
