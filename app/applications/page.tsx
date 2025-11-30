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
  Search,
  Filter,
  Eye,
  Download,
  Trash2,
  LayoutGrid,
  LayoutList,
  Calendar,
  MapPin,
  DollarSign,
  CheckCircle,
  Clock,
  Send,
  XCircle,
  AlertCircle
} from "lucide-react";
import { mockApplications } from "@/lib/constants/mockData";

export default function ApplicationsPage() {
  const [currentPath] = useState("/applications");
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: FileText, label: "CV Manager", href: "/cv-manager" },
    { icon: Mail, label: "Cover Letters", href: "/cover-letters" },
    { icon: Briefcase, label: "Jobs", href: "/jobs" },
    { icon: Bell, label: "Applications", href: "/applications" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  const statusOptions = [
    { value: "all", label: "All Applications", count: mockApplications.length },
    { value: "Sent", label: "Sent", count: mockApplications.filter(a => a.status === "Sent").length },
    { value: "Delivered", label: "Delivered", count: mockApplications.filter(a => a.status === "Delivered").length },
    { value: "Replied", label: "Replied", count: mockApplications.filter(a => a.status === "Replied").length },
  ];

  const getStatusConfig = (status: string) => {
    const configs: Record<string, any> = {
      Sent: { 
        icon: Send, 
        color: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
        iconColor: "text-gray-600"
      },
      Delivered: { 
        icon: CheckCircle, 
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
        iconColor: "text-blue-600"
      },
      Replied: { 
        icon: Mail, 
        color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
        iconColor: "text-green-600"
      },
      Rejected: { 
        icon: XCircle, 
        color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
        iconColor: "text-red-600"
      },
    };
    return configs[status] || configs.Sent;
  };

  const filteredApplications = mockApplications.filter(app => {
    if (searchQuery && !app.job.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !app.company.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (filterStatus !== "all" && app.status !== filterStatus) {
      return false;
    }
    return true;
  });

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
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-text dark:text-white mb-2">Application Tracker</h1>
              <p className="text-text-light dark:text-gray-400">
                Track and manage all your job applications
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list"
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-text-light dark:text-gray-400"
                }`}
              >
                <LayoutList className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid"
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-text-light dark:text-gray-400"
                }`}
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by job title or company..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-text dark:text-white"
            />
          </div>

          {/* Status Filter Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {statusOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilterStatus(option.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  filterStatus === option.value
                    ? "bg-primary text-white"
                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text dark:text-white hover:border-primary"
                }`}
              >
                {option.label}
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  filterStatus === option.value
                    ? "bg-white/20"
                    : "bg-gray-100 dark:bg-gray-700"
                }`}>
                  {option.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Send className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h3 className="text-text-light dark:text-gray-400 text-sm font-medium mb-1">Total Sent</h3>
            <p className="text-3xl font-bold text-text dark:text-white">{mockApplications.length}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <h3 className="text-text-light dark:text-gray-400 text-sm font-medium mb-1">Delivered</h3>
            <p className="text-3xl font-bold text-text dark:text-white">
              {mockApplications.filter(a => a.status === "Delivered").length}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <h3 className="text-text-light dark:text-gray-400 text-sm font-medium mb-1">Opened</h3>
            <p className="text-3xl font-bold text-text dark:text-white">
              {mockApplications.filter(a => a.opened).length}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
            <h3 className="text-text-light dark:text-gray-400 text-sm font-medium mb-1">Responses</h3>
            <p className="text-3xl font-bold text-text dark:text-white">
              {mockApplications.filter(a => a.replied).length}
            </p>
          </div>
        </div>

        {/* Applications List/Grid */}
        {viewMode === "list" ? (
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-text dark:text-white uppercase tracking-wider">
                      Job & Company
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-text dark:text-white uppercase tracking-wider">
                      Location
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-text dark:text-white uppercase tracking-wider">
                      Salary
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-text dark:text-white uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-text dark:text-white uppercase tracking-wider">
                      Sent Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-text dark:text-white uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredApplications.map((app) => {
                    const statusConfig = getStatusConfig(app.status);
                    const StatusIcon = statusConfig.icon;
                    
                    return (
                      <tr key={app.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-semibold text-text dark:text-white">{app.job}</div>
                            <div className="text-sm text-text-light dark:text-gray-400">{app.company}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="flex items-center gap-1 text-sm text-text-light dark:text-gray-400">
                            <MapPin className="w-4 h-4" />
                            {app.location}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="flex items-center gap-1 text-sm text-text-light dark:text-gray-400">
                            <DollarSign className="w-4 h-4" />
                            {app.salary}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col gap-2">
                            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium w-fit ${statusConfig.color}`}>
                              <StatusIcon className="w-3 h-3" />
                              {app.status}
                            </span>
                            {app.opened && (
                              <span className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                                <Eye className="w-3 h-3" />
                                Opened
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="flex items-center gap-1 text-sm text-text-light dark:text-gray-400">
                            <Calendar className="w-4 h-4" />
                            {app.sent_at}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors">
                              <Eye className="w-4 h-4 text-text-light dark:text-gray-400" />
                            </button>
                            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors">
                              <Download className="w-4 h-4 text-text-light dark:text-gray-400" />
                            </button>
                            <button className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                              <Trash2 className="w-4 h-4 text-red-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApplications.map((app) => {
              const statusConfig = getStatusConfig(app.status);
              const StatusIcon = statusConfig.icon;
              
              return (
                <div 
                  key={app.id}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-text dark:text-white mb-1">{app.job}</h3>
                      <p className="text-sm text-text-light dark:text-gray-400">{app.company}</p>
                    </div>
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${statusConfig.color}`}>
                      <StatusIcon className="w-3 h-3" />
                      {app.status}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4 text-sm text-text-light dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{app.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      <span>{app.salary}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Sent: {app.sent_at}</span>
                    </div>
                    {app.opened && (
                      <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                        <Eye className="w-4 h-4" />
                        <span>Application Opened</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary hover:text-primary transition-colors text-sm font-medium">
                      <Eye className="w-4 h-4" />
                      View
                    </button>
                    <button className="p-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary hover:text-primary transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="p-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-red-500 hover:text-red-500 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {filteredApplications.length === 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-text dark:text-white mb-2">No Applications Found</h3>
            <p className="text-text-light dark:text-gray-400 mb-4">
              {searchQuery 
                ? "Try adjusting your search query" 
                : "Start applying to jobs to track them here"
              }
            </p>
            <Link 
              href="/jobs"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-700 font-medium transition-colors"
            >
              <Briefcase className="w-5 h-5" />
              Browse Jobs
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}