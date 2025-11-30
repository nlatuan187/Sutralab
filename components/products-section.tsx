import { ArrowRight, Zap, Workflow, Bot, Shirt, PenTool } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

/**
 * Products Section - Một Số Những Case Study Đã Triển Khai
 * Single column layout with demo images and detailed explanations
 */
const caseStudies = [
  {
    title: "MARKIFY",
    subtitle: "Phòng Marketing AI",
    description: "Cắt giảm 50-70% thời gian sản xuất nội dung và quản lý đa kênh",
    detailedDescription: "Tự động tạo hàng trăm video chất lượng 2K mỗi ngày, lên kế hoạch đăng bài cả năm, và đăng tải tự động lên tất cả nền tảng. AI hỗ trợ tạo nội dung từ nhiều nguồn với giao diện thân thiện.",
    examples: [
      "Tạo video tự động từ template và nguồn dữ liệu",
      "Lên kế hoạch đăng bài trước cả năm",
      "Đăng tải tự động lên Facebook, Instagram, TikTok, YouTube"
    ],
    demoImage: "/MARKIFY/Automatically upload to all platform.png",
    buttonText: "MARKIFY",
    href: "/markify",
    bgGradient: "from-blue-600 via-cyan-500 to-blue-400",
    bgPattern: "blue-cyan",
    icon: PenTool,
    highlight: "Tự động hóa Marketing & CSKH"
  },
  {
    title: "FLOWHUB",
    subtitle: "Đối soát công nợ & SOP",
    description: "Tiết kiệm chi phí tương đương 2-3 nhân sự Admin",
    detailedDescription: "Hệ thống tự động thu thập tri thức từ tin nhắn và file, tạo chatbot trả lời tức thời, và tự động nhắc nhở tiến độ dự án. Khác biệt với CRM truyền thống - chỉ cần nhắn tin bình thường.",
    examples: [
      "Thu thập tri thức tự động từ chat và file",
      "Chatbot trả lời mọi câu hỏi về công ty",
      "Tự động nhắc nhở và giục tiến độ dự án"
    ],
    demoImage: "/FLOWHUB/CỔNG NẠP TRI THỨC ĐA PHƯƠNG THỨC.png",
    buttonText: "FLOWHUB",
    href: "/flowhub",
    bgGradient: "from-blue-500 via-blue-400 to-sky-300",
    bgPattern: "blue-sky",
    icon: Workflow,
    highlight: "Tự động hóa Quy trình Vận hành"
  },
  {
    title: "EXECUMATE",
    subtitle: "Trợ lý CEO",
    description: "Tiết kiệm 5 giờ mỗi ngày khỏi việc xử lý tin nhắn và sự vụ thủ công",
    detailedDescription: "AI phân tích hàng trăm tin nhắn cùng lúc, tự động tạo todo list và lịch hẹn, quản lý công việc thông minh. CEO có thể hỏi AI bất cứ chi tiết nào về dự án.",
    examples: [
      "Phân tích và trả lời hàng trăm tin nhắn tự động",
      "Tạo todo list và lịch hẹn từ tin nhắn",
      "Báo cáo chi tiết cho CEO về mọi dự án"
    ],
    demoImage: "/EXECUMATE/AI Phân tích hàng trăm tin nhắn cùng lúc và trả lời.png",
    buttonText: "EXECUMATE",
    href: "/execumate",
    bgGradient: "from-sky-400 via-blue-500 to-cyan-400",
    bgPattern: "sky-blue",
    icon: Bot,
    highlight: "Trợ lý Điều hành cho Lãnh đạo"
  },
  {
    title: "AI FASHION",
    subtitle: "Studio ảo",
    description: "Rút ngắn thời gian ra mắt bộ sưu tập từ 3-6 tháng xuống chỉ còn vài giờ",
    detailedDescription: "Tạo bộ sưu tập thời trang ảo với AI, khách hàng chỉ cần upload ảnh mặt là tự động ướm thử. Không cần studio thật, không cần model, tiết kiệm chi phí và thời gian.",
    examples: [
      "Tạo bộ sưu tập 3D từ sketch",
      "Khách hàng ướm thử tự động bằng AI",
      "Ra mắt bộ sưu tập trong vài giờ thay vì 3-6 tháng"
    ],
    demoImage: "/AI FASHION/Studio.png",
    buttonText: "AI FASHION",
    href: "/ai-fashion",
    bgGradient: "from-blue-600 via-cyan-500 to-blue-400",
    bgPattern: "blue-cyan",
    icon: Shirt,
    highlight: "Studio số hóa cho ngành thời trang"
    }
]

