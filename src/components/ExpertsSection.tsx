import Image from "next/image";

interface Expert {
  name: string;
  title: string;
  organization?: string;
  quote: string;
  imageSrc?: string;
  initials?: string;
}

interface ExpertsSectionProps {
  title: string;
  experts: Expert[];
}

export default function ExpertsSection({ title, experts }: ExpertsSectionProps) {
  return (
    <section className="bg-[#f8f9fa] py-20 px-8 my-16 text-center">
      <h2 className="mb-12 text-[2.5rem] text-[#0a0a23]">
        {title}
      </h2>
      <div className="flex justify-center flex-wrap gap-8 max-w-[1200px] mx-auto">
        {experts.map((expert, index) => (
          <div key={index} className="bg-[#f2f2f2] rounded-[10px] p-10 w-[350px] flex flex-col items-center text-center">
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden mb-6 bg-[#e5e7eb] flex items-center justify-center">
              {expert.imageSrc ? (
                <Image
                  src={expert.imageSrc}
                  alt={expert.name}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-3xl font-semibold text-[#6b7280]">
                  {expert.initials}
                </span>
              )}
            </div>
            <h3 className="text-[1.8rem] text-[#0a0a23] mb-4">
              {expert.title}
            </h3>
            {expert.organization && (
              <div className="text-base text-[#6b7280] mb-6 font-normal">
                {expert.organization}
              </div>
            )}
            <p className="text-lg leading-[1.6] text-[#333]">
              &ldquo;{expert.quote}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}