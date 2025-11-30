import { Shield, Lock, Eye, CheckCircle } from 'lucide-react';

export default function SecuritySection() {
  return (
    <section className="bg-zapier-dark text-zapier-cream py-20 md:py-32">
      <div className="max-w-screen-xl mx-auto px-6 md:px-14">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-medium uppercase tracking-wide mb-4 text-gray-400">
            Security
          </p>
          <h2 className="text-3xl md:text-5xl font-medium mb-8">
            Zapier is secure<br />automation that sticks
          </h2>

          <div className="flex flex-wrap gap-4 mb-12">
            {["SOC 2 (TYPE II)", "SOC 3", "GDPR Compliant", "CCPA", "GDPR UK COMPLIANT"].map(
              (badge, index) => (
                <div
                  key={index}
                  className="px-4 py-2 border border-gray-700 rounded text-sm font-medium"
                >
                  {badge}
                </div>
              )
            )}
          </div>

          <p className="text-lg text-gray-300 mb-12">
            Our customers run millions of workflows a day—securely, reliably,
            and at scale. Here's why founders, CIOs, and their IT teams trust us
            with their data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="border border-gray-700 rounded p-8">
            <Shield className="w-10 h-10 text-zapier-orange mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Enterprise-grade security with SOC 2 & SOC 3 compliance
            </h3>
            <p className="text-sm text-gray-400">
              Meet even the most stringent security requirements
            </p>
          </div>

          <div className="border border-gray-700 rounded p-8">
            <Lock className="w-10 h-10 text-zapier-orange mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              GDPR & CCPA Compliance
            </h3>
            <p className="text-sm text-gray-400">
              Your data stays private and under your control. Always.
            </p>
          </div>

          <div className="border border-gray-700 rounded p-8">
            <CheckCircle className="w-10 h-10 text-zapier-orange mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Single sign-on and automated provisioning
            </h3>
            <p className="text-sm text-gray-400">
              Seamless security with SAML-based SSO and SCIM for automated user
              management
            </p>
          </div>

          <div className="border border-gray-700 rounded p-8">
            <Eye className="w-10 h-10 text-zapier-orange mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              End-to-End Observability
            </h3>
            <p className="text-sm text-gray-400">
              Know exactly how your data moves with audit logs, analytics, and
              real-time alerts.
            </p>
          </div>

          <div className="border border-gray-700 rounded p-8">
            <Shield className="w-10 h-10 text-zapier-orange mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              Error Handling & Recovery
            </h3>
            <p className="text-sm text-gray-400">
              Zapier catches issues before they're issues. Keep everything
              on-track with intelligent alerts and AI-powered troubleshooting.
            </p>
          </div>

          <div className="border border-gray-700 rounded p-8">
            <CheckCircle className="w-10 h-10 text-zapier-orange mb-4" />
            <h3 className="text-xl font-semibold mb-3">
              99.99% Uptime & Enterprise SLA
            </h3>
            <p className="text-sm text-gray-400">
              Your mission-critical workflows stay online, with industry-leading
              reliability.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="px-6 py-3.5 bg-zapier-orange text-zapier-cream text-lg font-semibold rounded border border-zapier-orange hover:bg-zapier-orange/90 transition-colors">
            Get started with secure AI automation
          </button>
        </div>
      </div>
    </section>
  );
}
