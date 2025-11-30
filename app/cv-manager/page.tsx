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
  Download,
  Eye,
  RefreshCw,
  Plus,
  Trash2,
  Copy,
  Star,
  Calendar,
  CheckCircle,
  Lock,
  X
} from "lucide-react";
import { mockUser, mockCVs } from "@/lib/constants/mockData";

export default function CVManagerPage() {
  const [currentPath] = useState("/cv-manager");
  const [showPreview, setShowPreview] = useState(false);
  const [selectedCV, setSelectedCV] = useState<any>(null);

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: FileText, label: "CV Manager", href: "/cv-manager" },
    { icon: Mail, label: "Cover Letters", href: "/cover-letters" },
    { icon: Briefcase, label: "Jobs", href: "/jobs" },
    { icon: Bell, label: "Applications", href: "/applications" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  const handlePreviewCV = (cv: any) => {
    setSelectedCV(cv);
    setShowPreview(true);
  };

  const canRegenerate = mockUser.subscription.cvRegenerationsUsed < mockUser.subscription.cvRegenerations;
  const isPremium = mockUser.subscription.plan !== "Free";

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
              <h1 className="text-3xl font-bold text-text dark:text-white mb-2">CV Manager</h1>
              <p className="text-text-light dark:text-gray-400">
                Create, manage, and optimize your CVs for different roles
              </p>
            </div>
            <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-700 font-semibold transition-all shadow-lg hover:shadow-xl">
              <Plus className="w-5 h-5" />
              Create New CV
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <Star className="w-5 h-5 text-yellow-500" />
            </div>
            <h3 className="text-text-light dark:text-gray-400 text-sm font-medium mb-1">Total CVs</h3>
            <p className="text-3xl font-bold text-text dark:text-white">{mockCVs.length}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
            <h3 className="text-text-light dark:text-gray-400 text-sm font-medium mb-1">Regenerations Left</h3>
            <p className="text-3xl font-bold text-text dark:text-white">
              {mockUser.subscription.cvRegenerations - mockUser.subscription.cvRegenerationsUsed}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <Download className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              {!isPremium && <Lock className="w-5 h-5 text-gray-400" />}
            </div>
            <h3 className="text-text-light dark:text-gray-400 text-sm font-medium mb-1">Downloads</h3>
            <p className="text-3xl font-bold text-text dark:text-white">
              {isPremium ? "Unlimited" : "Limited"}
            </p>
          </div>
        </div>

        {/* Upgrade Banner */}
        {!isPremium && (
          <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Unlock Premium Features</h3>
                <p className="text-white/90 mb-4">
                  Get unlimited CV regenerations, premium downloads, and AI-powered optimization
                </p>
                <Link 
                  href="/pricing"
                  className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg hover:bg-gray-100 font-semibold transition-colors"
                >
                  Upgrade to Premium
                  <Star className="w-5 h-5" />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <FileText className="w-16 h-16 text-white/80" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CV List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCVs.map((cv) => (
            <div 
              key={cv.id}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all"
            >
              {/* CV Preview Thumbnail */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg h-48 mb-4 flex items-center justify-center">
                <FileText className="w-16 h-16 text-gray-400 dark:text-gray-500" />
              </div>

              {/* CV Info */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-text dark:text-white">{cv.title}</h3>
                  {cv.status === "active" && (
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs rounded-full">
                      Active
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-sm text-text-light dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>Created: {cv.created_at}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-text-light dark:text-gray-400 mt-1">
                  <RefreshCw className="w-4 h-4" />
                  <span>Modified: {cv.lastModified}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => handlePreviewCV(cv)}
                  className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 font-medium text-sm transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  Preview
                </button>
                <button 
                  className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    isPremium
                      ? "bg-primary text-white hover:bg-primary-700"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!isPremium}
                >
                  {isPremium ? <Download className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                  Download
                </button>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <button 
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    canRegenerate
                      ? "bg-secondary text-white hover:bg-secondary-700"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!canRegenerate}
                >
                  <RefreshCw className="w-4 h-4" />
                  Regenerate
                </button>
                <button className="p-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary hover:text-primary transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
                <button className="p-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-red-500 hover:text-red-500 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {/* Create New CV Card */}
          <button className="bg-white dark:bg-gray-800 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 p-6 hover:border-primary hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-all h-full min-h-[350px] flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
              <Plus className="w-8 h-8 text-primary" />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-text dark:text-white mb-2">Create New CV</h3>
              <p className="text-sm text-text-light dark:text-gray-400">
                Generate a new CV with AI assistance
              </p>
            </div>
          </button>
        </div>

        {/* Preview Modal */}
        {showPreview && selectedCV && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-text dark:text-white">{selectedCV.title}</h3>
                <button 
                  onClick={() => setShowPreview(false)}
                  className="w-10 h-10 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                {/* CV Preview Content */}
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-8 shadow-lg">
                  <div className="text-center mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                    <h1 className="text-3xl font-bold text-text dark:text-white mb-2">{mockUser.name}</h1>
                    <p className="text-text-light dark:text-gray-400 mb-2">{mockUser.experience[0]?.role}</p>
                    <div className="flex items-center justify-center gap-4 text-sm text-text-light dark:text-gray-400">
                      <span>{mockUser.email}</span>
                      <span>•</span>
                      <span>{mockUser.phone}</span>
                      <span>•</span>
                      <span>{mockUser.location}</span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-text dark:text-white mb-3">Professional Summary</h2>
                      <p className="text-text-light dark:text-gray-400">
                        Experienced {mockUser.experience[0]?.role} with a proven track record in building responsive web applications. 
                        Passionate about creating user-friendly interfaces and delivering high-quality code.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-text dark:text-white mb-3">Skills</h2>
                      <div className="flex flex-wrap gap-2">
                        {mockUser.skills.map((skill, index) => (
                          <span 
                            key={index}
                            className="bg-primary-100 dark:bg-primary-900/30 text-primary px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-text dark:text-white mb-3">Work Experience</h2>
                      {mockUser.experience.map((exp, index) => (
                        <div key={index} className="mb-4">
                          <h3 className="font-semibold text-text dark:text-white">{exp.role}</h3>
                          <p className="text-sm text-text-light dark:text-gray-400 mb-1">{exp.company} • {exp.duration}</p>
                          <p className="text-sm text-text-light dark:text-gray-400">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700">
                <button 
                  onClick={() => setShowPreview(false)}
                  className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-text dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 font-medium transition-colors"
                >
                  Close
                </button>
                <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-700 font-medium transition-colors">
                  <Download className="w-5 h-5" />
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}