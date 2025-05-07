import React from 'react'

const categories = [
  {
    label: 'Motorväg',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2v20M7 22l5-20 5 20" /></svg>
    ),
  },
  {
    label: 'Stadskärna',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="10" width="4" height="10" /><rect x="9" y="6" width="6" height="14" /><rect x="17" y="14" width="4" height="6" /></svg>
    ),
  },
  {
    label: 'Idrottsanläggning',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" /><path d="M4 12h16M12 4v16" /></svg>
    ),
  },
  {
    label: 'Köpcenter',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="7" width="16" height="13" rx="3" /><path d="M8 7V5a4 4 0 0 1 8 0v2" /></svg>
    ),
  },
]

export default function CategoryChips() {
  return (
    <div className="flex flex-nowrap justify-center gap-2 mt-3 mb-2 overflow-x-auto">
      {categories.map((cat) => (
        <button
          key={cat.label}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-sand-light text-gray-800 text-xs font-medium shadow-sm border border-sand-dark/30 hover:bg-[#ff6600] hover:text-white hover:shadow-md transition focus:outline-none focus:ring-2 focus:ring-[#ff6600]/40 whitespace-nowrap"
          type="button"
        >
          {cat.icon}
          <span>{cat.label}</span>
        </button>
      ))}
    </div>
  )
} 