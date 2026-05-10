import { Heart, Brain, Eye, Shield } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Heart,
      title: "Tốt Cho Tim Mạch",
      description: "Cholesterol thấp, giàu Omega-3 tự nhiên giúp bảo vệ hệ tim mạch",
    },
    {
      icon: Brain,
      title: "Hỗ Trợ Phát Triển Não",
      description: "Choline và các vi chất từ thảo dược hỗ trợ phát triển não bộ trẻ em",
    },
    {
      icon: Eye,
      title: "Bảo Vệ Mắt",
      description: "Lutein & Zeaxanthin tự nhiên giúp bảo vệ sức khỏe mắt",
    },
    {
      icon: Shield,
      title: "Tăng Cường Miễn Dịch",
      description: "Vitamin D, E, B12 và thảo dược tăng cường hệ miễn dịch tự nhiên",
    },
  ];

  const testimonials = [
    {
      name: "Chị Lan",
      location: "Hà Nội",
      text: "Từ ngày ăn trứng Sadu, con nhà mình không còn sợ mùi tanh của trứng nữa. Bé ăn ngon lành, mẹ yên tâm.",
      avatar: "👩",
    },
    {
      name: "Anh Tuấn",
      location: "Đầu Bếp Chuyên Nghiệp",
      text: "Màu lòng đỏ cam đậm tự nhiên nhìn là biết trứng chất lượng rồi. Tôi dùng cho các món ăn đặc biệt.",
      avatar: "👨‍🍳",
    },
    {
      name: "Chị Hương",
      location: "TP.HCM",
      text: "Bố tôi bị cao huyết áp, bác sĩ khuyên ăn trứng Sadu. Sau 3 tháng, chỉ số cholesterol giảm đáng kể.",
      avatar: "👩‍⚕️",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-muted/30 to-white">
      <div className="container mx-auto px-4">
        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Dinh Dưỡng Vàng Ròng
            </h2>
            <p className="text-lg text-muted-foreground">
              Mỗi quả trứng Sadu chứa đầy đủ dinh dưỡng cần thiết cho sức khỏe gia đình bạn
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Những Câu Chuyện Thực Từ Gia Đình Việt
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border-l-4 border-primary"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-display font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
