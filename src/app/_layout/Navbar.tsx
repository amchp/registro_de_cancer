"use client";

import React from "react";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { LogOut, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <header className="bg-background/95 sticky top-0 z-40 w-full border-b backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-medical-blue hidden text-xl font-bold sm:inline-block">
                Registro de Cáncer
              </span>
            </Link>
          </div>
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
            <Link
              href="/"
              className={cn(
                "hover:text-primary text-sm font-medium transition-colors",
                pathName === "/" ? "text-primary" : "text-muted-foreground",
              )}
            >
              Panel de Datos
            </Link>
            <Link
              href="/patients"
              className={cn(
                "hover:text-primary text-sm font-medium transition-colors",
                pathName.startsWith("/users")
                  ? "text-primary"
                  : "text-muted-foreground",
              )}
            >
              Pacientes
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
