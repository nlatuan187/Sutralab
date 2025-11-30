export default function FinalCTASection() {
  return (
    <section className="bg-zapier-cream py-20 md:py-32 border-t border-zapier-border">
      <div className="max-w-screen-xl mx-auto px-6 md:px-14 text-center">
        <h2 className="text-3xl md:text-5xl font-medium text-zapier-dark mb-8">
          Ready to transform how<br />your enterprise uses AI?
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Join forward-thinking enterprises that trust Zapier for
          mission-critical workflows
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3.5 bg-zapier-orange text-zapier-cream text-lg font-semibold rounded border border-zapier-orange hover:bg-zapier-orange/90 transition-colors">
            Start free with email
          </button>
          <button className="px-6 py-3.5 bg-zapier-cream text-zapier-dark text-lg font-semibold rounded border border-zapier-dark hover:bg-gray-50 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
