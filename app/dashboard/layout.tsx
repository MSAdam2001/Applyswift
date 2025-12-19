"use client";

import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-background dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white p-4 flex flex-col">
        <h1 className="text-xl font-bold mb-6">
          ApplySwift
        </h1>

        <nav className="space-y-3 flex-1">
          <Link
            href="/dashboard"
            className="block hover:bg-primary/90 rounded-lg px-3 py-2 transition-colors"
          >
            Dashboard
          </Link>

          <Link
            href="/dashboard/jobs"
            className="block hover:bg-primary/90 rounded-lg px-3 py-2 transition-colors"
          >
            Jobs
          </Link>

          <Link
            href="/dashboard/applications"
            className="block hover:bg-primary/90 rounded-lg px-3 py-2 transition-colors"
          >
            Applications
          </Link>

          <Link
            href="/dashboard/profile"
            className="block hover:bg-primary/90 rounded-lg px-3 py-2 transition-colors"
          >
            Profile
          </Link>

          {/* New Links */}
          <Link
            href="/dashboard/cv-manager"
            className="block hover:bg-primary/90 rounded-lg px-3 py-2 transition-colors"
          >
            CV Manager
          </Link>

          <Link
            href="/dashboard/cover-letters"
            className="block hover:bg-primary/90 rounded-lg px-3 py-2 transition-colors"
          >
            Cover Letters
          </Link>

          <Link
            href="/dashboard/settings"
            className="block hover:bg-primary/90 rounded-lg px-3 py-2 transition-colors"
          >
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
