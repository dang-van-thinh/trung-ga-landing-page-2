import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="bg-primary rounded-2xl p-8 md:p-12 mb-16 -mx-4 md:mx-0">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-display font-bold mb-4">
              Nhận Tin Tức & Ưu Đãi Độc Quyền
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              Đăng ký để nhận thông tin về các sản phẩm mới, khuyến mãi, và lời khuyên sức khỏe từ Sadu.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Nhập email của bạn"
                className="bg-white text-foreground border-0 placeholder:text-muted-foreground"
              />
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-6">
                Đăng Ký
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="font-display font-bold text-lg">S</span>
              </div>
              <span className="font-display font-bold text-xl">SADU</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Trứng gà thảo dược Sadu – Lựa chọn tinh túy cho sức khỏe gia đình bạn.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Sản Phẩm</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Hộp Nhỏ (6 quả)
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Hộp Vừa (10 quả)
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Hộp Lớn (12 quả)
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Combo Tiết Kiệm
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Công Ty</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Về Chúng Tôi
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Trang Trại
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Chính Sách
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Liên Hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                <span className="text-white/70">1900 XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                <span className="text-white/70">support@sadu.com.vn</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span className="text-white/70">Hà Nội, Việt Nam</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex items-center justify-between">
            <p className="text-white/70">Theo dõi chúng tôi trên mạng xã hội</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/50 text-sm">
          <p>
            &copy; 2026 Sadu - Trứng Gà Thảo Dược. Bảo lưu mọi quyền. | Chính Sách Bảo Mật | Điều Khoản Sử Dụng
          </p>
        </div>
      </div>
    </footer>
  );
}
