import { ArrowRight } from 'lucide-react';

export default function AIToolsSection() {
  const tools = [
    {
      title: "AI Workflows",
      description: "Combine AI with your every-day apps",
    },
    {
      title: "AI Agents",
      description: "Make custom AI that works across your stack",
    },
    {
      title: "AI Chatbots",
      description: "Answer customer questions instantly",
    },
    {
      title: "Canvas",
      description: "Instantly turn your ideas into fully automated systems with AI",
    },
  ];

  return (
    <section className="bg-zapier-cream py-20 md:py-32">
      <div className="max-w-screen-xl mx-auto px-6 md:px-14">
        <div className="max-w-4xl mb-16">
          <blockquote className="text-xl md:text-2xl font-medium text-zapier-dark mb-8 leading-relaxed border-l-4 border-zapier-orange pl-6">
            "We cut 50 hours across 3 departments down to three hours for one
            person for post-event feedback."
          </blockquote>
          <p className="text-sm text-gray-600 pl-6">
            —David Long, Vice President, Digital and Innovation at Portland
            Trail Blazers
          </p>
          <button className="text-zapier-orange font-semibold flex items-center gap-2 hover:gap-3 transition-all mt-6 pl-6">
            Read customer story
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs font-medium text-zapier-dark uppercase tracking-wide mb-8">
          Explore Zapier's AI Tools
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="border border-zapier-border rounded p-6 hover:shadow-lg transition-shadow bg-white"
            >
              <h3 className="text-xl font-semibold text-zapier-dark mb-4">
                {tool.title}
              </h3>
              <p className="text-sm text-gray-600 mb-6">{tool.description}</p>
              <button className="text-zapier-orange font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Explore
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
