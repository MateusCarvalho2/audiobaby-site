/*
 * AudioBaby WaveDivider
 * Design: Ondas sonoras animadas como elemento de transição entre seções
 */

interface WaveDividerProps {
  color?: string;
  bgColor?: string;
  flip?: boolean;
}

export default function WaveDivider({ color = "#EEF4FB", bgColor = "white", flip = false }: WaveDividerProps) {
  return (
    <div
      className="w-full overflow-hidden leading-none"
      style={{ backgroundColor: bgColor, transform: flip ? "scaleY(-1)" : "none" }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-20"
        style={{ display: "block" }}
      >
        <path
          d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export function AudioWaveBar() {
  const bars = [3, 6, 9, 12, 8, 5, 10, 14, 7, 11, 6, 9, 4, 8, 12, 7, 5, 10, 8, 6];

  return (
    <div className="flex items-center justify-center gap-1 py-6">
      {bars.map((height, i) => (
        <div
          key={i}
          className="w-1 rounded-full bg-[#94B1DA] animate-wave-pulse"
          style={{
            height: `${height * 3}px`,
            animationDelay: `${i * 0.08}s`,
            opacity: 0.6 + (height / 14) * 0.4,
          }}
        />
      ))}
    </div>
  );
}
