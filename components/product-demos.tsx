import { Play } from "lucide-react"

export default function ProductDemos() {
    const demos = [
        {
            title: "AI Chatbot Demo",
            description: "See how our chatbot handles complex customer queries in real-time",
            color: "bg-blue-500/10",
            iconColor: "text-blue-500"
        },
        {
            title: "Workflow Automation",
            description: "Watch a complete invoice processing workflow automated in seconds",
            color: "bg-purple-500/10",
            iconColor: "text-purple-500"
        },
        {
            title: "Analytics Dashboard",
            description: "Explore real-time insights and predictive analytics features",
            color: "bg-green-500/10",
            iconColor: "text-green-500"
        }
    ]

    return (
        <section className="py-24 bg-muted/30 border-t border-border/50">
            <div className="container mx-auto px-4">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl md:text-5xl font-semibold text-foreground">See Our AI in Action</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Watch how our solutions transform business operations
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {demos.map((demo, index) => (
                        <div key={index} className="group relative rounded-xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300">
                            {/* Video Placeholder */}
                            <div className={`aspect-video w-full ${demo.color} flex items-center justify-center relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                <div className="h-16 w-16 bg-background/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300 z-10 backdrop-blur-sm">
                                    <Play className={`h-6 w-6 ${demo.iconColor} ml-1`} fill="currentColor" />
                                </div>
                            </div>

                            <div className="p-6 space-y-2">
                                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{demo.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {demo.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
