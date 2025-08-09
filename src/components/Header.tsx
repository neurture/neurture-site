import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#0a0a23]">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4 py-4"><div className="w-[30px] h-[30px] rounded-full">
        <Image
          src="/images/neurture-logo-transparent.png"
          alt="Neurture"
          width={30}
          height={30}
          className="w-full h-full object-contain rounded-[22%]"
        />
      </div>
      <nav>
        <ul className="flex items-center gap-10 list-none m-0 p-0">
          <li>
            <Link
              href="/"
              className="text-white no-underline text-lg pb-[5px] border-b-2 border-white"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/team"
              className="text-white no-underline text-lg pb-[5px] hover:border-b-2 hover:border-white"
            >
              Team
            </Link>
          </li>
          <li>
            <a
              href="https://theadaptivemind.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white no-underline text-lg pb-[5px] hover:border-b-2 hover:border-white"
            >
              Podcast
            </a>
          </li>
        </ul>
      </nav></div>
    </header>
  );
}
