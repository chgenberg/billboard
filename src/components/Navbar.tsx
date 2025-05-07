"use client"

import React, { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [loginMenu, setLoginMenu] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [loginType, setLoginType] = useState<'HYRESGÄST' | 'HYRESVÄRD' | null>(null)

  return (
    <nav className="w-full bg-white py-2 px-4 flex items-center justify-between shadow-none relative min-h-[56px]">
      <div className="flex items-center" style={{ marginTop: '24px', marginLeft: '8px' }}>
        <button
          className="flex justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-sand-dark/40 border-none"
          aria-label="Öppna meny"
          onClick={() => setOpen((v) => !v)}
        >
          {/* Hamburger icon */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="6" width="28" height="3" rx="1.5" fill="#222" />
            <rect y="13" width="28" height="3" rx="1.5" fill="#222" />
            <rect y="20" width="28" height="3" rx="1.5" fill="#222" />
          </svg>
        </button>
        {open && (
          <div className="absolute left-4 top-20 bg-white rounded-xl shadow-lg border border-sand-dark/30 py-2 px-4 z-50 animate-fadein min-w-[140px]">
            <Link href="/" className="block px-2 py-2 rounded hover:bg-sand-light text-gray-900 font-medium">HEM</Link>
            <Link href="/about" className="block px-2 py-2 rounded hover:bg-sand-light text-gray-900 font-medium uppercase">OM OSS</Link>
            <Link href="/qa" className="block px-2 py-2 rounded hover:bg-sand-light text-gray-900 font-medium uppercase">Q&A</Link>
            <Link href="/blogg" className="block px-2 py-2 rounded hover:bg-sand-light text-gray-900 font-medium uppercase">BLOGG</Link>
            <Link href="/contact" className="block px-2 py-2 rounded hover:bg-sand-light text-gray-900 font-medium uppercase">KONTAKTA OSS</Link>
          </div>
        )}
      </div>
      <div className="flex-1" />
      <div className="flex items-center justify-end" style={{ marginTop: '24px', marginRight: '8px' }}>
        <button
          className="px-5 py-2 rounded-full border border-sand-dark/40 bg-white text-gray-900 font-semibold shadow-sm hover:bg-sand-light hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sand-dark/40 transition text-sm"
          onClick={() => setLoginMenu(true)}
        >
          Logga in
        </button>
      </div>
      {/* Login Type Modal */}
      {loginMenu && !showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fadein">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-[95vw] max-w-xs relative flex flex-col gap-4 items-center">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl font-bold"
              onClick={() => setLoginMenu(false)}
              aria-label="Stäng"
            >
              ×
            </button>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide text-gray-900 text-center">Välj inloggning</h3>
            <button
              className="w-full py-2 mb-2 rounded-xl bg-sand-dark text-gray-900 font-semibold text-base shadow-sm hover:bg-sand hover:scale-[1.02] hover:shadow-md focus:bg-sand-dark/80 focus:ring-2 focus:ring-sand-dark/40 transition-all duration-200 border border-sand-dark/40 uppercase"
              onClick={() => { setLoginType('HYRESGÄST'); setShowLoginModal(true); setLoginMenu(false); }}
            >
              HYRESGÄST
            </button>
            <button
              className="w-full py-2 rounded-xl bg-sand-dark text-gray-900 font-semibold text-base shadow-sm hover:bg-sand hover:scale-[1.02] hover:shadow-md focus:bg-sand-dark/80 focus:ring-2 focus:ring-sand-dark/40 transition-all duration-200 border border-sand-dark/40 uppercase"
              onClick={() => { setLoginType('HYRESVÄRD'); setShowLoginModal(true); setLoginMenu(false); }}
            >
              HYRESVÄRD
            </button>
          </div>
        </div>
      )}
      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-[95vw] max-w-xs relative animate-fadein flex flex-col gap-4">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl font-bold"
              onClick={() => setShowLoginModal(false)}
              aria-label="Stäng"
            >
              ×
            </button>
            <div className="text-center">
              <h3 className="text-lg font-bold mb-2 uppercase tracking-wide text-gray-900">LOGGA IN</h3>
              <div className="text-xs text-gray-500 mb-4 font-semibold uppercase tracking-wide">{loginType}</div>
            </div>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="E-post"
                className="w-full px-3 py-2 rounded-lg border border-sand-dark/30 focus:outline-none focus:ring-2 focus:ring-sand-dark/40 text-sm bg-sand-light placeholder-gray-400"
                autoFocus
              />
              <input
                type="password"
                placeholder="Lösenord"
                className="w-full px-3 py-2 rounded-lg border border-sand-dark/30 focus:outline-none focus:ring-2 focus:ring-sand-dark/40 text-sm bg-sand-light placeholder-gray-400"
              />
              <button
                type="submit"
                className="w-full py-2 mt-2 rounded-xl bg-sand-dark text-gray-900 font-semibold text-base shadow-sm hover:bg-sand focus:bg-sand-dark/80 focus:ring-2 focus:ring-sand-dark/40 transition border border-sand-dark/40"
              >
                Logga in
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  )
} 