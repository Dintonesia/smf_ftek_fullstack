"use client";
import { FileText } from "lucide-react";
import { cn } from "../lib/utils";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  {
    title: "ARTICLES",
    items: [{ name: "Articles", icon: FileText, href: "/dashboard/articles" }],
  },
];

export function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-foreground rounded-sm flex items-center justify-center">
            <span className="text-background font-bold text-sm">A</span>
          </div>
        </div>

        <nav className="space-y-8">
          {navigationItems.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors",
                          isActive
                            ? "bg-sidebar-accent text-sidebar-accent-foreground"
                            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        )}
                      >
                        <item.icon className="w-4 h-4" />
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
