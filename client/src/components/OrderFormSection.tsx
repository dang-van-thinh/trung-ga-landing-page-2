import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Check, AlertCircle } from "lucide-react";

export default function OrderFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    product: "hộp-vừa",
    quantity: 1,
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const products = [
    { id: "hộp-nhỏ", name: "Hộp Nhỏ (6 quả) - 99.000đ", price: 99000 },
    { id: "hộp-vừa", name: "Hộp Vừa (10 quả) - 159.000đ", price: 159000 },
    { id: "hộp-lớn", name: "Hộp Lớn (12 quả) - 189.000đ", price: 189000 },
    { id: "combo-3", name: "Combo 3 Hộp - 489.000đ", price: 489000 },
  ];

  const selectedProduct = products.find((p) => p.id === formData.product);
  const totalPrice = (selectedProduct?.price || 0) * formData.quantity;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate form submission - in production, this would send to a backend
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Log form data (in production, send to backend/Google Sheets)
      console.log("Order submitted:", {
        ...formData,
        totalPrice,
        timestamp: new Date().toISOString(),
      });

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          address: "",
          product: "hộp-vừa",
          quantity: 1,
          notes: "",
        });
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="order" className="py-20 bg-gradient-to-b from-white to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Đặt Hàng Ngay
          </h2>
          <p className="text-lg text-muted-foreground">
            Điền thông tin dưới đây để đặt hàng. Chúng tôi sẽ liên hệ xác nhận trong 24 giờ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Họ và Tên *
                </label>
                <Input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Nguyễn Văn A"
                  required
                  className="w-full"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Số Điện Thoại *
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="0912345678"
                  required
                  className="w-full"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  required
                  className="w-full"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Địa Chỉ Giao Hàng *
                </label>
                <Input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="123 Đường ABC, Quận XYZ, Hà Nội"
                  required
                  className="w-full"
                />
              </div>

              {/* Product Selection */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Chọn Sản Phẩm *
                </label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {products.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Số Lượng *
                </label>
                <Input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  min="1"
                  max="10"
                  required
                  className="w-full"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Ghi Chú (Tùy Chọn)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Ghi chú thêm về đơn hàng của bạn..."
                  rows={3}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading || submitted}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 mt-6"
              >
                {loading ? "Đang Xử Lý..." : submitted ? "Đặt Hàng Thành Công!" : "Xác Nhận Đặt Hàng"}
              </Button>

              {submitted && (
                <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <Check size={20} className="text-green-600" />
                  <span className="text-green-700 font-semibold">
                    Cảm ơn! Chúng tôi sẽ liên hệ bạn sớm.
                  </span>
                </div>
              )}
            </form>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Summary Card */}
            <div className="bg-primary text-white rounded-2xl p-8">
              <h3 className="text-2xl font-display font-bold mb-6">Tóm Tắt Đơn Hàng</h3>

              <div className="space-y-4 mb-6 pb-6 border-b border-primary-foreground/20">
                <div className="flex justify-between items-center">
                  <span>Sản Phẩm:</span>
                  <span className="font-semibold">{selectedProduct?.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Số Lượng:</span>
                  <span className="font-semibold">{formData.quantity}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Giá Một Cái:</span>
                  <span className="font-semibold">
                    {(selectedProduct?.price || 0).toLocaleString("vi-VN")}đ
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center text-xl font-bold">
                <span>Tổng Cộng:</span>
                <span className="text-3xl">{totalPrice.toLocaleString("vi-VN")}đ</span>
              </div>

              <div className="mt-6 p-4 bg-primary-foreground/10 rounded-lg">
                <p className="text-sm text-primary-foreground/90">
                  ✓ Miễn phí giao hàng cho đơn từ 300.000đ
                </p>
                <p className="text-sm text-primary-foreground/90">
                  ✓ Hoàn tiền 100% nếu không hài lòng
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h4 className="font-display font-bold text-lg text-foreground mb-4">
                Tại Sao Chọn Sadu?
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-muted-foreground">100% Thảo dược tự nhiên</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-muted-foreground">0% Kháng sinh tồn dư</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-muted-foreground">Cholesterol cực thấp</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-muted-foreground">Giao hàng nhanh chóng</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
