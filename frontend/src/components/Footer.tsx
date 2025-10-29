import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-16 py-6 bg-black/40 backdrop-blur-md border-t border-white/10">
      <div className="container text-center text-sm text-white/60">
        <p>© {new Date().getFullYear()} UtopiaHire</p>
      </div>
    </footer>
  )
}
