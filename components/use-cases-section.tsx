"use client";

import { useState } from "react";
import { ArrowRight } from 'lucide-react';

export default function UseCasesSection() {
  const [activeTab, setActiveTab] = useState("Marketing");

  const tabs = ["Marketing", "Sales", "Product", "IT"];

  return (
    <section className="bg-white py-20 md:py-32 border-t border-b border-zapier-border">
      <div className="max-w-screen-xl mx-auto px-6 md:px-14">
        <p className="text-xs font-medium text-zapier-dark uppercase tracking-wide mb-4">
          AI Use Cases
        </p>
        <h2 className="text-3xl md:text-4xl font-medium text-zapier-dark mb-8">
          Real teams, real AI<br />workflows, real results
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl">
          Not sure where to start with AI and agents? These teams have AI
          handling real work, right now. And you can too.
        </p>

        <div className="flex gap-4 mb-12 border-b border-zapier-border">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-medium transition-all ${
                activeTab === tab
                  ? "text-zapier-dark border-b-2 border-zapier-orange"
                  : "text-gray-500 hover:text-zapier-dark"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-zapier-dark mb-6">
              Capture every lead, everywhere
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Pull your scattered lead sources into one pipeline—automatically
              collect, enrich, and route leads to your CRM without losing a
              single opportunity.
            </p>
            <button className="text-zapier-orange font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              Learn more
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-gray-50 rounded p-8">
            <img
              src="/marketing-automation-dashboard-with-lead-pipeline.jpg"
              alt="Lead capture workflow"
              className="w-full h-auto rounded"
            />
          </div>
        </div>

        <div className="mt-16">
          <p className="text-sm font-medium text-zapier-dark mb-6">
            Templates
          </p>
          <p className="text-xs font-medium text-zapier-dark uppercase tracking-wide mb-6">
            Start quickly with these AI templates
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Autogenerate release notes using Claude",
              "Automate weekly communications with Perplexity",
              "Turn Granola meeting notes into Asana tasks",
            ].map((template, index) => (
              <div
                key={index}
                className="border border-zapier-border rounded p-6 hover:shadow-md transition-shadow"
              >
                <p className="text-base font-medium text-zapier-dark">
                  {template}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
