"use client";

import React, { useState } from 'react'

export default function SearchBar() {
  const [showCalendar, setShowCalendar] = useState(false)
  const fakeCalendar = [
    { day: 13, status: 'booked' },
    { day: 14, status: 'available' },
    { day: 15, status: 'available' },
    { day: 16, status: 'booked' },
    { day: 17, status: 'available' },
    { day: 18, status: 'booked' },
    { day: 19, status: 'available' },
    { day: 20, status: 'available' },
    { day: 21, status: 'booked' },
  ]
  return (
    <>
      <form className="w-full max-w-xl mx-auto flex items-center bg-white/60 border border-sand-dark rounded-2xl shadow-lg px-2 py-2 mt-6 mb-2 backdrop-blur-md transition focus-within:shadow-xl gap-2">
        {/* Left input: Where */}
        <input
          type="text"
          placeholder="Vart vill du annonsera?"
          className="flex-1 min-w-0 bg-transparent outline-none border-none text-base placeholder-gray-500 px-4 py-2 rounded-xl transition focus:bg-white/80 focus:shadow focus:ring-2 focus:ring-sand-dark/30"
          autoComplete="off"
        />
        {/* Divider */}
        <span className="w-px h-8 bg-sand-dark/40 mx-1" />
        {/* Right input: When (as button) */}
        <button
          type="button"
          className="w-32 bg-transparent outline-none border-none text-base placeholder-gray-500 px-4 py-2 rounded-xl transition focus:bg-white/80 focus:shadow focus:ring-2 focus:ring-sand-dark/30 border border-sand-dark/20 hover:bg-sand-light"
          onClick={() => setShowCalendar(true)}
        >
          När?
        </button>
        <button
          type="submit"
          className="ml-2 flex items-center justify-center w-10 h-10 rounded-xl bg-sand-dark text-gray-700 shadow transition hover:bg-sand-dark/80 hover:text-black focus:ring-2 focus:ring-sand-dark/40 focus:outline-none"
          aria-label="Sök"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </form>
      {/* Kalender-modal */}
      {showCalendar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 animate-fadein">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-[95vw] max-w-md relative animate-fadein">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl font-bold"
              onClick={() => setShowCalendar(false)}
              aria-label="Stäng"
            >
              ×
            </button>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wide text-gray-900">Välj datum</h3>
            <div className="grid grid-cols-7 gap-2 text-center text-xs mb-2">
              <span className="font-semibold">Mån</span>
              <span className="font-semibold">Tis</span>
              <span className="font-semibold">Ons</span>
              <span className="font-semibold">Tor</span>
              <span className="font-semibold">Fre</span>
              <span className="font-semibold">Lör</span>
              <span className="font-semibold">Sön</span>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center">
              {Array.from({ length: 21 }).map((_, i) => {
                const day = i + 13
                const status = fakeCalendar.find(d => d.day === day)?.status
                return (
                  <span
                    key={day}
                    className={`rounded-lg px-0.5 py-1 font-semibold select-none
                      ${status === 'available' ? 'bg-green-100 text-green-700 border border-green-300 cursor-pointer hover:bg-green-200' : ''}
                      ${status === 'booked' ? 'bg-red-100 text-red-700 border border-red-300 line-through' : ''}
                    `}
                  >
                    {day}
                  </span>
                )
              })}
            </div>
            <div className="mt-4 text-xs text-gray-500 text-center">
              <span className="inline-block bg-green-100 text-green-700 rounded px-2 py-0.5 mr-2">Ledig</span>
              <span className="inline-block bg-red-100 text-red-700 rounded px-2 py-0.5">Upptagen</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 