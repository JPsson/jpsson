import React from 'react'

export default function ExpandedContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="expanded-content">
      {children}
    </div>
  );
}
