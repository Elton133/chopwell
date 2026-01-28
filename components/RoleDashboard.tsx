import Link from "next/link";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  LogOut, 
  Bell,
  LucideIcon
} from "lucide-react";

interface SidebarItem {
  name: string;
  icon: LucideIcon;
  href: string;
  active?: boolean;
}

interface RoleDashboardProps {
  role: string;
  sidebarItems: SidebarItem[];
  children: React.ReactNode;
}

export default function RoleDashboard({ role, sidebarItems, children }: RoleDashboardProps) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden w-64 border-r border-gray-200 bg-white lg:block">
        <div className="flex h-full flex-col">
          <div className="flex items-center gap-2 px-6 py-6 border-b border-gray-100">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <LayoutDashboard className="h-5 w-5" />
            </div>
            <span className="font-bold text-gray-900 capitalize">{role} Portal</span>
          </div>
          
          <nav className="flex-1 space-y-1 px-4 py-6">
            {sidebarItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  item.active
                    ? "bg-primary text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="border-t border-gray-200 p-4">
            <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50">
              <LogOut className="h-5 w-5" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 lg:hidden">
          <span className="font-bold text-gray-900 capitalize">{role} Portal</span>
          <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100">
            <Bell className="h-5 w-5" />
          </button>
        </header>
        <div className="p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
