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
  Plus,
  Eye,
  RefreshCw,
  Copy,
  Download,
  Trash2,
  Calendar,
  Sparkles,
  CheckCircle,
  X,
  Menu
} from "lucide-react";

const mockCoverLetters = [
  {
    jobTitle: "Senior Frontend Developer",
    company: "TechCorp Nigeria",
    template: "Modern",
    content: "Dear Hiring Manager,\n\nI am writing to express my strong interest in the Senior Frontend Developer position at TechCorp Nigeria. With over 5 years of experience in building responsive web applications using React, TypeScript, and modern JavaScript frameworks, I am confident in my ability to contribute to your team's success.\n\nMy expertise includes developing scalable frontend architectures, implementing best practices for performance optimization, and collaborating with cross-functional teams to deliver high-quality products. I am particularly excited about the opportunity to work on innovative projects that push the boundaries of web technology.\n\nThank you for considering my application. I look forward to discussing how my skills and experience align with your needs.\n\nBest regards,\nJohn Doe",
    createdAt: "Feb 15, 2024"
  },
  {
    jobTitle: "Full Stack Engineer",
    company: "StartupHub",
    template: "Creative",
    content: "Hello StartupHub Team,\n\nI'm thrilled to apply for the Full Stack Engineer position. As a developer passionate about building end-to-end solutions, I've spent the last 4 years mastering both frontend and backend technologies.\n\nMy experience spans React, Node.js, PostgreSQL, and AWS, allowing me to take projects from concept to deployment. I thrive in fast-paced startup environments where I can wear multiple hats and make meaningful contributions.\n\nLet's build something amazing together!\n\nWarm regards,\nJohn Doe",
    createdAt: "Feb 10, 2024"
  },
  {
    jobTitle: "React Developer",
    company: "Digital Solutions Ltd",
    template: "Traditional",
    content: "Dear Sir/Madam,\n\nI am writing to apply for the React Developer position at Digital Solutions Ltd. With a strong background in React development and a proven track record of delivering high-quality user interfaces, I believe I would be an excellent fit for your team.\n\nMy technical skills include React, Redux, TypeScript, and modern CSS frameworks. I have successfully delivered multiple projects that improved user engagement and satisfaction.\n\nI would welcome the opportunity to discuss how my experience and skills can benefit your organization.\n\nSincerely,\nJohn Doe",
    createdAt: "Feb 5, 2024"
  }
];

