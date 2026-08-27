import React from 'react';
import Link from "next/link";

export default function FeaturesPage() {
  const featuresList = [
    {
      icon: "⚡",
      title: "Lightning Fast Performance",
      description: "Built on Next.js to ensure lightning-fast page loads and a seamless user experience without delays."
    },
    {
      icon: "🔒",
      title: "Enterprise-Grade Security",
      description: "Your operational data is encrypted end-to-end, guaranteeing full privacy and safety at all times."
    },
    {
      icon: "📊",
      title: "Real-Time Tracking",
      description: "Monitor your serials, workflows, and activities live with real-time updates and notifications."
    },
    {
      icon: "🌓",
      title: "Dark & Light Theme",
      description: "Seamlessly switch between dark and light modes depending on your preference and environment."
    },
    {
      icon: "📱",
      title: "Fully Responsive",
      description: "Optimized for all devices—whether you are using a desktop, tablet, or smartphone on the go."
    },
    {
      icon: "🛠️",
      title: "Easy Integration",
      description: "Easily connect with your existing tools and workflows with minimal configuration required."
    }
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-background text-foreground">
      {/* Hero Header */}
      <section className="px-4 py-20 text-center sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Powerful Features for <span className="text-primary">Modern Workflows</span>
        </h1>
        <p className="text-lg text-muted-foreground sm:text-xl leading-relaxed">
          Discover everything SerialGo offers to help you streamline management, boost productivity, and scale your operations effortlessly.
        </p>
      </section>

      {/* Features Grid Section */}
      <section className="border-t border-border bg-card py-16 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => (
            <div 
              key={index} 
              className="rounded-2xl border border-border bg-background p-8 shadow-sm space-y-3 hover:border-primary/50 transition-colors"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer Section */}
      <section className="py-20 px-4 text-center sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Experience all features in action</h2>
          <p className="text-muted-foreground">Get started today and see how SerialGo transforms your daily operations.</p>
          <div>
            <Link
              href="/register"
              className="inline-block rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
            >
              Get Started for Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}