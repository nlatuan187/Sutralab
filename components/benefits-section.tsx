"use client"

import { Clock, DollarSign, BarChart3, TrendingUp, ArrowUpRight, CheckCircle2 } from "lucide-react"

/**
 * Benefits Section - Measurable Results That Matter
 * Thiết kế lại với layout 2x2, style data-driven, dashboard-like
 */
export default function BenefitsSection() {
  const results = [
    {
      icon: Clock,
      value: "80%",
      label: "Tiết Kiệm Thời Gian Xử Lý Thủ Công",
      description: "Giảm thời gian xử lý công việc thủ công từ vài ngày xuống vài phút",
      metric: "5.2 giờ/ngày",
      metricLabel: "Thời gian tiết kiệm trung bình",
      trend: "+12%",
      trendLabel: "So với quý trước",
      color: "emerald",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500"
    },
    {
      icon: DollarSign,
      value: "300%",
      label: "ROI Trung Bình Trong 6 Tháng",
      description: "Khách hàng thấy ROI dương trong vòng 6 tháng đầu triển khai",
      metric: "₫2.8 tỷ",
      metricLabel: "Lợi nhuận tăng thêm/năm",
      trend: "+45%",
      trendLabel: "Tăng trưởng so với năm trước",
      color: "blue",
      gradient: "from-blue-500 via-cyan-500 to-sky-500"
    },
    {
      icon: BarChart3,
      value: "150%",
      label: "Tăng Tỷ Lệ Chuyển Đổi Khách Hàng",
      description: "Tăng tỷ lệ chuyển đổi khách hàng tiềm năng nhờ tự động hóa CSKH",
      metric: "1,240 khách hàng",
      metricLabel: "Số lượng khách hàng chuyển đổi/tháng",
      trend: "+28%",
      trendLabel: "Tăng so với tháng trước",
      color: "purple",
      gradient: "from-purple-500 via-violet-500 to-fuchsia-500"
    },
    {
      icon: TrendingUp,
      value: "24/7",
      label: "Hỗ Trợ Khách Hàng Tự Động",
      description: "Hệ thống hoạt động liên tục, không nghỉ, xử lý mọi yêu cầu khách hàng",
      metric: "98.5%",
      metricLabel: "Tỷ lệ hài lòng khách hàng",
      trend: "+5.2%",
      trendLabel: "Cải thiện so với trước",
      color: "orange",
      gradient: "from-orange-500 via-amber-500 to-yellow-500"
    }
  ]

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; border: string; light: string }> = {
      emerald: {
        bg: "bg-emerald-500/10",
        text: "text-emerald-600",
        border: "border-emerald-200",
        light: "bg-emerald-50"
      },
      blue: {
        bg: "bg-blue-500/10",
        text: "text-blue-600",
        border: "border-blue-200",
        light: "bg-blue-50"
      },
      purple: {
        bg: "bg-purple-500/10",
        text: "text-purple-600",
        border: "border-purple-200",
        light: "bg-purple-50"
      },
      orange: {
        bg: "bg-orange-500/10",
        text: "text-orange-600",
        border: "border-orange-200",
        light: "bg-orange-50"
      }
    }
    return colors[color] || colors.blue
  }

  return (
    <section className="py-24 bg-white relative overflow-visible border-t border-[#ECEAE3]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl overflow-visible">
        {/* Section Header - Minimalist */}
        <div className="text-center space-y-4 mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#0F172A] mb-4 leading-tight">
            Kết Quả Đo Lường Được
          </h2>
          <p className="text-xl md:text-2xl text-[#64748B] leading-relaxed font-light">
            Khách hàng của chúng tôi thấy tác động ngay lập tức đến lợi nhuận
          </p>
        </div>

        {/* Results Grid - 2x2 Layout */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto overflow-visible">
          {results.map((result, index) => {
            const Icon = result.icon
            const colors = getColorClasses(result.color)
            
            return (
              <article
                key={result.label}
                className="group relative h-full"
              >
                {/* Large Card - Data Dashboard Style */}
                <div
                  className={`
                    relative flex flex-col h-full rounded-2xl border-2 ${colors.border}
                    bg-white shadow-lg
                    overflow-visible
                    transition-all duration-500
                    hover:shadow-2xl hover:-translate-y-1
                  `}
                >
                  {/* Top Section - Icon + Main Value */}
                  <div className={`p-10 ${colors.light} border-b ${colors.border}`}>
                    <div className="flex items-start justify-between mb-8">
                      <div className={`flex h-16 w-16 items-center justify-center rounded-xl ${colors.bg} border ${colors.border}`}>
                        <Icon className={`w-8 h-8 ${colors.text}`} />
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border ${colors.border} shadow-sm">
                        <ArrowUpRight className={`w-4 h-4 ${colors.text}`} />
                        <span className={`text-sm font-bold ${colors.text}`}>{result.trend}</span>
                      </div>
                    </div>
                    
                    {/* Main Value */}
                    <div className="mb-4">
                      <h3 className={`text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r ${result.gradient} mb-2 break-words`}>
                        {result.value}
                      </h3>
                          <p className="text-xl font-medium text-[#0F172A] leading-tight break-words">
                            {result.label}
                          </p>
                    </div>
                  </div>

                  {/* Bottom Section - Details */}
                  <div className="p-10 bg-white flex-1 flex flex-col overflow-visible">
                    <p className="text-[#475569] leading-relaxed mb-8 text-lg flex-shrink-0">
                      {result.description}
                    </p>

                    {/* Metrics Row */}
                    <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100 mt-auto overflow-visible">
                      <div className="pr-4 overflow-visible" style={{ minHeight: '100px', paddingBottom: '1.5rem' }}>
                        {/* Tách số và đơn vị để hiển thị cùng dòng */}
                        {result.metric.includes('giờ/ngày') ? (
                          <div 
                            className="flex items-baseline gap-2 mb-3 overflow-visible" 
                            style={{ 
                              lineHeight: '2.2',
                              paddingBottom: '2.5rem',
                              minHeight: '4.5rem',
                              overflow: 'visible'
                            }}
                          >
                            <span 
                              className={`text-3xl font-bold ${colors.text} flex-shrink-0`} 
                              style={{ lineHeight: '1.2' }}
                            >
                              5.2
                            </span>
                            <span 
                              className={`text-2xl font-bold ${colors.text} overflow-visible`} 
                              style={{ 
                                lineHeight: '2.2',
                                paddingBottom: '1rem',
                                paddingTop: '0.25rem',
                                display: 'inline-block',
                                overflow: 'visible'
                              }}
                            >
                              giờ/ngày
                            </span>
                          </div>
                        ) : (
                          <p className={`text-3xl font-bold ${colors.text} mb-2 break-words leading-[1.6] pt-1 pb-4`} style={{ lineHeight: '1.6' }}>
                            {result.metric}
                          </p>
                        )}
                        <p className="text-sm text-[#64748B] uppercase tracking-wide font-medium break-words leading-relaxed">
                          {result.metricLabel}
                        </p>
                      </div>
                      <div className="text-right min-w-0 flex flex-col items-end">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-50 border border-green-200 mb-2 flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm font-semibold text-green-700 whitespace-nowrap">Đã Xác Minh</span>
                        </div>
                        <p className="text-xs text-[#64748B] break-words text-right">
                          {result.trendLabel}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${result.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-50 border border-gray-200">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <p className="text-sm text-[#475569]">
              <span className="font-semibold text-[#0F172A]">Dữ liệu thực tế</span> từ hơn 50+ doanh nghiệp đã triển khai hệ thống AI của SutraLab
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
