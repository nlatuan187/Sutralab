import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import { CheckCircle2, Clock, Users, TrendingUp, Zap, MessageSquare, Workflow, Database, Calendar, ListChecks, ImageIcon, FileText } from 'lucide-react'
import HeroGeometric from "@/components/hero-geometric"
import { FloatingChatButtons } from "@/components/floating-chat-buttons"

export default function FlowhubPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Header />

      {/* Hero Section */}
      <HeroGeometric
        title1="FLOWHUB"
        title2="Tự Động Hóa"
        description="Hệ thống quản trị doanh nghiệp thông minh - Khác biệt hoàn toàn với CRM truyền thống"
      />

      {/* Product Description */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 lg:p-10 border border-blue-200 shadow-lg">
              <div className="space-y-6 text-gray-800">
                <p className="text-lg md:text-xl leading-relaxed">
                  <span className="font-bold text-blue-700">Hệ thống này khác với những hệ thống CRM khác:</span> Người dùng chỉ cần nhắn tin bình thường, AI sẽ tự động thu thập tất cả các file và tin nhắn để làm dữ liệu.
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  <span className="font-bold text-blue-700">Bảo mật tối đa:</span> Tất cả các tài liệu đều được bảo mật ở server riêng được sở hữu bởi doanh nghiệp, đảm bảo an toàn tuyệt đối cho dữ liệu của bạn.
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  <span className="font-bold text-blue-700">Tự động hóa thông minh:</span> AI sẽ tự động nhắc nhở, giục tiến độ, chuyển task và quản lý công việc một cách thông minh.
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  <span className="font-bold text-blue-700">Quản lý chi tiết:</span> Leader và CEO có thể hỏi AI bất cứ chi tiết nhỏ của từng dự án, nhận được câu trả lời chính xác và tức thời.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Value Proposition */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-500 via-blue-400 to-sky-300">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
                TỐI ƯU THỜI GIAN.<br />
                LÀM CHỦ CHIẾN LƯỢC
              </h2>

              <div className="max-w-4xl mx-auto space-y-8">
                <div className="flex gap-4 justify-center">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-3xl font-bold">01</span>
                  </div>
                  <div className="text-left">
                    <p className="text-lg leading-relaxed text-white">
                      Giới thiệu FLOWHUB - Hệ điều hành Vận hành Doanh nghiệp bằng Trí tuệ Nhân tạo.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 justify-center">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-3xl font-bold">02</span>
                  </div>
                  <div className="text-left">
                    <p className="text-lg leading-relaxed text-white">
                      Khắc phục những hạn chế về thời gian và tài nguyên của đội vận hành truyền thống.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 justify-center">
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-3xl font-bold">03</span>
                  </div>
                  <div className="text-left">
                    <p className="text-lg leading-relaxed text-white">
                      Mở ra kỷ nguyên mới của hiệu suất và đổi mới.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              <Image
                src="/FLOWHUB/Hệ thống tự động soát duyệt tiến độ các dự án và thúc giục từng thành viên.png"
                alt="Flowhub Product Interface"
                width={1800}
                height={1400}
                className="rounded-2xl w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-950">
              TRƯỚC VÀ SAU DÙNG FLOWHUB
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-200">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-950">
                  TĂNG TỐC ĐỘ (Time-Saving)
                </h3>
                <div className="space-y-3 text-left">
                  <p className="text-slate-700 leading-relaxed">
                    Ước tính sau khi sử dụng FLOWHUB, tiết kiệm <span className="font-bold text-blue-600">5 giờ/ngày</span> nhờ tự động hóa.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-50 to-white border-emerald-200">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-950">
                  TỐI ƯU CHI PHÍ (Cost Efficiency)
                </h3>
                <div className="space-y-3 text-left">
                  <p className="text-slate-700 leading-relaxed">
                    Giảm tải công việc của <span className="font-bold text-emerald-600">3 nhân sự vận hành ~</span> tiết kiệm <span className="font-bold text-emerald-600">30 triệu VNĐ/tháng</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-200">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-950">
                  CẢI THIỆN HÀNH TRÌNH KHÁCH HÀNG
                </h3>
                <div className="space-y-3 text-left">
                  <p className="text-slate-700 leading-relaxed">
                    Tốc độ phản hồi khách hàng tăng tối <span className="font-bold text-purple-600">20%</span> so với quy trình cũ, nâng cao tỷ lệ chốt sale thành công.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              THE FEATURES
            </h2>
            <p className="text-2xl text-blue-50">
              FLOWHUB: Các Tính năng Cốt lõi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6">
                  <span className="text-4xl font-bold text-white">01</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-950">
                  CỔNG NẠP TRI THỨC ĐA DẠNG
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Toàn bộ nguồn tri thức công ty được kết nối và quản lý trên một giao diện web an toàn, cho phép toàn quyền kiểm soát dữ liệu trên nền tảng của mình.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6">
                  <span className="text-4xl font-bold text-white">02</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-950">
                  TRỢ LÝ CHATBOT
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Giao diện chat đơn giản, nhân viên đặt câu hỏi bằng ngôn ngữ tự nhiên. AI tự động tổng hợp và truy vấn thông tin từ nguồn dữ liệu đã nạp, đưa ra câu trả lời chính xác.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center mb-6">
                  <span className="text-4xl font-bold text-white">03</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-950">
                  QUẢN LÝ CÔNG VIỆC
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Tự động Nhận diện & Tạo Checklist từ tài liệu quy trình. Tự động Tạo & Xác nhận Lịch hẹn. Tự động Nhận diện & Lưu trữ hình ảnh, tin nhắn thoại, báo cáo và gán thẻ theo thời gian, ngữ cảnh.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Multi-platform Integration */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-950 leading-tight text-center">
                  CỔNG NẠP TRI THỨC ĐA PHƯƠNG THỨC
                </h2>

                <div className="max-w-4xl mx-auto space-y-6 mb-12">
                  <div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4 text-center">
                      <span className="font-bold">Lưu trữ và kết nối</span> toàn bộ kiến thức của chủ tài khoản cung cấp (Knowledge Library)
                    </p>
                  </div>

                  <div>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4 text-center">
                      Khả năng đọc & phân tích dữ liệu ở <span className="font-bold">nhiều định dạng:</span>
                    </p>
                    <ul className="space-y-3 max-w-2xl mx-auto">
                      <li className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                        <span className="text-slate-700">
                          <span className="font-bold">Tài liệu tĩnh:</span> PDF (quy trình), Word (hướng dẫn), Excel (bảng giá, mã lỗi)...
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Database className="w-5 h-5 text-blue-600 shrink-0 mt-1" />
                        <span className="text-slate-700">
                          <span className="font-bold">Nguồn dữ liệu động:</span> Google sheet (vd: file quản lý tồn kho, Các kênh chat Zalo được chỉ định (đọc báo cáo hàng ngày)
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8">
                    <p className="text-slate-950 font-semibold leading-relaxed text-center">
                      Tương tác thông qua một giao diện web an toàn, bảo mật và đơn giản. Tối ưu thời gian học & làm quen với công cụ
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 lg:p-10 border border-blue-200 shadow-xl">
                <Image
                  src="/FLOWHUB/CỔNG NẠP TRI THỨC ĐA PHƯƠNG THỨC.png"
                  alt="Cổng nạp tri thức đa phương thức"
                  width={1600}
                  height={1200}
                  className="rounded-2xl w-full h-auto object-contain shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Assistant */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-500 via-cyan-500 to-sky-400">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
                TRỢ LÝ CHATBOT - HỎI ĐÁP TỨC THÌ
              </h2>

              <div className="max-w-4xl mx-auto space-y-6">
                <div>
                  <p className="text-lg leading-relaxed mb-6 text-white">
                    Giải quyết triệt để điểm ma sát lớn nhất trong quy trình vận hành: <span className="font-bold">lãng phí thời gian cho tác vụ lặp lại.</span>
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <MessageSquare className="w-6 h-6 mb-2 mx-auto" />
                    <span className="text-base leading-relaxed text-white text-center block">
                      Giao diện chat <span className="font-bold">đơn giản</span> và <span className="font-bold">quen thuộc</span>
                    </span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <Zap className="w-6 h-6 mb-2 mx-auto" />
                    <span className="text-base leading-relaxed text-white text-center block">
                      Đặt câu hỏi bằng <span className="font-bold">ngôn ngữ tự nhiên</span>
                    </span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <Database className="w-6 h-6 mb-2 mx-auto" />
                    <span className="text-base leading-relaxed text-white text-center block">
                      <span className="font-bold">AI tự động phân tích</span> và trả lời chính xác
                    </span>
                  </div>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mt-8 border border-white/30">
                  <p className="text-lg font-semibold leading-relaxed text-white text-center">
                    Chuẩn hóa quy trình, giảm thời gian chết và sai sót nghiệp vụ, từ đó <span className="font-bold">tối ưu Hành trình Khách hàng</span> bằng trải nghiệm vượt trội.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              <Image
                src="/FLOWHUB/Người dùng hỏi bất cứ câu gì về công ty hệ thống cũng sẽ trả lời.png"
                alt="Chatbot Real-time Response"
                width={1800}
                height={1400}
                className="rounded-2xl w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Task Management */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-950 leading-tight">
                QUẢN LÝ CÔNG VIỆC
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto">
                Chấm dứt hoàn toàn các công việc thủ công. <span className="font-bold">Tập trung vào các hoạt động tạo ra giá trị cao.</span>
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-200">
                <ListChecks className="w-8 h-8 text-blue-600 mb-3" />
                <p className="text-slate-950 font-semibold mb-1">AI tạo và nhắc sự kiện</p>
                <p className="text-slate-700 text-sm">trong calendar chung từ đề nghị của người dùng</p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-200">
                <CheckCircle2 className="w-8 h-8 text-blue-600 mb-3" />
                <p className="text-slate-950 font-semibold mb-1">AI có thể trích xuất các checklist</p>
                <p className="text-slate-700 text-sm">và trả về dưới dạng văn bản.</p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5 border border-blue-200">
                <ImageIcon className="w-8 h-8 text-blue-600 mb-3" />
                <p className="text-slate-950 font-semibold mb-1">AI gán tag</p>
                <p className="text-slate-700 text-sm">hình ảnh, tin nhắn thoại, báo cáo theo <span className="font-bold">dữ liệu thời gian, ngữ cảnh.</span></p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl p-6 mb-12 max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed text-center">
                Giải phóng nguồn lực tương tác cơ bản, loại bỏ đồ trễ và tăng tính kỷ luật lưu trữ dữ liệu tại điểm phát sinh.
              </p>
            </div>

            <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-950 mb-8 text-center">Đặt Lịch</h3>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 lg:p-10 border border-blue-200 shadow-xl">
                    <Image
                      src="/FLOWHUB/Đặt lịch VN.png"
                      alt="Task Management - Scheduling"
                      width={1600}
                      height={1200}
                      className="rounded-2xl w-full h-auto object-contain shadow-lg"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-950 mb-8 text-center">Theo Dõi Tiến Độ Dự Án</h3>
                  <div className="space-y-8">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 lg:p-10 border border-blue-200 shadow-xl">
                      <Image
                        src="/FLOWHUB/Hệ thống tự động soát duyệt tiến độ các dự án và thúc giục từng thành viên.png"
                        alt="Task Management - Project Progress 1"
                        width={1600}
                        height={1200}
                        className="rounded-2xl w-full h-auto object-contain shadow-lg"
                      />
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 lg:p-10 border border-blue-200 shadow-xl">
                      <Image
                        src="/FLOWHUB/Hệ thống tự động soát duyệt tiến độ các dự án và thúc giục từng thành viên 2.png"
                        alt="Task Management - Project Progress 2"
                        width={1600}
                        height={1200}
                        className="rounded-2xl w-full h-auto object-contain shadow-lg"
                      />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              "NỖI ĐAU" CỦA QUY TRÌNH CŨ
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">LÃNG PHÍ DO LẶP LẠI:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 shrink-0" />
                      <span className="text-white">Liên tục tìm/tra cứu tài liệu</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 shrink-0" />
                      <span className="text-white">Trả lời các câu hỏi tương tự nhau, lãng phí tri thức</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white">PHẢN HỒI CHẬM:</h3>
                  <p className="leading-relaxed text-white">
                    Hiệu quả xử lý đơn hàng thấp khi KTV phải thường xuyên kiểm tra thông tin trước khi báo khách
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-5xl font-bold mb-4 text-cyan-400">30 triệu</div>
                <div className="text-xl mb-2">CHI PHÍ NHÂN</div>
                <div className="text-xl">SỰ VẬN HÀNH</div>
                <div className="text-lg text-cyan-300">HÀNG THÁNG</div>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold mb-4 text-cyan-400">5 - 7 tiếng</div>
                <div className="text-xl mb-2">THỜI GIAN</div>
                <div className="text-xl">TÌM KIẾM</div>
                <div className="text-lg text-cyan-300">THÔNG TIN</div>
              </div>

              <div className="text-center">
                <div className="text-5xl font-bold mb-4 text-cyan-400">10% - 15%</div>
                <div className="text-xl mb-2">TỶ LỆ ĐƠN</div>
                <div className="text-xl">LỖI DO SAI</div>
                <div className="text-lg text-cyan-300">SÓT CỦA KTV</div>
              </div>
            </div>

            <div className="mt-12 bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">QUẢN LÝ RỜI RẠC:</h3>
              <p className="text-lg leading-relaxed">
                Checklist nghiêm thu, lịch hẹn được quản lý thủ công, nguy cơ bỏ sót cao
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Views Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Product View
            </h2>
            <p className="text-xl text-blue-50">
              Trải nghiệm giao diện thực tế của FLOWHUB
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-3wltqmBHV0SCHmLDKqIUfs9fzT4DjX.png"
                alt="Flowhub Product View - Project Management"
                width={1200}
                height={800}
                className="rounded-xl w-full"
              />
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-gt2Do71EklNs80MHF2dFpLNXeC136y.png"
                alt="Flowhub Product View - CEO Dashboard"
                width={1200}
                height={800}
                className="rounded-xl w-full"
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
