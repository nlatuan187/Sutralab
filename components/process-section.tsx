import { Search, FileText, Settings, GraduationCap, CheckCircle2 } from "lucide-react"

/**
 * Process Section - Quy trình Tư vấn 4 Bước
 * Khách hàng mua sự "An tâm" qua quy trình rõ ràng
 */
export default function ProcessSection() {
    const steps = [
        {
            step: "01",
            icon: Search,
            title: "Khảo Sát & Phân Tích",
            subtitle: "Khảo sát hiện trạng",
            desc: "Đội ngũ chuyên gia SutraLab khảo sát thực địa, phỏng vấn các phòng ban, đo lường hiệu suất và xác định điểm nghẽn lớn nhất.",
            details: [
                "Phân tích quy trình vận hành hiện tại (AS-IS)",
                "Lập bản đồ luồng dữ liệu và trách nhiệm",
                "Định lượng mức độ lãng phí nguồn lực",
                "Báo cáo Audit + bản đồ cơ hội tự động hóa"
            ],
            color: "from-blue-500 via-cyan-500 to-teal-500"
        },
        {
            step: "02",
            icon: FileText,
            title: "Thiết Kế Giải Pháp",
            subtitle: "Thiết kế & Blueprint",
            desc: "Xây dựng blueprint hệ thống AI tùy chỉnh, mô tả chi tiết agent, luồng dữ liệu, timeline và ngân sách.",
            details: [
                "Thiết kế kiến trúc hệ thống AI (TO-BE)",
                "Chọn stack công nghệ & AI agents phù hợp",
                "Lập kế hoạch tích hợp với ERP/CRM hiện hữu",
                "Đề xuất roadmap triển khai theo giai đoạn"
            ],
            color: "from-purple-500 via-indigo-500 to-pink-500"
        },
        {
            step: "03",
            icon: Settings,
            title: "Triển Khai & Tích Hợp",
            subtitle: "Triển khai & thử nghiệm",
            desc: "Thi công dây chuyền vận hành tự động, kết nối với hệ thống hiện có, kiểm thử thực chiến và tối ưu.",
            details: [
                "Xây dựng các workflow & AI agents",
                "Tích hợp với hệ thống sẵn có, chuẩn hóa dữ liệu",
                "Thiết lập giám sát hiệu suất, bảo mật",
                "Kiểm thử thực tế & tối ưu vòng lặp"
            ],
            color: "from-cyan-500 via-sky-500 to-blue-500"
        },
        {
            step: "04",
            icon: GraduationCap,
            title: "Đào Tạo & Chuyển Giao",
            subtitle: "Chuyển giao & vận hành",
            desc: "Đào tạo đội ngũ, chuyển giao tài liệu vận hành, kèm theo giai đoạn đồng hành để hệ thống chạy trơn tru.",
            details: [
                "Đào tạo nhân sự theo vai trò (Ops/CEO/IT)",
                "Bàn giao playbook + SOP vận hành hệ thống",
                "Thiết lập quy trình hỗ trợ & bảo trì định kỳ",
                "Cam kết đồng hành cải tiến dài hạn"
            ],
            color: "from-emerald-500 via-lime-500 to-green-500"
        }
    ]

    return (
        <section className="py-24 bg-white border-t border-[#ECEAE3] relative overflow-hidden">
            {/* Vệt gradient mềm phía sau tạo chiều sâu */}
            <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                    background: `
                        radial-gradient(circle at 15% 20%, rgba(59,130,246,0.10) 0%, transparent 45%),
                        radial-gradient(circle at 85% 30%, rgba(236,72,153,0.10) 0%, transparent 50%),
                        radial-gradient(circle at 50% 80%, rgba(16,185,129,0.08) 0%, transparent 60%)
                    `,
                }}
            />

            <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 relative z-10 max-w-[1920px]">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#201515]">
                        Quy Trình Tư Vấn 4 Bước
                    </h2>
                    <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
                        Từ khảo sát đến chuyển giao, chúng tôi đảm bảo quy trình rõ ràng và minh bạch
                    </p>
                </div>

                {/* Timeline dạng đường chạy xuyên suốt, không còn vòng tròn kết nối */}
                <div className="relative max-w-[1800px] mx-auto">
                    <div className="hidden lg:block absolute top-[6.5rem] left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 via-cyan-500 to-green-500 opacity-60" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-8 2xl:gap-12 relative z-10">
                        {steps.map((item) => {
                            const Icon = item.icon
                            return (
                                <article key={item.step} className="group relative h-full">
                                    <div className="relative flex h-full flex-col rounded-[32px] border-2 border-white/80 bg-white/95 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-[#0EA5E9]/40 overflow-hidden">
                                        {/* Accent gradient layer */}
                                        <div className={`absolute inset-x-0 top-0 h-2 bg-gradient-to-r ${item.color}`} />

                                        <div className="flex items-start justify-between px-6 lg:px-8 xl:px-10 pt-8 pb-6">
                                            <div className="flex items-center gap-4 flex-1 min-w-0">
                                                <div
                                                    className={`h-20 w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28 rounded-3xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform flex-shrink-0`}
                                                >
                                                    <Icon className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 text-white" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <span className="text-sm md:text-base lg:text-lg font-semibold text-[#0F172A] uppercase tracking-[0.2em] block mb-2">
                                                        Bước {item.step}
                                                    </span>
                                                    <p className="text-base md:text-lg lg:text-xl font-semibold text-[#6B7280] leading-snug">{item.subtitle}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="px-6 lg:px-8 xl:px-10 pb-8 lg:pb-10 flex-1 flex flex-col space-y-6">
                                            <div className="flex-1 space-y-5">
                                                <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-[#0F172A] leading-tight min-h-[3rem] lg:min-h-[4rem]">
                                                    {item.title}
                                                </h3>
                                                <p className="text-base md:text-lg lg:text-xl text-[#4B5563] leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </div>
                                            <div className="mt-auto border-2 border-[#F1F5F9] rounded-2xl bg-[#F8FAFC]/70 p-6 lg:p-8 space-y-4">
                                                {item.details.map((detail, idx) => (
                                                    <div key={idx} className="flex items-start gap-4">
                                                        <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
                                                        <p className="text-sm md:text-base lg:text-lg text-[#475467] leading-relaxed flex-1">
                                                            {detail}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>

                <div className="mt-16 flex flex-col items-center text-center gap-4">
                    <p className="text-lg text-[#4B5563] max-w-2xl">
                        Mỗi dự án đều bắt đầu từ một buổi <span className="font-semibold text-[#111827]">khảo sát hiện trạng
                        miễn phí</span>, sau đó chúng tôi thiết kế lộ trình triển khai rõ ràng cho từng giai đoạn.
                    </p>
                </div>
            </div>
        </section>
    )
}
