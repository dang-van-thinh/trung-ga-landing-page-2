import { CheckCircle2 } from "lucide-react";

export default function StorySection() {
  const features = [
    {
      title: "Chế Độ Ăn 'Hoàng Gia'",
      description: "Gà được cho ăn thảo dược (Cà gai leo, mật nhân,...) kết hợp ngô, thóc tự nhiên",
      icon: "🌿",
    },
    {
      title: "Nói KHÔNG với Kháng Sinh",
      description: "100% không sử dụng kháng sinh trong quá trình chăn nuôi",
      icon: "✓",
    },
    {
      title: "Nghe Nhạc Mỗi Ngày",
      description: "Giảm stress cho gà, đảm bảo chất lượng trứng tốt nhất",
      icon: "🎵",
    },
  ];

  return (
    <section id="story" className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Từ Tình Yêu Tới Chất Lượng
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Tại Sadu, chúng tôi tin rằng một quả trứng tốt bắt đầu từ một cô gà hạnh phúc và khỏe mạnh. Mỗi quả trứng Sadu là kết quả của sự tận tâm, chế độ ăn đặc biệt từ thảo dược tự nhiên, và yêu thương vô điều kiện dành cho từng con gà.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-border"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-primary rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-display font-bold mb-8 text-center">Thông Số Ấn Tượng</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-primary-foreground/90">Thảo Dược Tự Nhiên</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">0%</div>
              <p className="text-primary-foreground/90">Kháng Sinh Tồn Dư</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1/3</div>
              <p className="text-primary-foreground/90">Cholesterol Thường</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">♪</div>
              <p className="text-primary-foreground/90">Nghe Nhạc Mỗi Ngày</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
