"use client";

import { useState } from "react";
import { 
  LayoutDashboard, User, FileText, Mail, Briefcase, Bell, Settings,
  Zap, Search, Filter, Eye, Download, Trash2, LayoutGrid, LayoutList,
  Calendar, MapPin, Menu, X
} from "lucide-react";

const mockApplications = [
  { id: 1, job: "Senior Frontend Developer", company: "TechCorp Nigeria", location: "Lagos", salary: [400000, 600000], status: "Replied", sent_at: "2 hours ago", opened: true },
  { id: 2, job: "Full Stack Engineer", company: "StartupHub", location: "Abuja", salary: [300000, 500000], status: "Delivered", sent_at: "1 day ago", opened: true },
  { id: 3, job: "React Developer", company: "Digital Solutions Ltd", location: "Remote", salary: [250000, 450000], status: "Sent", sent_at: "3 days ago", opened: false },
  { id: 4, job: "Backend Developer", company: "CloudTech", location: "Lagos", salary: [400000, 550000], status: "Delivered", sent_at: "5 days ago", opened: true },
  { id: 5, job: "DevOps Engineer", company: "Infrastructure Inc", location: "Remote", salary: [500000, 700000], status: "Replied", sent_at: "1 week ago", opened: true }
];

export default function ApplicationsPage() {
  const [currentPath] = useState("/applications");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState("list");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: Briefcase, label: "Jobs", href: "/jobs" },
    { icon: Bell, label: "Applications", href: "/applications" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  const statusOptions = ["all", "Sent", "Delivered", "Replied"];

  const filteredApplications = mockApplications.filter(app => {
    if (searchQuery && !app.job.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !app.company.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (filterStatus !== "all" && app.status !== filterStatus) return false;
    return true;
  });

  const formatSalary = (salary: any) => {
    if (Array.isArray(salary) && salary.length === 2) return `₦${salary[0].toLocaleString()} - ₦${salary[1].toLocaleString()}`;
    if (Array.isArray(salary) && salary.length === 1) return `₦${salary[0].toLocaleString()}`;
    if (typeof salary === "number") return `₦${salary.toLocaleString()}`;
    return "₦N/A";
  };

  const getStatusClass = (status: any) => {
    if (status === "Sent") return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    if (status === "Delivered") return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
    if (status === "Replied") return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
    return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Top Navigation Bar */}
     

      {/* Main Content */}
      <main className="max-w-7xl mx-auto w-full">
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-text dark:text-white mb-2">Application Tracker</h1>
                <p className="text-text-light dark:text-gray-400 text-sm sm:text-base">
                  Track and manage all your job applications ({filteredApplications.length} total)
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setViewMode(viewMode === "list" ? "grid" : "list")}
                  className="p-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary transition-colors"
                >
                  {viewMode === "list" ? <LayoutGrid className="w-5 h-5" /> : <LayoutList className="w-5 h-5" />}
                </button>
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary transition-colors"
                >
                  <Filter className="w-5 h-5" />
                  {showFilters ? "Hide" : "Show"} Filters
                </button>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search applications by job or company..."
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-text dark:text-white text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 mb-6">
              <h3 className="font-bold text-text dark:text-white mb-4 flex items-center justify-between">
                Filter by Status
                <button 
                  onClick={() => setFilterStatus("all")}
                  className="text-sm text-primary hover:underline"
                >
                  Clear Filter
                </button>
              </h3>
              <div className="flex flex-wrap gap-2">
                {statusOptions.map(status => (
                  <button 
                    key={status} 
                    onClick={() => setFilterStatus(status)} 
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      filterStatus === status 
                        ? "bg-primary text-white" 
                        : "bg-gray-100 dark:bg-gray-700 text-text dark:text-white hover:bg-primary/20"
                    }`}
                  >
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Applications List */}
          <div className="space-y-4">
            {filteredApplications.length === 0 ? (
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center">
                <p className="text-text-light dark:text-gray-400">No applications found matching your filters.</p>
              </div>
            ) : (
              filteredApplications.map(app => (
                <div key={app.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 hover:shadow-lg transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0 text-sm sm:text-base">
                        {app.company.substring(0, 2).toUpperCase()}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-base sm:text-xl font-bold text-text dark:text-white mb-1 truncate">{app.job}</h3>
                        <p className="text-sm text-text-light dark:text-gray-400 truncate">{app.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStatusClass(app.status)}`}>
                        {app.status}
                      </span>
                      {app.opened && (
                        <span className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400 whitespace-nowrap">
                          <Eye className="w-3 h-3" />Opened
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 text-xs sm:text-sm text-text-light dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="truncate">{app.location}</span>
                    </span>
                    <span className="flex items-center gap-1 truncate">{formatSalary(app.salary)}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      Sent {app.sent_at}
                    </span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-2.5 sm:py-3 rounded-lg hover:bg-primary-700 font-semibold transition-colors text-sm sm:text-base">
                      <Eye className="w-4 h-4 sm:w-5 sm:h-5" /> View Details
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-gray-300 dark:border-gray-600 text-text dark:text-white rounded-lg hover:border-primary hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold transition-colors text-sm sm:text-base">
                      <Download className="w-4 h-4 sm:w-5 sm:h-5" /> Download
                    </button>
                    <button className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-red-300 dark:border-red-600 text-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 font-semibold transition-colors text-sm sm:text-base">
                      <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" /> Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}