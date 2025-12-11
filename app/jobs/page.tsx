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
  MapPin,
  Clock,
  Filter,
  Search,
  ChevronDown,
  Bookmark,
  Send,
  Eye,
  X,
  Target,
  TrendingUp
} from "lucide-react";
import { mockJobs } from "@/lib/constants/mockData";

export default function JobsPage() {
  const [currentPath] = useState("/jobs");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(true);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [showJobModal, setShowJobModal] = useState(false);

  const [filters, setFilters] = useState({
    location: [] as string[],
    salary: "",
    jobType: [] as string[],
    remote: false,
    minMatch: 0
  });

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: FileText, label: "CV Manager", href: "/cv-manager" },
    { icon: Mail, label: "Cover Letters", href: "/cover-letters" },
    { icon: Briefcase, label: "Jobs", href: "/jobs" },
    { icon: Bell, label: "Applications", href: "/applications" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  const locations = ["Lagos", "Abuja", "Port Harcourt", "Ibadan", "Remote"];
  const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"];
  const salaryRanges = [
    { label: "Any", value: "" },
    { label: "₦100k - ₦300k", value: "100-300" },
    { label: "₦300k - ₦500k", value: "300-500" },
    { label: "₦500k+", value: "500+" },
  ];

  const handleViewJob = (job: any) => {
    setSelectedJob(job);
    setShowJobModal(true);
  };

  const filteredJobs = mockJobs.filter(job => {
    if (searchQuery && !job.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !job.company.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (filters.location.length > 0 && !filters.location.includes(job.location)) {
      return false;
    }
    if (filters.jobType.length > 0 && !filters.jobType.includes(job.type)) {
      return false;
    }
    if (filters.remote && !job.remote) {
      return false;
    }
    if (filters.minMatch > 0 && job.match < filters.minMatch) {
      return false;
    }
    return true;
  });

  // Helper to format salary in Naira
  const formatSalary = (salary: number[] | number | string) => {
    if (Array.isArray(salary) && salary.length === 2) {
      return `₦${salary[0].toLocaleString()} - ₦${salary[1].toLocaleString()}`;
    } else if (Array.isArray(salary) && salary.length === 1) {
      return `₦${salary[0].toLocaleString()}`;
    } else if (typeof salary === "number") {
      return `₦${salary.toLocaleString()}`;
    } else {
      return "₦N/A";
    }
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
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-text dark:text-white mb-2">Job Feed</h1>
              <p className="text-text-light dark:text-gray-400">
                {filteredJobs.length} jobs matching your profile
              </p>
            </div>
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary transition-colors"
            >
              <Filter className="w-5 h-5" />
              {showFilters ? "Hide" : "Show"} Filters
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search jobs by title or company..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-text dark:text-white text-lg"
            />
          </div>
        </div>

        {/* Stats Banner */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-light dark:text-gray-400 text-sm mb-1">Total Jobs</p>
                <p className="text-2xl font-bold text-text dark:text-white">{mockJobs.length}</p>
              </div>
              <Briefcase className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-light dark:text-gray-400 text-sm mb-1">High Match</p>
                <p className="text-2xl font-bold text-text dark:text-white">
                  {mockJobs.filter(j => j.match >= 90).length}
                </p>
              </div>
              <Target className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-light dark:text-gray-400 text-sm mb-1">Remote Jobs</p>
                <p className="text-2xl font-bold text-text dark:text-white">
                  {mockJobs.filter(j => j.remote).length}
                </p>
              </div>
              <MapPin className="w-8 h-8 text-purple-600" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-light dark:text-gray-400 text-sm mb-1">New Today</p>
                <p className="text-2xl font-bold text-text dark:text-white">12</p>
              </div>
              <TrendingUp className="w-8 h-8 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-72 flex-shrink-0">
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 sticky top-8">
                <h3 className="font-bold text-text dark:text-white mb-4 flex items-center justify-between">
                  Filters
                  <button 
                    onClick={() => setFilters({
                      location: [],
                      salary: "",
                      jobType: [],
                      remote: false,
                      minMatch: 0
                    })}
                    className="text-sm text-primary hover:underline"
                  >
                    Clear All
                  </button>
                </h3>

                {/* Location Filter */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text dark:text-white mb-3">Location</h4>
                  <div className="space-y-2">
                    {locations.map((location) => (
                      <label key={location} className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="checkbox"
                          checked={filters.location.includes(location)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFilters({...filters, location: [...filters.location, location]});
                            } else {
                              setFilters({...filters, location: filters.location.filter(l => l !== location)});
                            }
                          }}
                          className="w-4 h-4 text-primary rounded focus:ring-primary"
                        />
                        <span className="text-sm text-text dark:text-white">{location}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Job Type Filter */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text dark:text-white mb-3">Job Type</h4>
                  <div className="space-y-2">
                    {jobTypes.map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input 
                          type="checkbox"
                          checked={filters.jobType.includes(type)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFilters({...filters, jobType: [...filters.jobType, type]});
                            } else {
                              setFilters({...filters, jobType: filters.jobType.filter(t => t !== type)});
                            }
                          }}
                          className="w-4 h-4 text-primary rounded focus:ring-primary"
                        />
                        <span className="text-sm text-text dark:text-white">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Salary Range */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text dark:text-white mb-3">Salary Range</h4>
                  <select
                    value={filters.salary}
                    onChange={(e) => setFilters({...filters, salary: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white text-sm"
                  >
                    {salaryRanges.map((range) => (
                      <option key={range.value} value={range.value}>{range.label}</option>
                    ))}
                  </select>
                </div>

                {/* Remote Only */}
                <div className="mb-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input 
                      type="checkbox"
                      checked={filters.remote}
                      onChange={(e) => setFilters({...filters, remote: e.target.checked})}
                      className="w-4 h-4 text-primary rounded focus:ring-primary"
                    />
                    <span className="text-sm font-semibold text-text dark:text-white">Remote Only</span>
                  </label>
                </div>

                {/* Match Percentage */}
                <div>
                  <h4 className="text-sm font-semibold text-text dark:text-white mb-3">
                    Minimum Match: {filters.minMatch}%
                  </h4>
                  <input 
                    type="range"
                    min="0"
                    max="100"
                    step="10"
                    value={filters.minMatch}
                    onChange={(e) => setFilters({...filters, minMatch: parseInt(e.target.value)})}
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-xs text-text-light dark:text-gray-400 mt-1">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Job Listings */}
          <div className="flex-1">
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <div 
                  key={job.id}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                          {job.company.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-text dark:text-white mb-1">{job.title}</h3>
                          <p className="text-text-light dark:text-gray-400">{job.company}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        job.match >= 90 
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                          : job.match >= 80
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                          : "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400"
                      }`}>
                        {job.match}% Match
                      </span>
                      <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                        <Bookmark className="w-5 h-5 text-text-light dark:text-gray-400" />
                      </button>
                    </div>
                  </div>

                  <p className="text-text-light dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-text-light dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      {formatSalary(job.salary)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      Posted {job.posted}
                    </span>
                    {job.remote && (
                      <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 rounded-full text-xs font-medium">
                        Remote
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => handleViewJob(job)}
                      className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg hover:bg-primary-700 font-semibold transition-colors"
                    >
                      <Eye className="w-5 h-5" />
                      View Details
                    </button>
                    <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 font-semibold transition-colors">
                      <Send className="w-5 h-5" />
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Job Modal */}
        {showJobModal && selectedJob && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white dark:bg-gray-800 rounded-xl w-3/4 max-w-3xl p-6 relative">
              <button 
                onClick={() => setShowJobModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-2xl font-bold text-text dark:text-white mb-2">{selectedJob.title}</h2>
              <p className="text-text-light dark:text-gray-400 mb-4">{selectedJob.company}</p>

              <div className="flex flex-wrap gap-4 mb-4 text-sm text-text-light dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {selectedJob.location}
                </span>
                <span className="flex items-center gap-1">
                  {formatSalary(selectedJob.salary)}
                </span>
                <span className="flex items-center gap-1">
                  <Briefcase className="w-4 h-4" />
                  {selectedJob.type}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  Posted {selectedJob.posted}
                </span>
              </div>

              <p className="text-text-light dark:text-gray-400 mb-4">{selectedJob.description}</p>

              <div className="flex items-center gap-3 mt-6">
                <button className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-lg hover:bg-primary-700 font-semibold transition-colors">
                  <Send className="w-5 h-5" />
                  Apply Now
                </button>
                <button 
                  onClick={() => setShowJobModal(false)}
                  className="flex-1 flex items-center justify-center gap-2 border-2 border-gray-300 dark:border-gray-600 text-text dark:text-white py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
