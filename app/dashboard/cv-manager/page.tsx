"use client";

import { useState } from "react";
import { 
  LayoutDashboard, 
  User, 
  FileText, 
  Mail, 
  Briefcase, 
  Bell, 
  Settings,
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
  X,
  Menu
} from "lucide-react";

const mockUser = {
  name: "John Doe",
  email: "john@example.com",
  phone: "+234 123 456 7890",
  location: "Lagos, Nigeria",
  skills: ["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS"],
  experience: [
    {
      role: "Frontend Developer",
      company: "Tech Company",
      duration: "2020 - Present",
      description: "Building modern web applications with React and TypeScript"
    }
  ],
  subscription: {
    plan: "Free",
    cvRegenerations: 5,
    cvRegenerationsUsed: 2
  }
};

const mockCVs = [
  {
    id: 1,
    title: "Software Engineer CV",
    status: "active",
    created_at: "Jan 15, 2024",
    lastModified: "Feb 10, 2024"
  },
  {
    id: 2,
    title: "Frontend Developer CV",
    status: "inactive",
    created_at: "Dec 20, 2023",
    lastModified: "Jan 5, 2024"
  },
  {
    id: 3,
    title: "Full Stack Engineer CV",
    status: "inactive",
    created_at: "Nov 10, 2023",
    lastModified: "Dec 1, 2023"
  }
];

