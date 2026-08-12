import React from 'react'

const LiveProjectButton: React.FC<{ href?: string }> = ({ href = '#' }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-300 cursor-pointer"
    >
      Live Project
    </a>
  )
}

export default LiveProjectButton
