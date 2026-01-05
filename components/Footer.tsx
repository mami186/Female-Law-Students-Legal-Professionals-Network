import React from 'react'

export const Footer = () => {
  return (
<>
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <p className="font-serif text-lg text-primary font-semibold">
              Female Law Students & Legal Professionals Network
            </p>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 FLSN, Haramaya University. All rights reserved.
          </p>
        </div>
      </footer>
</>  )
}
