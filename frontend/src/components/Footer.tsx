import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-16 py-6">
      <div className="container text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} UtopiaHire</p>
      </div>
    </footer>
  )
}