export default function CVManagerPage() {
  const [currentPath] = useState("/cv-manager");
  const [showPreview, setShowPreview] = useState(false);
  const [selectedCV, setSelectedCV] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: FileText, label: "CV Manager", href: "/cv-manager" },
    { icon: Mail, label: "Cover Letters", href: "/cover-letters" },
    { icon: Briefcase, label: "Jobs", href: "/jobs" },
    { icon: Bell, label: "Applications", href: "/applications" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  const handlePreviewCV = (cv) => {
    setSelectedCV(cv);
    setShowPreview(true);
  };

  const canRegenerate = mockUser.subscription.cvRegenerationsUsed < mockUser.subscription.cvRegenerations;
  const isPremium = mockUser.subscription.plan !== "Free";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Top Navigation Bar */}
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-text dark:text-white">
                Applyswift
              </span>
            </div>

            {/* Desktop Navigation Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map(item => (
                <button
                  key={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    currentPath === item.href
                      ? "bg-primary-50 dark:bg-primary-900/20 text-primary"
                      : "text-text-light dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            {/* User Profile & Mobile Menu */}
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-text-light dark:text-gray-400" />
              </button>
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                JD
              </div>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-2">
            <div className="flex flex-col space-y-1 px-4">
              {menuItems.map(item => (
                <button
                  key={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
                    currentPath === item.href
                      ? "bg-primary-50 dark:bg-primary-900/20 text-primary"
                      : "text-text-light dark:text-gray-400"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto w-full">
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-text dark:text-white mb-1 sm:mb-2">CV Manager</h1>
                <p className="text-text-light dark:text-gray-400 text-sm sm:text-base">
                  Create, manage, and optimize your CVs for different roles
                </p>
              </div>
              <button className="flex items-center justify-center gap-2 bg-primary text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-primary-700 font-semibold transition-all shadow-lg hover:shadow-xl text-sm sm:text-base whitespace-nowrap">
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                Create New CV
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
              </div>
              <h3 className="text-text-light dark:text-gray-400 text-xs sm:text-sm font-medium mb-1">Total CVs</h3>
              <p className="text-2xl sm:text-3xl font-bold text-text dark:text-white">{mockCVs.length}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" />
                </div>
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
              </div>
              <h3 className="text-text-light dark:text-gray-400 text-xs sm:text-sm font-medium mb-1">Regenerations Left</h3>
              <p className="text-2xl sm:text-3xl font-bold text-text dark:text-white">
                {mockUser.subscription.cvRegenerations - mockUser.subscription.cvRegenerationsUsed}
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 sm:col-span-2 md:col-span-1">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <Download className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" />
                </div>
                {!isPremium && <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />}
              </div>
              <h3 className="text-text-light dark:text-gray-400 text-xs sm:text-sm font-medium mb-1">Downloads</h3>
              <p className="text-2xl sm:text-3xl font-bold text-text dark:text-white">
                {isPremium ? "Unlimited" : "Limited"}
              </p>
            </div>
          </div>

          {/* Upgrade Banner */}
          {!isPremium && (
            <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-4 sm:p-6 text-white mb-6 sm:mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Unlock Premium Features</h3>
                  <p className="text-white/90 mb-4 text-sm sm:text-base">
                    Get unlimited CV regenerations, premium downloads, and AI-powered optimization
                  </p>
                  <button className="inline-flex items-center gap-2 bg-white text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-100 font-semibold transition-colors text-sm sm:text-base">
                    Upgrade to Premium
                    <Star className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
                <div className="hidden md:block">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-white/80" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CV List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {mockCVs.map((cv) => (
              <div 
                key={cv.id}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 hover:shadow-lg transition-all"
              >
                {/* CV Preview Thumbnail */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg h-36 sm:h-48 mb-3 sm:mb-4 flex items-center justify-center">
                  <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 dark:text-gray-500" />
                </div>

                {/* CV Info */}
                <div className="mb-3 sm:mb-4">
                  <div className="flex items-start justify-between mb-2 gap-2">
                    <h3 className="font-bold text-text dark:text-white text-sm sm:text-base line-clamp-1">{cv.title}</h3>
                    {cv.status === "active" && (
                      <span className="px-2 py-0.5 sm:py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs rounded-full whitespace-nowrap flex-shrink-0">
                        Active
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-text-light dark:text-gray-400">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="truncate">Created: {cv.created_at}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-text-light dark:text-gray-400 mt-1">
                    <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="truncate">Modified: {cv.lastModified}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <button 
                    onClick={() => handlePreviewCV(cv)}
                    className="flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 font-medium text-xs sm:text-sm transition-colors"
                  >
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                    Preview
                  </button>
                  <button 
                    className={`flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors ${
                      isPremium
                        ? "bg-primary text-white hover:bg-primary-700"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!isPremium}
                  >
                    {isPremium ? <Download className="w-3 h-3 sm:w-4 sm:h-4" /> : <Lock className="w-3 h-3 sm:w-4 sm:h-4" />}
                    Download
                  </button>
                </div>

                <div className="mt-2 sm:mt-3 flex items-center gap-2">
                  <button 
                    className={`flex-1 flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors ${
                      canRegenerate
                        ? "bg-secondary text-white hover:bg-secondary-700"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!canRegenerate}
                  >
                    <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="hidden sm:inline">Regenerate</span>
                    <span className="sm:hidden">Regen</span>
                  </button>
                  <button className="p-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary hover:text-primary transition-colors">
                    <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                  <button className="p-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-red-500 hover:text-red-500 transition-colors">
                    <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
            ))}

            {/* Create New CV Card */}
            <button className="bg-white dark:bg-gray-800 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 p-4 sm:p-6 hover:border-primary hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-all h-full min-h-[280px] sm:min-h-[350px] flex flex-col items-center justify-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-text dark:text-white mb-2 text-sm sm:text-base">Create New CV</h3>
                <p className="text-xs sm:text-sm text-text-light dark:text-gray-400">
                  Generate a new CV with AI assistance
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Preview Modal */}
        {showPreview && selectedCV && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
                <h3 className="text-lg sm:text-xl font-bold text-text dark:text-white truncate">{selectedCV.title}</h3>
                <button 
                  onClick={() => setShowPreview(false)}
                  className="w-8 h-8 sm:w-10 sm:h-10 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ml-2"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
              <div className="p-4 sm:p-6 overflow-y-auto flex-1">
                {/* CV Preview Content */}
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4 sm:p-8 shadow-lg">
                  <div className="text-center mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-gray-200 dark:border-gray-700">
                    <h1 className="text-xl sm:text-3xl font-bold text-text dark:text-white mb-2">{mockUser.name}</h1>
                    <p className="text-text-light dark:text-gray-400 mb-2 text-sm sm:text-base">{mockUser.experience[0]?.role}</p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4 text-xs sm:text-sm text-text-light dark:text-gray-400">
                      <span className="truncate max-w-full">{mockUser.email}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="truncate max-w-full">{mockUser.phone}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="truncate max-w-full">{mockUser.location}</span>
                    </div>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-text dark:text-white mb-2 sm:mb-3">Professional Summary</h2>
                      <p className="text-text-light dark:text-gray-400 text-sm sm:text-base">
                        Experienced {mockUser.experience[0]?.role} with a proven track record in building responsive web applications. 
                        Passionate about creating user-friendly interfaces and delivering high-quality code.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-text dark:text-white mb-2 sm:mb-3">Skills</h2>
                      <div className="flex flex-wrap gap-2">
                        {mockUser.skills.map((skill, index) => (
                          <span 
                            key={index}
                            className="bg-primary-100 dark:bg-primary-900/30 text-primary px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-text dark:text-white mb-2 sm:mb-3">Work Experience</h2>
                      {mockUser.experience.map((exp, index) => (
                        <div key={index} className="mb-4">
                          <h3 className="font-semibold text-text dark:text-white text-sm sm:text-base">{exp.role}</h3>
                          <p className="text-xs sm:text-sm text-text-light dark:text-gray-400 mb-1">{exp.company} • {exp.duration}</p>
                          <p className="text-xs sm:text-sm text-text-light dark:text-gray-400">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 sm:gap-3 p-4 sm:p-6 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
                <button 
                  onClick={() => setShowPreview(false)}
                  className="px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-gray-300 dark:border-gray-600 text-text dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 font-medium transition-colors text-sm sm:text-base"
                >
                  Close
                </button>
                <button className="flex items-center justify-center gap-2 bg-primary text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-primary-700 font-medium transition-colors text-sm sm:text-base">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
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