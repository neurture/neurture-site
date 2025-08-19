interface Review {
  text: string;
  rating?: number;
}

interface ReviewsSectionProps {
  reviews: Review[];
}

export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  return (
    <section className="bg-[#f8f9fa] py-20 px-8 my-16">
      <div className="flex justify-center flex-wrap gap-8 max-w-[1200px] mx-auto">
        {reviews.map((review, index) => (
          <div key={index} className="bg-[#f2f2f2] rounded-[10px] p-10 w-[350px] flex flex-col items-center text-center">
            <h3 className="text-base text-[#333] mb-6 font-medium">
              App Store Review
            </h3>
            <p className="text-[1.2rem] leading-[1.6] text-[#333] mb-6 font-medium">
              "{review.text}"
            </p>
            <div className="text-[#ffc107] text-2xl tracking-wider">★★★★★</div>
          </div>
        ))}
      </div>
    </section>
  );
}