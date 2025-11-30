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
  Send,
  Target,
  TrendingUp,
  Eye,
  CheckCircle,
  Clock,
  ArrowRight,
  Calendar,
  MapPin,
  DollarSign,
  Sparkles
} from "lucide-react";
import { mockUser, mockApplications, mockJobs } from "@/lib/constants/mockData";

export default function DashboardPage() {
  const [autoApplyEnabled, setAutoApplyEnabled] = useState(false);
  const [currentPath, setCurrentPath] = useState("/dashboard");

  const stats = [
    {
      icon: Send,
      label: "Applications Sent",
      value: "42",
      trend: "+12%",
      trendUp: true,
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Eye,
      label: "Applications Opened",
      value: "28",
      trend: "66%",
      trendUp: true,
      color: "bg-green-100 text-green-600"
    },
    {
      icon: CheckCircle,
      label: "Responses Received",
      value: "8",
      trend: "+3",
      trendUp: true,
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Target,
      label: "Job Matches",
      value: "156",
      trend: "+24",
      trendUp: true,
      color: "bg-orange-100 text-orange-600"
    },
  ];

  const recentApplications = mockApplications.slice(0, 3);
  const matchedJobs = mockJobs.slice(0, 3);

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: FileText, label: "CV Manager", href: "/cv-manager" },
    { icon: Mail, label: "Cover Letters", href: "/cover-letters" },
    { icon: Briefcase, label: "Jobs", href: "/jobs" },
    { icon: Bell, label: "Applications", href: "/applications" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

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
              onClick={() => setCurrentPath(item.href)}
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
          <div className="flex items-center justify-between mb-2">
            <div>
              <h1 className="text-3xl font-bold text-text dark:text-white">
                Welcome back, {mockUser.name.split(' ')[0]}! 👋
              </h1>
              <p className="text-text-light dark:text-gray-400 mt-1">
                Here's what's happening with your job search today
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors relative">
                <Bell className="w-6 h-6 text-text-light dark:text-gray-400" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                {mockUser.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          </div>
        </div>

        {/* Auto-Apply Toggle Card */}
        <div className="mb-8 bg-gradient-to-r from-primary to-secondary p-6 rounded-2xl text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Sparkles className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Auto-Apply Feature</h3>
                <p className="text-white/90 text-sm">
                  {autoApplyEnabled 
                    ? "AutoApply is actively searching and applying to jobs for you" 
                    : "Enable to automatically apply to matching jobs 24/7"
                  }
                </p>
              </div>
            </div>
            <button 
              onClick={() => setAutoApplyEnabled(!autoApplyEnabled)}
              className={`relative w-16 h-8 rounded-full transition-colors ${
                autoApplyEnabled ? "bg-white" : "bg-white/30"
              }`}
            >
              <span 
                className={`absolute top-1 w-6 h-6 rounded-full transition-all ${
                  autoApplyEnabled 
                    ? "right-1 bg-primary" 
                    : "left-1 bg-white"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <span className={`text-sm font-semibold ${
                  stat.trendUp ? "text-green-600" : "text-red-600"
                }`}>
                  {stat.trendUp ? "↑" : "↓"} {stat.trend}
                </span>
              </div>
              <h3 className="text-text-light dark:text-gray-400 text-sm font-medium mb-1">
                {stat.label}
              </h3>
              <p className="text-3xl font-bold text-text dark:text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Applications */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-text dark:text-white">Recent Applications</h2>
              <Link 
                href="/applications"
                className="text-primary text-sm font-medium hover:underline flex items-center gap-1"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="space-y-4">
              {recentApplications.map((app, index) => (
                <div 
                  key={index}
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-text dark:text-white mb-1">{app.job}</h3>
                      <p className="text-sm text-text-light dark:text-gray-400">{app.company}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      app.status === "Replied" 
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                        : app.status === "Delivered"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                    }`}>
                      {app.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-text-light dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {app.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {app.sent_at}
                    </span>
                    {app.opened && (
                      <span className="flex items-center gap-1 text-green-600">
                        <Eye className="w-3 h-3" />
                        Opened
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Matched Jobs */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-text dark:text-white">Top Matches Today</h2>
              <Link 
                href="/jobs"
                className="text-primary text-sm font-medium hover:underline flex items-center gap-1"
              >
                Browse All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="space-y-4">
              {matchedJobs.map((job, index) => (
                <div 
                  key={index}
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-text dark:text-white mb-1">{job.title}</h3>
                      <p className="text-sm text-text-light dark:text-gray-400">{job.company}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                      {job.match}% Match
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-text-light dark:text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3" />
                      {job.salary}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {job.posted}
                    </span>
                  </div>
                  <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-700 font-medium text-sm transition-colors">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Link 
            href="/cv-manager"
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all group"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold text-text dark:text-white mb-2">Manage CVs</h3>
            <p className="text-sm text-text-light dark:text-gray-400">
              Create, edit, and optimize your CVs
            </p>
          </Link>

          <Link 
            href="/cover-letters"
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all group"
          >
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="font-semibold text-text dark:text-white mb-2">Cover Letters</h3>
            <p className="text-sm text-text-light dark:text-gray-400">
              Generate AI-powered cover letters
            </p>
          </Link>

          <Link 
            href="/settings"
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all group"
          >
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Settings className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="font-semibold text-text dark:text-white mb-2">Settings</h3>
            <p className="text-sm text-text-light dark:text-gray-400">
              Customize your preferences
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}