import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroGeometric from "@/components/hero-geometric"
import { FloatingChatButtons } from "@/components/floating-chat-buttons"

export default function ExecumatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white pt-20">
      <Header />

      {/* Hero Section */}
      <HeroGeometric
        title1="EXECUMATE"
        title2="Lấy lại thời gian"
        description="Làm chủ chiến lược. AI quản trị dành riêng cho lãnh đạo."
      />

      {/* Problem Section - Messaging & Work Apps */}
      <section className="py-20 bg-gradient-to-br from-sky-400 via-blue-500 to-cyan-400">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">
                ỨNG DỤNG NHẮN TIN & CÔNG VIỆC: NGUỒN GIAO TIẾP CHÍNH & NGUỒN GÂY LÃNG PHÍ TÀI NGUYÊN NGHIÊM TRỌNG
              </h2>

              <div className="space-y-6 mb-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Lãng phí do Lặp lại</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Liên tục tìm/gửi tài liệu (sales kit, profile...).</li>
                    <li>• Trả lời các câu hỏi tương tự nhau, lãng phí trí thức.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4">Quản lý Rời rạc</h3>
                  <ul className="space-y-2 text-lg">
                    <li>• Công việc & lịch hẹn phát sinh từ nhiều nền tảng (Zalo, Teams, Messenger, Email, WhatsApp, Slack...).</li>
                    <li>• Hệ quả: Quản lý to-do, nhắc nhở, xác nhận lịch thủ công, nguy cơ bỏ sót cao.</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="16"
                        fill="none"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="white"
                        strokeWidth="16"
                        fill="none"
                        strokeDasharray="351.86"
                        strokeDashoffset="87.97"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold">73%</span>
                    </div>
                  </div>
                  <p className="text-xl font-semibold">Thời gian trong ngày</p>
                </div>

                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="16"
                        fill="none"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="white"
                        strokeWidth="16"
                        fill="none"
                        strokeDasharray="351.86"
                        strokeDashoffset="66.85"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold">81%</span>
                    </div>
                  </div>
                  <p className="text-xl font-semibold">Các câu hỏi lặp lại</p>
                </div>

                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="16"
                        fill="none"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        stroke="white"
                        strokeWidth="16"
                        fill="none"
                        strokeDasharray="351.86"
                        strokeDashoffset="193.52"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-4xl font-bold">45%</span>
                    </div>
                  </div>
                  <p className="text-xl font-semibold">Giảm khả năng xử lý</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/EXECUMATE/NGUỒN GIAO TIẾP CHÍNH & NGUỒN GÂY LÃNG PHÍ TÀI NGUYÊN.png"
                alt="Messaging & Work Apps Communication"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Quá tải Thông tin</h3>
            <ul className="text-white text-lg space-y-2">
              <li>• Ước tính <strong>5-7 tiếng/ngày</strong> xử lý tin nhắn từ nhiều nền tảng (Zalo, Teams, Messenger, Email, WhatsApp, Slack...).</li>
              <li>• Hệ quả: Xử lý công việc liên tục (real-time), phân mảnh sự tập trung, bỏ lỡ thông tin chiến lược.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-400">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 lg:order-1">
              <Image
                src="/EXECUMATE/Lấy lại thời gian. Làm chủ chiến lược.png"
                alt="ExecuMate Solution"
                width={600}
                height={600}
                className="rounded-2xl"
              />
            </div>

            <div className="text-white order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-balance">
                EXECUMATE: LẤY LẠI THỜI GIAN. LÀM CHỦ CHIẾN LƯỢC
              </h2>

              <div className="space-y-8">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Badge className="bg-white text-blue-600 text-xl px-4 py-2 h-fit">01</Badge>
                      <p className="text-lg leading-relaxed">
                        Giới thiệu EXECUMATE - AI quản trị dành riêng cho lãnh đạo. Ra quyết định tức thì,
                        ngay trên mọi ứng dụng nhắn tin và công việc: Zalo, Microsoft Teams, Messenger, Email, WhatsApp, Slack, Telegram và nhiều nền tảng khác.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Badge className="bg-white text-blue-600 text-xl px-4 py-2 h-fit">02</Badge>
                      <p className="text-lg leading-relaxed">
                        Khắc phục những hạn chế về thời gian và tài nguyên của các CEO truyền thống.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Badge className="bg-white text-blue-600 text-xl px-4 py-2 h-fit">03</Badge>
                      <p className="text-lg leading-relaxed">
                        Mở ra kỷ nguyên mới của hiệu suất và đổi mới.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-blue-600">THE FEATURES</h2>
          <p className="text-2xl text-center mb-16 text-blue-500">EXECUMATE: Các Tính năng Cốt lõi</p>

          <div className="relative">
            <Image
              src="/EXECUMATE/AI Phân tích hàng trăm tin nhắn cùng lúc và trả lời.png"
              alt="ExecuMate Features"
              width={1400}
              height={600}
              className="w-full rounded-2xl"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
              <CardContent className="p-8">
                <div className="text-6xl font-bold text-blue-500 mb-4">01</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">TỰ ĐỘNG HÓA TRI THỨC</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Toàn bộ kiến thức của CEO, C-lvl, Team lead... CEO toàn quyền kiểm soát dữ liệu trên hạ tầng của chính mình.</li>
                  <li>• Ngân hàng tri thức & Tự động Trả lời (Q&A).</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-sky-50 border-blue-200">
              <CardContent className="p-8">
                <div className="text-6xl font-bold text-blue-500 mb-4">02</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">QUẢN LÝ CÔNG VIỆC & LỊCH TRÌNH</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Tự động Nhận diện & Tạo To-do list và thông báo cho chủ tài khoản</li>
                  <li>• Tự động Tạo & Xác nhận Lịch hẹn.</li>
                  <li>• Nhắc nhở Thông minh & Dashboard Tổng quan.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-blue-200">
              <CardContent className="p-8">
                <div className="text-6xl font-bold text-blue-500 mb-4">03</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-900">HỌC 100% VĂN PHONG LEADER</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Học và Bắt chước Văn phong (Tone & Style Learning).</li>
                  <li>• Ghi nhớ Ngữ cảnh Dài hạn (Vector DB).</li>
                  <li>• Hỗ trợ Soạn thảo Thông minh.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Detail 1 */}
      <section className="py-20 bg-gradient-to-br from-sky-100 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">
            Tính Năng Chi Tiết 1: Tự động hóa Tác vụ Tri thức
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <Image
                src="/EXECUMATE/AI Phân tích hàng trăm tin nhắn cùng lúc và trả lời.png"
                alt="Knowledge Automation"
                width={700}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">
                    Clone toàn bộ kiến thức của chủ tài khoản cung cấp (Knowledge Library):
                  </h3>
                  <ul className="space-y-3 text-gray-700 text-lg">
                    <li>• AI nhận diện yêu cầu ("gửi sales kit", "cho anh profile"). Phân tích được tâm lý khách hàng và insights</li>
                    <li>• Tự động đề xuất tài liệu chính xác từ kho dữ liệu (Web Dashboard).</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">
                    Ngân hàng Tri thức (Q&A Bank):
                  </h3>
                  <ul className="space-y-3 text-gray-700 text-lg">
                    <li>• Tự động đề xuất hoặc tự gửi câu trả lời khi phát hiện câu hỏi tương tự theo lịch sử cuộc hội thoại và tâm lý khách hàng</li>
                    <li>• Cả nhân hóa câu trả lời theo văn phong đã học.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Detail 2 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">
            Tính Năng Chi Tiết 2: Quản lý Công việc & Lịch trình
          </h2>

          <div className="mb-12">
            <Image
              src="/EXECUMATE/Quản lý Công việc & Lịch trình.png"
              alt="Task and Schedule Management"
              width={1400}
              height={700}
              className="w-full rounded-2xl shadow-xl"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Image
                    src="/EXECUMATE/Làm todo list tự động.png"
                    alt="Tạo To-do list Tự động - ExecuMate"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-900">
                  Tạo To-do list Tự động
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  AI quét hội thoại, nhận diện hành động ("em A làm B", "nhớ C"), tự động tạo to-do.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-50 to-blue-50">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Image
                    src="/EXECUMATE/Đặt lịch VN.png"
                    alt="Tạo & Xác nhận Lịch hẹn - ExecuMate"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg w-full h-auto mb-4"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-blue-900">
                  Tạo & Xác nhận Lịch hẹn
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  AI nhận diện ý định ("họp", "call"), đề xuất thời gian trống, tạo link họp, gửi lời mời tự động qua nhiều nền tảng
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-sky-50 to-blue-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-900">
                  Nhắc nhở Thông minh
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Tự động nhắc nhở công việc, lịch hẹn qua nhiều kênh: Zalo, Teams, Messenger, Email, WhatsApp, Slack, Google Calendar và các nền tảng khác.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-sky-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-900">
                  Bảng điều khiển (Dashboard)
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Giao diện web tổng quan toàn bộ to-do list và lịch hẹn từ tất cả các nền tảng nhắn tin và công việc.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Detail 3 */}
      <section className="py-20 bg-gradient-to-br from-sky-100 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">
            Tính Năng Chi Tiết 3: Cá nhân hóa Văn phòng & Ghi nhớ Ngữ cảnh
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Image
                src="/EXECUMATE/AI Phân tích hàng trăm tin nhắn cùng lúc và trả lời.png"
                alt="Personalization and Context"
                width={700}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">
                    Ngữ cảnh dài hạn (Vector RAG):
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Lịch sử hội thoại liên quan.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">
                    Ngữ cảnh hẹn:
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Dữ liệu văn phòng mẫu (tài liệu, email) do người dùng cung cấp.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">
                    Hỗ trợ Soạn thảo Thông minh:
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {'Người dùng ra lệnh bằng gạch đầu dòng -> AI soạn thảo văn bản dài (email, tin nhắn) theo đúng văn phong.'}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-100 to-cyan-100">
                <CardContent className="p-8">
                  <p className="text-lg font-semibold text-blue-900">
                    AI phân tích 3 lớp ngữ cảnh để tạo ra câu trả lời tự nhiên nhất:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-700">
                    <li>• Ngữ cảnh ngắn hạn: 20 tin nhắn gần nhất.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-20 bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-400">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            TRƯỚC VÀ SAU DÙNG EXECUMATE
          </h2>

          <div className="mb-12">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8-vBhDKYdVXMBD1OpIIkXkAhmOzMwKM2.png"
              alt="Before and After ExecuMate"
              width={1400}
              height={600}
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="bg-white rounded-full p-4 shrink-0">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-4">Tiết kiệm thời gian</h3>
                  <p className="text-lg leading-relaxed">
                    Ước tính sau khi sử dụng EXECUMATE, tiết kiệm được 5 giờ mỗi ngày nhờ tự động hóa
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="bg-white rounded-full p-4 shrink-0">
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-4">Tăng năng suất</h3>
                  <p className="text-lg leading-relaxed">
                    EXECUMATE tự động báo cáo và nhắc đầu việc, giúp giảm tỷ lệ bỏ sót công việc xuống 93.33%
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-blue-900 text-balance">
                CAM KẾT VỀ KIẾN TRÚC & BẢO MẬT (SECURITY BY DESIGN)
              </h2>

              <div className="space-y-6">
                <Card className="border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Badge className="bg-blue-600 text-white text-xl px-4 py-2 h-fit">01</Badge>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        <strong>Mô hình Triển khai: Self-Hosting.</strong> Khách hàng toàn quyền kiểm soát dữ liệu trên
                        hạ tầng của chính mình, không bên thứ ba nào có thể xem được data.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Badge className="bg-blue-600 text-white text-xl px-4 py-2 h-fit">02</Badge>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        <strong>Lộ trình Mã hóa (E2EE):</strong> Lên kế hoạch triển khai Mã hóa đầu-cuối sau MVP.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <Badge className="bg-blue-600 text-white text-xl px-4 py-2 h-fit">03</Badge>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        <strong>Không có sự truy cập của con người (Zero Human Access).</strong>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <Image
                src="/EXECUMATE/CAM KẾT VỀ KIẾN TRÚC & BẢO MẬT.png"
                alt="Security Architecture"
                width={700}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>


      <Footer />
      
      {/* Floating Contact Buttons */}
      <FloatingChatButtons />
    </div>
  )
}
