import { ArrowRight } from 'lucide-react';

export default function CustomerStorySection() {
  return (
    <section className="bg-zapier-cream border-b border-zapier-border">
      <div className="max-w-screen-xl mx-auto">
        <div className="border-l border-r border-zapier-border px-6 md:px-14 py-16 md:py-24">
          <p className="text-xs font-medium text-zapier-dark uppercase tracking-wide mb-4">
            Câu Chuyện Khách Hàng
          </p>
          <h2 className="text-3xl md:text-4xl font-medium text-zapier-dark mb-16">
            Dành cho Fortune 500<br />và các nhà sáng lập lần đầu
          </h2>
          <p className="text-lg text-zapier-dark mb-16 max-w-2xl">
            Các đội ngũ sử dụng SutraLab trong phòng họp, phòng làm việc, và mọi nơi AI mang lại ROI.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/modern-office-cityscape.png"
                alt="Toyota of Orlando"
                className="w-full h-auto rounded"
              />
            </div>

            <div>
              <blockquote className="text-xl md:text-2xl font-medium text-zapier-dark mb-8 leading-relaxed">
                "Với AI Agents, tôi nhận được những thông tin chi tiết mà tôi thậm chí không biết cần tìm kiếm. Chúng cảnh báo khi có điều gì đó không ổn, trả lời câu hỏi bằng ngôn ngữ đơn giản, và tiết kiệm cho tôi hàng giờ mỗi tuần."
              </blockquote>
              <p className="text-sm text-gray-600 mb-8">
                — Spencer Siviglia, Giám đốc Vận hành tại Toyota of Orlando
              </p>

              <div className="flex gap-8 mb-8">
                <div>
                  <p className="text-3xl font-semibold text-zapier-dark mb-1">
                    30,000+
                  </p>
                  <p className="text-sm text-gray-600">hồ sơ khách hàng được quản lý</p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-zapier-dark mb-1">
                    20+
                  </p>
                  <p className="text-sm text-gray-600">giờ tiết kiệm mỗi tuần</p>
                </div>
              </div>

              <button className="text-zapier-orange font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Đọc câu chuyện đầy đủ
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="text-zapier-orange font-semibold flex items-center gap-2 hover:gap-3 transition-all mx-auto">
              Xem thêm câu chuyện khách hàng
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
