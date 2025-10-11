import { motion } from 'framer-motion'
import ExpandedContent from './ExpandedContent'
import type { Item, CardId } from '../types'
import React from 'react'

export function PanelCard({
  item, isActive, hasActive, setActiveId, registerRef
}: {
  item: Item,
  isActive: boolean,
  hasActive: boolean,
  setActiveId: (id: CardId | null)=>void,
  registerRef: (id: CardId, el: HTMLElement | null)=>void
}){
  return (
    <motion.div
      key={item.id}
      layout
      transition={{ layout: { duration: 0.20, ease: [0.2, 0.8, 0.2, 1] } }}
      onClick={() => { if (!isActive) { setActiveId(item.id); } }}
      ref={(el) => registerRef(item.id, el as HTMLElement | null)}
      className={`relative rounded-none border border-border bg-white p-4 transition-colors duration-150 ease-linear ${isActive ? 'z-30 cursor-default select-text' : 'cursor-pointer select-none hover:bg-[#f7f7f7]'} ${hasActive && !isActive ? 'blur-[4px]' : ''}`}
    >
      <div className="flex flex-col gap-[0.35rem]">
        <h3 className="text-sm leading-5">{item.title}</h3>
        <p className="text-[0.6875rem] text-muted tracking-[0.04em]">{item.subtitle}</p>
      </div>
      <div className="absolute right-[0.9rem] top-[0.85rem] font-press text-xs" aria-hidden="true">{isActive ? '✕' : '→'}</div>

      {/* Expanded content shown inline */}
      <div className={isActive ? 'mt-4 text-sm text-ink' : 'hidden'}>
        <ExpandedContent>{item.body}</ExpandedContent>
      </div>
    </motion.div>
  )
}
