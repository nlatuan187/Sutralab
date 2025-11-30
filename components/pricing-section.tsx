import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingSection() {
    const plans = [
        {
            name: "Starter",
            price: "997",
            period: "month",
            features: [
                "AI Chatbot for customer support",
                "Basic workflow automation (3 processes)",
                "Email integration",
                "Standard analytics dashboard",
                "Email support",
                "30-day money-back guarantee",
            ],
            description: "Perfect for small businesses starting their AI journey",
            buttonText: "Start Free Trial",
            href: "#contact",
            isPopular: false,
        },
        {
            name: "Professional",
            price: "2497",
            period: "month",
            features: [
                "Advanced AI chatbot with lead qualification",
                "Complete workflow automation (10+ processes)",
                "CRM & e-commerce integrations",
                "Advanced analytics & reporting",
                "Priority phone & email support",
                "Custom AI training",
                "Monthly optimization calls",
                "ROI tracking & reporting",
            ],
            description: "Ideal for growing businesses ready to scale with AI",
            buttonText: "Get Started",
            href: "#contact",
            isPopular: true,
        },
        {
            name: "Enterprise",
            price: "4997",
            period: "month",
            features: [
                "Custom AI development & deployment",
                "Unlimited workflow automation",
                "Full system integrations",
                "Dedicated AI strategist",
                "24/7 priority support",
                "Advanced security & compliance",
                "White-label solutions",
                "Quarterly business reviews",
                "Custom training & workshops",
            ],
            description: "Complete AI transformation for large organizations",
            buttonText: "Contact Sales",
            href: "#contact",
            isPopular: false,
        },
    ]

    return (
        <section className="py-32 bg-white border-y border-[#ECEAE3]">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-4xl mb-20">
                    <h2 className="text-4xl md:text-6xl font-medium text-[#201515] mb-6 leading-tight">
                        Scale from personal productivity to company-wide workflows
                    </h2>
                    <p className="text-xl text-[#6B7280] leading-relaxed">
                        Use our pre-built templates to spark your next system.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan) => (
                        <div key={plan.name} className={`flex flex-col relative transition-all duration-300 rounded-lg p-8 border ${plan.isPopular ? 'border-[#FF4F00] bg-white shadow-lg' : 'border-[#ECEAE3] bg-white hover:border-[#FF4F00]/30'}`}>
                            {plan.isPopular && (
                                <div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
                                    <span className="bg-[#FF4F00] text-white px-4 py-1 rounded-md text-sm font-medium">
                                        Most Popular
                                    </span>
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="text-2xl font-semibold text-[#201515] mb-2">{plan.name}</h3>
                                <p className="text-[#6B7280] text-sm leading-relaxed">{plan.description}</p>
                            </div>

                            <div className="mb-8 pb-8 border-b border-[#ECEAE3]">
                                <span className="text-5xl font-semibold tracking-tight text-[#201515]">${plan.price}</span>
                                <span className="text-[#6B7280] text-lg">/{plan.period}</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <CheckCircle className={`h-5 w-5 mt-0.5 flex-shrink-0 ${plan.isPopular ? 'text-[#FF4F00]' : 'text-[#6B7280]'}`} />
                                        <span className="text-[#6B7280] text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={`w-full h-12 text-base font-semibold rounded-md transition-all ${plan.isPopular ? 'bg-[#FF4F00] hover:bg-[#E64500] text-white' : 'bg-white border-2 border-[#201515] text-[#201515] hover:bg-[#201515] hover:text-white'}`}
                            >
                                {plan.buttonText}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
