export default function FarmGallerySection() {
  const galleryImages = [
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663344183182/nd8DyymyeUHes9kHCxyub5/sadu_farm_scene-kqQox7F9MpxD9QMm2HvYSD.webp",
      title: "Trang Trại Xanh Mướt",
      description: "Gà chạy bộ tự do trong vườn thảo dược",
    },
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663344183182/nd8DyymyeUHes9kHCxyub5/sadu_herbs_blend-2MuBeFH7eiyp5Srr4ZnCBH.webp",
      title: "Thảo Dược Tự Nhiên",
      description: "Các loại thảo dược chất lượng cao",
    },
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663344183182/nd8DyymyeUHes9kHCxyub5/sadu_family_meal-PNq74LDuvBQLYpw2yrV8Ut.webp",
      title: "Gia Đình Hạnh Phúc",
      description: "Chia sẻ bữa ăn ngon cùng gia đình",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Khám Phá Trang Trại Sadu
          </h2>
          <p className="text-lg text-muted-foreground">
            Hãy cùng chúng tôi khám phá không gian sống tự do của những con gà Sadu
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-display font-bold mb-2 group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                  {image.title}
                </h3>
                <p className="text-white/80 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Muốn tìm hiểu thêm về quy trình chăn nuôi của chúng tôi?
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Xem Quy Trình Chi Tiết
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
