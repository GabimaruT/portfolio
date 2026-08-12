import React from 'react'
import FadeIn from '../components/FadeIn'

const services = [
  { num: '01', name: 'Full Stack Development', desc: 'Building responsive, modern web applications from frontend to backend using React.js, Node.js, and MongoDB with clean architecture.' },
  { num: '02', name: '3D & Interactive Design', desc: 'Designing interactive websites with 3D animations, smooth scrolling, and dynamic UI effects that boost user engagement.' },
  { num: '03', name: 'Data Science & ML', desc: 'Leveraging Python libraries like Pandas, NumPy, and Matplotlib along with ML basics to extract insights and build intelligent solutions.' },
  { num: '04', name: 'Frontend Engineering', desc: 'Crafting pixel-perfect, responsive interfaces with React.js, modern CSS, and attention to typography, layout, and micro-interactions.' },
  { num: '05', name: 'API & Backend Services', desc: 'Designing clean RESTful APIs and robust backend architectures with Node.js, ensuring scalability and maintainable codebases.' },
]

const ServicesSection: React.FC = () => {
  return (
    <section id="skills" className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2 className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
        Services
      </h2>
      <div className="max-w-5xl mx-auto">
        {services.map((svc, i) => (
          <FadeIn key={svc.num} delay={i * 0.1} y={30}>
            <div className="flex items-start gap-6 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12" style={{ borderBottom: i < services.length - 1 ? '1px solid rgba(12,12,12,0.15)' : 'none', borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : 'none' }}>
              <span className="font-black text-[#0C0C0C] flex-shrink-0" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>{svc.num}</span>
              <div className="flex flex-col justify-center pt-2 sm:pt-4 md:pt-6">
                <h3 className="font-medium uppercase text-[#0C0C0C]" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>{svc.name}</h3>
                <p className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60 mt-2" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>{svc.desc}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection
