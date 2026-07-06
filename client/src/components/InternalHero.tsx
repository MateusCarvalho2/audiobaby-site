type InternalHeroProps = {
  label: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
  waveColor?: string;
  bgColor?: string;
  imageClassName?: string;
};

export default function InternalHero({
  label,
  title,
  highlight,
  description,
  image,
  waveColor = "white",
  bgColor = "white",
  imageClassName = "",
}: InternalHeroProps) {
  return (
    <section className="relative isolate min-h-[68svh] overflow-hidden bg-[#2C3E50] pt-32 text-white">
      <div className="absolute inset-0 -z-10">
        <img
          src={image}
          alt=""
          className={`h-full w-full object-cover opacity-[0.82] ${imageClassName}`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C3E50] via-[#2C3E50]/80 via-45% to-transparent" />
        
        {/* Smooth gradient fade matching the background color of the next section */}
        <div 
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t" 
          style={{
            backgroundImage: `linear-gradient(to top, ${bgColor} 0%, transparent 100%)`
          }}
        />
      </div>

      <div className="container flex min-h-[calc(68svh-8rem)] items-center pb-28">
        <div className="max-w-3xl">
          <div className="hero-reveal inline-flex border border-white/18 bg-white/10 px-4 py-2 font-nunito text-sm font-800 uppercase tracking-[0.18em] text-[#F4C62F] backdrop-blur-md">
            {label}
          </div>
          <h1 className="hero-reveal mt-7 text-4xl md:text-5xl lg:text-6xl leading-tight">
            {title}
            <span className="block text-[#F4C62F]">{highlight}</span>
          </h1>
          <p className="hero-reveal mt-7 max-w-2xl font-lato text-lg leading-relaxed text-white/78 md:text-xl">
            {description}
          </p>
        </div>
      </div>

      {/* Smooth wavy divider transition to the page content */}
      <div 
        className="absolute inset-x-0 bottom-0 z-10 w-full overflow-hidden leading-none"
        style={{ transform: "translateY(1px)" }}
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-16"
          style={{ display: "block" }}
        >
          <path
            d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,80 L0,80 Z"
            fill={waveColor}
          />
        </svg>
      </div>
    </section>
  );
}
