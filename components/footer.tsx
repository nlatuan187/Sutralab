"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, Calendar, Send, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import React from "react"

export default function Footer() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    projectType: [] as string[],
  })

  // Calendar state
  const [currentDate, setCurrentDate] = React.useState(new Date())
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null)

  // Calendar helpers
  const monthNames = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", 
                      "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"]
  const dayNames = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"]
  const timeSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"]

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const isToday = (day: number) => {
    const today = new Date()
    return day === today.getDate() && 
           currentDate.getMonth() === today.getMonth() && 
           currentDate.getFullYear() === today.getFullYear()
  }

  const isPastDate = (day: number) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    return checkDate < today
  }

  const isSelected = (day: number) => {
    if (!selectedDate) return false
    return day === selectedDate.getDate() && 
           currentDate.getMonth() === selectedDate.getMonth() && 
           currentDate.getFullYear() === selectedDate.getFullYear()
  }

  const handleDateSelect = (day: number) => {
    if (isPastDate(day)) return
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))
  }

  const formatSelectedDate = () => {
    if (!selectedDate) return ""
    return `${selectedDate.getDate()}/${selectedDate.getMonth() + 1}/${selectedDate.getFullYear()}`
  }

  const getBookingMessage = () => {
    const dateStr = formatSelectedDate()
    const timeStr = selectedTime || ""
    return `Xin chào,%0D%0A%0D%0ATôi muốn đặt lịch demo vào:%0D%0A- Ngày: ${dateStr}%0D%0A- Giờ: ${timeStr}%0D%0A%0D%0AThông tin liên hệ:%0D%0A- Họ tên: %0D%0A- Số điện thoại: %0D%0A- Công ty: %0D%0A%0D%0ATrân trọng.`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (type: string, checked: boolean) => {
    setFormData((prev) => {
      const currentTypes = prev.projectType
      if (checked) {
        return { ...prev, projectType: [...currentTypes, type] }
      } else {
        return { ...prev, projectType: currentTypes.filter((t) => t !== type) }
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm.")
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      projectType: [],
    })
  }

  const projectTypeOptions = [
    'Website', 'Mobile App', 'Web App', 'E-Commerce',
    'AI Solutions', 'Automation', 'Marketing',
    'Consulting', 'Other'
  ]

  // Cal.com booking link - Change this to your Cal.com URL
  const bookingLink = "https://cal.com/sutralab/meeting"

  return (
    <footer id="contact" className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      {/* Contact Section - With Form and Calendar */}
      <div className="relative z-10 border-b border-gray-700/30">
        <div className="container mx-auto px-4 md:px-8 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Liên Hệ Với Chúng Tôi
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Sẵn sàng chuyển đổi doanh nghiệp của bạn? Hãy để chúng tôi giúp bạn bắt đầu ngay hôm nay.
              </p>
            </div>

            {/* Two Column Layout: Form and Calendar */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-white">Gửi Tin Nhắn 👋</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name - Full width */}
                  <div className="space-y-2">
                    <Label htmlFor="footer-name" className="text-gray-200">Tên của bạn *</Label>
                    <Input 
                      id="footer-name" 
                      name="name" 
                      placeholder="Nhập tên" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                      className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
                    />
                  </div>

                  {/* Email - Full width */}
                  <div className="space-y-2">
                    <Label htmlFor="footer-email" className="text-gray-200">Email *</Label>
                    <Input 
                      id="footer-email" 
                      name="email" 
                      type="email" 
                      placeholder="email@example.com" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
                    />
                  </div>

                  {/* Phone - Full width */}
                  <div className="space-y-2">
                    <Label htmlFor="footer-phone" className="text-gray-200">Số điện thoại</Label>
                    <Input 
                      id="footer-phone" 
                      name="phone" 
                      type="tel" 
                      placeholder="+84 xxx xxx xxx" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      className="w-full bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12"
                    />
                  </div>

                  {/* Message - Full width */}
                  <div className="space-y-2">
                    <Label htmlFor="footer-message" className="text-gray-200">Tin nhắn *</Label>
                    <Textarea
                      id="footer-message"
                      name="message"
                      placeholder="Chia sẻ ý tưởng dự án của bạn..."
                      className="w-full min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-gray-400 resize-none"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Project Types - Full width */}
                  <div className="space-y-3">
                    <p className="text-gray-200 text-sm font-medium">Tôi đang tìm kiếm...</p>
                    <div className="flex flex-wrap gap-2">
                      {projectTypeOptions.map((option) => (
                        <div 
                          key={option} 
                          className={`flex items-center space-x-2 px-3 py-2 rounded-lg border cursor-pointer transition-all ${
                            formData.projectType.includes(option)
                              ? 'bg-cyan-500/20 border-cyan-400'
                              : 'bg-white/5 border-white/20 hover:bg-white/10'
                          }`}
                          onClick={() => handleCheckboxChange(option, !formData.projectType.includes(option))}
                        >
                          <Checkbox
                            id={`footer-${option.replace(/\s/g, '-').toLowerCase()}`}
                            checked={formData.projectType.includes(option)}
                            onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                            className="border-white/40 data-[state=checked]:bg-cyan-500"
                          />
                          <Label 
                            htmlFor={`footer-${option.replace(/\s/g, '-').toLowerCase()}`} 
                            className="text-sm text-gray-300 font-normal cursor-pointer"
                          >
                            {option}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-5 text-base font-semibold"
                  >
                    Gửi tin nhắn
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>

              {/* Calendar Booking - Interactive */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Đặt Lịch Demo</h3>
                    <p className="text-gray-400 text-sm">Cuộc gọi 30 phút miễn phí</p>
                  </div>
                </div>

                {/* Calendar */}
                <div className="bg-white/10 rounded-xl p-4 mb-4">
                  {/* Month Navigation */}
                  <div className="flex items-center justify-between mb-4">
                    <button 
                      onClick={prevMonth}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <h4 className="font-semibold text-white">
                      {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </h4>
                    <button 
                      onClick={nextMonth}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Day Names */}
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {dayNames.map((day) => (
                      <div key={day} className="text-xs font-medium text-gray-400 text-center py-1">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Days Grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {/* Empty cells for first week */}
                    {Array(getFirstDayOfMonth(currentDate)).fill(null).map((_, i) => (
                      <div key={`empty-${i}`} className="aspect-square"></div>
                    ))}
                    {/* Days of month */}
                    {Array(getDaysInMonth(currentDate)).fill(null).map((_, i) => {
                      const day = i + 1
                      const past = isPastDate(day)
                      const today = isToday(day)
                      const selected = isSelected(day)
                      return (
                        <button 
                          key={day}
                          onClick={() => handleDateSelect(day)}
                          disabled={past}
                          className={`aspect-square flex items-center justify-center text-sm rounded-lg transition-all ${
                            past 
                              ? 'text-gray-600 cursor-not-allowed' 
                              : selected
                                ? 'bg-indigo-500 text-white font-bold'
                                : today
                                  ? 'bg-cyan-500/30 text-cyan-300 font-semibold hover:bg-cyan-500/50'
                                  : 'text-white hover:bg-white/20 cursor-pointer'
                          }`}
                        >
                          {day}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Time Slots */}
                {selectedDate && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-300 mb-3">
                      Chọn giờ cho ngày <span className="text-cyan-400 font-semibold">{formatSelectedDate()}</span>:
                    </p>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                            selectedTime === time
                              ? 'bg-indigo-500 text-white'
                              : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Selected Summary */}
                {selectedDate && selectedTime && (
                  <div className="bg-indigo-500/20 border border-indigo-400/30 rounded-lg p-4 mb-4">
                    <p className="text-white text-sm">
                      <span className="font-semibold">Lịch đã chọn:</span><br/>
                      📅 {formatSelectedDate()} - ⏰ {selectedTime}
                    </p>
                  </div>
                )}

                {/* Contact Options - Full */}
                <div className="space-y-3">
                  <p className="text-gray-300 text-sm mb-2">Xác nhận đặt lịch qua:</p>
                  
                  {/* Zalo */}
                  <a 
                    href={`https://zalo.me/0923370804${selectedDate && selectedTime ? `?text=${encodeURIComponent(`Xin chào, tôi muốn đặt lịch demo vào ngày ${formatSelectedDate()} lúc ${selectedTime}`)}` : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white py-4 px-4 rounded-lg font-semibold transition-all"
                  >
                    <Image src="/Contact%20us/Zalo.webp" alt="Zalo" width={32} height={32} className="rounded w-8 h-8 object-contain" />
                    Đặt qua Zalo
                  </a>

                  {/* WhatsApp */}
                  <a 
                    href={`https://wa.me/84923370804?text=${encodeURIComponent(selectedDate && selectedTime ? `Xin chào, tôi muốn đặt lịch demo vào ngày ${formatSelectedDate()} lúc ${selectedTime}` : 'Xin chào, tôi muốn đặt lịch demo')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-4 px-4 rounded-lg font-semibold transition-all"
                  >
                    <Image src="/Contact%20us/whatsapp-png.webp" alt="WhatsApp" width={32} height={32} className="rounded w-8 h-8 object-contain brightness-0 invert" />
                    Đặt qua WhatsApp
                  </a>

                  {/* Email */}
                  <a 
                    href={`mailto:minhtq@aisutralab.com?subject=Đặt lịch Demo${selectedDate ? ` - ${formatSelectedDate()}` : ''}${selectedTime ? ` lúc ${selectedTime}` : ''}&body=${getBookingMessage()}`}
                    className="w-full flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg font-semibold transition-all"
                  >
                    <Mail className="w-5 h-5" />
                    Đặt qua Email
                  </a>

                  {/* Phone */}
                  <a 
                    href="tel:+84923370804"
                    className="w-full flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white py-3 px-4 rounded-lg font-semibold transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    Gọi: +84 923 370 804
                  </a>

                  {/* Secondary Phone */}
                  <a 
                    href="tel:+84386602022"
                    className="w-full flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white py-3 px-4 rounded-lg font-semibold transition-all"
                  >
                    <Phone className="w-5 h-5" />
                    Gọi: +84 386 602 022
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 md:px-8 py-16 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <Image 
                src="/Logo.png" 
                alt="Sutra Lab Logo" 
                width={220} 
                height={60}
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Công ty tư vấn cung cấp các sản phẩm thực tế như giải pháp. Giảm thiểu vốn cho doanh nghiệp: Nhân sự, Tài chính, Thời gian.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/sutralab" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-800">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/sutralab" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-800">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/sutralab" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-800">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@sutralab" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-lg hover:bg-gray-800">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-white text-lg">Sản Phẩm</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/execumate" className="hover:text-white transition-colors">ExecuMate</Link></li>
              <li><Link href="/flowhub" className="hover:text-white transition-colors">Flowhub</Link></li>
              <li><Link href="/markify" className="hover:text-white transition-colors">Markify</Link></li>
              <li><Link href="/ai-fashion" className="hover:text-white transition-colors">AI Fashion</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-white text-lg">Công Ty</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/#about" className="hover:text-white transition-colors">Về Chúng Tôi</Link></li>
              <li><Link href="/#careers" className="hover:text-white transition-colors">Tuyển Dụng</Link></li>
              <li><Link href="/#blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Liên Hệ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6 text-white text-lg">Liên Hệ</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:minhtq@aisutralab.com" className="hover:text-white transition-colors">
                  minhtq@aisutralab.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <a href="tel:+84923370804" className="hover:text-white transition-colors">
                  +84 923 370 804
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                <a href="tel:+84386602022" className="hover:text-white transition-colors">
                  +84 386 602 022
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Sutralab. Bảo lưu mọi quyền.
          </p>
          <p className="text-gray-500 text-sm">
            Made with ❤️ for your business
          </p>
        </div>
      </div>
    </footer>
  )
}
