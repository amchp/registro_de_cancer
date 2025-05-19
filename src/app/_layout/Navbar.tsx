"use client";
import { cn } from "~/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <header className="bg-background/95 sticky top-0 z-40 w-full border-b shadow-sm backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-medical-blue text-xl font-bold sm:inline-block">
                Registro de Cáncer
              </span>
            </Link>
          </div>
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
            <Link
              href="/"
              className={cn(
                "hover:text-primary text-sm font-medium transition-colors",
                pathName === "/"
                  ? "text-primary font-semibold"
                  : "text-muted-foreground",
              )}
            >
              Panel de Datos
            </Link>
            <Link
              href="/patients"
              className={cn(
                "hover:text-primary text-sm font-medium transition-colors",
                pathName.startsWith("/patients")
                  ? "text-primary font-semibold"
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
}
