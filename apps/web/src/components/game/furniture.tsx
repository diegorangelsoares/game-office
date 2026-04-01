"use client";

interface FurnitureProps {
  type: string;
  x: number;
  y: number;
  variant?: string;
}

export function Furniture({ type, x, y, variant }: FurnitureProps) {
  const renderFurniture = () => {
    switch (type) {
      case "desk":
        return (
          <div className="relative h-[60px] w-[100px]">
            <div className="absolute bottom-0 h-[30px] w-full rounded-sm border-2 border-stone-300 bg-stone-100 shadow-md" />

            {variant === "computer-setup" && (
              <>
                <div className="absolute bottom-[28px] left-[30px] h-[30px] w-[40px] rounded-sm border-2 border-stone-600 bg-stone-800">
                  <div className="m-[2px] h-[22px] w-[34px] rounded-sm bg-cyan-400/80" />
                </div>
                <div className="absolute bottom-[18px] left-[42px] h-[10px] w-[16px] bg-stone-700" />
              </>
            )}
            {variant === "dual-monitor" && (
              <>
                <div className="absolute bottom-[28px] left-[15px] h-[24px] w-[30px] rounded-sm bg-stone-800">
                  <div className="m-[1px] h-[18px] w-[26px] rounded-sm bg-purple-400/80" />
                </div>
                <div className="absolute bottom-[28px] left-[50px] h-[24px] w-[30px] rounded-sm bg-stone-800">
                  <div className="m-[1px] h-[18px] w-[26px] rounded-sm bg-blue-400/80" />
                </div>
              </>
            )}
            {variant === "gaming" && (
              <>
                <div className="absolute bottom-[28px] left-[25px] h-[30px] w-[45px] rounded-sm border-2 border-red-500 bg-stone-900">
                  <div className="m-[2px] h-[22px] w-[38px] rounded-sm bg-green-500/80" />
                </div>
                <div className="absolute bottom-[18px] left-[10px] h-[8px] w-[12px] rounded bg-stone-700" />
              </>
            )}
            {variant === "laptop" && (
              <div className="absolute bottom-[26px] left-[30px] h-[5px] w-[40px] rounded-sm bg-stone-400">
                <div className="absolute -top-[20px] h-[22px] w-[40px] origin-bottom -rotate-[10deg] rounded-t-sm bg-stone-500">
                  <div className="m-[2px] h-[18px] w-[36px] rounded-sm bg-sky-300/80" />
                </div>
              </div>
            )}
            {variant === "workstation" && (
              <>
                <div className="absolute bottom-[28px] left-[10px] h-[35px] w-[15px] rounded-sm bg-stone-800" />
                <div className="absolute bottom-[28px] left-[35px] h-[28px] w-[35px] rounded-sm bg-stone-800">
                  <div className="m-[2px] h-[20px] w-[30px] rounded-sm bg-teal-400/80" />
                </div>
              </>
            )}
            {variant === "messy" && (
              <>
                <div className="absolute bottom-[28px] left-[25px] h-[26px] w-[35px] rounded-sm bg-stone-800">
                  <div className="m-[2px] h-[18px] w-[30px] rounded-sm bg-cyan-300/80" />
                </div>
                <div className="absolute bottom-[28px] left-[65px] h-[25px] w-[20px] rounded-sm bg-amber-600/70" />
                <div className="absolute bottom-[28px] left-[8px] h-[15px] w-[12px] rounded bg-orange-400" />
              </>
            )}
          </div>
        );

      case "chair":
        return (
          <div className="h-[28px] w-[24px]">
            <svg viewBox="0 0 24 28" className="h-full w-full">
              <rect x="2" y="12" width="20" height="8" fill="#4a5568" rx="2" />
              <rect x="4" y="2" width="16" height="12" fill="#2d3748" rx="2" />
              <rect x="4" y="20" width="3" height="8" fill="#1a202c" />
              <rect x="17" y="20" width="3" height="8" fill="#1a202c" />
            </svg>
          </div>
        );

      case "plant":
        return (
          <div className="h-[32px] w-[24px]">
            <svg viewBox="0 0 24 32" className="h-full w-full">
              <rect x="6" y="22" width="12" height="10" fill="#d97706" rx="1" />
              <ellipse cx="12" cy="14" rx="8" ry="10" fill="#22c55e" />
              <ellipse cx="8" cy="12" rx="4" ry="6" fill="#16a34a" />
              <ellipse cx="16" cy="12" rx="4" ry="6" fill="#16a34a" />
            </svg>
          </div>
        );

      case "trophy":
        return (
          <div className="h-[28px] w-[20px]">
            <svg viewBox="0 0 20 28" className="h-full w-full">
              <rect x="7" y="18" width="6" height="6" fill="#fbbf24" />
              <rect x="5" y="24" width="10" height="4" fill="#92400e" />
              <ellipse cx="10" cy="10" rx="8" ry="10" fill="#fcd34d" />
              <ellipse cx="10" cy="8" rx="5" ry="6" fill="#fbbf24" />
            </svg>
          </div>
        );

      case "watercooler":
        return (
          <div className="h-[50px] w-[28px]">
            <svg viewBox="0 0 28 50" className="h-full w-full">
              <rect x="4" y="35" width="20" height="15" fill="#e5e7eb" rx="2" />
              <rect x="8" y="5" width="12" height="30" fill="#93c5fd" rx="2" />
              <rect x="10" y="8" width="8" height="10" fill="#60a5fa" rx="1" />
            </svg>
          </div>
        );

      case "backpack":
        return (
          <div className="h-[24px] w-[20px]">
            <svg viewBox="0 0 20 24" className="h-full w-full">
              <rect x="2" y="4" width="16" height="20" fill="#22c55e" rx="3" />
              <rect x="5" y="8" width="10" height="6" fill="#16a34a" rx="1" />
              <rect x="8" y="0" width="4" height="6" fill="#166534" />
            </svg>
          </div>
        );

      case "bamboo":
        return (
          <div className="h-[60px] w-[40px]">
            <svg viewBox="0 0 40 60" className="h-full w-full">
              <rect x="5" y="45" width="30" height="15" fill="#374151" rx="2" />
              <rect x="12" y="10" width="4" height="38" fill="#22c55e" />
              <rect x="18" y="5" width="4" height="43" fill="#16a34a" />
              <rect x="24" y="15" width="4" height="33" fill="#22c55e" />
              <ellipse cx="14" cy="8" rx="6" ry="4" fill="#4ade80" />
              <ellipse cx="20" cy="3" rx="8" ry="4" fill="#22c55e" />
              <ellipse cx="26" cy="12" rx="6" ry="4" fill="#4ade80" />
            </svg>
          </div>
        );

      case "pingpong":
        return (
          <div className="h-[50px] w-[80px]">
            <svg viewBox="0 0 80 50" className="h-full w-full">
              <rect x="5" y="15" width="70" height="35" fill="#22c55e" rx="2" />
              <rect x="5" y="15" width="70" height="4" fill="#16a34a" />
              <rect x="38" y="10" width="4" height="25" fill="#fff" />
              <rect x="5" y="30" width="70" height="2" fill="#fff" />
              <rect x="10" y="45" width="6" height="5" fill="#1f2937" />
              <rect x="64" y="45" width="6" height="5" fill="#1f2937" />
            </svg>
          </div>
        );

      case "sofa":
        if (variant === "orange-left" || variant === "orange-right") {
          return (
            <div className="h-[30px] w-[40px]">
              <svg viewBox="0 0 40 30" className="h-full w-full">
                <rect x="2" y="8" width="36" height="22" fill="#f97316" rx="4" />
                <rect x="4" y="4" width="8" height="20" fill="#ea580c" rx="2" />
                <rect x="28" y="4" width="8" height="20" fill="#ea580c" rx="2" />
                <rect x="10" y="12" width="20" height="12" fill="#fb923c" rx="2" />
              </svg>
            </div>
          );
        }
        if (variant === "beige") {
          return (
            <div className="h-[28px] w-[50px]">
              <svg viewBox="0 0 50 28" className="h-full w-full">
                <rect x="2" y="8" width="46" height="20" fill="#d4a574" rx="4" />
                <rect x="6" y="12" width="18" height="12" fill="#c9956c" rx="2" />
                <rect x="26" y="12" width="18" height="12" fill="#c9956c" rx="2" />
              </svg>
            </div>
          );
        }
        if (variant === "small") {
          return (
            <div className="h-[25px] w-[35px]">
              <svg viewBox="0 0 35 25" className="h-full w-full">
                <rect x="2" y="6" width="31" height="19" fill="#78716c" rx="3" />
                <rect x="5" y="10" width="25" height="10" fill="#a8a29e" rx="2" />
              </svg>
            </div>
          );
        }
        return null;

      case "coffeetable":
        return (
          <div className="h-[20px] w-[30px]">
            <svg viewBox="0 0 30 20" className="h-full w-full">
              <rect x="2" y="5" width="26" height="12" fill="#78350f" rx="2" />
              <rect x="5" y="2" width="8" height="6" fill="#a1a1aa" rx="1" />
            </svg>
          </div>
        );

      case "lamp":
        return (
          <div className="h-[40px] w-[16px]">
            <svg viewBox="0 0 16 40" className="h-full w-full">
              <rect x="6" y="15" width="4" height="25" fill="#78716c" />
              <ellipse cx="8" cy="8" rx="7" ry="8" fill="#fef3c7" />
              <ellipse cx="8" cy="6" rx="4" ry="4" fill="#fde68a" />
            </svg>
          </div>
        );

      case "bigtree":
        return (
          <div className="h-[70px] w-[50px]">
            <svg viewBox="0 0 50 70" className="h-full w-full">
              <rect x="12" y="55" width="26" height="15" fill="#78350f" rx="2" />
              <rect x="22" y="35" width="6" height="22" fill="#92400e" />
              <ellipse cx="25" cy="25" rx="20" ry="25" fill="#16a34a" />
              <ellipse cx="18" cy="20" rx="10" ry="15" fill="#22c55e" />
              <ellipse cx="32" cy="22" rx="10" ry="14" fill="#22c55e" />
            </svg>
          </div>
        );

      case "tv":
        return (
          <div className="h-[35px] w-[50px]">
            <svg viewBox="0 0 50 35" className="h-full w-full">
              <rect x="10" y="28" width="30" height="7" fill="#57534e" rx="1" />
              <rect x="5" y="5" width="40" height="25" fill="#1f2937" rx="2" />
              <rect x="8" y="8" width="34" height="18" fill="#374151" rx="1" />
            </svg>
          </div>
        );

      case "flowerpot":
        return (
          <div className="h-[35px] w-[28px]">
            <svg viewBox="0 0 28 35" className="h-full w-full">
              <rect x="6" y="22" width="16" height="13" fill="#be185d" rx="2" />
              <circle cx="10" cy="12" r="5" fill="#f472b6" />
              <circle cx="18" cy="10" r="5" fill="#ec4899" />
              <circle cx="14" cy="16" r="4" fill="#f9a8d4" />
              <rect x="9" y="14" width="2" height="10" fill="#22c55e" />
              <rect x="17" y="12" width="2" height="12" fill="#22c55e" />
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="absolute" style={{ left: x, top: y }}>
      {renderFurniture()}
    </div>
  );
}
