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
  Send,
  Eye,
  CheckCircle,
  Target,
  Clock,
  MapPin,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Calendar,
  DollarSign,
  Building2,
  X,
  Menu
} from "lucide-react";

export default function DashboardPage() {
  const [currentPath] = useState("/dashboard");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [autoApplyEnabled, setAutoApplyEnabled] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: FileText, label: "CV Manager", href: "/cv-manager" },
    { icon: Mail, label: "Cover Letters", href: "/cover-letters" },
    { icon: Briefcase, label: "Jobs", href: "/jobs" },
    { icon: Bell, label: "Applications", href: "/applications" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  const stats = [
    {
      icon: Send,
      label: "Applications Sent",
      value: "24",
      change: "+12%",
      trend: "up",
      color: "blue"
    },
    {
      icon: Eye,
      label: "Profile Views",
      value: "156",
      change: "+8%",
      trend: "up",
      color: "green"
    },
    {
      icon: CheckCircle,
      label: "Interviews",
      value: "3",
      change: "+50%",
      trend: "up",
      color: "purple"
    },
    {
      icon: Target,
      label: "Job Matches",
      value: "48",
      change: "+20%",
      trend: "up",
      color: "orange"
    }
  ];

  const recentApplications = [
    {
      job: "Senior Frontend Developer",
      company: "TechCorp Nigeria",
      location: "Lagos",
      salary: "₦500,000 - ₦800,000",
      status: "Under Review",
      date: "2 hours ago",
      logo: "TC"
    },
    {
      job: "Full Stack Engineer",
      company: "StartupHub",
      location: "Remote",
      salary: "₦400,000 - ₦700,000",
      status: "Interview Scheduled",
      date: "1 day ago",
      logo: "SH"
    },
    {
      job: "React Developer",
      company: "Digital Solutions",
      location: "Abuja",
      salary: "₦350,000 - ₦600,000",
      status: "Application Sent",
      date: "3 days ago",
      logo: "DS"
    }
  ];

  const matchingJobs = [
    {
      job: "Frontend Developer",
      company: "InnovateTech",
      location: "Lagos",
      salary: "₦450,000 - ₦750,000",
      match: "95%",
      posted: "2 days ago",
      logo: "IT"
    },
    {
      job: "JavaScript Engineer",
      company: "CodeFactory",
      location: "Remote",
      salary: "₦500,000 - ₦900,000",
      match: "92%",
      posted: "1 day ago",
      logo: "CF"
    },
    {
      job: "Web Developer",
      company: "WebWorks Ltd",
      location: "Port Harcourt",
      salary: "₦400,000 - ₦650,000",
      match: "88%",
      posted: "3 days ago",
      logo: "WW"
    }
  ];

  const upcomingInterviews = [
    {
      company: "TechCorp Nigeria",
      position: "Senior Frontend Developer",
      date: "Tomorrow",
      time: "10:00 AM",
      type: "Video Call"
    },
    {
      company: "StartupHub",
      position: "Full Stack Engineer",
      date: "Dec 22",
      time: "2:00 PM",
      type: "In-Person"
    }
  ];

  const getStatusColor = (status: any) => {
    if (status === "Interview Scheduled") return "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400";
    if (status === "Under Review") return "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400";
    return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300";
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
    
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto w-full">
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-text dark:text-white mb-2">
              Welcome back, John 👋
            </h1>
            <p className="text-text-light dark:text-gray-400 text-sm sm:text-base">
              Here's what's happening with your job search today
            </p>
          </div>

          {/* Auto Apply Banner */}
          <div className="mb-6 sm:mb-8 bg-gradient-to-r from-primary to-secondary p-4 sm:p-6 rounded-xl text-white">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1">Auto-Apply Feature</h3>
                  <p className="text-sm opacity-90">
                    Enable to automatically apply to matching jobs 24/7
                  </p>
                </div>
              </div>
              <button
                onClick={() => setAutoApplyEnabled(!autoApplyEnabled)}
                className={`px-6 py-2.5 rounded-lg font-semibold transition-colors whitespace-nowrap ${
                  autoApplyEnabled
                    ? "bg-white text-primary"
                    : "bg-white/20 text-white border-2 border-white/50"
                }`}
              >
                {autoApplyEnabled ? "ON" : "OFF"}
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-${stat.color}-100 dark:bg-${stat.color}-900/30 rounded-lg flex items-center justify-center`}>
                    <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${stat.color}-600 dark:text-${stat.color}-400`} />
                  </div>
                  <div className="flex items-center gap-1 text-green-600 dark:text-green-400 text-xs sm:text-sm">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="font-medium">{stat.change}</span>
                  </div>
                </div>
                <h3 className="text-text-light dark:text-gray-400 text-xs sm:text-sm font-medium mb-1">{stat.label}</h3>
                <p className="text-2xl sm:text-3xl font-bold text-text dark:text-white">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Recent Applications */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h2 className="text-lg sm:text-xl font-bold text-text dark:text-white">Recent Applications</h2>
                  <button className="text-primary hover:text-primary-700 text-sm font-medium flex items-center gap-1">
                    View All
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {recentApplications.map((app, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">
                          {app.logo}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-text dark:text-white text-sm sm:text-base truncate">{app.job}</h3>
                          <p className="text-xs sm:text-sm text-text-light dark:text-gray-400 truncate">{app.company}</p>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 text-xs text-text-light dark:text-gray-400">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {app.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <DollarSign className="w-3 h-3" />
                              {app.salary}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {app.date}
                            </span>
                          </div>
                          <div className="mt-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                              {app.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Matching Jobs */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 mt-6">
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <h2 className="text-lg sm:text-xl font-bold text-text dark:text-white">Top Matching Jobs</h2>
                  <button className="text-primary hover:text-primary-700 text-sm font-medium flex items-center gap-1">
                    View All
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {matchingJobs.map((job, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 sm:p-4 hover:shadow-md transition-all">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3 flex-1 min-w-0">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">
                            {job.logo}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-text dark:text-white text-sm sm:text-base truncate">{job.job}</h3>
                            <p className="text-xs sm:text-sm text-text-light dark:text-gray-400 truncate">{job.company}</p>
                            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 text-xs text-text-light dark:text-gray-400">
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
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2 flex-shrink-0">
                          <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full text-xs font-bold">
                            {job.match}
                          </span>
                          <button className="text-primary hover:text-primary-700 text-xs font-medium">
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Interviews */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
                <h2 className="text-lg font-bold text-text dark:text-white mb-4">Upcoming Interviews</h2>
                <div className="space-y-3">
                  {upcomingInterviews.map((interview, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="w-4 h-4 text-primary" />
                        <h4 className="font-bold text-text dark:text-white text-sm truncate">{interview.company}</h4>
                      </div>
                      <p className="text-xs text-text-light dark:text-gray-400 mb-2 truncate">{interview.position}</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="flex items-center gap-1 text-text-light dark:text-gray-400">
                          <Calendar className="w-3 h-3" />
                          {interview.date}
                        </span>
                        <span className="flex items-center gap-1 text-text-light dark:text-gray-400">
                          <Clock className="w-3 h-3" />
                          {interview.time}
                        </span>
                      </div>
                      <div className="mt-2">
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 rounded-full text-xs font-medium">
                          {interview.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
                <h2 className="text-lg font-bold text-text dark:text-white mb-4">Quick Actions</h2>
                <div className="space-y-2">
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-primary-50 dark:bg-primary-900/20 text-primary rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors">
                    <FileText className="w-5 h-5" />
                    <span className="font-medium text-sm">Update CV</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-700 text-text dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <Mail className="w-5 h-5" />
                    <span className="font-medium text-sm">Generate Cover Letter</span>
                  </button>
                  <button className="w-full flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-700 text-text dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    <Briefcase className="w-5 h-5" />
                    <span className="font-medium text-sm">Search Jobs</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}