export default function CoverLettersPage() {
  const [currentPath] = useState("/cover-letters");
  const [showPreview, setShowPreview] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [showGenerator, setShowGenerator] = useState(false);
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

  const templates = [
    { id: "modern", name: "Modern Professional", description: "Clean and contemporary style" },
    { id: "creative", name: "Creative", description: "Bold and expressive format" },
    { id: "traditional", name: "Traditional", description: "Classic business format" },
    { id: "minimal", name: "Minimal", description: "Simple and elegant" },
  ];

  const handlePreviewLetter = (letter) => {
    setSelectedLetter(letter);
    setShowPreview(true);
  };

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
                <h1 className="text-2xl sm:text-3xl font-bold text-text dark:text-white mb-1 sm:mb-2">Cover Letter Generator</h1>
                <p className="text-text-light dark:text-gray-400 text-sm sm:text-base">
                  Create professional AI-powered cover letters for every application
                </p>
              </div>
              <button 
                onClick={() => setShowGenerator(true)}
                className="flex items-center justify-center gap-2 bg-primary text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-primary-700 font-semibold transition-all shadow-lg hover:shadow-xl text-sm sm:text-base whitespace-nowrap"
              >
                <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                Generate New
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <h3 className="text-text-light dark:text-gray-400 text-xs sm:text-sm font-medium mb-1">Total Letters</h3>
              <p className="text-2xl sm:text-3xl font-bold text-text dark:text-white">{mockCoverLetters.length}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <h3 className="text-text-light dark:text-gray-400 text-xs sm:text-sm font-medium mb-1">AI Generated</h3>
              <p className="text-2xl sm:text-3xl font-bold text-text dark:text-white">{mockCoverLetters.length}</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <h3 className="text-text-light dark:text-gray-400 text-xs sm:text-sm font-medium mb-1">Used in Apps</h3>
              <p className="text-2xl sm:text-3xl font-bold text-text dark:text-white">2</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 dark:text-orange-400" />
                </div>
              </div>
              <h3 className="text-text-light dark:text-gray-400 text-xs sm:text-sm font-medium mb-1">Templates</h3>
              <p className="text-2xl sm:text-3xl font-bold text-text dark:text-white">{templates.length}</p>
            </div>
          </div>

          {/* AI Generator Banner */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 sm:p-6 text-white mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold mb-2">AI-Powered Cover Letters</h3>
                <p className="text-white/90 text-xs sm:text-sm">
                  Our AI analyzes job descriptions and creates personalized cover letters that highlight your relevant experience and skills
                </p>
              </div>
            </div>
          </div>

          {/* Cover Letters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {mockCoverLetters.map((letter, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 hover:shadow-lg transition-all"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-text dark:text-white mb-1 text-sm sm:text-base line-clamp-1">{letter.jobTitle}</h3>
                    <p className="text-xs sm:text-sm text-text-light dark:text-gray-400 truncate">{letter.company}</p>
                  </div>
                  <span className="px-2 sm:px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 text-xs rounded-full font-medium whitespace-nowrap flex-shrink-0">
                    {letter.template}
                  </span>
                </div>

                {/* Preview */}
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 h-24 sm:h-32 overflow-hidden">
                  <p className="text-xs sm:text-sm text-text-light dark:text-gray-400 line-clamp-4 sm:line-clamp-6">
                    {letter.content}
                  </p>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-2 text-xs text-text-light dark:text-gray-400 mb-3 sm:mb-4">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>Created: {letter.createdAt}</span>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <button 
                    onClick={() => handlePreviewLetter(letter)}
                    className="flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 font-medium text-xs sm:text-sm transition-colors"
                  >
                    <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                    Preview
                  </button>
                  <button className="flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-700 font-medium text-xs sm:text-sm transition-colors">
                    <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                    Download
                  </button>
                </div>

                <div className="mt-2 sm:mt-3 flex items-center gap-2">
                  <button className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-700 font-medium text-xs sm:text-sm transition-colors">
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

            {/* Create New Card */}
            <button 
              onClick={() => setShowGenerator(true)}
              className="bg-white dark:bg-gray-800 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 p-4 sm:p-6 hover:border-primary hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-all h-full min-h-[280px] sm:min-h-[350px] flex flex-col items-center justify-center gap-3 sm:gap-4"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-text dark:text-white mb-2 text-sm sm:text-base">Generate New Letter</h3>
                <p className="text-xs sm:text-sm text-text-light dark:text-gray-400">
                  Create a personalized cover letter with AI
                </p>
              </div>
            </button>
          </div>
        </div>

        {/* Preview Modal */}
        {showPreview && selectedLetter && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
                <div className="min-w-0 flex-1 mr-2">
                  <h3 className="text-lg sm:text-xl font-bold text-text dark:text-white truncate">{selectedLetter.jobTitle}</h3>
                  <p className="text-xs sm:text-sm text-text-light dark:text-gray-400 truncate">{selectedLetter.company}</p>
                </div>
                <button 
                  onClick={() => setShowPreview(false)}
                  className="w-8 h-8 sm:w-10 sm:h-10 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
              <div className="p-4 sm:p-8 overflow-y-auto flex-1">
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <p className="text-text dark:text-white whitespace-pre-wrap text-sm sm:text-base">
                    {selectedLetter.content}
                  </p>
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
                  <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
                  Copy to Clipboard
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Generator Modal */}
        {showGenerator && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
                <h3 className="text-lg sm:text-xl font-bold text-text dark:text-white">Generate Cover Letter</h3>
                <button 
                  onClick={() => setShowGenerator(false)}
                  className="w-8 h-8 sm:w-10 sm:h-10 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto flex-1">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-text dark:text-white mb-2">
                    Job Title *
                  </label>
                  <input 
                    type="text"
                    placeholder="e.g., Senior Frontend Developer"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-text dark:text-white mb-2">
                    Company Name *
                  </label>
                  <input 
                    type="text"
                    placeholder="e.g., TechCorp Nigeria"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-text dark:text-white mb-2">
                    Select Template *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {templates.map((template) => (
                      <label 
                        key={template.id}
                        className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 border-2 border-gray-300 dark:border-gray-600 rounded-lg cursor-pointer hover:border-primary transition-colors"
                      >
                        <input 
                          type="radio"
                          name="template"
                          value={template.id}
                          className="mt-1 w-4 h-4 text-primary flex-shrink-0"
                        />
                        <div className="min-w-0">
                          <div className="font-medium text-text dark:text-white text-xs sm:text-sm truncate">{template.name}</div>
                          <div className="text-xs text-text-light dark:text-gray-400">{template.description}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-text dark:text-white mb-2">
                    Job Description (Optional)
                  </label>
                  <textarea 
                    rows={4}
                    placeholder="Paste the job description here to get a more tailored cover letter..."
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white resize-none text-sm sm:text-base"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 sm:gap-3 p-4 sm:p-6 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
                <button 
                  onClick={() => setShowGenerator(false)}
                  className="px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-gray-300 dark:border-gray-600 text-text dark:text-white rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 font-medium transition-colors text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button className="flex items-center justify-center gap-2 bg-primary text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-primary-700 font-semibold transition-colors text-sm sm:text-base">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
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