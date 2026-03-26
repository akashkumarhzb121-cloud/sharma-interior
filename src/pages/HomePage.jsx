import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, CheckCircle, ChevronLeft, ChevronRight, Award, Users, Home, Clock } from "lucide-react";
import { projects, services, testimonials } from "../data";

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function StatCard({ number, label, icon: Icon }) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-light text-white mb-2" style={{fontFamily:"'Cormorant Garamond',serif"}}>{number}</div>
      <div className="text-[11px] tracking-[0.2em] uppercase text-white/60">{label}</div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="group block card-hover hover-lift">
      <div className="img-zoom rounded-sm overflow-hidden mb-4 aspect-[4/3] relative">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-yellow-600 mb-1 animate-fade-up">{project.category}</p>
          <h3 className="section-title text-[1.3rem] group-hover:text-yellow-600 transition-colors duration-300">{project.title}</h3>
        </div>
        <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-gray-900 group-hover:border-gray-900 transition-all duration-300 group-hover:scale-110">
          <ArrowRight size={14} className="text-gray-400 group-hover:text-white transition-colors duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  const [testimIdx, setTestimIdx] = useState(0);
  const [heroRef, heroInView] = useInView(0.1);
  const [statsRef, statsInView] = useInView(0.2);
  const [servRef, servInView] = useInView(0.1);

  const next = () => setTestimIdx((p) => (p + 1) % testimonials.length);
  const prev = () => setTestimIdx((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <div>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=85"
            alt="hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>
        <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
          <div className={`max-w-2xl ${heroInView ? "animate-fade-up" : "opacity-0"}`}>
            <p className="section-label text-white/60 mb-6">Premium Interior Design · Jaipur</p>
            <h1 className="section-title-lg text-white mb-6 leading-tight">
              Transforming<br />
              <span className="italic font-light" style={{color:"#d4af6e"}}>Spaces</span> into<br />
              Experiences
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg">
              We craft extraordinary interiors that reflect your personality and elevate everyday living. 
              Premium design, flawless execution.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">Get Free Consultation</Link>
              <Link to="/projects" className="btn-outline btn-outline-white">View Projects</Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/40" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
          </div>
        </div>

        {/* Floating stats */}
        <div className="absolute bottom-0 right-0 bg-black/50 backdrop-blur-sm px-8 py-6 hidden lg:grid grid-cols-4 gap-8 border-l border-t border-white/10">
          {[["200+","Projects Done"],["18+","Years Exp."],["98%","Satisfaction"],["50+","Designers"]].map(([n,l]) => (
            <StatCard key={l} number={n} label={l} />
          ))}
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <p className="section-label mb-4 animate-fade-up">Who We Are</p>
              <h2 className="section-title mb-6 gold-line-left animate-slide-in-up">
                Jaipur's Most Trusted<br />Interior Design Studio
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 animate-fade-up" style={{animationDelay: '0.2s'}}>
                Founded in 2006, Sharma Interior and Decorations has been at the forefront of luxury interior design in Rajasthan. 
                With a team of passionate designers and craftspeople, we bring your dream spaces to life with precision, creativity, and care.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 animate-fade-up" style={{animationDelay: '0.3s'}}>
                From intimate bedroom retreats to expansive commercial spaces, every project we undertake reflects our commitment to excellence and our deep understanding of how spaces shape lives.
              </p>
              <Link to="/about" className="btn-outline hover-lift animate-fade-up" style={{animationDelay: '0.4s'}}>Discover Our Story</Link>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="img-zoom rounded-sm overflow-hidden luxury-shadow hover-darken">
                <img src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80" alt="studio" className="w-full h-96 object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-lg luxury-shadow hover-lift transition-all duration-300 animate-scale-in" style={{animationDelay: '0.3s'}}>
                <div className="text-3xl font-light text-yellow-600 mb-1 animate-pulse-subtle" style={{fontFamily:"'Cormorant Garamond',serif"}}>18+</div>
                <div className="text-xs tracking-widest uppercase text-gray-500">Years of Excellence</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-[#1a1a1a] p-6 text-white hover-lift transition-all duration-300 animate-scale-in" style={{animationDelay: '0.4s'}}>
                <div className="text-3xl font-light text-yellow-400 mb-1 animate-pulse-subtle" style={{fontFamily:"'Cormorant Garamond',serif"}}>200+</div>
                <div className="text-xs tracking-widest uppercase text-gray-400">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS ─── */}
      <section className="py-24 bg-cream-50" style={{background:"#fefdf8"}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <p className="section-label mb-4 animate-fade-up">Our Portfolio</p>
              <h2 className="section-title gold-line animate-slide-in-up">Featured Projects</h2>
            </div>
            <Link to="/projects" className="btn-outline mt-6 md:mt-0 hover-lift">View All Projects</Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-container">
            {projects.slice(0, 6).map((p, i) => (
              <div key={p.id} className="animate-slide-in-up" style={{animationDelay: `${i * 0.1}s`}}>
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section ref={servRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4 animate-fade-up">What We Do</p>
            <h2 className="section-title gold-line animate-slide-in-up">Our Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-container">
            {services.map((s, i) => (
              <div key={s.id} className={`card-hover bg-white border border-gray-100 rounded-sm overflow-hidden group animate-slide-in-up luxury-shadow hover-lift ${servInView ? "" : ""}`}
                style={{animationDelay: `${i * 0.1}s`}}>
                <div className="img-zoom aspect-video overflow-hidden relative">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="text-2xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                  <h3 className="text-xl font-medium mb-3 group-hover:text-yellow-600 transition-colors duration-300" style={{fontFamily:"'Cormorant Garamond',serif"}}>{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-600 text-sm font-medium animate-pulse-subtle">{s.price}</span>
                    <Link to="/services" className="text-[12px] tracking-widest uppercase text-gray-400 hover:text-yellow-600 transition-all duration-300 flex items-center gap-1 group/link">
                      Learn More <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] tracking-[0.25em] uppercase mb-4 animate-fade-up" style={{color:"#c49a4e"}}>Why Sharma Interior</p>
            <h2 className="section-title text-white gold-line animate-slide-in-up">The Sharma Difference</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-container">
            {[
              { icon: Award, title: "Award-Winning Design", desc: "Recognized by leading design bodies for excellence in interior architecture and spatial design." },
              { icon: Users, title: "Dedicated Team", desc: "50+ skilled designers, craftspeople, and project managers working exclusively on your space." },
              { icon: Home, title: "End-to-End Service", desc: "From first consultation to final reveal — we handle everything, so you don't have to." },
              { icon: Clock, title: "On-Time Delivery", desc: "We respect your time. 98% of our projects are delivered on or before the promised date." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="border border-white/10 p-8 hover:border-yellow-600 transition-all duration-300 group animate-slide-in-up hover-lift luxury-shadow backdrop-blur-sm hover:bg-white/5" style={{animationDelay: `${i * 0.1}s`}}>
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-yellow-600 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                  <Icon size={22} className="text-yellow-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-medium mb-3 group-hover:text-yellow-400 transition-colors" style={{fontFamily:"'Cormorant Garamond',serif"}}>{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4 animate-fade-up">How We Work</p>
            <h2 className="section-title gold-line animate-slide-in-up">Our Simple Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative stagger-container">
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-yellow-200 to-transparent" />
            {[
              { step: "01", label: "Consultation", desc: "We listen to your vision, budget, and lifestyle to understand your needs." },
              { step: "02", label: "Design", desc: "Our team creates detailed 3D concepts and mood boards for your approval." },
              { step: "03", label: "Execution", desc: "Expert craftspeople bring the design to life with premium materials." },
              { step: "04", label: "Delivery", desc: "We hand over a perfect space and provide after-care support." },
            ].map(({ step, label, desc }, i) => (
              <div key={step} className="text-center relative z-10 animate-slide-in-up group" style={{animationDelay: `${i * 0.1}s`}}>
                <div className="w-20 h-20 rounded-full bg-cream-100 border-2 border-yellow-200 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:border-yellow-600 group-hover:bg-yellow-50 transition-all duration-300" style={{background:"#fdf9ec", borderColor:"#d4af6e"}}>
                  <span className="text-2xl font-light text-yellow-600 group-hover:text-yellow-700" style={{fontFamily:"'Cormorant Garamond',serif"}}>{step}</span>
                </div>
                <h3 className="text-lg font-medium mb-2 group-hover:text-yellow-600 transition-colors duration-300" style={{fontFamily:"'Cormorant Garamond',serif"}}>{label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 bg-sage-50" style={{background:"#eef1ec"}}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="section-label mb-4 animate-fade-up">Client Stories</p>
          <h2 className="section-title mb-16 gold-line animate-slide-in-up">What Our Clients Say</h2>
          <div className="relative">
            <div className="bg-white rounded-sm p-12 shadow-lg luxury-shadow animate-scale-in">
              <div className="flex justify-center mb-4 animate-slide-in-down">
                {[...Array(testimonials[testimIdx].rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-500 text-yellow-500 mx-0.5 animate-float" style={{animationDelay: `${i * 0.1}s`}} />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic animate-fade-up" style={{fontFamily:"'Cormorant Garamond',serif"}}>
                "{testimonials[testimIdx].text}"
              </blockquote>
              <div className="flex items-center justify-center gap-4 animate-scale-in">
                <img src={testimonials[testimIdx].image} alt={testimonials[testimIdx].name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-yellow-200 hover-scale" />
                <div className="text-left">
                  <div className="font-medium text-gray-900">{testimonials[testimIdx].name}</div>
                  <div className="text-xs text-gray-500">{testimonials[testimIdx].role}</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-3 mt-8 animate-fade-up">
              <button onClick={prev} className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-yellow-600 hover:text-yellow-600 hover:bg-yellow-50 transition-all duration-300 hover:scale-110">
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setTestimIdx(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === testimIdx ? "w-8 bg-yellow-600 hover-scale" : "w-1.5 bg-gray-300 hover:bg-gray-400"}`} />
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-yellow-600 hover:text-yellow-600 hover:bg-yellow-50 transition-all duration-300 hover:scale-110">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1800&q=85" alt="cta" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/65 hover:bg-black/60 transition-all duration-500" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
          <p className="text-[11px] tracking-[0.3em] uppercase mb-6 animate-fade-up" style={{color:"#d4af6e"}}>Start Your Journey</p>
          <h2 className="section-title-lg text-white mb-6 animate-slide-in-up">
            Ready to Transform<br />
            <span className="italic font-light animate-pulse-subtle" style={{color:"#d4af6e"}}>Your Space?</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed animate-fade-up" style={{animationDelay: '0.2s'}}>
            Book a free consultation with our expert designers and take the first step towards your dream interior.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{animationDelay: '0.3s'}}>
            <Link to="/contact" className="btn-gold hover-lift">Book Free Consultation</Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer"
              className="btn-outline btn-outline-white flex items-center justify-center gap-2 hover-lift">
              <span>💬</span> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
