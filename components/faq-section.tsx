"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Sparkles, ShieldCheck, Workflow, CircuitBoard, Users } from "lucide-react"

interface FAQ {
  question: string
  answer: string
}

interface FAQSection {
  title: string
  subtitle?: string
  icon?: JSX.Element
  faqs: FAQ[]
}

const faqSections: FAQSection[] = [
  {
    title: "1. ĐỊNH VỊ & SỰ KHÁC BIỆT",
    icon: <Sparkles className="w-5 h-5 text-amber-500" />,
    faqs: [
      {
        question: "SutraLab có phải là công ty bán phần mềm quản lý không?",
        answer:
          "KHÔNG. Chúng tôi không bán phần mềm để bạn phải tự mày mò sử dụng. SutraLab là đơn vị Xây Dựng Hệ Thống AI Cho Doanh Nghiệp. Chúng tôi bán một “dây chuyền vận hành tự động”. Nhiệm vụ của chúng tôi là rà soát, phát hiện các điểm nghẽn thủ công trong doanh nghiệp của bạn và thay thế chúng bằng hệ thống AI khép kín. Mục tiêu là cắt giảm chi phí nhân sự thừa thãi, tối ưu hóa lợi nhuận và giải phóng thời gian cho lãnh đạo.",
      },
      {
        question: "Cụ thể \"Dây chuyền vận hành tự động\" mà các bạn xây dựng sẽ làm được gì?",
        answer:
          "Hãy tưởng tượng các công việc đang ngốn hàng giờ của nhân viên bạn mỗi ngày: xử lý giấy tờ, làm báo cáo, chăm sóc khách hàng lặp lại, hay đối soát công nợ... Hệ thống của SutraLab sẽ tự động hóa hoàn toàn các luồng việc này. Chúng tôi biến quy trình xử lý từ vài ngày xuống còn vài phút, và quan trọng nhất là loại bỏ hoàn toàn lỗi sai do con người (human error).",
      },
    ],
  },
  {
    title: "2. GIẢI PHÁP & ỨNG DỤNG THỰC TẾ",
    icon: <Workflow className="w-5 h-5 text-cyan-500" />,
    faqs: [
      {
        question: "Những bộ phận nào trong công ty tôi có thể áp dụng hệ thống của SutraLab?",
        answer:
          "Chúng tôi tập trung xử lý các “điểm nghẽn” tại 3 khu vực trọng yếu:\\n\\n• Vận hành & Kế toán: Tự động hóa luồng giấy tờ, báo cáo nội bộ và đặc biệt là đối soát công nợ (giảm thiểu rủi ro thất thoát tài chính).\\n• Marketing & Sales: Tự động hóa việc tạo nội dung, viral marketing và chăm sóc khách hàng (CSKH) để không bỏ sót bất kỳ cơ hội doanh thu nào.\\n• Quản trị: Hệ thống báo cáo thực tế giúp CEO nắm bắt sức khỏe doanh nghiệp theo thời gian thực (Real-time).",
      },
      {
        question: "Quy trình làm việc của SutraLab diễn ra như thế nào?",
        answer:
          "Chúng tôi không chỉ đưa công cụ rồi rời đi. Quy trình gồm 3 giai đoạn:\\n\\n1. Rà soát (Audit): Khám sức khỏe doanh nghiệp để tìm ra các quy trình thủ công đang gây lãng phí.\\n2. Xây dựng (Build): Thiết kế và lắp đặt hệ thống AI tùy chỉnh cho riêng bài toán của bạn.\\n3. Chuyển giao & Tối ưu: Đảm bảo hệ thống chạy trơn tru, nhân sự của bạn chỉ cần giám sát kết quả thay vì thực hiện thủ công.",
      },
    ],
  },
  {
    title: "3. HIỆU QUẢ ĐẦU TƯ (ROI)",
    icon: <CircuitBoard className="w-5 h-5 text-emerald-500" />,
    faqs: [
      {
        question: "Tại sao tôi nên đầu tư vào hệ thống AI thay vì tuyển thêm nhân viên?",
        answer:
          "Tuyển thêm nhân viên đồng nghĩa với tăng chi phí cố định (lương, bảo hiểm, chỗ ngồi) và rủi ro quản trị. Hệ thống AI của SutraLab là một khoản đầu tư một lần cho lợi ích dài hạn: hoạt động 24/7 không mệt mỏi, tốc độ xử lý nhanh gấp hàng trăm lần và độ chính xác tuyệt đối. Đây là cách trực tiếp nhất để cắt giảm chi phí nhân sự và tối ưu hóa lợi nhuận ròng ngay lập tức.",
      },
      {
        question: "Doanh nghiệp SME quy mô nhỏ có phù hợp để triển khai không?",
        answer:
          "Rất phù hợp. Chính vì quy mô nhỏ, bạn càng cần tối ưu nguồn lực. Thay vì nuôi một bộ máy cồng kềnh, hệ thống AI giúp bạn vận hành tinh gọn như một tập đoàn lớn với chi phí thấp nhất. Chúng tôi có các giải pháp linh hoạt để giải quyết đúng “nỗi đau” hiện tại của bạn.",
      },
      {
        question:
          "Dữ liệu doanh nghiệp của tôi có bị “học” (train) bởi AI công cộng không? Tôi sợ lộ bí mật kinh doanh.",
        answer:
          "Tuyệt đối KHÔNG. Chúng tôi xây dựng hệ thống \"Private Knowledge Base\" (Kho tri thức nội bộ) riêng biệt cho từng doanh nghiệp. Dữ liệu của bạn được mã hóa và chỉ phục vụ cho chính bộ máy của bạn. Chúng tôi cam kết không chia sẻ dữ liệu này với bất kỳ bên thứ ba nào hoặc dùng để train các mô hình AI công cộng. Bạn sở hữu hoàn toàn “bộ não” AI của công ty mình.",
      },
      {
        question: "Nếu hệ thống gặp sự cố, quy trình vận hành của tôi có bị tê liệt không?",
        answer:
          "Chúng tôi luôn thiết kế phương án dự phòng (Backup Plan). Trong giai đoạn chuyển giao, chúng tôi duy trì quy trình Hybrid (kết hợp). Nếu có sự cố kỹ thuật, đội ngũ SutraLab can thiệp ngay lập tức (Real-time Support) và dữ liệu luôn được sao lưu để đảm bảo doanh nghiệp không bao giờ ngừng hoạt động quá vài phút.",
      },
    ],
  },
  {
    title: "4. KHẢ NĂNG TÙY BIẾN & THÍCH ỨNG",
    icon: <ShieldCheck className="w-5 h-5 text-blue-500" />,
    faqs: [
      {
        question: "Quy trình của công ty tôi rất đặc thù và phức tạp, AI có hiểu được không?",
        answer:
          "Đó là lý do chúng tôi phải “Rà soát” (Audit) trước khi làm. Chúng tôi không áp một công thức chung cho mọi công ty. Hệ thống của SutraLab có khả năng “học” từ chính các tài liệu, quy trình và lịch sử làm việc của bạn. Dù quy trình của bạn là Logistics, Sản xuất hay Dịch vụ đặc thù, chúng tôi sẽ “may đo” các Agent AI để thực hiện chính xác từng bước trong quy trình đó.",
      },
      {
        question: "Mất bao lâu để hệ thống này đi vào hoạt động ổn định?",
        answer:
          "Nhanh hơn bạn nghĩ. Nhờ nền tảng công nghệ Low-code/Pro-code, chúng tôi rút ngắn thời gian triển khai từ hàng tháng (như các phần mềm ERP truyền thống) xuống còn vài tuần. Chúng tôi thường bắt đầu với một quy trình “điểm nghẽn” nhất để bạn thấy hiệu quả ngay lập tức, sau đó mở rộng ra toàn hệ thống.",
      },
    ],
  },
  {
    title: "5. TÁC ĐỘNG ĐẾN NHÂN SỰ",
    icon: <Users className="w-5 h-5 text-purple-500" />,
    faqs: [
      {
        question: "Liệu tôi có phải sa thải toàn bộ nhân viên khi dùng hệ thống này?",
        answer:
          "Không nhất thiết, nhưng bạn sẽ tinh gọn bộ máy. Mục tiêu của SutraLab là loại bỏ các công việc “robot hóa” mà con người đang phải làm (nhập liệu, copy-paste, trả lời câu hỏi lặp lại). Nhân sự của bạn sẽ được giải phóng để làm những việc tạo ra giá trị cao hơn như: Chiến lược, Đàm phán và Sáng tạo. Tuy nhiên, với một hệ thống tự động, bạn chắc chắn sẽ không cần tuyển thêm người mới khi quy mô công ty tăng lên.",
      },
    ],
  },
]

