import { Link } from "react-router-dom";
import { offers } from "../data";
import { Gift, Users, Percent, Clock, CheckCircle } from "lucide-react";

export default function OffersPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative h-80 flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1800&q=85" alt="offers" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white">
          <p className="section-label text-white/60 mb-4">Limited Time</p>
          <h1 className="section-title-lg text-white">Exclusive Offers</h1>
        </div>
      </section>

      {/* Current Offers */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Special Deals</p>
            <h2 className="section-title gold-line">Current Packages & Offers</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {offers.map((o) => (
              <div key={o.id} className="card-hover border border-gray-100 rounded-sm overflow-hidden group">
                <div className="relative img-zoom overflow-hidden aspect-video">
                  <img src={o.image} alt={o.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4 bg-yellow-600 text-white text-[10px] tracking-widest uppercase px-3 py-1.5 font-medium">
                    {o.badge}
                  </div>
                  <div className="absolute top-4 right-4 bg-[#1a1a1a] text-yellow-400 text-sm font-bold px-3 py-1.5 rounded-full">
                    {o.discount}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2" style={{fontFamily:"'Cormorant Garamond',serif"}}>{o.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{o.description}</p>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-semibold text-yellow-600" style={{fontFamily:"'Cormorant Garamond',serif"}}>{o.price}</span>
                    <span className="text-gray-400 text-sm line-through">{o.originalPrice}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs mb-5">
                    <Clock size={12} /> Valid till {o.validTill}
                  </div>
                  <Link to="/contact" className="btn-gold w-full text-center block text-[12px] py-3">Claim This Offer</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Refer a Friend */}
      <section className="py-24 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-yellow-600 mb-6"><Gift size={48} /></div>
              <p className="text-[11px] tracking-[0.25em] uppercase mb-4" style={{color:"#c49a4e"}}>Referral Program</p>
              <h2 className="section-title text-white mb-6">Refer a Friend &<br /><span className="italic font-light" style={{color:"#d4af6e"}}>Both Save Big</span></h2>
              <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                Love your new interior? Share the joy! Refer a friend to Sharma Interior and both of you receive exclusive rewards.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  ["You Receive", "₹10,000 credit on your next project"],
                  ["Friend Receives", "5% off on their first project"],
                  ["Valid For", "All residential & commercial projects"],
                  ["No Limit", "Refer unlimited friends"],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-white font-medium text-sm">{k}: </span>
                      <span className="text-gray-400 text-sm">{v}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn-gold">Refer Now</Link>
            </div>
            <div className="border border-white/10 p-10 rounded-sm">
              <h3 className="text-2xl font-medium mb-6 text-center" style={{fontFamily:"'Cormorant Garamond',serif"}}>Submit a Referral</h3>
              <div className="space-y-6">
                <div>
                  <label className="section-label block mb-2">Your Name</label>
                  <input className="input-luxury text-white border-white/20 focus:border-yellow-500" placeholder="Rajesh Kumar" style={{color:"white", borderBottomColor:"rgba(255,255,255,0.2)"}} />
                </div>
                <div>
                  <label className="section-label block mb-2">Your Phone</label>
                  <input className="input-luxury" placeholder="+91 98765 43210" style={{color:"white", borderBottomColor:"rgba(255,255,255,0.2)"}} />
                </div>
                <div>
                  <label className="section-label block mb-2">Friend's Name</label>
                  <input className="input-luxury" placeholder="Friend's name" style={{color:"white", borderBottomColor:"rgba(255,255,255,0.2)"}} />
                </div>
                <div>
                  <label className="section-label block mb-2">Friend's Phone</label>
                  <input className="input-luxury" placeholder="+91 98765 00000" style={{color:"white", borderBottomColor:"rgba(255,255,255,0.2)"}} />
                </div>
                <button className="btn-gold w-full">Submit Referral</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Combo Deals */}
      <section className="py-24 bg-cream-50" style={{background:"#fefdf8"}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Save More Together</p>
            <h2 className="section-title gold-line">Combo Deals</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Kitchen + Bedroom", rooms: ["Modular Kitchen", "1 Master Bedroom"], discount: "12% OFF", price: "From ₹9 Lakhs", color: "border-yellow-200" },
              { title: "Full Home Package", rooms: ["Kitchen", "2 Bedrooms", "Living Room", "Dining Area"], discount: "18% OFF", price: "From ₹22 Lakhs", color: "border-yellow-500", featured: true },
              { title: "Office + Reception", rooms: ["Executive Office", "Reception Area", "Conference Room"], discount: "10% OFF", price: "From ₹12 Lakhs", color: "border-yellow-200" },
            ].map((deal) => (
              <div key={deal.title} className={`border-2 ${deal.color} p-8 rounded-sm ${deal.featured ? "bg-[#1a1a1a] text-white" : "bg-white"} relative`}>
                {deal.featured && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-600 text-white text-[10px] tracking-widest uppercase px-4 py-1">Best Value</div>}
                <div className={`text-3xl font-bold mb-2 ${deal.featured ? "text-yellow-400" : "text-yellow-600"}`} style={{fontFamily:"'Cormorant Garamond',serif"}}>{deal.discount}</div>
                <h3 className={`text-xl font-medium mb-4 ${deal.featured ? "text-white" : ""}`} style={{fontFamily:"'Cormorant Garamond',serif"}}>{deal.title}</h3>
                <ul className="space-y-2 mb-6">
                  {deal.rooms.map((r) => (
                    <li key={r} className={`flex items-center gap-2 text-sm ${deal.featured ? "text-gray-400" : "text-gray-600"}`}>
                      <CheckCircle size={14} className="text-yellow-500 flex-shrink-0" /> {r}
                    </li>
                  ))}
                </ul>
                <div className={`text-2xl font-light mb-6 ${deal.featured ? "text-yellow-400" : "text-yellow-600"}`} style={{fontFamily:"'Cormorant Garamond',serif"}}>{deal.price}</div>
                <Link to="/contact" className={deal.featured ? "btn-gold w-full text-center block" : "btn-outline w-full text-center block"}>
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
