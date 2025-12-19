"use client";
import { useState } from "react";
import { LayoutDashboard, User, Briefcase, Bell, Settings, Zap, MapPin, Phone, Trash2, Plus, Edit2, Save, X, Menu } from "lucide-react";

const mockUser = {
  name: "Chinedu Emeka",
  email: "chinedu.emeka@email.com",
  location: "Lagos, Nigeria",
  phone: "+234 801 234 5678",
  subscription: { amount: 5000 },
  skills: ["JavaScript", "React", "Node.js", "TypeScript", "Python", "MongoDB"],
  experience: [
    {
      role: "Senior Frontend Developer",
      company: "TechCorp Nigeria",
      description: "Led development of enterprise web applications using React and TypeScript"
    },
    {
      role: "Full Stack Developer",
      company: "StartupHub",
      description: "Built and maintained multiple client projects using MERN stack"
    }
  ]
};

export default function ProfilePage() {
  const [currentPath] = useState("/profile");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({ ...mockUser });
  const [newSkill, setNewSkill] = useState("");

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: Briefcase, label: "Jobs", href: "/jobs" },
    { icon: Bell, label: "Applications", href: "/applications" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: Settings, label: "Settings", href: "/settings" }
  ];

  const formatNaira = (amount) => `₦${Number(amount).toLocaleString("en-NG")}`;

  const handleAddSkill = () => {
    const skill = newSkill.trim();
    if (!skill || profile.skills.includes(skill)) return;
    setProfile({ ...profile, skills: [...profile.skills, skill] });
    setNewSkill("");
  };

  const handleRemoveSkill = (index) => {
    if (!confirm("Remove this skill?")) return;
    setProfile({ ...profile, skills: profile.skills.filter((_, i) => i !== index) });
  };

  const handleDeleteExperience = (index) => {
    if (!confirm("Delete this experience?")) return;
    setProfile({ ...profile, experience: profile.experience.filter((_, i) => i !== index) });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-text dark:text-white">Applyswift</span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map(item => (
                <button key={item.href} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${currentPath === item.href ? "bg-primary-50 dark:bg-primary-900/20 text-primary" : "text-text-light dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary"}`}>
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-text-light dark:text-gray-400" />
              </button>
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold text-sm">CE</div>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-2">
            <div className="flex flex-col space-y-1 px-4">
              {menuItems.map(item => (
                <button key={item.href} onClick={() => setMobileMenuOpen(false)} className={`flex items-center gap-3 px-4 py-3 rounded-lg ${currentPath === item.href ? "bg-primary-50 dark:bg-primary-900/20 text-primary" : "text-text-light dark:text-gray-400"}`}>
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto w-full">
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-text dark:text-white">My Profile</h1>
            <button onClick={() => setIsEditing(!isEditing)} className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
              {isEditing ? <X className="w-4 h-4" /> : <Edit2 className="w-4 h-4" />}
              {isEditing ? "Cancel" : "Edit"}
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-3xl font-bold">{profile.name[0]}</div>
                <h2 className="mt-4 font-bold text-text dark:text-white text-lg">{profile.name}</h2>
                <p className="text-sm text-text-light dark:text-gray-400">{profile.email}</p>
              </div>
              <div className="mt-6 space-y-3 text-sm text-text dark:text-white">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-text-light dark:text-gray-400" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-text-light dark:text-gray-400" />
                  <span>{profile.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-text-light dark:text-gray-400">💳</span>
                  <span>Subscription: {formatNaira(profile.subscription.amount)}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-lg text-text dark:text-white mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary rounded-full flex items-center gap-2 text-sm font-medium">
                      {skill}
                      {isEditing && (
                        <button onClick={() => handleRemoveSkill(i)} className="hover:text-red-600">
                          <X size={14} />
                        </button>
                      )}
                    </span>
                  ))}
                </div>
                {isEditing && (
                  <div className="flex gap-2 mt-4">
                    <input value={newSkill} onChange={e => setNewSkill(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleAddSkill()} className="flex-1 border border-gray-300 dark:border-gray-600 px-3 py-2 rounded-lg bg-white dark:bg-gray-700 text-text dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Add new skill" />
                    <button onClick={handleAddSkill} className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-lg text-text dark:text-white mb-4">Work Experience</h3>
                <div className="space-y-4">
                  {profile.experience.map((exp, i) => (
                    <div key={i} className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <strong className="text-text dark:text-white">{exp.role}</strong>
                        {isEditing && (
                          <button onClick={() => handleDeleteExperience(i)} className="text-red-600 hover:text-red-700">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                      <p className="text-sm text-text-light dark:text-gray-400 mb-2">{exp.company}</p>
                      <p className="text-sm text-text dark:text-white">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {isEditing && (
                <button onClick={handleSave} className="w-full bg-primary text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-700 transition-colors font-semibold">
                  <Save className="w-5 h-5" /> Save Changes
                </button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}