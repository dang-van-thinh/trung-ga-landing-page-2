import { CheckCircle2, XCircle } from "lucide-react";

export default function NutritionSection() {
  const nutritionData = [
    {
      nutrient: "Cholesterol",
      sadu: "Thấp (1/3 so với trứng thường)",
      regular: "Cao",
      sadu_good: true,
    },
    {
      nutrient: "Omega-3",
      sadu: "Cao (từ thảo dược)",
      regular: "Thấp",
      sadu_good: true,
    },
    {
      nutrient: "Kháng Sinh Tồn Dư",
      sadu: "0%",
      regular: "Có thể có",
      sadu_good: true,
    },
    {
      nutrient: "Protein",
      sadu: "6g/quả",
      regular: "6g/quả",
      sadu_good: false,
    },
    {
      nutrient: "Choline",
      sadu: "Cao (hỗ trợ não)",
      regular: "Bình thường",
      sadu_good: true,
    },
    {
      nutrient: "Lutein & Zeaxanthin",
      sadu: "Cao (bảo vệ mắt)",
      regular: "Bình thường",
      sadu_good: true,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            So Sánh Dinh Dưỡng
          </h2>
          <p className="text-lg text-muted-foreground">
            Xem sự khác biệt rõ ràng giữa trứng Sadu và trứng thường
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-6 py-4 text-left font-display font-bold rounded-tl-lg">
                  Thành Phần
                </th>
                <th className="px-6 py-4 text-left font-display font-bold">Trứng Sadu</th>
                <th className="px-6 py-4 text-left font-display font-bold rounded-tr-lg">
                  Trứng Thường
                </th>
              </tr>
            </thead>
            <tbody>
              {nutritionData.map((item, index) => (
                <tr
                  key={index}
                  className={`border-b border-border hover:bg-muted/50 transition-colors ${
                    index % 2 === 0 ? "bg-white" : "bg-muted/10"
                  }`}
                >
                  <td className="px-6 py-4 font-semibold text-foreground">{item.nutrient}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {item.sadu_good && (
                        <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" />
                      )}
                      <span className="text-foreground">{item.sadu}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      {!item.sadu_good && (
                        <CheckCircle2 size={20} className="text-green-500 flex-shrink-0" />
                      )}
                      {item.sadu_good && (
                        <XCircle size={20} className="text-gray-400 flex-shrink-0" />
                      )}
                      <span className="text-muted-foreground">{item.regular}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-secondary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-display font-bold text-secondary-foreground mb-4">
            Sẵn Sàng Nâng Cấp Chế Độ Ăn Của Gia Đình?
          </h3>
          <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Hãy thử trứng Sadu ngay hôm nay và cảm nhận sự khác biệt. Bảo hành 100% hoàn tiền nếu không hài lòng.
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Đặt Mua Ngay
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
