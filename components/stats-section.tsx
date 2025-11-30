import { Clock, DollarSign, CheckCircle2, TrendingUp } from "lucide-react"

/**
 * Stats Section - Trust & Authority
 * Hiển thị 3 benchmark chính đã hoàn thiện cho khách hàng
 * Thiết kế lại với màu sắc và cỡ chữ mới, chuyên nghiệp hơn
 */
export default function StatsSection() {
  const benchmarks = [
    {
      icon: Clock,
      value: "5",
      unit: "giờ/ngày",
      label: "Tiết kiệm cho CEO",
      description: "Giúp lãnh đạo tiết kiệm 5 giờ mỗi ngày khỏi việc xử lý tin nhắn và sự vụ thủ công",
      color: "from-blue-500 via-cyan-500 to-teal-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      iconBg: "from-blue-500 to-cyan-500"
    },
    {
      icon: DollarSign,
      value: "70%",
      unit: "",
      label: "Giảm chi phí vận hành",
      description: "Giảm 70% chi phí vận hành Marketing & Admin",
      color: "from-emerald-500 via-green-500 to-teal-500",
      bgColor: "from-emerald-50 to-green-50",
      borderColor: "border-emerald-200",
      iconBg: "from-emerald-500 to-green-500"
    },
    {
      icon: CheckCircle2,
      value: "99%",
      unit: "",
      label: "Loại bỏ lỗi con người",
      description: "Loại bỏ 99% lỗi con người trong quy trình",
      color: "from-purple-500 via-violet-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      iconBg: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-visible border-t border-[#ECEAE3]">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(59,130,246,0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(16,185,129,0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(139,92,246,0.06) 0%, transparent 60%)
          `,
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/60 rounded-full mb-8 shadow-sm">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-bold text-blue-700 uppercase tracking-wider">
              Kết quả thực tế từ khách hàng
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 mb-6 leading-tight">
            Kết quả thực tế từ khách hàng
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium">
            Những con số benchmark chúng tôi đã hoàn thiện cho các doanh nghiệp đối tác
          </p>
        </div>

        {/* Three Main Benchmarks */}
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto mb-20">
          {benchmarks.map((benchmark, index) => {
            const Icon = benchmark.icon
            return (
              <article
                key={index}
                className="group relative h-full"
              >
                <div
                  className={`
                    relative flex flex-col h-full rounded-3xl border-2 ${benchmark.borderColor}
                    bg-gradient-to-br ${benchmark.bgColor}
                    shadow-xl
                    overflow-visible
                    transition-all duration-500
                    hover:-translate-y-2 hover:shadow-2xl
                    p-10
                  `}
                >
                  {/* Icon */}
                  <div className={`mb-8 w-20 h-20 rounded-2xl bg-gradient-to-br ${benchmark.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  {/* Value - Tách số và đơn vị để hiển thị cùng dòng */}
                  <div className="mb-6 overflow-visible" style={{ minHeight: '120px', paddingBottom: '1.5rem' }}>
                    {benchmark.unit ? (
                      <div className="flex items-baseline gap-3 mb-4" style={{ lineHeight: '2.2', paddingBottom: '2rem' }}>
                        <span className={`text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r ${benchmark.color} leading-none`}>
                          {benchmark.value}
                        </span>
                        <span className={`text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r ${benchmark.color}`} style={{ lineHeight: '2.2', paddingBottom: '1rem', display: 'inline-block' }}>
                          {benchmark.unit}
                        </span>
                      </div>
                    ) : (
                      <div className={`text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r ${benchmark.color} mb-4 leading-tight`}>
                        {benchmark.value}
                      </div>
                    )}
                    
                    {/* Label */}
                    <h3 className="text-2xl md:text-3xl font-medium text-slate-900 mb-4 leading-tight">
                      {benchmark.label}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-base md:text-lg text-slate-700 leading-relaxed font-medium flex-1">
                    {benchmark.description}
                  </p>

                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${benchmark.color} opacity-5 group-hover:opacity-10 transition-opacity rounded-3xl`} />
                </div>
              </article>
            )
          })}
        </div>

        {/* Testimonial Quote */}
        <div className="max-w-5xl mx-auto">
          <div className="relative p-10 md:p-14 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700 shadow-2xl">
            {/* Quote mark decoration */}
            <div className="absolute top-8 left-8 text-7xl font-serif text-cyan-400 opacity-20 leading-none">"</div>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-8 relative z-10 pl-12">
              "Sai sót và chi phí cao trong vận hành không chỉ là lỗi hành chính, đó là sự thất thoát lợi nhuận âm thầm. Chúng tôi thiết lập một tiêu chuẩn chính xác tuyệt đối (Zero-Error Standard), biến quy trình hiện hành thành một 'pháo đài số' bảo vệ dòng tiền và uy tín của bạn 24/7"
            </blockquote>
            <div className="text-slate-300 text-lg md:text-xl font-semibold relative z-10 pl-12">
              — SutraLab Team
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
