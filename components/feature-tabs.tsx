"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const tabs = [
    "AI Workflows",
    "AI Agents",
    "AI Chatbots",
    "Tables",
    "Interfaces",
    "Canvas",
    "Enterprise",
    "Functions",
    "8,000 apps",
]

export function FeatureTabs() {
    const [activeTab, setActiveTab] = useState("AI Workflows")

    return (
        <div className="w-full border-b border-[var(--color-zapier-border)] bg-[var(--color-zapier-bg)]">
            <div className="max-w-[1280px] mx-auto border-x border-[var(--color-zapier-border)]">
                <div className="flex overflow-x-auto no-scrollbar">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={cn(
                                "px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors border-r border-[var(--color-zapier-border)] last:border-r-0",
                                activeTab === tab
                                    ? "text-[var(--color-zapier-black)] shadow-[inset_0_-4px_0_0_var(--color-zapier-orange)]"
                                    : "text-gray-600 hover:text-[var(--color-zapier-black)] hover:bg-gray-50"
                            )}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
