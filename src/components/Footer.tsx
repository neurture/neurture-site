import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a23] text-white py-12 px-[10%]">
      <div className="flex justify-between max-w-[1200px] mx-auto">
        <div>
          <h3 className="text-2xl mb-6 font-serif">Neurture</h3>
          <p className="text-white/80 text-lg mb-2 block">contact@neurtureapp.com</p>
        </div>
        <div>
          <h3 className="text-2xl mb-6 font-serif">Company</h3>
          <Link href="/privacy-policy" className="text-white/80 no-underline mb-2 block text-lg hover:text-white hover:underline">
            Privacy policy
          </Link>
          <Link href="/press-kit" className="text-white/80 no-underline mb-2 block text-lg hover:text-white hover:underline">
            Press Kit
          </Link>
        </div>
      </div>
    </footer>
  );
}