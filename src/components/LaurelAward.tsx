import Image from "next/image";

interface LaurelAwardProps {
  topText: string;
  bottomText: string;
  href?: string;
}

export default function LaurelAward({ topText, bottomText, href }: LaurelAwardProps) {
  const content = (
    <>
      <Image
        src="/images/award-laurels-left.png"
        alt="Award laurel left"
        width={40}
        height={60}
        className="w-10 h-auto -mr-4"
      />
      <div className="flex flex-col items-center text-center px-1">
        <span className="text-sm text-gray-700 font-bold">{topText}</span>
        <span className="text-xs text-gray-700 font-bold">{bottomText}</span>
      </div>
      <Image
        src="/images/award-laurels-right.png"
        alt="Award laurel right"
        width={40}
        height={60}
        className="w-10 h-auto -ml-4"
      />
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center hover:opacity-80 transition-opacity"
      >
        {content}
      </a>
    );
  }

  return <div className="flex items-center">{content}</div>;
}
