"use client";

import { useState } from "react";
import Link from "next/link";
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
  X
} from "lucide-react";
import { mockUser } from "@/lib/constants/mockData";

export default function ProfilePage() {
  const [currentPath] = useState("/profile");
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(mockUser);
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

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setProfile({
        ...profile,
        skills: [...profile.skills, newSkill.trim()]
      });
      setNewSkill("");
    }
  };

  const handleRemoveSkill = (index: number) => {
    setProfile({
      ...profile,
      skills: profile.skills.filter((_, i) => i !== index)
    });
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
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                currentPath === item.href
                  ? "bg-primary-50 dark:bg-primary-900/20 text-primary"
                  : "text-text-light dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary"
              }`}
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
              <p className="text-text-light dark:text-gray-400">
                Manage your personal information and work experience
              </p>
            </div>
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                isEditing
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-primary text-white hover:bg-primary-700"
              }`}
            >
              {isEditing ? (
                <>
                  <X className="w-5 h-5" />
                  Cancel
                </>
              ) : (
                <>
                  <Edit2 className="w-5 h-5" />
                  Edit Profile
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
                    {profile.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  {isEditing && (
                    <button className="absolute bottom-0 right-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                      <Camera className="w-5 h-5" />
                    </button>
                  )}
                </div>
                <h2 className="text-2xl font-bold text-text dark:text-white mb-1">{profile.name}</h2>
                <p className="text-text-light dark:text-gray-400 mb-4">{profile.experience[0]?.role || "Professional"}</p>
                
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
                    <span className="text-sm font-medium text-text dark:text-white">
                      {profile.subscription.plan} Plan
                    </span>
                    <span className="text-xs px-2 py-1 bg-primary text-white rounded-full">
                      Active
                    </span>
                  </div>
                  <p className="text-xs text-text-light dark:text-gray-400 mb-3">
                    CV Regenerations: {profile.subscription.cvRegenerationsUsed}/{profile.subscription.cvRegenerations}
                  </p>
                  <Link
                    href="/pricing"
                    className="block w-full text-center bg-primary text-white py-2 rounded-lg hover:bg-primary-700 text-sm font-medium transition-colors"
                  >
                    Upgrade Plan
                  </Link>
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
                  <label className="block text-sm font-medium text-text dark:text-white mb-2">
                    Full Name
                  </label>
                  <input 
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white disabled:bg-gray-50 dark:disabled:bg-gray-700 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text dark:text-white mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white disabled:bg-gray-50 dark:disabled:bg-gray-700 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text dark:text-white mb-2">
                    Phone Number
                  </label>
                  <input 
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({...profile, phone: e.target.value})}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white disabled:bg-gray-50 dark:disabled:bg-gray-700 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text dark:text-white mb-2">
                    Location
                  </label>
                  <input 
                    type="text"
                    value={profile.location}
                    onChange={(e) => setProfile({...profile, location: e.target.value})}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white disabled:bg-gray-50 dark:disabled:bg-gray-700 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              {isEditing && (
                <div className="mt-6 flex justify-end">
                  <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-700 font-medium transition-colors">
                    <Save className="w-5 h-5" />
                    Save Changes
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
                {profile.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-primary-100 dark:bg-primary-900/30 text-primary px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                  >
                    {skill}
                    {isEditing && (
                      <button
                        onClick={() => handleRemoveSkill(index)}
                        className="hover:text-red-600"
                      >
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
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddSkill();
                      }
                    }}
                    placeholder="Add a new skill"
                    className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white"
                  />
                  <button 
                    onClick={handleAddSkill}
                    className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-700 font-medium transition-colors flex items-center gap-2"
                  >
                    <Plus className="w-5 h-5" />
                    Add
                  </button>
                </div>
              )}
            </div>

            {/* Work Experience */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-text dark:text-white">Work Experience</h3>
                {isEditing && (
                  <button className="flex items-center gap-2 text-primary hover:text-primary-700 font-medium text-sm">
                    <Plus className="w-4 h-4" />
                    Add Experience
                  </button>
                )}
              </div>

              <div className="space-y-4">
                {profile.experience.map((exp, index) => (
                  <div 
                    key={index}
                    className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-text dark:text-white">{exp.role}</h4>
                        <p className="text-sm text-text-light dark:text-gray-400">{exp.company}</p>
                      </div>
                      {isEditing && (
                        <button className="text-red-600 hover:text-red-700">
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