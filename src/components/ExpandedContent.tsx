import React from 'react'

export default function ExpandedContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose max-w-none">
      {children}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="border border-[var(--border)] p-4">
          <h4 className="font-medium mb-1">Why squares?</h4>
          <p className="text-sm text-muted">
            Crisp geometry, simple hierarchy, zero ornamental effects.
          </p>
        </div>
        <div className="border border-[var(--border)] p-4">
          <h4 className="font-medium mb-1">Performance</h4>
          <p className="text-sm text-muted">
            Only one overlay at a time. Animations are minimal and fast.
          </p>
        </div>
      </div>
    </div>
  );
}
