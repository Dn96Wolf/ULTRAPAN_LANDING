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

export default function Icon({ name }: { name: string }) {
  return (
    <>
      {(name === "force" || name === "resistance") && <BicepsFlexed />}

      {name === "blend" && <Blend />}

      {name === "health" && <HeartPulse />}

      {name === "down" && <TrendingDown />}

      {name === "cloud" && <Cloud />}

      {name === "boxes" && <Boxes />}

      {name === "shield" && <ShieldPlus />}

      {name === "oven" && <Microwave />}

      {name === "chemistry" && <FlaskRound />}

      {name === "versatility" && <RefreshCcwDot />}

      {name === "performance" && <ArrowUpNarrowWide />}

      {name === "save" && <HandCoins />}

      {name === "consistency" && <Stone />}

      {name === "fresh" && <Wind />}

      {name === "packaging" && <Package />}

      {name === "check" && <Pill />}
    </>
  );
}
