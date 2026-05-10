import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function ProductsSection() {
  const products = [
    {
      name: "Hộp Nhỏ",
      quantity: "6 quả",
      price: "99.000đ",
      description: "Thử nghiệm, gia đình 2-3 người",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663344183182/nd8DyymyeUHes9kHCxyub5/sadu_product_display-UDxz3Jf2UfpdAAvtyZfs6u.webp",
      featured: false,
    },
    {
      name: "Hộp Vừa",
      quantity: "10 quả",
      price: "159.000đ",
      description: "Gia đình 4-5 người",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663344183182/nd8DyymyeUHes9kHCxyub5/sadu_product_display-UDxz3Jf2UfpdAAvtyZfs6u.webp",
      featured: true,
    },
    {
      name: "Hộp Lớn",
      quantity: "12 quả",
      price: "189.000đ",
      description: "Gia đình lớn, mua thường xuyên",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663344183182/nd8DyymyeUHes9kHCxyub5/sadu_product_display-UDxz3Jf2UfpdAAvtyZfs6u.webp",
      featured: false,
    },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Lựa Chọn Phù Hợp Cho Mỗi Gia Đình
          </h2>
          <p className="text-lg text-muted-foreground">
            Chọn gói sản phẩm phù hợp với nhu cầu của gia đình bạn
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => {
            const isFeatured = product.featured;
            const cardClass = isFeatured
              ? "ring-2 ring-primary shadow-2xl scale-105 md:scale-100"
              : "shadow-lg hover:shadow-xl";

            return (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden transition-all ${cardClass}`}
              >
                {/* Product Image */}
                <div className="relative h-48 bg-muted overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  {isFeatured && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      Bán Chạy
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-primary text-lg font-semibold mb-2">{product.quantity}</p>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-foreground">{product.price}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="text-primary" />
                      100% Thảo dược tự nhiên
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="text-primary" />
                      0% Kháng sinh tồn dư
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check size={16} className="text-primary" />
                      Giao hàng nhanh
                    </li>
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={
                      isFeatured
                        ? "w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                        : "w-full border-2 border-primary text-primary hover:bg-primary/5"
                    }
                  >
                    Thêm Vào Giỏ
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Combo Offer */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl font-display font-bold mb-4">Combo Tiết Kiệm</h3>
          <p className="text-xl mb-4 text-primary-foreground/90">
            Mua Combo 3 Hộp – Tiết Kiệm 66.000đ + Tặng Trà Cà Gai Leo
          </p>
          <div className="text-4xl font-bold mb-6">489.000đ</div>
          <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3">
            Mua Combo Ngay
          </Button>
        </div>
      </div>
    </section>
  );
}
