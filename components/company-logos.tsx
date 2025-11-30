export default function CompanyLogos() {
  const companies = [

    {
      name: "Omnia",
      logo: "/partners/Omnia.jpg",
    },
    {
      name: "R3volutionad",
      logo: "/partners/R3volutionad.png",
    },
    {
      name: "TLE",
      logo: "/partners/TLE.png",
    },
    {
      name: "Vinalign",
      logo: "/partners/Vinalign.png",
    },
    {
      name: "McKinsey",
      logo: "/partners/mckin.png",
    },
    {
      name: "Wonder Academy",
      logo: "/partners/wonder_academy.png",
    },
  ];

  return (
    <section className="bg-white py-16 border-b border-[#ECEAE3] overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 mb-12">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-medium text-zapier-gray leading-tight">
          Được tin tưởng bởi các đội ngũ tại
        </h2>
      </div>

      <div className="relative w-full">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10"></div>

        <div
          className="flex w-max gap-16 md:gap-32 animate-scroll"
          style={{ animationDirection: 'reverse' }}
        >
          {[...companies, ...companies, ...companies].map((company, index) => {
            const isLarge = ["McKinsey", "Vinalign", "Techcombank", "Omnia"].includes(company.name);
            return (
              <div
                key={`${company.name}-${index}`}
                className="flex items-center justify-center min-w-[150px] md:min-w-[200px] transition-all duration-300 transform hover:scale-110"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className={`${isLarge ? "h-32 md:h-44" : "h-20 md:h-28"} w-auto object-contain`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
