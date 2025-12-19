"use client";

import { useState } from "react";
import { 
  LayoutDashboard, User, FileText, Mail, Briefcase, Bell, Settings,
  Zap, Save, Lock, CreditCard, Monitor, Shield, Eye, EyeOff, Check,
  X, Crown, Calendar, Target, Moon, Sun, Menu
} from "lucide-react";

export default function SettingsPage() {
  const [currentPath] = useState("/settings");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("account");
  const [showPassword, setShowPassword] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  const [settings, setSettings] = useState({
    name: "Chidinma Eze",
    email: "chidinma.eze@email.com",
    phone: "+234 803 456 7890",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    plan: "Pro",
    cvRegenerationsUsed: 7,
    cvRegenerationsTotal: 20,
    nextBillingDate: "2025-01-15",
    amount: 12000,
    autoApplyEnabled: true,
    dailyLimit: 15,
    minMatchPercentage: 80,
    preferredLocations: ["Lagos", "Abuja", "Remote"],
    salaryMin: 300000,
    salaryMax: 800000,
    jobTypes: ["Full-time", "Contract"],
    emailNotifications: {
      newMatches: true,
      applicationStatus: true,
      interviews: true,
      weeklyDigest: true
    },
    profileVisibility: "public",
    dataRetention: "1-year",
    theme: "dark",
    language: "en"
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

  const settingsTabs = [
    { id: "account", label: "Account", icon: User },
    { id: "subscription", label: "Subscription", icon: CreditCard },
    { id: "auto-apply", label: "Auto-Apply", icon: Zap },
    { id: "job-prefs", label: "Job Preferences", icon: Target },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "privacy", label: "Privacy & Data", icon: Shield },
    { id: "appearance", label: "Appearance", icon: Monitor }
  ];

  const nigerianStates = [
    "Lagos", "Abuja", "Port Harcourt", "Kano", "Ibadan", "Kaduna", 
    "Enugu", "Oyo", "Ogun", "Remote"
  ];

  const planFeatures = {
    Free: { applications: 5, cvRegens: 3, priority: false },
    Basic: { applications: 10, cvRegens: 10, priority: false },
    Pro: { applications: 25, cvRegens: 20, priority: true },
    Enterprise: { applications: "Unlimited", cvRegens: "Unlimited", priority: true }
  };

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const toggleLocation = (location : any) => {
    const current = settings.preferredLocations;
    if (current.includes(location)) {
      setSettings({...settings, preferredLocations: current.filter(l => l !== location)});
    } else {
      setSettings({...settings, preferredLocations: [...current, location]});
    }
  };

  const toggleJobType = (type: any) => {
    const current = settings.jobTypes;
    if (current.includes(type)) {
      setSettings({...settings, jobTypes: current.filter(t => t !== type)});
    } else {
      setSettings({...settings, jobTypes: [...current, type]});
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-text dark:text-white">Applyswift</span>
            </div>

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

            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <Bell className="w-5 h-5 text-text-light dark:text-gray-400" />
              </button>
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                CE
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

      <main className="max-w-7xl mx-auto w-full">
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-text dark:text-white mb-2">Settings</h1>
            <p className="text-text-light dark:text-gray-400 text-sm sm:text-base">
              Manage your account, preferences, and application settings
            </p>
          </div>

          {saveSuccess && (
            <div className="mb-6 bg-green-100 dark:bg-green-900/30 border border-green-400 text-green-800 dark:text-green-400 px-4 py-3 rounded-lg flex items-center gap-2">
              <Check className="w-5 h-5" />
              <span>Settings saved successfully!</span>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-2 sticky top-24">
                {settingsTabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                      activeTab === tab.id
                        ? "bg-primary-50 dark:bg-primary-900/20 text-primary"
                        : "text-text-light dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span className="font-medium text-sm">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:hidden mb-4">
              <select
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-text dark:text-white"
              >
                {settingsTabs.map(tab => (
                  <option key={tab.id} value={tab.id}>{tab.label}</option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
                
                {activeTab === "account" && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-text dark:text-white mb-4">Account Information</h2>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-text dark:text-white mb-2">Full Name</label>
                          <input
                            type="text"
                            value={settings.name}
                            onChange={(e) => setSettings({...settings, name: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-text dark:text-white"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text dark:text-white mb-2">Email Address</label>
                          <input
                            type="email"
                            value={settings.email}
                            onChange={(e) => setSettings({...settings, email: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-text dark:text-white"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text dark:text-white mb-2">Phone Number</label>
                          <input
                            type="tel"
                            value={settings.phone}
                            onChange={(e) => setSettings({...settings, phone: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-text dark:text-white"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                      <h3 className="text-lg font-bold text-text dark:text-white mb-4">Change Password</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-text dark:text-white mb-2">Current Password</label>
                          <div className="relative">
                            <input
                              type={showPassword ? "text" : "password"}
                              value={settings.currentPassword}
                              onChange={(e) => setSettings({...settings, currentPassword: e.target.value})}
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-text dark:text-white pr-12"
                            />
                            <button
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                            >
                              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text dark:text-white mb-2">New Password</label>
                          <input
                            type={showPassword ? "text" : "password"}
                            value={settings.newPassword}
                            onChange={(e) => setSettings({...settings, newPassword: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-text dark:text-white"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text dark:text-white mb-2">Confirm New Password</label>
                          <input
                            type={showPassword ? "text" : "password"}
                            value={settings.confirmPassword}
                            onChange={(e) => setSettings({...settings, confirmPassword: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-text dark:text-white"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleSave}
                      className="w-full flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-700 font-semibold transition-colors"
                    >
                      <Save className="w-5 h-5" />
                      Save Changes
                    </button>
                  </div>
                )}

                {activeTab === "subscription" && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-text dark:text-white mb-4">Current Plan</h2>
                      
                      <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white mb-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold flex items-center gap-2">
                              <Crown className="w-6 h-6" />
                              {settings.plan} Plan
                            </h3>
                            <p className="text-white/90 mt-1">₦{settings.amount.toLocaleString()}/month</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <Check className="w-5 h-5" />
                            <span>CV Regenerations: {settings.cvRegenerationsUsed}/{settings.cvRegenerationsTotal}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>Next billing: {settings.nextBillingDate}</span>
                          </div>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        {Object.entries(planFeatures).map(([plan, features]) => (
                          <div
                            key={plan}
                            className={`border-2 rounded-xl p-4 ${
                              settings.plan === plan
                                ? "border-primary bg-primary-50 dark:bg-primary-900/20"
                                : "border-gray-300 dark:border-gray-600"
                            }`}
                          >
                            <h4 className="font-bold text-text dark:text-white mb-2">{plan}</h4>
                            <ul className="space-y-1 text-sm text-text-light dark:text-gray-400">
                              <li>• {features.applications} applications/month</li>
                              <li>• {features.cvRegens} CV regenerations</li>
                              <li>• {features.priority ? "Priority" : "Standard"} support</li>
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="w-full flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-700 font-semibold transition-colors">
                      <Crown className="w-5 h-5" />
                      Upgrade Plan
                    </button>
                  </div>
                )}

                {activeTab === "auto-apply" && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-text dark:text-white mb-4">Auto-Apply Settings</h2>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <div>
                            <h4 className="font-medium text-text dark:text-white">Enable Auto-Apply</h4>
                            <p className="text-sm text-text-light dark:text-gray-400">Automatically apply to matching jobs</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              checked={settings.autoApplyEnabled}
                              onChange={(e) => setSettings({...settings, autoApplyEnabled: e.target.checked})}
                              className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                          </label>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text dark:text-white mb-2">Daily Application Limit</label>
                          <input
                            type="number"
                            value={settings.dailyLimit}
                            onChange={(e) => setSettings({...settings, dailyLimit: parseInt(e.target.value)})}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-text dark:text-white"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text dark:text-white mb-2">Minimum Match Percentage</label>
                          <div className="flex items-center gap-4">
                            <input
                              type="range"
                              min="50"
                              max="100"
                              value={settings.minMatchPercentage}
                              onChange={(e) => setSettings({...settings, minMatchPercentage: parseInt(e.target.value)})}
                              className="flex-1"
                            />
                            <span className="text-text dark:text-white font-medium">{settings.minMatchPercentage}%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleSave}
                      className="w-full flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-700 font-semibold transition-colors"
                    >
                      <Save className="w-5 h-5" />
                      Save Changes
                    </button>
                  </div>
                )}

                {activeTab === "job-prefs" && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-text dark:text-white mb-4">Job Preferences</h2>
                      
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-text dark:text-white mb-2">Preferred Locations</label>
                          <div className="flex flex-wrap gap-2">
                            {nigerianStates.map(state => (
                              <button
                                key={state}
                                onClick={() => toggleLocation(state)}
                                className={`px-3 py-1 rounded-full text-sm ${
                                  settings.preferredLocations.includes(state)
                                    ? "bg-primary text-white"
                                    : "bg-gray-200 dark:bg-gray-700 text-text dark:text-white"
                                }`}
                              >
                                {state}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-text dark:text-white mb-2">Minimum Salary (₦)</label>
                            <input
                              type="number"
                              value={settings.salaryMin}
                              onChange={(e) => setSettings({...settings, salaryMin: parseInt(e.target.value)})}
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-text dark:text-white"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-text dark:text-white mb-2">Maximum Salary (₦)</label>
                            <input
                              type="number"
                              value={settings.salaryMax}
                              onChange={(e) => setSettings({...settings, salaryMax: parseInt(e.target.value)})}
                              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-text dark:text-white"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text dark:text-white mb-2">Job Types</label>
                          <div className="flex flex-wrap gap-2">
                            {["Full-time", "Part-time", "Contract", "Freelance", "Internship"].map(type => (
                              <button
                                key={type}
                                onClick={() => toggleJobType(type)}
                                className={`px-3 py-1 rounded-full text-sm ${
                                  settings.jobTypes.includes(type)
                                    ? "bg-primary text-white"
                                    : "bg-gray-200 dark:bg-gray-700 text-text dark:text-white"
                                }`}
                              >
                                {type}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleSave}
                      className="w-full flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-700 font-semibold transition-colors"
                    >
                      <Save className="w-5 h-5" />
                      Save Changes
                    </button>
                  </div>
                )}

                {activeTab === "notifications" && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-text dark:text-white mb-4">Notification Preferences</h2>
                      
                      <div className="space-y-4">
                        {Object.entries(settings.emailNotifications).map(([key, value]) => (
                          <div key={key} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                            <div>
                              <h4 className="font-medium text-text dark:text-white capitalize">{key.replace(/([A-Z])/g, ' $1')}</h4>
                              <p className="text-sm text-text-light dark:text-gray-400">Get notified about {key}</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input
                                type="checkbox"
                                checked={value}
                                onChange={(e) => setSettings({
                                  ...settings,
                                  emailNotifications: {
                                    ...settings.emailNotifications,
                                    [key]: e.target.checked
                                  }
                                })}
                                className="sr-only peer"
                              />
                              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={handleSave}
                      className="w-full flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-700 font-semibold transition-colors"
                    >
                      <Save className="w-5 h-5" />
                      Save Changes
                    </button>
                  </div>
                )}

                {activeTab === "privacy" && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-text dark:text-white mb-4">Privacy & Data</h2>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-text dark:text-white mb-2">Profile Visibility</label>
                          <select
                            value={settings.profileVisibility}
                            onChange={(e) => setSettings({...settings, profileVisibility: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-text dark:text-white"
                          >
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                            <option value="connections">Connections Only</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text dark:text-white mb-2">Data Retention</label>
                          <select
                            value={settings.dataRetention}
                            onChange={(e) => setSettings({...settings, dataRetention: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-text dark:text-white"
                          >
                            <option value="6-months">6 Months</option>
                            <option value="1-year">1 Year</option>
                            <option value="2-years">2 Years</option>
                            <option value="forever">Forever</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleSave}
                      className="w-full flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-700 font-semibold transition-colors"
                    >
                      <Save className="w-5 h-5" />
                      Save Changes
                    </button>
                  </div>
                )}

                {activeTab === "appearance" && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-text dark:text-white mb-4">Appearance</h2>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-text dark:text-white mb-2">Theme</label>
                          <div className="grid grid-cols-2 gap-4">
                            <button
                              onClick={() => setSettings({...settings, theme: "light"})}
                              className={`p-4 border-2 rounded-lg flex items-center gap-3 ${
                                settings.theme === "light"
                                  ? "border-primary bg-primary-50 dark:bg-primary-900/20"
                                  : "border-gray-300 dark:border-gray-600"
                              }`}
                            >
                              <Sun className="w-5 h-5" />
                              <span className="font-medium text-text dark:text-white">Light</span>
                            </button>
                            <button
                              onClick={() => setSettings({...settings, theme: "dark"})}
                              className={`p-4 border-2 rounded-lg flex items-center gap-3 ${
                                settings.theme === "dark"
                                  ? "border-primary bg-primary-50 dark:bg-primary-900/20"
                                  : "border-gray-300 dark:border-gray-600"
                              }`}
                            >
                              <Moon className="w-5 h-5" />
                              <span className="font-medium text-text dark:text-white">Dark</span>
                            </button>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-text dark:text-white mb-2">Language</label>
                          <select
                            value={settings.language}
                            onChange={(e) => setSettings({...settings, language: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 text-text dark:text-white"
                          >
                            <option value="en">English</option>
                            <option value="fr">French</option>
                            <option value="yo">Yoruba</option>
                            <option value="ig">Igbo</option>
                            <option value="ha">Hausa</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleSave}
                      className="w-full flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-700 font-semibold transition-colors"
                    >
                      <Save className="w-5 h-5" />
                      Save Changes
                    </button>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}