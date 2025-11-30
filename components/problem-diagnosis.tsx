"use client"

import Image from "next/image"
import { AlertTriangle, BarChart2, Clock, DollarSign, FileX, Users, Zap } from "lucide-react"

/**
 * Problem Diagnosis Section - Những điểm nghẽn đang kìm hãm doanh nghiệp của bạn
 * Thiết kế lại phần sau tiêu đề với layout cao cấp: thẻ vấn đề + số liệu + ngữ cảnh cho CEO.
 */
export default function ProblemDiagnosis() {
  // High‑level pain points with supporting metrics so CEO thấy rõ "giá phải trả"
  const problems = [
    {
      icon: DollarSign,
      badge: "Chi phí",
      title: "Chi phí nhân sự phình to nhưng hiệu quả không tăng",
      description:
        "Nhân sự làm các công việc lặp lại: nhập liệu, báo cáo, xử lý giấy tờ... Bộ máy ngày càng cồng kềnh nhưng biên lợi nhuận không cải thiện.",
      metrics: [
        { label: "Ngân sách đang lãng phí mỗi năm", value: "₫2.5–4.2 tỷ", icon: BarChart2 },
        { label: "Tỷ lệ công việc có thể tự động hóa", value: "40–60%", icon: Zap },
      ],
      // Dùng tông xanh/teal chủ đạo để thống nhất với hero, giảm cảm giác "báo động đỏ"
      color: "from-cyan-500/8 via-sky-400/5 to-teal-400/10",
      accent: "from-cyan-500 to-teal-400",
      image: "/Chi phí nhân sự phình to.png", // Ảnh minh họa: hệ thống bánh răng với vết nứt
    },
    {
      icon: Clock,
      badge: "Thời gian CEO",
      title: "CEO sa lầy vào vi quản lý, không còn thời gian cho chiến lược",
      description:
        "Thay vì thiết kế tương lai cho doanh nghiệp, phần lớn thời gian của lãnh đạo bị kẹt trong họp hành, duyệt việc và \"chữa cháy\" vận hành.",
      metrics: [
        { label: "Thời gian lãnh đạo dành cho vận hành", value: "≈ 70%", icon: Clock },
        { label: "Số quyết định chiến lược bị trì hoãn", value: "Liên tục", icon: AlertTriangle },
      ],
      color: "from-sky-500/8 via-cyan-400/5 to-blue-500/10",
      accent: "from-sky-500 to-blue-500",
      image: "/CEO sa lầy vào vi quản lý.png", // Ảnh minh họa: người đàn ông giữa áp lực thời gian
    },
    {
      icon: FileX,
      badge: "Rủi ro tài chính",
      title: "Đối soát thủ công, lệ thuộc con người & dễ sai sót",
      description:
        "Số liệu nằm rải rác ở Excel, Zalo, email. Mỗi lần đối soát công nợ hoặc lập báo cáo tài chính là một \"chiến dịch thủ công\" đầy rủi ro.",
      metrics: [
        { label: "Sai lệch khi đối soát thủ công", value: "15–25%", icon: FileX },
        { label: "Rủi ro thất thoát / năm", value: "₫12.7 tỷ", icon: DollarSign },
      ],
      color: "from-teal-500/8 via-emerald-400/5 to-cyan-400/10",
      accent: "from-emerald-500 to-teal-500",
      image: "/Đối soát thủ công, lệ thuộc con người.png", // Ảnh minh họa: cây cầu không ổn định với ứng dụng quá tải
    },
  ]

  return (
    <section className="py-32 bg-white relative overflow-visible border-t border-[#ECEAE3]">
      {/* Background decoration - subtle và professional */}
      <div className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at 15% 25%, rgba(59,130,246,0.08) 0%, transparent 50%),
            radial-gradient(circle at 85% 75%, rgba(45,212,191,0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(56,189,248,0.05) 0%, transparent 60%)
          `,
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
        {/* Section Header - Clean và impactful */}
        <div className="text-center mb-24 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-50 via-blue-50 to-teal-50 border-2 border-cyan-200/60 rounded-full mb-10 shadow-sm">
            <AlertTriangle className="w-6 h-6 text-cyan-600" />
            <span className="text-sm font-black text-cyan-700 uppercase tracking-widest">
              Chẩn đoán những điểm nghẽn trọng yếu
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 mb-8 leading-tight tracking-tight">
            Những điểm nghẽn đang kìm hãm doanh nghiệp của bạn
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 leading-relaxed font-medium max-w-4xl mx-auto">
            Thay vì nói chung chung, chúng tôi bóc tách 3 nhóm vấn đề lớn nhất đang âm thầm bào mòn biên lợi nhuận,
            thời gian lãnh đạo và sức khỏe tài chính của doanh nghiệp.
          </p>
        </div>

        {/* Problem Cards - Layout mới: Vertical flow với spacing lớn hơn */}
        <div className="space-y-12 mb-20 max-w-[1600px] xl:max-w-[1800px] 2xl:max-w-[1920px] mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <article
                key={problem.title}
                className="group relative"
              >
                {/* Large Card với layout horizontal trên desktop */}
                <div
                  className={`
                    relative flex flex-col lg:flex-row h-full rounded-3xl border-2 border-slate-200
                    bg-gradient-to-br from-white to-slate-50/50
                    shadow-xl
                    overflow-visible
                    transition-all duration-500
                    hover:-translate-y-1 hover:shadow-2xl hover:border-slate-300
                  `}
                >
                  {/* Left: Icon + Badge + Number + Background Image */}
                  <div className={`lg:w-2/5 xl:w-1/2 p-12 lg:p-16 xl:p-20 bg-gradient-to-br ${problem.color} border-r-0 lg:border-r-2 border-slate-200 rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none flex flex-col justify-between relative overflow-hidden min-h-[400px] lg:min-h-[500px]`}>
                    {/* Background Illustration Image */}
                    {problem.image && (
                      <div className="absolute inset-0 opacity-[0.75] group-hover:opacity-[0.85] transition-opacity duration-500">
                        <Image 
                          src={problem.image} 
                          alt={problem.title}
                          fill
                          className="object-contain object-center"
                          style={{
                            filter: "contrast(1.2) brightness(1.1) saturate(1.2)",
                          }}
                          unoptimized
                        />
                      </div>
                    )}
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-white/90 shadow-xl border-2 border-white`}>
                          <Icon className="w-10 h-10 text-slate-800" />
                        </div>
                        <span className="text-4xl font-black text-slate-400/40">
                          #{String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <span className="inline-flex items-center rounded-full bg-gradient-to-r from-slate-900 to-slate-800 text-white text-base font-black px-6 py-3 shadow-lg">
                        {problem.badge}
                      </span>
                    </div>
                    {/* Accent line */}
                    <div className={`h-2 w-full bg-gradient-to-r ${problem.accent} rounded-full mt-8 relative z-10`} />
                  </div>

                  {/* Right: Content + Metrics */}
                  <div className="lg:w-3/5 xl:w-1/2 p-10 lg:p-12 xl:p-16 flex flex-col">
                    {/* Title + Description */}
                    <div className="mb-10 flex-1">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 leading-tight mb-6">
                        {problem.title}
                      </h3>
                      <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 leading-relaxed font-medium">
                        {problem.description}
                      </p>
                    </div>

                    {/* Metrics Grid - 2 columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t-2 border-slate-200 pt-10">
                      {problem.metrics.map((metric) => {
                        const MetricIcon = metric.icon
                        return (
                          <div
                            key={metric.label}
                            className="rounded-2xl bg-gradient-to-br from-slate-50 to-white px-6 py-5 flex items-start gap-4 border-2 border-slate-200/60 group-hover:border-slate-300 group-hover:shadow-lg transition-all"
                          >
                            <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md border-2 border-slate-200 flex-shrink-0">
                              <MetricIcon className="w-6 h-6 text-slate-700" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                                {metric.value}
                              </p>
                              <p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed font-medium">
                                {metric.label}
                              </p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${problem.accent} opacity-5 group-hover:opacity-10 transition-opacity rounded-3xl`} />
                </div>
              </article>
            )
          })}
        </div>

        {/* Summary Cards - Compact overview */}
        <div className="grid md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl border-2 border-cyan-200/60 shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <DollarSign className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
            <p className="text-xs font-black uppercase tracking-widest text-cyan-700 mb-3">
              Chi phí vận hành
            </p>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed font-bold">
              40–60% quỹ lương đang lãng phí
            </p>
          </div>

          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-3xl border-2 border-sky-200/60 shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Clock className="w-12 h-12 text-sky-600 mx-auto mb-4" />
            <p className="text-xs font-black uppercase tracking-widest text-sky-700 mb-3">
              Thời gian lãnh đạo
            </p>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed font-bold">
              CEO dành 70% thời gian "chữa cháy"
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl border-2 border-teal-200/60 shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
            <p className="text-xs font-black uppercase tracking-widest text-teal-700 mb-3">
              Độ phụ thuộc
            </p>
            <p className="text-base md:text-lg text-slate-700 leading-relaxed font-bold">
              Quy trình "nằm trong đầu" người
            </p>
          </div>
        </div>

        {/* Bottom CTA - Enhanced */}
        <div className="mt-24 flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl border-2 border-slate-200 p-10 md:p-12 shadow-xl">
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium mb-6">
              Nếu bạn thấy doanh nghiệp mình đang gặp ít nhất <span className="font-black text-slate-900">01 trong 3 vấn đề</span> trên,{" "}
              <span className="font-black text-slate-900">
                đây là thời điểm thích hợp để xây lại hệ thống vận hành với AI.
              </span>
            </p>
            <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white px-10 py-5 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 transition-all">
              <Zap className="w-6 h-6 text-yellow-400" />
              <span className="text-lg font-black tracking-wide">
                Bước tiếp theo: Audit quy trình & Thiết kế dây chuyền tự động
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

