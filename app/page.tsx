"use client"

import Link from "next/link"
import { ArrowRight, Copy, Check, Download, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

function CopyLinkButton() {
  const [copied, setCopied] = useState(false);
  const link = 'https://landing.tnexfinance.com.vn/TnexDirectSale?sale_id=CTV1679';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <Button 
      size="sm" 
      className="bg-sky-300 hover:bg-sky-400 text-white whitespace-nowrap shadow-md shadow-sky-300/40"
      onClick={handleCopy}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 mr-1" />
          Đã copy!
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 mr-1" />
          Copy
        </>
      )}
    </Button>
  );
}

function QRDownloadButton() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = async () => {
    try {
      const response = await fetch('/qr-code-customer.png');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'QR-Code-Tnex-CTV1679.png';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 2000);
    } catch (err) {
      console.error('Failed to download: ', err);
    }
  };

  const handleShare = async () => {
    try {
      const link = 'https://landing.tnexfinance.com.vn/TnexDirectSale?sale_id=CTV1679';
      if (navigator.share) {
        await navigator.share({
          title: 'QR Code đăng ký Tnex',
          text: 'Quét mã QR để đăng ký vay tiêu dùng Tnex',
          url: link
        });
      } else {
        await navigator.clipboard.writeText(link);
        alert('Link đã được copy vào clipboard!');
      }
    } catch (err) {
      console.error('Failed to share: ', err);
    }
  };

  return (
    <div className="flex gap-2 mt-3">
      <Button 
        size="sm" 
        variant="outline"
        className="bg-white hover:bg-sky-50 border-sky-300 text-sky-600 hover:text-sky-700 shadow-md shadow-sky-300/30"
        onClick={handleDownload}
      >
        {downloaded ? (
          <>
            <Check className="w-3 h-3 mr-1" />
            Đã tải!
          </>
        ) : (
          <>
            <Download className="w-3 h-3 mr-1" />
            Tải QR
          </>
        )}
      </Button>
      <Button 
        size="sm" 
        variant="outline"
        className="bg-white hover:bg-sky-50 border-sky-300 text-sky-600 hover:text-sky-700 shadow-md shadow-sky-300/30"
        onClick={handleShare}
      >
        <Share2 className="w-3 h-3 mr-1" />
        Chia sẻ
      </Button>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-sky-300 rounded-lg flex items-center justify-center shadow-lg shadow-sky-300/40">
              <span className="text-white font-bold text-lg drop-shadow-sm">T</span>
            </div>
          </div>
          <Button className="bg-sky-300 hover:bg-sky-400 text-white shadow-lg shadow-sky-300/40">Đăng ký ngay</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-6 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-5xl font-bold text-slate-900 leading-tight">
              <span className="text-sky-500">Dự án Tnex Kênh số 1-1</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-8 md:py-24">
        <div className="max-w-4xl mx-auto px-4">

          <div className="bg-gradient-to-br from-sky-50 to-slate-50 rounded-2xl p-6 border border-sky-200">
            <div className="grid md:grid-cols-2 gap-4">
              {/* Feature 1 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-sky-300 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md shadow-sky-300/40">
                  <span className="text-lg drop-shadow-sm">💰</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Hoa hồng 2%, trả ngay</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Hoa hồng 2%, trả ngay sau khi hồ sơ giải ngân. Thu nhập nhanh chóng và đáng tin cậy.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-sky-300 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md shadow-sky-300/40">
                  <span className="text-lg drop-shadow-sm">📲</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Theo dõi trực tiếp</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Theo dõi & push hồ sơ trực tiếp, không qua bên thứ 3. Kiểm soát toàn bộ quy trình.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-sky-300 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md shadow-sky-300/40">
                  <span className="text-lg drop-shadow-sm">⚡</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Duyệt nhanh 15 phút</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">Duyệt hồ sơ tự động, chỉ cần CCCD - 15p là có kết quả phê duyệt. Nhanh chóng và tiện lợi.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-sky-300 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md shadow-sky-300/40">
                  <span className="text-lg drop-shadow-sm">🔒</span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Code nội bộ an toàn</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Chạy code nội bộ, nên không ảnh hưởng đến code chính thống. Nợ xấu cũng mở được code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Register Section */}
      <section className="py-8 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Part 1: Registration Guide */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sky-300 rounded-lg flex items-center justify-center shadow-lg shadow-sky-300/40">
                  <span className="text-xl drop-shadow-sm">📝</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">1. Hướng dẫn đăng ký và theo dõi hồ sơ</h3>
              </div>
              
              <div className="space-y-4">
                <div className="bg-sky-50 rounded-lg p-4 border border-sky-200">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="text-sky-500">📱</span>
                    Zalo đăng ký chạy và tạo code
                  </h4>
                  <p className="text-slate-600 mb-3 text-sm">Liên hệ Zalo để tham gia dự án kênh số Tnex trực tiếp tạo thu nhập ổn định:</p>
                  <div className="bg-white rounded-lg p-3 border border-sky-300">
                    <a 
                      href="https://zalo.me/0888979809" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-sky-300 to-sky-400 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 zalo-float"
                    >
                      {/* Zalo Icon */}
                      <svg 
                        className="w-6 h-6 text-white relative z-10" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                      
                      {/* Phone Number */}
                      <span className="text-white font-semibold text-lg relative z-10">0888.979.809</span>
                      
                      {/* Wave Effect Layer 1 */}
                      <div className="absolute inset-0 rounded-full bg-sky-400 opacity-0 group-hover:opacity-60 group-hover:zalo-wave-1 transition-opacity duration-500"></div>
                      
                      {/* Wave Effect Layer 2 */}
                      <div className="absolute inset-0 rounded-full bg-sky-300 opacity-0 group-hover:opacity-40 group-hover:zalo-wave-2 transition-opacity duration-700"></div>
                      
                      {/* Wave Effect Layer 3 */}
                      <div className="absolute inset-0 rounded-full bg-sky-200 opacity-0 group-hover:opacity-30 group-hover:zalo-wave-3 transition-opacity duration-1000"></div>
                    </a>
                  </div>
                </div>

                <div className="bg-sky-50 rounded-lg p-4 border border-sky-200">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="text-sky-500">👥</span>
                    Group Zalo dự án kênh số Tnex
                  </h4>
                  <p className="text-slate-600 mb-3 text-sm">Tham gia group để theo dõi dự án kênh số Tnex và cập nhật thông tin:</p>
                  <div className="bg-white rounded-lg p-3 border border-sky-300">
                    <p className="text-xs text-slate-500 italic">(Link group sẽ được cập nhật sau)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Part 2: Customer Guide */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sky-300 rounded-lg flex items-center justify-center shadow-lg shadow-sky-300/40">
                  <span className="text-xl drop-shadow-sm">👥</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">2. Hướng dẫn lên hồ sơ cho khách hàng</h3>
              </div>
              
              <div className="space-y-4">
                {/* Option A: Copy Link */}
                  <div className="bg-gradient-to-br from-sky-50 to-slate-50 rounded-lg p-4 border border-sky-200">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="text-sky-500">🔗</span>
                    A. Gửi link cho khách hàng
                  </h4>
                  <p className="text-slate-600 mb-3 text-sm">Copy và gửi link này cho khách hàng để họ đăng ký:</p>
                  
                  <div className="bg-white rounded-lg p-3 border border-slate-300 mb-3">
                    <div className="flex items-center justify-between gap-2">
                      <code className="text-sm text-slate-700 flex-1 break-all">
                        https://landing.tnexfinance.com.vn/TnexDirectSale?sale_id=CTV1679
                      </code>
                      <CopyLinkButton />
                    </div>
                  </div>
                </div>

                {/* Option B: QR Code */}
                  <div className="bg-gradient-to-br from-sky-50 to-slate-50 rounded-lg p-4 border border-sky-200">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="text-sky-500">📱</span>
                    B. Hoặc gửi mã QR cho khách
                  </h4>
                  <p className="text-slate-600 mb-3 text-sm">Gửi mã QR này cho khách hàng để họ quét và truy cập trang đăng ký:</p>
                  
                  <div className="bg-sky-300 rounded-lg p-6 border border-sky-300 flex flex-col items-center text-white shadow-lg shadow-sky-300/40">
                    <h5 className="text-base font-bold mb-1">QR tra cứu thông tin</h5>
                    <p className="text-blue-100 text-xs mb-3">Đưa mã này cho khách hàng</p>
                    <div className="bg-white rounded-lg p-3 mb-2">
                      <img src="/qr-code-customer.png" alt="QR Code tra cứu thông tin cho khách hàng" className="w-32 h-32" />
                    </div>
                    <p className="text-blue-100 text-xs text-center mb-2">Mã QR tra cứu thông tin dành cho khách hàng</p>
                    <p className="text-blue-200 text-xs text-center mb-2">Mã CTV: CTV1679</p>
                    <QRDownloadButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-sky-300 rounded-lg flex items-center justify-center shadow-md shadow-sky-300/40">
                  <span className="text-white font-bold text-sm drop-shadow-sm">T</span>
                </div>
                <span className="font-bold text-white text-sm">Dự án Tnex Kênh số 1-1</span>
              </div>
              <p className="text-xs">Dự án kênh số Tnex trực tiếp tạo thu nhập ổn định cho ctv tài chính</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 text-sm">Liên hệ</h4>
              <a 
                href="https://zalo.me/0888979809" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-slate-300 hover:text-white transition-colors"
              >
                📞 Zalo: 0888 979 809
              </a>
              <p className="text-xs mt-1">Dự án kênh số Tnex trực tiếp tạo thu nhập ổn định cho ctv tài chính</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-3 text-sm">Thông tin</h4>
              <p className="text-xs">Dự án Tnex Kênh số 1-1</p>
              <p className="text-xs mt-1">Dự án kênh số Tnex trực tiếp tạo thu nhập ổn định cho ctv tài chính</p>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-6 text-center text-xs">
            <p>&copy; 2025 Dự án Tnex Kênh số 1-1. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
