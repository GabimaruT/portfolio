import React from 'react'
import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'

const certificates = [
  {
    id: 1,
    title: 'Web Development',
    issuer: 'Professional Certification',
    link: 'https://drive.google.com/file/d/1KJLlIEQPTN3XE57XmC5QmU-SuDK2djoq/view?usp=drive_link',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="12" y1="2" x2="12" y2="22" opacity="0.3" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Data Science & ML',
    issuer: 'Professional Certification',
    link: 'https://drive.google.com/file/d/15Xo1NhPkfQrG3My2M8Xt2xqcgnwS7mgN/view?usp=drive_link',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Full Stack Development',
    issuer: 'Professional Certification',
    link: 'https://drive.google.com/file/d/1IU-MYdxlfHz6UXF1-cLvvkoQ0gwt2fUM/view?usp=drive_link',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
]

const CertificateCard: React.FC<{ cert: typeof certificates[0]; index: number }> = ({ cert, index }) => {
  return (
    <FadeIn delay={index * 0.15} y={40}>
      <a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <motion.div
          className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[#D7E2EA]/10 bg-[#111111] cursor-pointer h-full"
          whileHover={{ y: -10, scale: 1.02 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Top gradient banner / preview area */}
          <div
            className="relative h-[200px] sm:h-[220px] md:h-[240px] flex items-center justify-center overflow-hidden"
            style={{ background: cert.gradient }}
          >
            {/* Decorative patterns */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 w-20 h-20 border border-white/30 rounded-full" />
              <div className="absolute top-8 left-8 w-12 h-12 border border-white/20 rounded-full" />
              <div className="absolute bottom-6 right-6 w-24 h-24 border border-white/20 rounded-lg rotate-12" />
              <div className="absolute bottom-10 right-10 w-14 h-14 border border-white/15 rounded-lg rotate-12" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-white/10 rounded-full" />
            </div>

            {/* Certificate icon */}
            <div className="relative z-10 flex flex-col items-center gap-4">
              <motion.div
                className="w-24 h-24 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-white border border-white/20"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {cert.icon}
              </motion.div>

              {/* Certificate ribbon */}
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
                <span className="text-white text-xs font-medium uppercase tracking-wider">Certified</span>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-400 flex items-center justify-center">
              <motion.div
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2.5 flex items-center gap-2 border border-white/30"
                initial={false}
              >
                <span className="text-white text-sm font-medium">View Certificate</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* Bottom info */}
          <div className="p-5 sm:p-6 flex items-center justify-between">
            <div>
              <h3 className="text-[#D7E2EA] font-semibold text-lg sm:text-xl tracking-wide">
                {cert.title}
              </h3>
              <p className="text-[#D7E2EA]/40 text-sm mt-1 font-light">
                {cert.issuer}
              </p>
            </div>
            <motion.div
              className="w-10 h-10 rounded-full border border-[#D7E2EA]/20 flex items-center justify-center group-hover:border-[#D7E2EA]/50 group-hover:bg-[#D7E2EA]/5 transition-all duration-300 flex-shrink-0"
              whileHover={{ scale: 1.15 }}
            >
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13L13 1M13 1H5M13 1V9" stroke="#D7E2EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </div>

          {/* Bottom accent line */}
          <div
            className="h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out"
            style={{ background: cert.gradient }}
          />
        </motion.div>
      </a>
    </FadeIn>
  )
}

const CertificatesSection: React.FC = () => {
  return (
    <section
      id="certificates"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Certificates
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {certificates.map((cert, i) => (
          <CertificateCard key={cert.id} cert={cert} index={i} />
        ))}
      </div>
    </section>
  )
}

export default CertificatesSection
