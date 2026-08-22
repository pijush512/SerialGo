import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            Serial<span className="text-primary">Go</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/features" className="hover:text-primary transition-colors">Features</Link>
          <Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
        </nav>

        <div className="flex items-center gap-4">



          <Link 
            href="/login" 
            className="text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-200 transition-colors"
          >
            Sign In
          </Link>
          <Link 
            href="/register" 
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-hover transition-colors shadow-sm"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar