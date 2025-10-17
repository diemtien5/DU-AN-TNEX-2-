"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, CheckCircle } from "lucide-react"

export default function ApplicationPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    cccd: "",
    loanAmount: "",
    purpose: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log("Form submitted:", formData)
    setSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        cccd: "",
        loanAmount: "",
        purpose: "",
      })
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="text-slate-600">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Đăng ký hồ sơ vay</h1>
            <p className="text-sm text-slate-600">Tnex Finance - Vay tiêu dùng nhanh chóng</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
        {!submitted ? (
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
            {/* Info Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <h2 className="font-bold text-slate-900 mb-2">⚡ Duyệt nhanh 15 phút</h2>
              <p className="text-sm text-slate-600">
                Chỉ cần CCCD, hồ sơ sẽ được duyệt tự động. Nhận kết quả phê duyệt trong 15 phút.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Họ và tên <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Nhập họ và tên đầy đủ"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Số điện thoại <span className="text-red-500">*</span>
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Nhập số điện thoại"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Nhập email"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* CCCD */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Số CCCD <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  name="cccd"
                  value={formData.cccd}
                  onChange={handleChange}
                  placeholder="Nhập số CCCD"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Loan Amount */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Số tiền vay <span className="text-red-500">*</span>
                </label>
                <Input
                  type="number"
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleChange}
                  placeholder="Nhập số tiền vay (VNĐ)"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Purpose */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Mục đích vay <span className="text-red-500">*</span>
                </label>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Chọn mục đích vay</option>
                  <option value="personal">Tiêu dùng cá nhân</option>
                  <option value="business">Kinh doanh</option>
                  <option value="education">Giáo dục</option>
                  <option value="medical">Y tế</option>
                  <option value="other">Khác</option>
                </select>
              </div>

              {/* Terms */}
              <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                <p className="text-xs text-slate-600">
                  ✓ Bằng cách nhấn "Gửi hồ sơ", bạn đồng ý với điều khoản dịch vụ và chính sách bảo mật của Tnex
                  Finance.
                </p>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                Gửi hồ sơ
              </Button>
            </form>

            {/* Support Info */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-600 text-center mb-4">Cần hỗ trợ? Liên hệ với chúng tôi</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://landing.tnexfinance.com.vn/TnexDirectSale?sale_id=CTV1679"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full sm:w-auto bg-transparent"
                  >
                    Xem chi tiết sản phẩm
                  </Button>
                </a>
                <Button variant="outline" className="border-slate-300 text-slate-700 w-full sm:w-auto bg-transparent">
                  📞 0888 979 809
                </Button>
              </div>
            </div>
          </div>
        ) : (
          /* Success Message */
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Hồ sơ đã được gửi thành công!</h2>
            <p className="text-slate-600 mb-2">Cảm ơn bạn đã đăng ký. Hồ sơ của bạn đang được xử lý.</p>
            <p className="text-sm text-slate-500 mb-8">Bạn sẽ nhận được kết quả phê duyệt trong vòng 15 phút.</p>
            <Link href="/">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Quay lại trang chủ</Button>
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