export function ProductsSection() {
  return (
    <section
      id="products"
      className="py-32 relative overflow-hidden border-t border-[#ECEAE3]"
    >
      {/* Background gradient - xanh nước biển tương tự Hero Section */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-100 via-blue-100 to-sky-100 z-0"></div>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-blue-200/60 via-cyan-200/50 to-teal-200/60 z-0"></div>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-bl from-sky-100/30 via-cyan-100/20 to-blue-100/30 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#201515] mb-6 leading-tight">
            Một Số Những Case Study Đã Triển Khai
          </h2>
          <p className="text-xl text-[#6B7280] leading-relaxed">
            Những dự án thành công đã được triển khai
          </p>
        </div>

        {/* Single Column Layout - One product per line with demo */}
        <div className="space-y-12 max-w-7xl mx-auto">
          {caseStudies.map((caseStudy, index) => {
            const Icon = caseStudy.icon
            const isEven = index % 2 === 0

            return (
              <Link
                key={caseStudy.title}
                href={caseStudy.href}
                className="group block"
              >
                <div className={`
                  relative w-full rounded-[2.5rem] overflow-hidden
                  bg-gradient-to-br ${caseStudy.bgGradient}
                  transition-all duration-500
                  hover:scale-[1.01] hover:shadow-2xl
                  border border-white/20
                  shadow-xl
                `}>
                  {/* Background Pattern Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${caseStudy.bgGradient}`}></div>
                  {(caseStudy.bgPattern === "blue-cyan" || caseStudy.bgPattern === "blue-sky" || caseStudy.bgPattern === "sky-blue") && (
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
                    }}></div>
                  )}

                  {/* Content - Horizontal Layout */}
                  <div className={`relative z-10 flex flex-col lg:flex-row ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Text Content */}
                    <div className="flex-1 p-8 lg:p-12 text-white flex flex-col justify-center">
                      {/* Orange Pill Button */}
                      <div className="mb-6">
                        <div className="inline-flex items-center px-6 py-2 rounded-full bg-[#FF4F00] text-white font-semibold text-sm shadow-lg hover:bg-[#E64500] transition-colors">
                          {caseStudy.buttonText}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
                        {caseStudy.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="text-lg md:text-xl text-white/90 mb-4 font-medium">
                        {caseStudy.subtitle}
                      </p>

                      {/* Short Description */}
                      <p className="text-base text-white/80 mb-4 leading-relaxed">
                        {caseStudy.description}
                      </p>

                      {/* Detailed Description */}
                      <p className="text-sm md:text-base text-white/75 mb-6 leading-relaxed">
                        {caseStudy.detailedDescription}
                      </p>

                      {/* Examples */}
                      <div className="mb-6 space-y-2">
                        {caseStudy.examples.map((example, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-cyan-300 rounded-full mt-2 shrink-0" />
                            <span className="text-sm text-white/80">{example}</span>
                          </div>
                        ))}
                      </div>

                      {/* Highlight Badge */}
                      <div className="inline-flex items-center px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 w-fit">
                        <span className="text-sm font-semibold text-white">
                          {caseStudy.highlight}
                        </span>
                      </div>

                      {/* Icon decoration */}
                      <div className="absolute bottom-8 right-8 opacity-20 hidden lg:block">
                        <Icon className="w-24 h-24 text-white" />
                      </div>
                    </div>

                    {/* Demo Image */}
                    <div className="flex-1 p-8 lg:p-12 flex items-center justify-center bg-white/5 backdrop-blur-sm">
                      <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-white/10">
                        <Image
                          src={caseStudy.demoImage}
                          alt={`${caseStudy.title} Demo`}
                          fill
                          className="object-contain p-4"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}
