import { Shield, Eye, Lock, CheckCircle } from 'lucide-react';

export default function EnterpriseSection() {
  const features = [
    {
      icon: Shield,
      title: "Role-based permissions that mirror your organization",
      description: "Align automation capabilities with your team structure",
    },
    {
      icon: Eye,
      title: "Complete visibility into who automated what and when",
      description:
        "Full transparency and audit trails for all automation activity",
    },
    {
      icon: Lock,
      title: "Enterprise-grade security with SOC 2 & SOC 3 compliance",
      description: "Meet even the most stringent security requirements",
    },
  ];

  return (
    <section className="bg-zapier-cream py-20 md:py-32">
      <div className="max-w-screen-xl mx-auto px-6 md:px-14">
        <h2 className="text-3xl md:text-5xl font-medium text-zapier-dark mb-8">
          Move fast.<br />Stay in control.
        </h2>
        <p className="text-lg text-gray-600 mb-16 max-w-3xl">
          Ops teams build what they need while IT gets oversight. Enterprises
          trust Zapier to deliver the speed and innovation of AI, without any
          tricky IT tradeoffs.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index}>
              <feature.icon className="w-8 h-8 text-zapier-orange mb-4" />
              <h3 className="text-lg font-semibold text-zapier-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border border-zapier-border rounded p-8 mb-16">
          <p className="text-sm font-medium text-zapier-dark uppercase tracking-wide mb-6">
            Enterprise features
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-zapier-dark mb-3">
                Security and Compliance
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Meet even the most stringent security requirements
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-zapier-dark mb-3">
                Single sign-on and automated provisioning
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Seamless security with SAML-based SSO and SCIM for automated
                user management
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-zapier-dark mb-3">
                Central oversight of all AI interactions
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Monitor and manage AI usage across your organization
              </p>
            </div>
          </div>
          <button className="mt-8 px-6 py-3.5 bg-zapier-orange text-zapier-cream text-lg font-semibold rounded border border-zapier-orange hover:bg-zapier-orange/90 transition-colors">
            Get a demo
          </button>
        </div>

        <div className="max-w-4xl">
          <blockquote className="text-xl md:text-2xl font-medium text-zapier-dark mb-8 leading-relaxed border-l-4 border-zapier-orange pl-6">
            "We're training the team to build for themselves. That's the
            magic—going from idea to execution without waiting on anyone. The
            more AI-first builders we have, the faster we grow."
          </blockquote>
          <p className="text-sm text-gray-600 pl-6">
            — Andrew Harding, VP Marketing & Content Partnerships at Slate
            Magazine
          </p>
        </div>
      </div>
    </section>
  );
}