export default function FAQSection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-50/40 via-transparent to-purple-50/40"></div>
      <div className="absolute top-10 left-0 w-72 h-72 bg-cyan-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/70 border border-slate-200 shadow-lg">
            <Sparkles className="w-4 h-4 text-cyan-500" />
            <span className="text-sm font-semibold uppercase tracking-widest text-cyan-600">
              FAQ | Hệ Thống AI Cho Doanh Nghiệp
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 leading-tight">
            Những câu hỏi doanh nghiệp thường đặt ra
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            SutraLab đồng hành trọn vẹn cùng bạn trong hành trình xây dựng dây chuyền vận hành tự động.
            Dưới đây là những câu hỏi chiến lược mà CEO và lãnh đạo thường quan tâm.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-12">
          {faqSections.map((section, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-xl border border-white/60 rounded-3xl p-8 lg:p-10 shadow-2xl ring-1 ring-black/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 shadow-inner">
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-medium text-slate-900">{section.title}</h3>
                  {section.subtitle && (
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                      {section.subtitle}
                    </p>
                  )}
                </div>
              </div>

              <Accordion type="multiple" className="space-y-4">
                {section.faqs.map((faq, faqIndex) => (
                  <AccordionItem
                    key={`${section.title}-${faqIndex}`}
                    value={`${section.title}-${faqIndex}`}
                    className="border border-slate-200/70 rounded-2xl px-4 bg-slate-50/40 backdrop-blur-sm"
                  >
                        <AccordionTrigger className="text-left text-lg font-medium text-slate-900">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-slate-600 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
