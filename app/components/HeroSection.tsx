export default function HeroSection({ title, subtitle }: { 
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative h-96 flex items-center justify-center bg-blue-900 text-white">
      <div className="text-center z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl">{subtitle}</p>
        )}
      </div>
      <div className="absolute inset-0 bg-black/30" />
    </section>
  );
}