import { Link } from "react-router-dom";
import { offers } from "../data";
import { Gift, Users, Percent, Clock, CheckCircle } from "lucide-react";

export default function OffersPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1800&q=85" alt="offers" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 hover:bg-black/55 transition-all duration-500" />
        <div className="relative z-10 text-center text-white">
          <p className="section-label text-white/60 mb-4 animate-fade-up">Limited Time</p>
          <h1 className="section-title-lg text-white animate-slide-in-up">Exclusive Offers</h1>
        </div>
      </section>

      {/* Current Offers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4 animate-fade-up">Special Deals</p>
            <h2 className="section-title gold-line animate-slide-in-up">Current Packages & Offers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 stagger-container">
            {offers.map((o, i) => (
              <div key={o.id} className="card-hover border border-gray-100 rounded-sm overflow-hidden group hover-lift luxury-shadow animate-slide-in-up" style={{animationDelay: `${i * 0.1}s`}}>
                <div className="relative img-zoom overflow-hidden aspect-video">
                  <img src={o.image} alt={o.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white text-[10px] tracking-widest uppercase px-3 py-1.5 font-medium rounded-sm shadow-lg group-hover:scale-110 transition-transform">
                    {o.badge}
                  </div>
                  <div className="absolute top-4 right-4 bg-[#1a1a1a] text-yellow-400 text-sm font-bold px-3 py-1.5 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                    {o.discount}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2 group-hover:text-yellow-600 transition-colors" style={{fontFamily:"'Cormorant Garamond',serif"}}>{o.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 group-hover:text-gray-700 transition-colors">{o.description}</p>
                  <div className="flex items-center gap-3 mb-4 animate-pulse-subtle">
                    <span className="text-2xl font-semibold text-yellow-600" style={{fontFamily:"'Cormorant Garamond',serif"}}>{o.price}</span>
                    <span className="text-gray-400 text-sm line-through">{o.originalPrice}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-5 group-hover:text-gray-500 transition-colors">
                    <Clock size={12} className="group-hover:animate-rotate-subtle" /> Valid till {o.validTill}
                  </div>
                  <Link to="/contact" className="btn-gold w-full text-center block text-[12px] py-3 hover-lift">Claim This Offer</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refer a Friend */}
      <section className="py-24 bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="text-yellow-600 mb-6 animate-bounce" style={{animationIterationCount: '1', animationDelay: '0.2s'}}><Gift size={48} /></div>
              <p className="text-[11px] tracking-[0.25em] uppercase mb-4 animate-fade-up" style={{color:"#c49a4e"}}>Referral Program</p>
              <h2 className="section-title text-white mb-6 animate-slide-in-up">Refer a Friend &<br /><span className="italic font-light animate-pulse-subtle" style={{color:"#d4af6e"}}>Both Save Big</span></h2>
              <p className="text-gray-400 leading-relaxed mb-8 text-lg animate-fade-up" style={{animationDelay: '0.2s'}}>
                Love your new interior? Share the joy! Refer a friend to Sharma Interior and both of you receive exclusive rewards.
              </p>
              <div className="space-y-4 mb-8 stagger-container">
                {[
                  ["You Receive", "₹10,000 credit on your next project"],
                  ["Friend Receives", "5% off on their first project"],
                  ["Valid For", "All residential & commercial projects"],
                  ["No Limit", "Refer unlimited friends"],
                ].map(([k, v], i) => (
                  <div key={k} className="flex items-start gap-3 animate-slide-in-left group hover:text-yellow-400 transition-colors" style={{animationDelay: `${i * 0.1}s`}}>
                    <CheckCircle size={16} className="text-yellow-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <span className="text-white font-medium text-sm">{k}: </span>
                      <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{v}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-gold hover-lift animate-scale-in" style={{animationDelay: '0.4s'}}>Refer Now</Link>
            </div>
            <div className="border border-white/10 p-10 rounded-sm luxury-shadow hover-lift transition-all animate-slide-in-right hover:border-yellow-600/50 hover:bg-white/5">
              <h3 className="text-2xl font-medium mb-6 text-center animate-fade-up" style={{fontFamily:"'Cormorant Garamond',serif"}}>Submit a Referral</h3>
              <div className="space-y-6 stagger-container">
                <div className="animate-slide-in-up">
                  <label className="section-label block mb-2">Your Name</label>
                  <input className="input-luxury text-white border-white/20 focus:border-yellow-500" placeholder="Rajesh Kumar" style={{color:"white", borderBottomColor:"rgba(255,255,255,0.2)"}} />
                </div>
                <div className="animate-slide-in-up" style={{animationDelay: '0.1s'}}>
                  <label className="section-label block mb-2">Your Phone</label>
                  <input className="input-luxury" placeholder="+91 98765 43210" style={{color:"white", borderBottomColor:"rgba(255,255,255,0.2)"}} />
                </div>
                <div className="animate-slide-in-up" style={{animationDelay: '0.2s'}}>
                  <label className="section-label block mb-2">Friend's Name</label>
                  <input className="input-luxury" placeholder="Friend's name" style={{color:"white", borderBottomColor:"rgba(255,255,255,0.2)"}} />
                </div>
                <div className="animate-slide-in-up" style={{animationDelay: '0.3s'}}>
                  <label className="section-label block mb-2">Friend's Phone</label>
                  <input className="input-luxury" placeholder="+91 98765 00000" style={{color:"white", borderBottomColor:"rgba(255,255,255,0.2)"}} />
                </div>
                <button className="btn-gold w-full hover-lift animate-slide-in-up" style={{animationDelay: '0.4s'}}>Submit Referral</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combo Deals */}
      <section className="py-24 bg-gradient-to-b from-white to-cream-100" style={{background:"linear-gradient(to bottom, #ffffff, #fdf9ec)"}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4 animate-fade-up">Save More Together</p>
            <h2 className="section-title gold-line animate-slide-in-up">Combo Deals</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 stagger-container">
            {[
              { title: "Kitchen + Bedroom", rooms: ["Modular Kitchen", "1 Master Bedroom"], discount: "12% OFF", price: "From ₹9 Lakhs", color: "border-yellow-200" },
              { title: "Full Home Package", rooms: ["Kitchen", "2 Bedrooms", "Living Room", "Dining Area"], discount: "18% OFF", price: "From ₹22 Lakhs", color: "border-yellow-500", featured: true },
              { title: "Office + Reception", rooms: ["Executive Office", "Reception Area", "Conference Room"], discount: "10% OFF", price: "From ₹12 Lakhs", color: "border-yellow-200" },
            ].map((deal, i) => (
              <div key={deal.title} className={`border-2 ${deal.color} p-8 rounded-sm relative transition-all duration-300 group hover-lift luxury-shadow animate-slide-in-up ${deal.featured ? "bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] text-white scale-105 shadow-2xl" : "bg-white hover:border-yellow-300"}`} style={{animationDelay: `${i * 0.1}s`}}>
                {deal.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white text-[10px] tracking-widest uppercase px-4 py-1 rounded-full shadow-lg animate-bounce" style={{animationIterationCount: '1', animationDelay: `${i * 0.1 + 0.3}s`}}>Best Value</div>}
                <div className={`text-3xl font-bold mb-2 group-hover:scale-110 transition-transform ${deal.featured ? "text-yellow-400" : "text-yellow-600"}`} style={{fontFamily:"'Cormorant Garamond',serif"}}>{deal.discount}</div>
                <h3 className={`text-xl font-medium mb-4 group-hover:text-yellow-400 transition-colors ${deal.featured ? "text-white" : ""}`} style={{fontFamily:"'Cormorant Garamond',serif"}}>{deal.title}</h3>
                <ul className="space-y-2 mb-6 stagger-container">
                  {deal.rooms.map((r, ri) => (
                    <li key={r} className={`flex items-center gap-2 text-sm animate-slide-in-left group/item ${deal.featured ? "text-gray-400" : "text-gray-600"}`} style={{animationDelay: `${ri * 0.05}s`}}>
                      <CheckCircle size={14} className="text-yellow-500 flex-shrink-0 group-hover/item:scale-125 transition-transform" /> {r}
                    </li>
                  ))}
                </ul>
                <div className={`text-2xl font-light mb-6 animate-pulse-subtle ${deal.featured ? "text-yellow-400" : "text-yellow-600"}`} style={{fontFamily:"'Cormorant Garamond',serif"}}>{deal.price}</div>
                <Link to="/contact" className={`${deal.featured ? "btn-gold" : "btn-outline"} w-full text-center block hover-lift`}>
                  Claim Deal
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
