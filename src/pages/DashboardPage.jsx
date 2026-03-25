import { useState } from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard, FolderOpen, MessageSquare, CreditCard, Bell, Settings, LogOut, ChevronRight, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { projects } from "../data";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: FolderOpen, label: "My Projects", id: "projects" },
  { icon: MessageSquare, label: "Messages", id: "messages" },
  { icon: CreditCard, label: "Payments", id: "payments" },
  { icon: Settings, label: "Settings", id: "settings" },
];

const myProjects = [
  { id: 1, name: "Living Room Renovation", status: "In Progress", progress: 65, designer: "Kavita Sharma", nextStep: "Material delivery scheduled", image: projects[0].image },
  { id: 2, name: "Kitchen Remodel", status: "Design Phase", progress: 30, designer: "Arjun Malhotra", nextStep: "3D design review pending", image: projects[2].image },
  { id: 3, name: "Bedroom Suite", status: "Completed", progress: 100, designer: "Kavita Sharma", nextStep: "Project delivered ✓", image: projects[3].image },
];

const messages = [
  { id: 1, from: "Kavita Sharma", role: "Lead Designer", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80", msg: "Hi! Your material samples have arrived at the studio. Can we schedule a visit this week?", time: "2 hours ago", unread: true },
  { id: 2, from: "Arjun Malhotra", role: "Designer", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80", msg: "The 3D renders for your kitchen are ready for review. I've attached them below.", time: "Yesterday", unread: true },
  { id: 3, from: "Sharma Interior", role: "Support Team", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80", msg: "Your invoice for Phase 1 is ready. Please review and approve the payment.", time: "3 days ago", unread: false },
];

const payments = [
  { id: "INV-2024-001", project: "Living Room Renovation", amount: "₹3,00,000", status: "Paid", date: "15 Jan 2025", phase: "Phase 1 – Consultation & Design" },
  { id: "INV-2024-002", project: "Living Room Renovation", amount: "₹4,50,000", status: "Pending", date: "Due 15 Feb 2025", phase: "Phase 2 – Material Procurement" },
  { id: "INV-2024-003", project: "Kitchen Remodel", amount: "₹1,20,000", status: "Paid", date: "10 Jan 2025", phase: "Phase 1 – Initial Design" },
];

const statusColor = {
  "In Progress": "bg-blue-100 text-blue-700",
  "Design Phase": "bg-yellow-100 text-yellow-700",
  "Completed": "bg-green-100 text-green-700",
  "Pending": "bg-red-100 text-red-700",
  "Paid": "bg-green-100 text-green-700",
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [activeMsg, setActiveMsg] = useState(messages[0]);

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0f0f0f] text-white flex flex-col fixed top-0 bottom-0 left-0 z-40">
        <div className="p-6 border-b border-white/10">
          <Link to="/">
            <div className="display-font text-xl font-semibold tracking-wider text-white" style={{fontFamily:"'Cormorant Garamond',serif"}}>SHARMA</div>
            <div className="text-[9px] tracking-[0.3em] uppercase mt-0.5" style={{color:"#c49a4e"}}>Interior & Decorations</div>
          </Link>
        </div>

        {/* User */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center gap-3">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" alt="user" className="w-10 h-10 rounded-full object-cover border-2" style={{borderColor:"#c49a4e"}} />
          <div>
            <div className="text-white text-sm font-medium">Akash Kumar</div>
            <div className="text-gray-500 text-xs">Premium Client</div>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map(({ icon: Icon, label, id }) => (
            <button key={id} onClick={() => setActiveTab(id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm text-sm transition-all text-left ${
                activeTab === id ? "bg-yellow-600 text-white" : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}>
              <Icon size={17} />
              {label}
              {id === "messages" && messages.filter(m => m.unread).length > 0 && (
                <span className="ml-auto bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  {messages.filter(m => m.unread).length}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="px-3 pb-6">
          <Link to="/" className="w-full flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-white text-sm transition-colors">
            <LogOut size={17} /> Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 min-h-screen">
        {/* Header */}
        <div className="bg-white border-b border-gray-100 px-8 py-5 flex items-center justify-between sticky top-0 z-30">
          <div>
            <h1 className="text-xl font-medium" style={{fontFamily:"'Cormorant Garamond',serif"}}>
              {navItems.find(n => n.id === activeTab)?.label}
            </h1>
            <p className="text-gray-400 text-xs">Welcome back, Akash</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative w-9 h-9 flex items-center justify-center border border-gray-200 rounded-sm hover:border-yellow-400 transition-colors">
              <Bell size={17} className="text-gray-500" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[9px] text-white flex items-center justify-center">3</span>
            </button>
            <Link to="/contact" className="btn-gold text-[11px] py-2.5 px-5">New Consultation</Link>
          </div>
        </div>

        <div className="p-8">
          {/* ─── DASHBOARD ─── */}
          {activeTab === "dashboard" && (
            <div className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Active Projects", value: "2", icon: FolderOpen, color: "text-blue-600 bg-blue-50" },
                  { label: "Completed", value: "1", icon: CheckCircle, color: "text-green-600 bg-green-50" },
                  { label: "Unread Messages", value: "2", icon: MessageSquare, color: "text-yellow-600 bg-yellow-50" },
                  { label: "Pending Payments", value: "1", icon: CreditCard, color: "text-red-600 bg-red-50" },
                ].map(({ label, value, icon: Icon, color }) => (
                  <div key={label} className="bg-white rounded-sm p-6 border border-gray-100">
                    <div className={`w-10 h-10 rounded-sm flex items-center justify-center mb-4 ${color}`}>
                      <Icon size={18} />
                    </div>
                    <div className="text-3xl font-light mb-1" style={{fontFamily:"'Cormorant Garamond',serif"}}>{value}</div>
                    <div className="text-gray-500 text-xs">{label}</div>
                  </div>
                ))}
              </div>

              {/* Active Projects */}
              <div className="bg-white rounded-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-medium text-lg" style={{fontFamily:"'Cormorant Garamond',serif"}}>Active Projects</h3>
                  <button onClick={() => setActiveTab("projects")} className="text-yellow-600 text-xs uppercase tracking-widest hover:text-yellow-700">View All</button>
                </div>
                <div className="space-y-5">
                  {myProjects.filter(p => p.status !== "Completed").map((p) => (
                    <div key={p.id} className="flex gap-4 items-center">
                      <img src={p.image} alt={p.name} className="w-14 h-14 object-cover rounded-sm flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm truncate">{p.name}</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full ${statusColor[p.status]}`}>{p.status}</span>
                        </div>
                        <div className="text-gray-400 text-xs mb-2">Designer: {p.designer}</div>
                        <div className="flex items-center gap-3">
                          <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full transition-all" style={{width:`${p.progress}%`}} />
                          </div>
                          <span className="text-xs text-gray-400 flex-shrink-0">{p.progress}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Messages */}
              <div className="bg-white rounded-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-medium text-lg" style={{fontFamily:"'Cormorant Garamond',serif"}}>Recent Messages</h3>
                  <button onClick={() => setActiveTab("messages")} className="text-yellow-600 text-xs uppercase tracking-widest">View All</button>
                </div>
                <div className="space-y-4">
                  {messages.slice(0, 2).map((m) => (
                    <div key={m.id} className="flex gap-3 items-start">
                      <img src={m.avatar} alt={m.from} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-sm">{m.from}</span>
                          <span className="text-gray-400 text-xs">{m.time}</span>
                        </div>
                        <p className="text-gray-500 text-sm truncate">{m.msg}</p>
                      </div>
                      {m.unread && <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0 mt-2" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ─── MY PROJECTS ─── */}
          {activeTab === "projects" && (
            <div className="space-y-6">
              {myProjects.map((p) => (
                <div key={p.id} className="bg-white border border-gray-100 rounded-sm overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-6 p-6">
                    <img src={p.image} alt={p.name} className="w-full md:w-40 h-32 object-cover rounded-sm flex-shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-medium mb-1" style={{fontFamily:"'Cormorant Garamond',serif"}}>{p.name}</h3>
                          <p className="text-gray-500 text-sm">Lead Designer: {p.designer}</p>
                        </div>
                        <span className={`text-[11px] px-3 py-1 ${statusColor[p.status]}`}>{p.status}</span>
                      </div>
                      <div className="mb-4">
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                          <span>Progress</span><span>{p.progress}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full" style={{width:`${p.progress}%`}} />
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        {p.status === "Completed" ? <CheckCircle size={15} className="text-green-500" /> : <Clock size={15} className="text-yellow-500" />}
                        <span className="text-gray-600">{p.nextStep}</span>
                      </div>
                    </div>
                    <button className="flex-shrink-0 self-center text-gray-400 hover:text-gray-600">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ─── MESSAGES ─── */}
          {activeTab === "messages" && (
            <div className="bg-white border border-gray-100 rounded-sm overflow-hidden h-[600px] flex">
              {/* List */}
              <div className="w-80 border-r border-gray-100 flex flex-col">
                <div className="p-4 border-b border-gray-100">
                  <input className="w-full text-sm px-3 py-2 border border-gray-200 rounded-sm placeholder-gray-400 outline-none focus:border-yellow-400" placeholder="Search messages..." />
                </div>
                <div className="flex-1 overflow-y-auto">
                  {messages.map((m) => (
                    <button key={m.id} onClick={() => setActiveMsg(m)}
                      className={`w-full flex gap-3 items-start p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors text-left ${activeMsg?.id === m.id ? "bg-yellow-50" : ""}`}>
                      <img src={m.avatar} alt={m.from} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between">
                          <span className="font-medium text-sm">{m.from}</span>
                          <span className="text-gray-400 text-[11px]">{m.time}</span>
                        </div>
                        <p className="text-gray-500 text-xs truncate">{m.msg}</p>
                      </div>
                      {m.unread && <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0 mt-1" />}
                    </button>
                  ))}
                </div>
              </div>
              {/* Conversation */}
              <div className="flex-1 flex flex-col">
                <div className="p-4 border-b border-gray-100 flex items-center gap-3">
                  <img src={activeMsg?.avatar} alt="" className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-medium text-sm">{activeMsg?.from}</div>
                    <div className="text-gray-400 text-xs">{activeMsg?.role}</div>
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <div className="bg-gray-100 rounded-sm p-4 max-w-sm">
                    <p className="text-sm text-gray-700">{activeMsg?.msg}</p>
                    <p className="text-gray-400 text-xs mt-2">{activeMsg?.time}</p>
                  </div>
                </div>
                <div className="p-4 border-t border-gray-100 flex gap-3">
                  <input className="flex-1 text-sm px-4 py-2 border border-gray-200 rounded-sm focus:border-yellow-400 outline-none" placeholder="Type a message..." />
                  <button className="btn-gold text-[12px] py-2 px-5">Send</button>
                </div>
              </div>
            </div>
          )}

          {/* ─── PAYMENTS ─── */}
          {activeTab === "payments" && (
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[["Total Paid", "₹4,20,000", "text-green-600"], ["Pending", "₹4,50,000", "text-red-500"], ["Total Project Value", "₹18,00,000", "text-yellow-600"]].map(([l,v,c]) => (
                  <div key={l} className="bg-white border border-gray-100 p-6 rounded-sm text-center">
                    <div className={`text-2xl font-light mb-1 ${c}`} style={{fontFamily:"'Cormorant Garamond',serif"}}>{v}</div>
                    <div className="text-gray-500 text-xs">{l}</div>
                  </div>
                ))}
              </div>
              <div className="bg-white border border-gray-100 rounded-sm overflow-hidden">
                <table className="w-full text-sm">
                  <thead><tr className="bg-gray-50 border-b border-gray-100">{["Invoice","Project","Phase","Amount","Date","Status"].map(h=><th key={h} className="text-left px-5 py-4 text-[11px] tracking-widest uppercase text-gray-400 font-normal">{h}</th>)}</tr></thead>
                  <tbody>
                    {payments.map((p) => (
                      <tr key={p.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                        <td className="px-5 py-4 text-yellow-600 font-medium">{p.id}</td>
                        <td className="px-5 py-4">{p.project}</td>
                        <td className="px-5 py-4 text-gray-500 text-xs">{p.phase}</td>
                        <td className="px-5 py-4 font-medium">{p.amount}</td>
                        <td className="px-5 py-4 text-gray-500">{p.date}</td>
                        <td className="px-5 py-4"><span className={`text-[11px] px-3 py-1 ${statusColor[p.status]}`}>{p.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ─── SETTINGS ─── */}
          {activeTab === "settings" && (
            <div className="max-w-2xl space-y-8">
              <div className="bg-white border border-gray-100 rounded-sm p-6">
                <h3 className="font-medium mb-6" style={{fontFamily:"'Cormorant Garamond',serif"}}>Profile Information</h3>
                <div className="flex items-center gap-4 mb-8">
                  <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" alt="avatar" className="w-16 h-16 rounded-full object-cover" />
                  <button className="btn-outline text-[11px] py-2 px-4">Change Photo</button>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {[["Full Name","Akash Kumar"],["Email","akash@email.com"],["Phone","+91 98765 43210"],["City","Jaipur"]].map(([l,v]) => (
                    <div key={l}>
                      <label className="section-label block mb-2">{l}</label>
                      <input defaultValue={v} className="input-luxury" />
                    </div>
                  ))}
                </div>
                <button className="btn-gold mt-8">Save Changes</button>
              </div>
              <div className="bg-white border border-gray-100 rounded-sm p-6">
                <h3 className="font-medium mb-6" style={{fontFamily:"'Cormorant Garamond',serif"}}>Notifications</h3>
                {["Project updates via email","SMS alerts for milestones","Promotional offers","Monthly design newsletter"].map((n) => (
                  <div key={n} className="flex items-center justify-between py-3 border-b border-gray-50">
                    <span className="text-sm text-gray-700">{n}</span>
                    <div className="w-10 h-6 bg-yellow-500 rounded-full relative cursor-pointer">
                      <div className="w-4 h-4 bg-white rounded-full absolute right-1 top-1 shadow" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
