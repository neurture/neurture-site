import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a23] text-white py-8 sm:py-12 px-4 sm:px-8 lg:px-[10%]">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-8 sm:gap-4 max-w-[1200px] mx-auto">
        <div>
          <h3 className="text-xl sm:text-2xl mb-3 sm:mb-6">Neurture</h3>
          <p className="text-white/80 text-base sm:text-lg mb-2 block">contact@neurtureapp.com</p>
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl mb-3 sm:mb-6">Company</h3>
          <Link href="/privacy-policy" className="text-white/80 no-underline mb-2 block text-base sm:text-lg hover:text-white hover:underline">
            Privacy policy
          </Link>
          <Link href="/terms" className="text-white/80 no-underline mb-2 block text-base sm:text-lg hover:text-white hover:underline">
            Terms of Service
          </Link>
          <Link href="/press-kit" className="text-white/80 no-underline mb-2 block text-base sm:text-lg hover:text-white hover:underline">
            Press Kit
          </Link>
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl mb-3 sm:mb-6">Support</h3>
          <Link href="/mental-health-resources" className="text-white/80 no-underline mb-2 block text-base sm:text-lg hover:text-white hover:underline">
            Mental health resources
          </Link>
          <Link href="/team#funding-transparency" className="text-white/80 no-underline mb-2 block text-base sm:text-lg hover:text-white hover:underline">
            Transparency
          </Link>
        </div>
      </div>
    </footer>
  );
}