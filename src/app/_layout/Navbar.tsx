"use client"
import { cn } from "~/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar(){
  const pathName = usePathname()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-medical-blue sm:inline-block">Registro de Cáncer</span>
            </Link>
          </div>
          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathName === "/" ? "text-primary font-semibold" : "text-muted-foreground",
              )}
            >
              Panel de Datos
            </Link>
            <Link
              href="/patients"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathName.startsWith("/patients") ? "text-primary font-semibold" : "text-muted-foreground",
              )}
            >
              Pacientes
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}


