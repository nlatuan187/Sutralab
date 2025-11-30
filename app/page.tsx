import Header from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import ProblemDiagnosis from "@/components/problem-diagnosis"
import ProcessSection from "@/components/process-section"
import { ProductsSection } from "@/components/products-section"
import StatsSection from "@/components/stats-section"
import CompanyLogos from "@/components/company-logos"
import BenefitsSection from "@/components/benefits-section"
import TestimonialsSection from "@/components/testimonials-section"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"
import { FloatingChatButtons } from "@/components/floating-chat-buttons"

/**
 * Homepage - Mô hình Tư vấn & Giải pháp
 * Flow: Hero → Problem Diagnosis → Process → Company Logos → Products → Stats → Benefits → FAQ → Testimonials
 */
export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans antialiased w-full overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full pt-20">
        {/* 1. Hero Section - Tuyên ngôn giá trị */}
        <HeroSection />
        
        {/* 2. Problem Diagnosis - Chẩn đoán vấn đề */}
        <ProblemDiagnosis />
        
        {/* 3. Process Section - Quy trình 4 bước */}
        <ProcessSection />
        
        {/* 4. Company Logos - Đối tác */}
        <CompanyLogos />
        
        {/* 5. Products Section - Hệ sinh thái công nghệ (Bento Grid) */}
        <ProductsSection />
        
        {/* 6. Stats Section - Trust & Authority */}
        <StatsSection />
        
        {/* 7. Benefits Section - Lợi ích đo lường được */}
        <BenefitsSection />
        
        {/* 8. FAQ Section - Câu hỏi thường gặp */}
        <FAQSection />
        
        {/* 9. Testimonials - Khách hàng nói gì */}
        <TestimonialsSection />
      </main>
      <Footer />
      
      {/* Floating Chat Buttons - Fixed position */}
      <FloatingChatButtons />
    </div>
  )
}
