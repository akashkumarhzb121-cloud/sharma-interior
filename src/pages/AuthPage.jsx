import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

export default function AuthPage() {
  const [mode, setMode] = useState("login");
  const [showPwd, setShowPwd] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });

  return (
    <div className="min-h-screen flex">
      {/* Left: Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=85" alt="interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center p-12">
          <div className="display-font text-4xl font-semibold tracking-wider mb-2" style={{fontFamily:"'Cormorant Garamond',serif"}}>SHARMA</div>
          <div className="text-[11px] tracking-[0.3em] uppercase mb-8" style={{color:"#d4af6e"}}>Interior & Decorations</div>
          <p className="text-white/70 text-lg leading-relaxed max-w-sm italic" style={{fontFamily:"'Cormorant Garamond',serif"}}>
            "Your space should tell your story, reflect your dreams, and nurture your soul."
          </p>
        </div>
      </div>

      {/* Right: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-16 bg-white">
        <div className="w-full max-w-md">
          <Link to="/" className="text-gray-400 text-sm hover:text-gray-600 transition-colors mb-8 block">← Back to Website</Link>

          {/* Toggle */}
          <div className="flex gap-0 mb-10 border border-gray-200">
            {["login", "signup"].map((m) => (
              <button key={m} onClick={() => setMode(m)}
                className={`flex-1 py-3 text-[12px] tracking-widest uppercase transition-all ${
                  mode === m ? "bg-[#1a1a1a] text-white" : "text-gray-500 hover:text-gray-700"
                }`}>
                {m === "login" ? "Sign In" : "Create Account"}
              </button>
            ))}
          </div>

          <h2 className="section-title mb-2">{mode === "login" ? "Welcome Back" : "Join Us"}</h2>
          <p className="text-gray-500 mb-10 text-sm">
            {mode === "login" ? "Sign in to manage your projects and appointments." : "Create an account to track your projects and get personalized updates."}
          </p>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            {mode === "signup" && (
              <div>
                <label className="section-label block mb-2">Full Name</label>
                <input className="input-luxury" placeholder="Rajesh Kumar" value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
              </div>
            )}
            <div>
              <label className="section-label block mb-2">Email Address</label>
              <input type="email" className="input-luxury" placeholder="rajesh@email.com" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
            </div>
            {mode === "signup" && (
              <div>
                <label className="section-label block mb-2">Phone Number</label>
                <input className="input-luxury" placeholder="+91 98765 43210" value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} />
              </div>
            )}
            <div>
              <label className="section-label block mb-2">Password</label>
              <div className="relative">
                <input type={showPwd ? "text" : "password"} className="input-luxury pr-10" placeholder="••••••••" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} />
                <button type="button" onClick={() => setShowPwd(!showPwd)} className="absolute right-0 top-3 text-gray-400 hover:text-gray-600">
                  {showPwd ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {mode === "login" && (
              <div className="text-right">
                <a href="#" className="text-xs text-yellow-600 hover:text-yellow-700 tracking-widest uppercase">Forgot Password?</a>
              </div>
            )}

            <button type="submit" className="btn-gold w-full">
              {mode === "login" ? "Sign In" : "Create Account"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-gray-400 text-xs">or continue with</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          {/* Social */}
          <div className="grid grid-cols-2 gap-3">
            {["Google", "Phone"].map((provider) => (
              <button key={provider} className="border border-gray-200 py-3 text-sm text-gray-600 hover:border-gray-400 transition-colors flex items-center justify-center gap-2">
                {provider === "Google" ? "🌐" : "📱"} {provider}
              </button>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            {mode === "login" ? "Don't have an account? " : "Already have an account? "}
            <button onClick={() => setMode(mode === "login" ? "signup" : "login")} className="text-yellow-600 hover:text-yellow-700">
              {mode === "login" ? "Sign up free" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
