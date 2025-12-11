// ProfilePage - Single file improved version
// Improvements: dynamic pathname, formatted Naira, prevent duplicate skills, confirm delete, location dropdown (All States), accessibility

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import {
  LayoutDashboard,
  User,
  FileText,
  Mail,
  Briefcase,
  Bell,
  Settings,
  LogOut,
  Zap,
  Camera,
  MapPin,
  Phone,
  Calendar,
  Award,
  Trash2,
  Plus,
  Edit2,
  Save,
  X,
} from "lucide-react";

import { mockUser } from "@/lib/constants/mockData";

const NIGERIAN_STATES = [
  "All States",
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
  "FCT",
];

export default function ProfilePage() {
  const pathname = usePathname();

  // Local editable state
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({ ...mockUser, autoApply: mockUser.autoApply ?? false });
  const [newSkill, setNewSkill] = useState("");

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: FileText, label: "CV Manager", href: "/cv-manager" },
    { icon: Mail, label: "Cover Letters", href: "/cover-letters" },
    { icon: Briefcase, label: "Jobs", href: "/jobs" },
    { icon: Bell, label: "Applications", href: "/applications" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  // Skills
  const handleAddSkill = () => {
    const skill = newSkill.trim();
    if (!skill) return;
    if (profile.skills?.includes(skill)) {
      // optional: show a toast in real app
      setNewSkill("");
      return;
    }
    setProfile({ ...profile, skills: [...(profile.skills || []), skill] });
    setNewSkill("");
  };

  const handleRemoveSkill = (index) => {
    setProfile({ ...profile, skills: (profile.skills || []).filter((_, i) => i !== index) });
  };

  // Experience
  const handleDeleteExperience = (index) => {
    if (confirm("Are you sure you want to delete this experience?")) {
      setProfile({ ...profile, experience: profile.experience.filter((_, i) => i !== index) });
    }
  };

  // Save handler (local only) with basic validation
  const handleSaveChanges = () => {
    // Basic email validation
    const email = profile.email || "";
    const phone = profile.phone || "";
    const emailRegex = new RegExp("^\S+@\S+\.\S+$");
    if (email && !emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (phone && phone.length < 7) {
      alert("Please enter a valid phone number.");
      return;
    }

    // In a real app you would call an API here. We'll just turn off editing.
    setIsEditing(false);
    // optional: persist to localStorage
    try {
      localStorage.setItem("profile", JSON.stringify(profile));
    } catch (e) {
      // ignore
    }
  };

  // Toggle auto-apply and persist to profile state
  const toggleAutoApply = () => {
    const newVal = !profile.autoApply;
    setProfile({ ...profile, autoApply: newVal });
  };

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 flex">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-6 flex flex-col">
        <div className="mb-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-text dark:text-white">
              AutoApply<span className="text-primary">.ng</span>
            </span>
          </Link>
        </div>

        <nav className="space-y-1 flex-1">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                pathname === item.href
                  ? "bg-primary-50 dark:bg-primary-900/20 text-primary"
                  : "text-text-light dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <button className="flex items-center gap-3 px-4 py-3 mt-auto text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg w-full transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-text dark:text-white mb-2">My Profile</h1>
              <p className="text-text-light dark:text-gray-400">Manage your personal information and work experience</p>
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className={clsx(
                "flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all",
                isEditing ? "bg-red-600 text-white hover:bg-red-700" : "bg-primary text-white hover:bg-primary-700"
              )}
            >
              {isEditing ? (
                <>
                  <X className="w-5 h-5" /> Cancel
                </>
              ) : (
                <>
                  <Edit2 className="w-5 h-5" /> Edit Profile
                </>
              )}
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 sticky top-8">
              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-4xl font-bold">
                    {profile.name ? profile.name.split(" ").map(n => n[0]).join("") : "?"}
                  </div>

                  {isEditing && (
                    <button className="absolute bottom-0 right-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors" aria-label="Upload avatar">
                      <Camera className="w-5 h-5" />
                    </button>
                  )}
                </div>

                <h2 className="text-2xl font-bold text-text dark:text-white mb-1">{profile.name}</h2>
                <p className="text-text-light dark:text-gray-400 mb-4">{profile.experience?.[0]?.role || "Professional"}</p>

                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3 text-sm text-text-light dark:text-gray-400">
                    <Mail className="w-4 h-4" />
                    <span>{profile.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-text-light dark:text-gray-400">
                    <Phone className="w-4 h-4" />
                    <span>{profile.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-text-light dark:text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{profile.location}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <h3 className="text-sm font-semibold text-text dark:text-white mb-3">Subscription</h3>
                <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-text dark:text-white">{profile.subscription.plan} Plan</span>
                    <span className="text-xs px-2 py-1 bg-primary text-white rounded-full">Active</span>
                  </div>

                  <p className="text-xs text-text-light dark:text-gray-400 mb-3">CV Regenerations: {profile.subscription.cvRegenerationsUsed}/{profile.subscription.cvRegenerations}</p>

                  <p className="text-xs text-text-light dark:text-gray-400 mb-3">Amount: ₦{Number(profile.subscription.amount).toLocaleString("en-NG")}</p>

                  <Link href="/pricing" className="block w-full text-center bg-primary text-white py-2 rounded-lg hover:bg-primary-700 text-sm font-medium transition-colors">Upgrade Plan</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-xl font-bold text-text dark:text-white mb-6">Personal Information</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text dark:text-white mb-2">Full Name</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white disabled:bg-gray-50 dark:disabled:bg-gray-700 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text dark:text-white mb-2">Email Address</label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white disabled:bg-gray-50 dark:disabled:bg-gray-700 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text dark:text-white mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white disabled:bg-gray-50 dark:disabled:bg-gray-700 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text dark:text-white mb-2">Location</label>
                  <select
                    value={profile.location || "All States"}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white disabled:bg-gray-50 dark:disabled:bg-gray-700 disabled:cursor-not-allowed"
                  >
                    {NIGERIAN_STATES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              {isEditing && (
                <div className="mt-6 flex justify-end">
                  <button onClick={handleSaveChanges} className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-700 font-medium transition-colors">
                    <Save className="w-5 h-5" /> Save Changes
                  </button>
                </div>
              )}
            </div>

            {/* Skills */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-text dark:text-white">Skills</h3>
                <Award className="w-6 h-6 text-primary" />
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {(profile.skills || []).map((skill, index) => (
                  <span key={index} className="bg-primary-100 dark:bg-primary-900/30 text-primary px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    {skill}
                    {isEditing && (
                      <button onClick={() => handleRemoveSkill(index)} className="hover:text-red-600" aria-label={`Remove ${skill}`}>
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </span>
                ))}
              </div>

              {isEditing && (
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); handleAddSkill(); } }}
                    placeholder="Add a new skill"
                    className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white"
                  />
                  <button onClick={handleAddSkill} className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-700 font-medium transition-colors flex items-center gap-2">
                    <Plus className="w-5 h-5" /> Add
                  </button>
                </div>
              )}
            </div>

            {/* Auto-Apply Settings */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-xl font-bold text-text dark:text-white mb-6">Auto-Apply Settings</h3>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-text dark:text-white">Allow platform to auto-apply for matching jobs?</p>
                  <p className="text-sm text-text-light dark:text-gray-400">Enable this to let AutoApply.ng automatically send applications for jobs that match your profile.</p>
                </div>

                <button
                  role="switch"
                  aria-checked={profile.autoApply}
                  onClick={toggleAutoApply}
                  className={clsx("relative inline-flex h-6 w-11 items-center rounded-full transition-colors", profile.autoApply ? "bg-green-600" : "bg-gray-400")}
                >
                  <span className={clsx("inline-block h-5 w-5 transform rounded-full bg-white transition-transform", profile.autoApply ? "translate-x-5" : "translate-x-1")} />
                </button>
              </div>
            </div>

            {/* Work Experience */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-text dark:text-white">Work Experience</h3>
                {isEditing && (
                  <button className="flex items-center gap-2 text-primary hover:text-primary-700 font-medium text-sm">
                    <Plus className="w-4 h-4" /> Add Experience
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {(profile.experience || []).map((exp, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-text dark:text-white">{exp.role}</h4>
                        <p className="text-sm text-text-light dark:text-gray-400">{exp.company}</p>
                      </div>
                      {isEditing && (
                        <button onClick={() => handleDeleteExperience(index)} className="text-red-600 hover:text-red-700" aria-label="Delete experience">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-text-light dark:text-gray-400 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <p className="text-sm text-text-light dark:text-gray-400">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
