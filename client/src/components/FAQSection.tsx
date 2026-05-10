import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Trứng Sadu khác gì so với trứng thường?",
      answer:
        "Trứng Sadu được nuôi từ gà ăn 100% thảo dược tự nhiên (Cà gai leo, mật nhân, v.v.), không sử dụng kháng sinh, và có hàm lượng cholesterol chỉ bằng 1/3 so với trứng thường. Lòng đỏ có màu cam đậm tự nhiên, vị béo ngậy, không tanh.",
    },
    {
      question: "Giá cả của Sadu có đắt không?",
      answer:
        "Giá Sadu cao hơn trứng thường vì chất lượng cao hơn. Tuy nhiên, nếu tính theo giá trị dinh dưỡng và lợi ích sức khỏe, Sadu rất xứng đáng. Ngoài ra, chúng tôi có các combo tiết kiệm (mua 3 hộp tiết kiệm 66.000đ) để giúp bạn tiết kiệm chi phí.",
    },
    {
      question: "Giao hàng mất bao lâu?",
      answer:
        "Chúng tôi giao hàng trong vòng 1-2 ngày làm việc cho các địa chỉ ở Hà Nội và TP.HCM. Các tỉnh khác mất 2-3 ngày. Giao hàng miễn phí cho đơn hàng từ 300.000đ trở lên.",
    },
    {
      question: "Làm sao để bảo quản trứng Sadu?",
      answer:
        "Bảo quản trứng Sadu ở nhiệt độ phòng (15-25°C) trong tủ hoặc nơi thoáng mát. Không nên để ở nơi quá nóng hoặc quá lạnh. Thời hạn sử dụng là 30 ngày từ ngày sản xuất. Nếu để trong tủ lạnh, có thể bảo quản lâu hơn.",
    },
    {
      question: "Trứng Sadu có phù hợp cho trẻ em không?",
      answer:
        "Có, trứng Sadu rất phù hợp cho trẻ em. Nó giàu protein, choline (hỗ trợ phát triển não), và các vi chất từ thảo dược. Hàm lượng cholesterol thấp cũng an toàn cho trẻ. Tuy nhiên, nên tham khảo ý kiến bác sĩ trước nếu trẻ có dị ứng.",
    },
    {
      question: "Có thể hoàn tiền nếu không hài lòng không?",
      answer:
        "Có, chúng tôi bảo hành 100% hoàn tiền trong vòng 7 ngày nếu bạn không hài lòng với chất lượng sản phẩm. Chỉ cần liên hệ với chúng tôi kèm theo hình ảnh chứng minh.",
    },
    {
      question: "Sadu có chứng chỉ chất lượng không?",
      answer:
        "Có, tất cả sản phẩm Sadu đều được kiểm định chất lượng và không chứa kháng sinh tồn dư. Chúng tôi tuân thủ các tiêu chuẩn vệ sinh an toàn thực phẩm. Bạn có thể yêu cầu chứng chỉ khi đặt hàng.",
    },
    {
      question: "Có thể đặt hàng định kỳ không?",
      answer:
        "Có, chúng tôi hỗ trợ đặt hàng định kỳ (hàng tuần, hàng tháng). Liên hệ hotline 1900 XXXX để đăng ký gói đặt hàng định kỳ và nhận ưu đãi đặc biệt.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="text-lg text-muted-foreground">
            Tìm hiểu thêm về sản phẩm và dịch vụ của Sadu
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Question */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground text-left">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 py-4 bg-muted/30 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl font-display font-bold mb-4">Còn Câu Hỏi Khác?</h3>
          <p className="text-lg text-primary-foreground/90 mb-6">
            Liên hệ với chúng tôi qua hotline hoặc email để được hỗ trợ nhanh chóng
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1900XXXX"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              📞 Gọi Hotline
            </a>
            <a
              href="mailto:support@sadu.com.vn"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              ✉️ Gửi Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
