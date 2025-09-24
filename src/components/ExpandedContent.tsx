import React from 'react'

export default function ExpandedContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="expanded-content">
      {children}
      <div className="info-grid">
        <div className="info-card">
          <h4>Why squares?</h4>
          <p>Crisp geometry, simple hierarchy, zero ornamental effects.</p>
        </div>
        <div className="info-card">
          <h4>Performance</h4>
          <p>Only one overlay at a time. Animations are minimal and fast.</p>
        </div>
      </div>
    </div>
  );
}
