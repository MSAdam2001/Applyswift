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

  const formatNaira = (amount: any) => `₦${Number(amount).toLocaleString("en-NG")}`;

  const handleAddSkill = () => {
    const skill = newSkill.trim();
    if (!skill || profile.skills.includes(skill)) return;
    setProfile({ ...profile, skills: [...profile.skills, skill] });
    setNewSkill("");
  };

  const handleRemoveSkill = (index: any) => {
    if (!confirm("Remove this skill?")) return;
    setProfile({ ...profile, skills: profile.skills.filter((_, i) => i !== index) });
  };

  const handleDeleteExperience = (index: any) => {
    if (!confirm("Delete this experience?")) return;
    setProfile({ ...profile, experience: profile.experience.filter((_, i) => i !== index) });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      

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