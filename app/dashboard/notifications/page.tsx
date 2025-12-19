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
  CheckCircle,
  Check,
  Trash2,
  Filter,
  Clock,
  Target,
  AlertCircle,
  MessageSquare,
  TrendingUp,
  Award,
  X
} from "lucide-react";
import { mockNotifications } from "@/lib/constants/mockData";

export default function NotificationsPage() {
  const [currentPath] = useState("/notifications");
  const [notifications, setNotifications] = useState(mockNotifications);
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: User, label: "Profile", href: "/profile" },
    { icon: FileText, label: "CV Manager", href: "/cv-manager" },
    { icon: Mail, label: "Cover Letters", href: "/cover-letters" },
    { icon: Briefcase, label: "Jobs", href: "/jobs" },
    { icon: Bell, label: "Applications", href: "/applications" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  const getNotificationIcon = (type: string) => {
    const icons: Record<string, any> = {
      application: { icon: Send, color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" },
      match: { icon: Target, color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" },
      response: { icon: MessageSquare, color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400" },
      system: { icon: AlertCircle, color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400" },
      success: { icon: CheckCircle, color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" },
    };
    return icons[type] || icons.system;
  };

  const handleMarkAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const handleDelete = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const handleClearAll = () => {
    setNotifications([]);
  };

  const filteredNotifications = notifications.filter(n => {
    if (filter === "unread") return !n.read;
    if (filter === "read") return n.read;
    return true;
  });

  const unreadCount = notifications.filter(n => !n.read).length;

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
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-text dark:text-white mb-2">Notifications</h1>
              <p className="text-text-light dark:text-gray-400">
                {unreadCount > 0 ? `You have ${unreadCount} unread notification${unreadCount > 1 ? 's' : ''}` : 'All caught up!'}
              </p>
            </div>
            <div className="flex items-center gap-3">
              {unreadCount > 0 && (
                <button 
                  onClick={handleMarkAllAsRead}
                  className="flex items-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 font-medium transition-colors"
                >
                  <CheckCircle className="w-5 h-5" />
                  Mark All Read
                </button>
              )}
              {notifications.length > 0 && (
                <button 
                  onClick={handleClearAll}
                  className="flex items-center gap-2 px-4 py-2 border-2 border-red-300 dark:border-red-600 text-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 font-medium transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                  Clear All
                </button>
              )}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === "all"
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text dark:text-white hover:border-primary"
              }`}
            >
              All ({notifications.length})
            </button>
            <button
              onClick={() => setFilter("unread")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === "unread"
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text dark:text-white hover:border-primary"
              }`}
            >
              Unread ({unreadCount})
            </button>
            <button
              onClick={() => setFilter("read")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === "read"
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-text dark:text-white hover:border-primary"
              }`}
            >
              Read ({notifications.filter(n => n.read).length})
            </button>
          </div>
        </div>

        {/* Notifications List */}
        {filteredNotifications.length > 0 ? (
          <div className="space-y-3">
            {filteredNotifications.map((notification) => {
              const { icon: Icon, color } = getNotificationIcon(notification.type);
              
              return (
                <div 
                  key={notification.id}
                  className={`bg-white dark:bg-gray-800 rounded-xl border-2 p-6 transition-all ${
                    notification.read
                      ? "border-gray-200 dark:border-gray-700"
                      : "border-primary bg-primary-50/30 dark:bg-primary-900/10"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${color}`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className={`font-bold mb-1 ${
                            notification.read 
                              ? "text-text dark:text-white" 
                              : "text-text dark:text-white"
                          }`}>
                            {notification.title}
                            {!notification.read && (
                              <span className="inline-block w-2 h-2 bg-primary rounded-full ml-2"></span>
                            )}
                          </h3>
                          <p className="text-text-light dark:text-gray-400 text-sm">
                            {notification.message}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <span className="flex items-center gap-1 text-xs text-text-light dark:text-gray-400">
                          <Clock className="w-3 h-3" />
                          {notification.timestamp}
                        </span>

                        <div className="flex items-center gap-2">
                          {!notification.read && (
                            <button 
                              onClick={() => handleMarkAsRead(notification.id)}
                              className="flex items-center gap-1 px-3 py-1 text-xs bg-primary text-white rounded-lg hover:bg-primary-700 font-medium transition-colors"
                            >
                              <Check className="w-3 h-3" />
                              Mark Read
                            </button>
                          )}
                          <button 
                            onClick={() => handleDelete(notification.id)}
                            className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4 text-red-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bell className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-text dark:text-white mb-2">
              {filter === "unread" ? "No Unread Notifications" : filter === "read" ? "No Read Notifications" : "No Notifications"}
            </h3>
            <p className="text-text-light dark:text-gray-400 mb-6">
              {filter === "unread" 
                ? "You're all caught up! Check back later for updates."
                : filter === "read"
                ? "You haven't read any notifications yet."
                : "You'll see notifications here when there's activity on your applications."
              }
            </p>
            {filter !== "all" && (
              <button 
                onClick={() => setFilter("all")}
                className="text-primary hover:underline font-medium"
              >
                View All Notifications
              </button>
            )}
          </div>
        )}

        {/* Notification Settings Card */}
        <div className="mt-8 bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Notification Preferences</h3>
              <p className="text-white/90 text-sm mb-4">
                Customize when and how you receive notifications
              </p>
              <Link 
                href="/settings"
                className="inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-lg hover:bg-gray-100 font-medium text-sm transition-colors"
              >
                <Settings className="w-4 h-4" />
                Manage Settings
              </Link>
            </div>
            <Bell className="w-16 h-16 text-white/20" />
          </div>
        </div>

        {/* Notification Stats */}
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h3 className="text-text-light dark:text-gray-400 text-sm font-medium mb-1">Applications</h3>
            <p className="text-2xl font-bold text-text dark:text-white">
              {notifications.filter(n => n.type === "application").length}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
            <h3 className="text-text-light dark:text-gray-400 text-sm font-medium mb-1">Job Matches</h3>
            <p className="text-2xl font-bold text-text dark:text-white">
              {notifications.filter(n => n.type === "match").length}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <h3 className="text-text-light dark:text-gray-400 text-sm font-medium mb-1">Responses</h3>
            <p className="text-2xl font-bold text-text dark:text-white">
              {notifications.filter(n => n.type === "response").length}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
            </div>
            <h3 className="text-text-light dark:text-gray-400 text-sm font-medium mb-1">Today</h3>
            <p className="text-2xl font-bold text-text dark:text-white">
              {notifications.filter(n => n.timestamp.includes('hour') || n.timestamp.includes('minute')).length}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

const Send = Briefcase;