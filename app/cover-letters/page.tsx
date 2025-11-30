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
  Plus,
  Eye,
  RefreshCw,
  Copy,
  Download,
  Trash2,
  Calendar,
  Sparkles,
  CheckCircle,
  X
} from "lucide-react";
import { mockCoverLetters } from "@/lib/constants/mockData";

export default function CoverLettersPage() {
  const [currentPath] = useState("/cover-letters");
  const [showPreview, setShowPreview] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState<any>(null);
  const [showGenerator, setShowGenerator] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: FileText, label: "CV Manager", href: "/cv-manager" },
    { icon: Mail, label: "Cover Letters", href: "/cover-letters" },
    { icon: Briefcase, label: "Jobs", href: "/jobs" },
    { icon: Bell, label: "Applications", href: "/applications" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  const templates = [
    { id: "modern", name: "Modern Professional", description: "Clean and contemporary style" },
    { id: "creative", name: "Creative", description: "Bold and expressive format" },
    { id: "traditional", name: "Traditional", description: "Classic business format" },
    { id: "minimal", name: "Minimal", description: "Simple and elegant" },
  ];

  const handlePreviewLetter = (letter: any) => {
    setSelectedLetter(letter);
    setShowPreview(true);
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
              <h1 className="text-3xl font-bold text-text dark:text-white mb-2">Cover Letter Generator</h1>
              <p className="text-text-light dark:text-gray-400">
                Create professional AI-powered cover letters for every application
              </p>
            </div>
            <button 
              onClick={() => setShowGenerator(true)}
              className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-700 font-semibold transition-all shadow-lg hover:shadow-xl"
            >
              <Plus className="w-5 h-5" />
              Generate New
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h3 className="text-text-light dark:text-gray-400 text-sm font-medium mb-1">Total Letters</h3>
            <p className="text-3xl font-bold text-text dark:text-white">{mockCoverLetters.length}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <h3 className="text-text-light dark:text-gray-400 text-sm font-medium mb-1">AI Generated</h3>
            <p className="text-3xl font-bold text-text dark:text-white">{mockCoverLetters.length}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <h3 className="text-text-light dark:text-gray-400 text-sm font-medium mb-1">Used in Apps</h3>
            <p className="text-3xl font-bold text-text dark:text-white">2</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
            <h3 className="text-text-light dark:text-gray-400 text-sm font-medium mb-1">Templates</h3>
            <p className="text-3xl font-bold text-text dark:text-white">{templates.length}</p>
          </div>
        </div>

        {/* AI Generator Banner */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white mb-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">AI-Powered Cover Letters</h3>
              <p className="text-white/90 text-sm">
                Our AI analyzes job descriptions and creates personalized cover letters that highlight your relevant experience and skills
              </p>
            </div>
          </div>
        </div>

        {/* Cover Letters Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCoverLetters.map((letter, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-bold text-text dark:text-white mb-1">{letter.jobTitle}</h3>
                  <p className="text-sm text-text-light dark:text-gray-400">{letter.company}</p>
                </div>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 text-xs rounded-full font-medium">
                  {letter.template}
                </span>
              </div>

              {/* Preview */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4 h-32 overflow-hidden">
                <p className="text-sm text-text-light dark:text-gray-400 line-clamp-6">
                  {letter.content}
                </p>
              </div>

              {/* Meta */}
              <div className="flex items-center gap-2 text-xs text-text-light dark:text-gray-400 mb-4">
                <Calendar className="w-4 h-4" />
                <span>Created: {letter.createdAt}</span>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => handlePreviewLetter(letter)}
                  className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 font-medium text-sm transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  Preview
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-700 font-medium text-sm transition-colors">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-700 font-medium text-sm transition-colors">
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

          {/* Create New Card */}
          <button 
            onClick={() => setShowGenerator(true)}
            className="bg-white dark:bg-gray-800 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 p-6 hover:border-primary hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-all h-full min-h-[350px] flex flex-col items-center justify-center gap-4"
          >
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
              <Plus className="w-8 h-8 text-primary" />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-text dark:text-white mb-2">Generate New Letter</h3>
              <p className="text-sm text-text-light dark:text-gray-400">
                Create a personalized cover letter with AI
              </p>
            </div>
          </button>
        </div>

        {/* Preview Modal */}
        {showPreview && selectedLetter && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h3 className="text-xl font-bold text-text dark:text-white">{selectedLetter.jobTitle}</h3>
                  <p className="text-sm text-text-light dark:text-gray-400">{selectedLetter.company}</p>
                </div>
                <button 
                  onClick={() => setShowPreview(false)}
                  className="w-10 h-10 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-8 overflow-y-auto max-h-[calc(90vh-180px)]">
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <p className="text-text dark:text-white whitespace-pre-wrap">
                    {selectedLetter.content}
                  </p>
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
                  <Copy className="w-5 h-5" />
                  Copy to Clipboard
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Generator Modal */}
        {showGenerator && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-2xl w-full">
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-text dark:text-white">Generate Cover Letter</h3>
                <button 
                  onClick={() => setShowGenerator(false)}
                  className="w-10 h-10 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-text dark:text-white mb-2">
                    Job Title *
                  </label>
                  <input 
                    type="text"
                    placeholder="e.g., Senior Frontend Developer"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text dark:text-white mb-2">
                    Company Name *
                  </label>
                  <input 
                    type="text"
                    placeholder="e.g., TechCorp Nigeria"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text dark:text-white mb-2">
                    Select Template *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {templates.map((template) => (
                      <label 
                        key={template.id}
                        className="flex items-start gap-3 p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-primary transition-colors"
                      >
                        <input 
                          type="radio"
                          name="template"
                          value={template.id}
                          className="mt-1 w-4 h-4 text-primary"
                        />
                        <div>
                          <div className="font-medium text-text dark:text-white text-sm">{template.name}</div>
                          <div className="text-xs text-text-light dark:text-gray-400">{template.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text dark:text-white mb-2">
                    Job Description (Optional)
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Paste the job description here to get a more tailored cover letter..."
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white resize-none"
                  />
                </div>
              </div>
              <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200 dark:border-gray-700">
                <button 
                  onClick={() => setShowGenerator(false)}
                  className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-text dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-700 font-semibold transition-colors">
                  <Sparkles className="w-5 h-5" />
                  Generate with AI
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}