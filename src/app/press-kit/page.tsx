import Image from "next/image";

export default function PressKitPage() {
  return (
    <main className="bg-[#f8f9fa]">
      <section className="max-w-[1200px] mx-auto py-12 px-8">
        <h1 className="text-[3rem] text-[#0a0a23] mb-12 text-center font-serif">Media Press Kit</h1>

        <div className="flex justify-around mb-16 flex-wrap gap-12">
          <div className="flex flex-col items-center w-[350px]">
            <div className="w-[350px] h-[350px] flex items-center justify-center mb-4">
              <Image
                src="/images/neurture-icon.png"
                alt="Neurture App Logo"
                width={350}
                height={350}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <p className="text-[1.1rem] text-[#333] text-center">Neurture App Logo</p>
          </div>

          <div className="flex flex-col items-center w-[350px]">
            <div className="w-[350px] h-[350px] flex items-center justify-center mb-4">
              <Image
                src="/images/neurture-logo-transparent.png"
                alt="Transparent Neurture App Logo"
                width={350}
                height={350}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <p className="text-[1.1rem] text-[#333] text-center">Transparent Neurture App Logo</p>
          </div>

          <div className="flex flex-col items-center w-[350px]">
            <div className="w-[350px] h-[350px] flex items-center justify-center mb-4">
              <Image
                src="/images/the-adaptive-mind.png"
                alt="The Adaptive Mind Podcast"
                width={350}
                height={350}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <p className="text-[1.1rem] text-[#333] text-center">The Adaptive Mind Podcast</p>
          </div>

          <div className="flex flex-col items-center w-[350px]">
            <div className="w-[350px] h-[350px] flex items-center justify-center mb-4">
              <Image
                src="/images/the-adaptive-mind-dark.png"
                alt="The Adaptive Mind Podcast Dark"
                width={350}
                height={350}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <p className="text-[1.1rem] text-[#333] text-center">The Adaptive Mind Podcast Dark</p>
          </div>
        </div>

        <div className="flex justify-center items-center mt-8">
          <div className="flex flex-col items-center w-[350px]">
            <div className="w-[350px] h-[450px] flex items-center justify-center mb-4">
              <Image
                src="/images/iPhone-13.png"
                alt="Neurture on 3D rendered phone"
                width={350}
                height={450}
                className="max-h-full object-contain"
              />
            </div>
            <p className="text-[1.1rem] text-[#333] text-center">Neurture on 3D rendered phone</p>
          </div>
        </div>
      </section>
    </main>
  );
}