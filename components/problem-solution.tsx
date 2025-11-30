import { CheckCircle2, XCircle, ArrowRight, Sparkles } from "lucide-react"

export default function ProblemSolution() {
    const items = [
        {
            problem: "Spending hours on repetitive tasks",
            solution: "Workflow automation saves 20+ hours/week"
        },
        {
            problem: "Missing leads & slow response times",
            solution: "Instant 24/7 AI customer handling"
        },
        {
            problem: "Struggling to scale operations",
            solution: "Scale infinitely without hiring more staff"
        },
        {
            problem: "Losing edge to competitors",
            solution: "Regain dominance with AI-powered tools"
        }
    ]

    return (
        <section className="py-32 bg-white relative overflow-hidden border-y border-[#ECEAE3]">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="max-w-4xl mb-20">
                    <h2 className="text-4xl md:text-6xl font-medium text-[#201515] mb-6 tracking-tight leading-tight">
                        Store and manage data that powers your automations
                    </h2>
                    <p className="text-xl text-[#6B7280] leading-relaxed mb-8">
                        Sutralab Tables keeps all your automation data in one place.
                    </p>
                    <a href="#tables" className="text-[#FF4F00] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all group">
                        Explore Tables
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Zapier-style feature grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    <div className="p-8 border border-[#ECEAE3] bg-white rounded-lg hover:border-[#FF4F00]/30 hover:shadow-lg transition-all">
                        <div className="mb-4">
                            <svg className="w-8 h-8 text-[#FF4F00]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-[#201515]">Create custom interfaces</h3>
                        <p className="text-sm text-[#6B7280] leading-relaxed">
                            anyone can use—no coding required
                        </p>
                    </div>

                    <div className="p-8 border border-[#ECEAE3] bg-white rounded-lg hover:border-[#FF4F00]/30 hover:shadow-lg transition-all">
                        <div className="mb-4">
                            <svg className="w-8 h-8 text-[#FF4F00]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-[#201515]">Zapier Interfaces</h3>
                        <p className="text-sm text-[#6B7280] leading-relaxed">
                            give any workflow a custom frontend
                        </p>
                    </div>

                    <div className="p-8 border border-[#ECEAE3] bg-white rounded-lg hover:border-[#FF4F00]/30 hover:shadow-lg transition-all">
                        <div className="mb-4">
                            <svg className="w-8 h-8 text-[#FF4F00]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-[#201515]">Scale from personal</h3>
                        <p className="text-sm text-[#6B7280] leading-relaxed">
                            productivity to company-wide workflows
                        </p>
                    </div>

                    <div className="p-8 border border-[#ECEAE3] bg-white rounded-lg hover:border-[#FF4F00]/30 hover:shadow-lg transition-all">
                        <div className="mb-4">
                            <svg className="w-8 h-8 text-[#FF4F00]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-[#201515]">Use our pre-built templates</h3>
                        <p className="text-sm text-[#6B7280] leading-relaxed">
                            to spark your next system
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
