import { ArrowRight } from "lucide-react"

export default function TestimonialsSection() {
    return (
        <section className="py-24 bg-[#FFFEFB] border-y border-[#ECEAE3]">
            <div className="container mx-auto px-4 md:px-8">
                <div className="mb-16 max-w-3xl">
                    <p className="text-lg md:text-xl font-semibold uppercase tracking-wider text-[#201515] mb-6">
                        LỰC LƯỢNG LAO ĐỘNG 24/7
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#201515] mb-6 leading-tight">
                        Không ngủ, không nghỉ,<br />không sai sót do mệt mỏi
                    </h2>
                    <p className="text-xl md:text-2xl font-medium text-[#201515] leading-relaxed">
                        Đảm nhận các tác vụ lặp lại, quy trình thủ công để giải phóng nhân sự con người.
                    </p>
                </div>

                {/* Zapier-style testimonial layout */}
                <div className="grid md:grid-cols-2 gap-12 items-stretch mb-12">
                    <div className="flex items-center">
                        <img
                            src="/modern-office-cityscape.png"
                            alt="Lực lượng lao động 24/7"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>

                    <div className="flex flex-col justify-center">
                        <blockquote className="text-2xl md:text-3xl font-medium text-[#201515] mb-8 leading-relaxed">
                            "Tự động hóa quy trình doanh nghiệp và sử dụng các AI Agent để xử lý toàn bộ các tác vụ vận hành lặp lại, nhằm giải phóng người lãnh đạo và đội ngũ nhân sự cốt cán khỏi công việc sự vụ để tập trung vào các hoạt động chiến lược tạo ra giá trị cao."
                        </blockquote>
                        <p className="text-sm text-[#6B7280] mb-8">
                            — SutraLab AI Automation Platform
                        </p>

                        <div className="flex gap-12 mb-8">
                            <div>
                                <p className="text-4xl font-semibold text-[#FF4F00] mb-1">
                                    30,000+
                                </p>
                                <p className="text-sm text-[#6B7280]">hồ sơ khách hàng được quản lý</p>
                            </div>
                            <div>
                                <p className="text-4xl font-semibold text-[#FF4F00] mb-1">
                                    20+
                                </p>
                                <p className="text-sm text-[#6B7280]">giờ tiết kiệm mỗi tuần</p>
                            </div>
                        </div>

                        <button className="text-[#FF4F00] font-semibold flex items-center gap-2 hover:gap-3 transition-all group w-fit">
                            Đọc câu chuyện đầy đủ
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="text-center">
                    <button className="bg-[#FF4F00] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#E64500] transition-all inline-flex items-center gap-2 group">
                        Xem thêm câu chuyện khách hàng
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    )
}
