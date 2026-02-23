import {
  ArrowUpNarrowWide,
  BicepsFlexed,
  Blend,
  Boxes,
  Cloud,
  FlaskRound,
  HandCoins,
  HeartPulse,
  Microwave,
  Package,
  Pill,
  RefreshCcwDot,
  ShieldPlus,
  Stone,
  TrendingDown,
  Wind,
} from "lucide-react";

export default function Icon({
  name,
  className,
}: {
  name: string;
  className: string;
}) {
  return (
    <>
      {(name === "force" || name === "resistance") && (
        <BicepsFlexed className={`${className}`} />
      )}

      {name === "blend" && <Blend className={`${className}`} />}

      {name === "health" && <HeartPulse className={`${className}`} />}

      {name === "down" && <TrendingDown className={`${className}`} />}

      {name === "cloud" && <Cloud className={`${className}`} />}

      {name === "boxes" && <Boxes className={`${className}`} />}

      {name === "shield" && <ShieldPlus className={`${className}`} />}

      {name === "oven" && <Microwave className={`${className}`} />}

      {name === "chemistry" && <FlaskRound className={`${className}`} />}

      {name === "versatility" && <RefreshCcwDot className={`${className}`} />}

      {name === "performance" && (
        <ArrowUpNarrowWide className={`${className}`} />
      )}

      {name === "save" && <HandCoins className={`${className}`} />}

      {name === "consistency" && <Stone className={`${className}`} />}

      {name === "fresh" && <Wind className={`${className}`} />}

      {name === "packaging" && <Package className={`${className}`} />}

      {name === "check" && <Pill className={`${className}`} />}
    </>
  );
}
