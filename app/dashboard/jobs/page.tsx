"use client";

import { useState } from "react";
import { 
  LayoutDashboard, User, Briefcase, Bell, Settings,
  Zap, MapPin, Clock, Filter, Search, Bookmark, Send,
  Eye, Menu, X
} from "lucide-react";

const mockJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Nigeria",
    location: "Lagos",
    salary: [400000, 600000],
    type: "Full-time",
    match: 95,
    posted: "2h ago",
    remote: false,
    description: "We are looking for an experienced frontend developer to join our team and work on cutting-edge web applications."
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "CloudTech Solutions",
    location: "Remote",
    salary: [350000, 500000],
    type: "Full-time",
    match: 92,
    posted: "5h ago",
    remote: true,
    description: "Join our backend team to build scalable APIs and microservices for our growing platform."
  },
  {
    id: 3,
    title: "Product Designer",
    company: "Design Studio NG",
    location: "Abuja",
    salary: [300000, 450000],
    type: "Full-time",
    match: 88,
    posted: "1d ago",
    remote: false,
    description: "Create beautiful and intuitive user experiences for our digital products and services."
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "Infrastructure Inc",
    location: "Lagos",
    salary: [500000, 700000],
    type: "Full-time",
    match: 85,
    posted: "2d ago",
    remote: true,
    description: "Manage and optimize our cloud infrastructure and deployment pipelines."
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: "Creative Agency",
    location: "Remote",
    salary: [280000, 400000],
    type: "Contract",
    match: 82,
    posted: "3d ago",
    remote: true,
    description: "Design engaging user interfaces and exceptional user experiences for web and mobile applications."
  }
];

