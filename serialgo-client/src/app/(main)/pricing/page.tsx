"use client";

import React, { useState } from 'react';
import Link from "next/link";

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals getting started with serial workflow tracking.",
      price: isAnnual ? "$8" : "$10",
      period: isAnnual ? "per month, billed annually" : "per month",
      features: [
        "Up to 500 serial tracks",
        "Basic workflow analytics",
        "Standard security & encryption",
        "Email support",
      ],
      popular: false,
      buttonText: "Get Started",
      buttonVariant: "border border-border bg-card text-foreground hover:bg-accent",
    },
    {
      name: "Pro",
      description: "Ideal for growing teams needing advanced tools and automation.",
      price: isAnnual ? "$24" : "$29",
      period: isAnnual ? "per month, billed annually" : "per month",
      features: [
        "Unlimited serial tracks",
        "Advanced real-time analytics",
        "Priority 24/7 support",
        "Team collaboration (up to 5 members)",
        "Custom workflow integrations",
      ],
      popular: true,
      buttonText: "Upgrade to Pro",
      buttonVariant: "bg-primary text-primary-foreground hover:opacity-90",
    },
    {
      name: "Enterprise",
      description: "For large-scale organizations requiring custom power and security.",
      price: isAnnual ? "$79" : "$99",
      period: isAnnual ? "per month, billed annually" : "per month",
      features: [
        "Everything in Pro",
        "Unlimited team members",
        "Dedicated account manager",
        "Custom SLA & enterprise security",
        "Advanced data export options",
      ],
      popular: false,
      buttonText: "Contact Sales",
      buttonVariant: "border border-border bg-card text-foreground hover:bg-accent",
    },
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-background text-foreground py-16 px-4 sm:px-6 lg:px-8">
      {/* Header part*/}
      <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Simple, Transparent <span className="text-primary">Pricing</span>
        </h1>
        <p className="text-lg text-muted-foreground sm:text-xl">
          Choose the right plan for your workflow. No hidden fees, cancel anytime.
        </p>

        <div className="flex items-center justify-center gap-3 pt-4">
          <span className={`text-sm font-medium ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-input transition-colors focus:outline-none"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-primary transition-transform ${
                isAnnual ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}>
            Yearly <span className="text-xs text-primary font-bold">(Save 20%)</span>
          </span>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-2xl border bg-card p-8 shadow-sm flex flex-col justify-between transition-all ${
              plan.popular ? "border-primary ring-2 ring-primary/20" : "border-border"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
                Most Popular
              </span>
            )}

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-sm text-muted-foreground">{plan.description}</p>

              <div className="py-4">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="text-xs text-muted-foreground block mt-1">{plan.period}</span>
              </div>

              <div className="border-t border-border pt-6 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">What&apos;s included</p>
                <ul className="space-y-2.5 text-sm">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <Link
                href="/register"
                className={`w-full block text-center rounded-lg py-2.5 text-sm font-medium shadow-sm transition-opacity ${plan.buttonVariant}`}
              >
                {plan.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}