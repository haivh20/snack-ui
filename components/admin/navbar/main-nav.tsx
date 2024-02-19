"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  const routes = [
    {
      href: `/admin`,
      label: "Home",
      active: pathname === `/admin`,
    },
    {
      href: `/admin/customers`,
      label: "Customer",
      active: pathname === `/admin/customers`,
    },
    {
      href: `/admin/products`,
      label: "Products",
      active: pathname === `/admin/products`,
    },
    {
      href: `/admin/categories`,
      label: "Categories",
      active: pathname === `/admin/categories`,
    },
    {
      href: `/admin/orders`,
      label: "Orders",
      active: pathname === `/admin/orders`,
    },
    {
      href: `/admin/promotions`,
      label: "Promotions",
      active: pathname === `/admin/promotions`,
    },
    {
      href: `/admin/receipts`,
      label: "Receipts",
      active: pathname === `/admin/receipts`,
    },
    {
      href: `/admin/suppliers`,
      label: "Suppliers",
      active: pathname === `/admin/suppliers`,
    },

    {
      href: `/admin/reports`,
      label: "Reporting and Statistics",
      active: pathname === `/admin/reports`,
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