export default function JobsPage() {
  const [currentPath] = useState("/jobs");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [showJobModal, setShowJobModal] = useState(false);
  const [appliedJobs, setAppliedJobs] = useState<number[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [filters, setFilters] = useState({
    location: [] as string[],
    salary: "",
    jobType: [] as string[],
    remote: false,
    minMatch: 0
  });

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: Briefcase, label: "Jobs", href: "/jobs" },
    { icon: Bell, label: "Applications", href: "/applications" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  const locations = [
    "All States", "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
    "Benue", "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
    "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara",
    "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers",
    "Sokoto", "Taraba", "Yobe", "Zamfara", "FCT", "Remote"
  ];

  const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"];

  const salaryRanges = [
    { label: "Any", value: "" },
    { label: "₦100k - ₦300k", value: "100-300" },
    { label: "₦300k - ₦500k", value: "300-500" },
    { label: "₦500k+", value: "500+" },
  ];

  // Filtered Jobs
  const filteredJobs = mockJobs.filter((job) => {
    if (searchQuery &&
      !job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !job.company.toLowerCase().includes(searchQuery.toLowerCase())
    ) return false;

    if (filters.location.length > 0 && !filters.location.includes("All States")) {
      if (!filters.location.includes(job.location) && !(filters.location.includes("Remote") && job.remote)) return false;
    }

    if (filters.jobType.length > 0 && !filters.jobType.includes(job.type)) return false;
    if (filters.remote && !job.remote) return false;
    if (filters.minMatch > 0 && job.match < filters.minMatch) return false;

    return true;
  });

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

  const handleViewJob = (job: any) => {
    setSelectedJob(job);
    setShowJobModal(true);
  };

  const handleApplyJob = (jobId: number) => {
    if (!appliedJobs.includes(jobId)) {
      setAppliedJobs([...appliedJobs, jobId]);
    }
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
                <h1 className="text-2xl sm:text-3xl font-bold text-text dark:text-white mb-2">Job Feed</h1>
                <p className="text-text-light dark:text-gray-400 text-sm sm:text-base">
                  {filteredJobs.length} jobs matching your profile
                </p>
              </div>
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:border-primary transition-colors w-full sm:w-auto"
              >
                <Filter className="w-5 h-5" />
                {showFilters ? "Hide" : "Show"} Filters
              </button>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search jobs by title or company..."
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-text dark:text-white text-sm sm:text-base"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            {/* Filters Sidebar */}
            {showFilters && (
              <div className="w-full lg:w-72 lg:flex-shrink-0">
                <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 lg:sticky lg:top-24">
                  <h3 className="font-bold text-text dark:text-white mb-4 flex items-center justify-between">
                    Filters
                    <button 
                      onClick={() => setFilters({ location: [], salary: "", jobType: [], remote: false, minMatch: 0 })}
                      className="text-sm text-primary hover:underline"
                    >
                      Clear All
                    </button>
                  </h3>

                  {/* Location Filter */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-text dark:text-white mb-3">Location</h4>
                    <div className="space-y-2 max-h-40 sm:max-h-60 overflow-y-auto">
                      {locations.map(location => (
                        <label key={location} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={filters.location.includes(location)}
                            onChange={(e) => {
                              if (location === "All States") {
                                setFilters({ ...filters, location: e.target.checked ? ["All States"] : [] });
                              } else {
                                let newLocations = e.target.checked
                                  ? [...filters.location.filter(l => l !== "All States"), location]
                                  : filters.location.filter(l => l !== location);
                                setFilters({ ...filters, location: newLocations });
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
                      {jobTypes.map(type => (
                        <label key={type} className="flex items-center gap-2 cursor-pointer">
                          <input 
                            type="checkbox"
                            checked={filters.jobType.includes(type)}
                            onChange={(e) => {
                              setFilters({
                                ...filters,
                                jobType: e.target.checked
                                  ? [...filters.jobType, type]
                                  : filters.jobType.filter(t => t !== type)
                              });
                            }}
                            className="w-4 h-4 text-primary rounded focus:ring-primary"
                          />
                          <span className="text-sm text-text dark:text-white">{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Salary Filter */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-text dark:text-white mb-3">Salary Range</h4>
                    <select
                      value={filters.salary}
                      onChange={(e) => setFilters({...filters, salary: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-900 text-text dark:text-white text-sm"
                    >
                      {salaryRanges.map(range => (
                        <option key={range.value} value={range.value}>{range.label}</option>
                      ))}
                    </select>
                  </div>

                  {/* Remote Filter */}
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

                  {/* Minimum Match */}
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
            <div className="flex-1 min-w-0">
              <div className="space-y-4">
                {filteredJobs.map(job => (
                  <div key={job.id} className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6 hover:shadow-lg transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0 text-sm sm:text-base">
                          {job.company.substring(0, 2).toUpperCase()}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-base sm:text-xl font-bold text-text dark:text-white mb-1 flex flex-wrap items-center gap-2">
                            <span className="truncate">{job.title}</span>
                            {appliedJobs.includes(job.id) && (
                              <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-2 py-0.5 text-xs rounded-full whitespace-nowrap">
                                Applied
                              </span>
                            )}
                          </h3>
                          <p className="text-sm text-text-light dark:text-gray-400 truncate">{job.company}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-start">
                        <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                          job.match >= 90 
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                            : job.match >= 80
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                            : "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400"
                        }`}>{job.match}% Match</span>
                        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                          <Bookmark className="w-4 h-4 sm:w-5 sm:h-5 text-text-light dark:text-gray-400" />
                        </button>
                      </div>
                    </div>

                    <p className="text-text-light dark:text-gray-400 text-xs sm:text-sm mb-4 line-clamp-2">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 text-xs sm:text-sm text-text-light dark:text-gray-400">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" /><span className="truncate">{job.location}</span></span>
                      <span className="flex items-center gap-1 truncate">{formatSalary(job.salary)}</span>
                      <span className="flex items-center gap-1"><Briefcase className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />{job.type}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />Posted {job.posted}</span>
                      {job.remote && <span className="px-2 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-400 rounded-full text-xs font-medium">Remote</span>}
                    </div>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                      <button onClick={() => handleViewJob(job)} className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-2.5 sm:py-3 rounded-lg hover:bg-primary-700 font-semibold transition-colors text-sm sm:text-base">
                        <Eye className="w-4 h-4 sm:w-5 sm:h-5" /> View Details
                      </button>
                      <button 
                        onClick={() => handleApplyJob(job.id)}
                        className={`flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 border-2 rounded-lg font-semibold transition-colors text-sm sm:text-base ${
                          appliedJobs.includes(job.id)
                            ? "border-green-600 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 cursor-not-allowed"
                            : "border-primary text-primary hover:bg-primary-50 dark:hover:bg-primary-900/20"
                        }`}
                        disabled={appliedJobs.includes(job.id)}
                      >
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" /> {appliedJobs.includes(job.id) ? "Applied" : "Apply Now"}
                      </button>
                    </div>
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