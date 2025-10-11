import React from 'react'

export default function ExpandedContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid gap-6">
      {children}
      <div className="mt-6 grid gap-4 [grid-template-columns:repeat(auto-fit,_minmax(14rem,_1fr))]">
        <div className="border border-border bg-[#fafafa] p-[0.7rem]">
          <h4 className="mb-2 text-[0.75rem] uppercase">Why squares?</h4>
          <p className="text-[0.8125rem] text-muted">Crisp geometry, simple hierarchy, zero ornamental effects.</p>
        </div>
        <div className="border border-border bg-[#fafafa] p-[0.7rem]">
          <h4 className="mb-2 text-[0.75rem] uppercase">Performance</h4>
          <p className="text-[0.8125rem] text-muted">Only one overlay at a time. Animations are minimal and fast.</p>
        </div>
      </div>
    </div>
  );
}
