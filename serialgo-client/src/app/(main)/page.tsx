"use client"
import { useTheme } from 'next-themes'
import Link from 'next/link';
import React from 'react'

const page = () => {
  const {theme, setTheme} = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-background text-foreground">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm">
            🚀 Introducing the ultimate serial management system
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Streamline Your Workflow with <span className="text-primary">SerialGo</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground sm:text-xl">
            A smart, fast, and efficient serial management platform designed to help you track, organize, and manage your workflow effortlessly.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/register"
              className="w-full sm:w-auto rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
            >
              Get Started for Free
            </Link>
            <Link
              href="/features"
              className="w-full sm:w-auto rounded-lg border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:bg-accent transition-colors"
            >
              Learn More
            </Link>
          </div>

        </div>
      </section>

      {/* Features Grid Preview */}
      <section className="border-t border-border bg-card py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Everything you need to succeed</h2>
            <p className="mt-2 text-sm text-muted-foreground">Powerful features built for modern teams and workflows.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
              <div className="text-primary text-2xl mb-3">⚡</div>
              <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">Optimized for performance so you never miss a beat in your daily routine.</p>
            </div>

            <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
              <div className="text-primary text-2xl mb-3">🔒</div>
              <h3 className="text-lg font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-sm text-muted-foreground">Your data is fully encrypted and securely stored with industry standards.</p>
            </div>

            <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
              <div className="text-primary text-2xl mb-3">📊</div>
              <h3 className="text-lg font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-sm text-muted-foreground">Gain deep insights into your serial management with clean dashboards.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page



