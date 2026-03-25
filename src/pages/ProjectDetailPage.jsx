import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../data";
import { Star, ArrowLeft, ArrowRight, ChevronLeft } from "lucide-react";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));
  const [activeImg, setActiveImg] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [showBefore, setShowBefore] = useState(false);

  if (!project) return (
    <div className="pt-32 text-center py-20">
      <h2 className="text-2xl">Project not found</h2>
      <Link to="/projects" className="btn-gold mt-6 inline-block">Back to Projects</Link>
    </div>
  );

  const relatedProjects = projects.filter((p) => p.id !== project.id && p.category === project.category).slice(0, 3);

  return (
    <div className="pt-24">
      {/* Back */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm mb-8">
          <ChevronLeft size={16} /> Back to Projects
        </button>
      </div>

      {/* Main Image Gallery */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 img-zoom rounded-sm overflow-hidden aspect-video">
            <img src={project.images[activeImg]} alt={project.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex lg:flex-col gap-3">
            {project.images.map((img, i) => (
              <button key={i} onClick={() => setActiveImg(i)}
                className={`img-zoom rounded-sm overflow-hidden flex-1 border-2 transition-all ${i === activeImg ? "border-yellow-500" : "border-transparent"}`}>
                <img src={img} alt="" className="w-full h-full object-cover" style={{minHeight:"80px"}} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <p className="section-label mb-3">{project.category} · {project.style}</p>
            <h1 className="section-title mb-2">{project.title}</h1>
            <p className="text-gray-500 mb-6">{project.location}</p>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">{project.description}</p>

            {/* Before/After */}
            <div className="mb-8">
              <h3 className="text-xl font-medium mb-4" style={{fontFamily:"'Cormorant Garamond',serif"}}>Before & After</h3>
              <div className="relative rounded-sm overflow-hidden aspect-video bg-gray-100">
                <div className="absolute inset-0">
                  <img src={project.image} alt="after" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 overflow-hidden" style={{clipPath:`inset(0 ${100 - sliderPos}% 0 0)`}}>
                  <img src={project.beforeImage} alt="before" className="w-full h-full object-cover" />
                </div>
                {/* Slider */}
                <div className="absolute inset-y-0" style={{left:`${sliderPos}%`, transform:"translateX(-50%)"}}>
                  <div className="w-0.5 h-full bg-white/80" />
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center cursor-ew-resize">
                    <ArrowLeft size={10} className="text-gray-600" />
                    <ArrowRight size={10} className="text-gray-600" />
                  </div>
                </div>
                {/* Labels */}
                <div className="absolute top-3 left-3 bg-black/50 text-white text-[10px] tracking-widest uppercase px-3 py-1">Before</div>
                <div className="absolute top-3 right-3 bg-yellow-600 text-white text-[10px] tracking-widest uppercase px-3 py-1">After</div>
                <input type="range" min={0} max={100} value={sliderPos}
                  onChange={(e) => setSliderPos(parseInt(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize" />
              </div>
              <p className="text-gray-400 text-xs mt-2 text-center">Drag slider to compare Before & After</p>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-cream-50 p-8 rounded-sm mb-6" style={{background:"#fdf9ec"}}>
              <h3 className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-6">Project Details</h3>
              <div className="space-y-4">
                {[
                  ["Area", project.area],
                  ["Duration", project.duration],
                  ["Investment", project.budget],
                  ["Style", project.style],
                  ["Location", project.location],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between py-2 border-b border-gray-200 text-sm">
                    <span className="text-gray-500">{k}</span>
                    <span className="font-medium">{v}</span>
                  </div>
                ))}
              </div>
            </div>
            <Link to="/contact" className="btn-gold w-full text-center block">Start Similar Project</Link>
          </div>
        </div>
      </section>

      {/* Client Feedback */}
      <section className="bg-sage-50 py-16" style={{background:"#eef1ec"}}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="section-label mb-4">Client Testimonial</p>
          <div className="flex justify-center mb-4">
            {[...Array(project.clientRating)].map((_, i) => (
              <Star key={i} size={18} className="fill-yellow-500 text-yellow-500 mx-0.5" />
            ))}
          </div>
          <blockquote className="text-2xl text-gray-700 leading-relaxed mb-6 italic" style={{fontFamily:"'Cormorant Garamond',serif"}}>
            "{project.clientFeedback}"
          </blockquote>
          <p className="font-medium text-gray-900">— {project.clientName}</p>
          <p className="text-gray-500 text-sm">{project.title}</p>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="section-title mb-10 text-center gold-line">More {project.category} Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProjects.map((p) => (
                <Link key={p.id} to={`/projects/${p.id}`} className="group card-hover block">
                  <div className="img-zoom rounded-sm overflow-hidden aspect-[4/3] mb-4">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-[11px] tracking-widest uppercase text-yellow-600 mb-1">{p.category}</p>
                  <h3 className="text-lg font-medium" style={{fontFamily:"'Cormorant Garamond',serif"}}>{p.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
