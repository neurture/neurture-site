interface VideoSectionProps {
  videoId: string;
  title: string;
}

export default function VideoSection({ videoId, title }: VideoSectionProps) {
  return (
    <section className="my-16 text-center max-w-[1200px] mx-auto px-4">
      <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full">
        <iframe
          width="1100"
          height="619"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          className="absolute top-0 left-0 w-full h-full border-none"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  );
}