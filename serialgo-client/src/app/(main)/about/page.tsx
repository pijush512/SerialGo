import React from 'react';
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-background text-foreground">
      <section className="px-4 py-20 text-center sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-6">
          About <span className="text-primary">SerialGo</span>
        </h1>
        <p className="text-lg text-muted-foreground sm:text-xl leading-relaxed">
          SerialGo is built to revolutionize the way individuals and businesses manage their daily workflows, serial tracking, and operational efficiency. We believe in simplicity, speed, and reliability.
        </p>
      </section>
      <section className="border-t border-border bg-card py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="rounded-2xl border border-border bg-background p-8 shadow-sm space-y-4">
            <div className="text-primary text-3xl">🎯</div>
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower modern teams with intuitive tools that eliminate operational bottlenecks, reduce manual tracking errors, and scale productivity effortlessly.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-background p-8 shadow-sm space-y-4">
            <div className="text-primary text-3xl">💡</div>
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become the leading smart management platform worldwide, known for exceptional performance, secure infrastructure, and user-centric design.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 text-center sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Ready to transform your workflow?</h2>
          <p className="text-muted-foreground">Join thousands of users who trust SerialGo for their daily management needs.</p>
          <div>
            <Link
              href="/register"
              className="inline-block rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}