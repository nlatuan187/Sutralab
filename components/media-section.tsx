"use client"

import { Play } from "lucide-react"

export function MediaSection() {
    return (
        <section className="w-full bg-[var(--color-zapier-bg)] border-b border-[var(--color-zapier-border)]">
            <div className="max-w-[1280px] mx-auto border-x border-[var(--color-zapier-border)]">
                {/* Header */}
                <div className="flex items-center gap-4 px-8 py-8 border-b border-[var(--color-zapier-border)]">
                    <div className="w-4 h-4 rounded-full bg-[var(--color-zapier-orange)]/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[var(--color-zapier-orange)]" />
                    </div>
                    <h2 className="text-sm font-medium uppercase tracking-wide text-[var(--color-zapier-black)]">
                        Your complete toolkit for AI automation
                    </h2>
                </div>

                {/* Media Content */}
                <div className="p-8 lg:p-16 bg-[url('https://api.builder.io/api/v1/image/assets/TEMP/55d201f0b77c9aeecf98767f5357c8bbe2a9a110?width=2556')] bg-[length:100px_100px]">
                    <div className="relative w-full aspect-video max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl bg-white border border-[var(--color-zapier-border)] group cursor-pointer">
                        {/* Placeholder for video/image */}
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                            <span className="text-gray-400 font-medium">Product Demo Video Placeholder</span>
                        </div>

                        {/* Play Button */}
                        <div className="absolute bottom-6 right-6 w-12 h-12 bg-[var(--color-zapier-black)]/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white group-hover:bg-[var(--color-zapier-black)]/70 transition-colors">
                            <Play className="w-5 h-5 fill-current" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
