import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Check, Clock, DollarSign, Sparkles, Users, Zap, BarChart3, Share2, MessageSquare } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import HeroGeometric from "@/components/hero-geometric"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { FloatingChatButtons } from "@/components/floating-chat-buttons"

export default function MarkifyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-400 pt-20">
      <Header />
      {/* Hero Section */}
      <HeroGeometric
        title1="MARKIFY"
        title2="Tự Động Hóa Marketing"
        description="Hệ Thống Tự Động Hóa Phòng Marketing"
      />

      {/* Inefficiencies Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            TÌNH TRẠNG KÉM HIỆU QUẢ CỦA HỆ THỐNG HIỆN TẠI
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  HIỆU QUẢ VẬN HÀNH KÉM
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Quy trình làm việc bị ảnh hưởng do thiếu sự phối hợp nội bộ. Điều này, kết hợp với các nút thắt thủ công, dẫn đến thời gian phản hồi chậm.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  CHI PHÍ LÀM LẠI CAO & THIẾU ĐỘ TIN CẬY
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nhập liệu và xử lý thủ công góp phần trực tiếp vào tỷ lệ lỗi cao từ 12-18%.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-3xl font-bold mb-2">12%-18%</div>
                  <div className="text-sm font-semibold opacity-90">TỶ LỆ LỖI CAO</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-3xl font-bold mb-2">7 - 9 giờ</div>
                  <div className="text-sm font-semibold opacity-90">THỜI GIAN LÃNG PHÍ / TUẦN</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold mb-2">$10,328.25</div>
                <div className="text-sm font-semibold opacity-90">CHI PHÍ NHÂN SỰ QUÁ MỨC / ĐỘI / THÁNG</div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-4 shadow-2xl">
                <Image
                  src="/MARKIFY/tm_bng_csu_s_m_kha_nhng_g_1761499337947.png"
                  alt="Tình Trạng Kém Hiệu Quả Của Hệ Thống Hiện Tại"
                  width={600}
                  height={400}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            THAY THẾ HOÀN TOÀN PHÒNG MARKETING
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
            <div className="order-2 md:order-1 space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 border border-white/20 shadow-xl">
                <Image
                  src="/MARKIFY/Automatically upload to all platform.png"
                  alt="Tự Động Tải Lên Tất Cả Nền Tảng"
                  width={500}
                  height={700}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-4 border border-white/20 shadow-xl">
                <Image
                  src="/MARKIFY/edited-adjusted-1761404773083.png"
                  alt="Tự Động Hóa Marketing - Góc Nhìn Bổ Sung"
                  width={500}
                  height={400}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Tự Động Hóa Đa Mục Đích</h3>
                  <p className="text-gray-300">
                    Tạo nhiều loại nội dung như video dài, video ngắn (shorts/reels), hình ảnh, carousel và stories phù hợp với tất cả các nền tảng.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Share2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Tự Động Tải Lên & Chia Sẻ</h3>
                  <p className="text-gray-300">
                    Tự động tải lên YouTube, Facebook, Instagram, TikTok, Threads và X để tiết kiệm thời gian vận hành.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Nội Dung AI Chất Lượng Cao</h3>
                  <p className="text-gray-300">
                    Đảm bảo chất lượng nội dung do AI tạo ra đủ tốt để người dùng sử dụng với ít công sức chỉnh sửa.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Tự Động Phản Hồi</h3>
                  <p className="text-gray-300">
                    Tự động phản hồi bình luận và tin nhắn hộp thư đến, cải thiện tương tác khách hàng mà không cần tăng nhân sự.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Diagram */}
      <section className="py-20 bg-gradient-to-b from-blue-500 to-blue-600">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            MARKIFY: TÍNH NĂNG CỐT LÕI
          </h2>

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <Image
                src="/images/5.png"
                alt="Sơ Đồ Tính Năng Cốt Lõi Markify"
                width={1000}
                height={600}
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 border border-white/20 shadow-xl">
                <Image
                  src="/MARKIFY/edited-adjusted-1761405778084.png"
                  alt="Tính Năng Markify - Góc Nhìn 1"
                  width={600}
                  height={400}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-4 border border-white/20 shadow-xl">
                <Image
                  src="/MARKIFY/edited-adjusted-1761411055365.png"
                  alt="Tính Năng Markify - Góc Nhìn 2"
                  width={600}
                  height={400}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 bg-gradient-to-br from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-none p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-6xl font-bold mb-6 opacity-50">01</div>
              <h3 className="text-2xl font-bold mb-4">Tạo Nội Dung Tự Động</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Tự động tạo ra video chất lượng cao, lồng tiếng, nhạc nền và hình minh họa.
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                Hệ thống giúp tự động phân tích và tạo bản nháp nội dung cho nhiều nền tảng (X, Instagram, TikTok, LinkedIn).
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-none p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-6xl font-bold mb-6 opacity-50">02</div>
              <h3 className="text-2xl font-bold mb-4">Đăng Bài Tự Động</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Lên lịch và đăng bài trên nhiều mạng xã hội cùng một lúc.
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                AI hỗ trợ tạo nội dung, đề xuất chú thích, hashtag và thời gian đăng tối ưu để tăng phạm vi tiếp cận. Tự động phản hồi tin nhắn và bình luận.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-none p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-6xl font-bold mb-6 opacity-50">03</div>
              <h3 className="text-2xl font-bold mb-4">Quản Lý Kế Hoạch & Chi Phí</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Tự động quản lý kế hoạch và chi phí marketing.
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                Lập kế hoạch dễ dàng, quản lý nội dung và theo dõi tiến độ, kết hợp với ghi chép chi phí và báo cáo nhanh để giúp kiểm soát ngân sách marketing chặt chẽ.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Views Gallery */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
            GIAO DIỆN SẢN PHẨM
          </h2>

          <div className="space-y-20 max-w-6xl mx-auto">
            {/* Automated Video */}
            <div className="relative">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent mb-4">
                  VIDEO TỰ ĐỘNG
                </h3>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-6">
                  Xem các video được tạo tự động bởi AI với chất lượng chuyên nghiệp
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                  <span className="px-4 py-2 bg-blue-50 rounded-full font-medium">Tự động tạo hàng trăm video mỗi ngày</span>
                  <span className="px-4 py-2 bg-blue-50 rounded-full font-medium">Độ phân giải 2K</span>
                  <span className="px-4 py-2 bg-blue-50 rounded-full font-medium">Độ dài lên đến 1 giờ</span>
                </div>
              </div>
              
              <div className="space-y-16">
                {/* Video 1 - Large featured style */}
                <div className="group relative">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className="relative rounded-2xl overflow-hidden bg-black shadow-2xl">
                      <video
                        className="w-full h-auto"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                      >
                        <source src="/MARKIFY/Video tự động 3.mp4" type="video/mp4" />
                        Trình duyệt của bạn không hỗ trợ video.
                      </video>
                    </div>
                    <div className="mt-6 space-y-2">
                      <h4 className="text-xl font-bold text-gray-900">Video Demo Tự Động Hóa</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Video được tạo hoàn toàn tự động bởi hệ thống AI. Không cần can thiệp thủ công, hệ thống có thể tạo hàng trăm video chất lượng cao mỗi ngày với độ phân giải 2K và độ dài linh hoạt lên đến 1 giờ.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Wonder Academy - Bigger, full width */}
                <div className="group relative">
                  <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-blue-100 hover:border-blue-300">
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black shadow-2xl">
                      <video
                        className="w-full h-auto"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                      >
                        <source src="/MARKIFY/Wonder Academy 1.mp4" type="video/mp4" />
                        Trình duyệt của bạn không hỗ trợ video.
                      </video>
                    </div>
                    <div className="mt-8 space-y-3">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <h4 className="text-2xl font-bold text-gray-900">Video Giáo Dục Tự Động</h4>
                      </div>
                      <p className="text-base text-gray-600 leading-relaxed">
                        Tự động hóa hoàn toàn - Tạo video không giới hạn với chất lượng 2K, độ dài tùy chỉnh từ vài giây đến 1 giờ. Hệ thống có thể sản xuất hàng trăm video giáo dục chất lượng cao mỗi ngày mà không cần can thiệp thủ công.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Galle Video - Bigger, full width */}
                <div className="group relative">
                  <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className="relative rounded-2xl overflow-hidden bg-black shadow-2xl">
                      <video
                        className="w-full h-auto"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                      >
                        <source src="/MARKIFY/Galle video test 1.mp4" type="video/mp4" />
                        Trình duyệt của bạn không hỗ trợ video.
                      </video>
                    </div>
                    <div className="mt-8 space-y-3">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                        <h4 className="text-2xl font-bold text-gray-900">Video Marketing Tự Động</h4>
                      </div>
                      <p className="text-base text-gray-600 leading-relaxed">
                        Hệ thống tự động tạo video với tốc độ nhanh chóng - hàng trăm video mỗi ngày, không cần giám sát. Mỗi video được tạo với độ phân giải 2K và có thể dài lên đến 1 giờ, hoàn toàn tự động.
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Video - Smaller, compact style */}
                <div className="group relative max-w-2xl mx-auto">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-1 shadow-xl">
                    <div className="bg-white rounded-3xl p-5">
                      <div className="relative rounded-xl overflow-hidden bg-black shadow-lg">
                        <video
                          className="w-full h-auto"
                          autoPlay
                          muted
                          loop
                          playsInline
                          controls
                        >
                          <source src="/MARKIFY/WhatsApp Video 2025-10-18 at 21.09.17_46aa20c9.mp4" type="video/mp4" />
                          Trình duyệt của bạn không hỗ trợ video.
                        </video>
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="px-3 py-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold rounded-full">
                            TỰ ĐỘNG
                          </div>
                          <h4 className="text-lg font-bold text-gray-900">Video Ngắn Tự Động</h4>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Tạo video tự động với độ phân giải 2K, độ dài linh hoạt lên đến 1 giờ.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Video Sáng Tạo AI - Bigger, full width */}
                <div className="group relative">
                  <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-indigo-100">
                    <div className="relative rounded-2xl overflow-hidden bg-black shadow-2xl">
                      <video
                        className="w-full h-auto"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                      >
                        <source src="/MARKIFY/Video tự động 4.mp4" type="video/mp4" />
                        Trình duyệt của bạn không hỗ trợ video.
                      </video>
                    </div>
                    <div className="mt-8 space-y-3">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-2xl font-bold text-gray-900">Video Sáng Tạo AI</h4>
                        <div className="flex gap-3">
                          <span className="px-4 py-1.5 bg-indigo-100 text-indigo-700 text-sm font-semibold rounded-full">2K</span>
                          <span className="px-4 py-1.5 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">Auto</span>
                        </div>
                      </div>
                      <p className="text-base text-gray-600 leading-relaxed">
                        Một ví dụ về khả năng tạo video tự động của hệ thống. Với công nghệ AI tiên tiến, bạn có thể tạo hàng trăm video chất lượng 2K mỗi ngày, mỗi video có thể dài lên đến 1 giờ, hoàn toàn tự động và không cần can thiệp thủ công.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Automated Posts */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-8 text-center">BÀI ĐĂNG TỰ ĐỘNG</h3>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/9.png"
                  alt="Tạo Bài Đăng Tự Động"
                  width={1000}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Posting Plan */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-8 text-center">KẾ HOẠCH ĐĂNG BÀI</h3>
              <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
                <Image
                  src="/images/8.png"
                  alt="Giao Diện Kế Hoạch Đăng Bài"
                  width={1000}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 lg:p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Lập Kế Hoạch Đăng Bài Thông Minh</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Với giao diện kéo và thả trực quan, bạn có thể lập kế hoạch đăng bài cho cả năm trước. Hệ thống cho phép bạn xem toàn bộ lịch đăng bài theo dạng lịch, danh sách hoặc dạng bảng, giúp bạn dễ dàng quản lý và điều chỉnh nội dung.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Lập kế hoạch dài hạn:</strong> Lên lịch đăng bài cho cả năm với giao diện trực quan, dễ sử dụng</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Kéo và thả đơn giản:</strong> Chỉ cần kéo và thả, AI sẽ tự động tạo bài đăng và đăng lên các nền tảng bạn muốn</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Giao diện thân thiện:</strong> UI/UX được thiết kế tối ưu, giúp bạn quản lý hàng trăm bài đăng một cách dễ dàng</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Tự động tạo nội dung:</strong> AI tự động tạo bài đăng phù hợp với từng nền tảng (Facebook, Instagram, TikTok, LinkedIn, X)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Quản lý đa nền tảng:</strong> Quản lý tất cả các bài đăng trên nhiều nền tảng từ một giao diện duy nhất</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Xem trước và chỉnh sửa:</strong> Xem trước bài đăng trước khi đăng, chỉnh sửa nội dung, hình ảnh và thời gian đăng</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Phân tích hiệu suất:</strong> Theo dõi hiệu suất của từng bài đăng và tối ưu hóa lịch đăng bài dựa trên dữ liệu</span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-center text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  CHỈ CẦN KÉO VÀ THẢ, AI SẼ TẠO BÀI ĐĂNG VÀ ĐĂNG LÊN CÁC NỀN TẢNG BẠN MUỐN
                </p>
              </div>
            </div>

            {/* Automated UGC */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-8 text-center">UGC TỰ ĐỘNG & AVATAR AI</h3>
              <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                <div className="space-y-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-gray-900">Gói Lồng Tiếng Đa Ngôn Ngữ & Phụ Đề Tự Động</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Tự động tạo nhân vật AI, lồng tiếng và video phụ đề bằng nhiều ngôn ngữ sử dụng AI (ví dụ: AI chuyển văn bản thành giọng nói và dịch tự động).
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Mở rộng phạm vi tiếp cận nội dung của bạn đến nhiều thị trường đa ngôn ngữ mà không cần ghi âm thủ công, đồng thời tăng khả năng hiểu của người xem với phụ đề chuẩn đồng bộ với video của bạn.
                  </p>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                  <video
                    className="w-full h-auto"
                    controls
                    loop
                  >
                    <source src="/MARKIFY/Vinalign 1.mp4" type="video/mp4" />
                    Trình duyệt của bạn không hỗ trợ video.
                  </video>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/MARKIFY/ugc-image-1.jpg"
                    alt="Nội Dung UGC - Người đàn ông nói về xe hơi"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/MARKIFY/ugc-image-2.jpg"
                    alt="Nội Dung UGC - Người phụ nữ trong không gian rustic"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* General Interface */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-8 text-center">GIAO DIỆN TẠO NỘI DUNG</h3>
              <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
                <Image
                  src="/images/7.png"
                  alt="Giao Diện Tạo Nội Dung"
                  width={1000}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              
              <div className="max-w-4xl mx-auto space-y-6">
                <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-6 lg:p-8">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Tạo Nội Dung 2K với Hướng Dẫn Từng Bước</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Giao diện tạo nội dung thông minh với AI hỗ trợ từng bước. Hệ thống sẽ hướng dẫn bạn qua quy trình tạo video chất lượng 2K, bài viết và hình ảnh một cách dễ dàng và chuyên nghiệp.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Video chất lượng 2K:</strong> Tạo video với độ phân giải 2K, đảm bảo chất lượng hình ảnh sắc nét và chuyên nghiệp</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Hướng dẫn từng bước:</strong> AI sẽ hỏi bạn từng bước một, hướng dẫn bạn tạo nội dung phù hợp với mục tiêu của bạn</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Thư viện template phong phú:</strong> Chọn từ hàng trăm template có sẵn cho bài đăng, video và hình ảnh, được thiết kế chuyên nghiệp</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Nguồn tài liệu đa dạng:</strong> AI có thể lấy nguồn từ bất kỳ đâu - từ internet, cơ sở dữ liệu công khai, hoặc từ chính tài liệu của bạn</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Tích hợp tài liệu của bạn:</strong> Upload tài liệu, hình ảnh, video của riêng bạn và AI sẽ sử dụng chúng để tạo nội dung phù hợp</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Tự động tạo đa định dạng:</strong> Tự động tạo bài viết, hình ảnh, video cho các nền tảng khác nhau chỉ với một cú nhấp chuột</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Tùy chỉnh dễ dàng:</strong> Chỉnh sửa nội dung, thay đổi template, điều chỉnh màu sắc và phong cách theo ý muốn</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Xuất bản đa nền tảng:</strong> Tự động tối ưu hóa nội dung cho từng nền tảng (Facebook, Instagram, TikTok, LinkedIn, X) và xuất bản ngay</span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-center text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent max-w-4xl mx-auto">
                  TỰ ĐỘNG TẠO BÀI VIẾT, HÌNH ẢNH, VIDEO CHO CÁC NỀN TẢNG THEO TÀI LIỆU CỦA ĐƠN VỊ CHỈ VỚI MỘT CÚ NHẤP CHUỘT
                </p>
              </div>
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
