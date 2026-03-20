import { useState } from "react";
import { LookData } from "@/data/looks";
import { Checkbox } from "@/components/ui/checkbox";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

interface OutfitDisplayProps {
  look: LookData;
}

const ScoreBadge = ({ score }: { score: number }) => {
  const color =
    score >= 90
      ? "text-emerald-700 bg-emerald-50 ring-emerald-200"
      : score >= 80
        ? "text-amber-700 bg-amber-50 ring-amber-200"
        : "text-rose-700 bg-rose-50 ring-rose-200";
  return (
    <span className={`inline-flex items-center text-[0.65rem] font-semibold px-1.5 py-0.5 rounded ring-1 ${color}`}>
      {score}%
    </span>
  );
};

const OutfitDisplay = ({ look }: OutfitDisplayProps) => {
  const [formalChecked, setFormalChecked] = useState<Record<string, boolean>>({});
  const [casualChecked, setCasualChecked] = useState<Record<string, boolean>>({});

  const toggleFormal = (sku: string) =>
    setFormalChecked((prev) => ({ ...prev, [sku]: !prev[sku] }));
  const toggleCasual = (sku: string) =>
    setCasualChecked((prev) => ({ ...prev, [sku]: !prev[sku] }));

  const formalFinalScore = Math.round(
    look.formal.completeTheLook.reduce((sum, i) => sum + i.matchingScore, 0) /
      look.formal.completeTheLook.length
  );
  const casualFinalScore = Math.round(
    look.casual.completeTheLook.reduce((sum, i) => sum + i.matchingScore, 0) /
      look.casual.completeTheLook.length
  );

  const handleAddToCart = (category: "formal" | "casual") => {
    const checked = category === "formal" ? formalChecked : casualChecked;
    const items = category === "formal" ? look.formal.completeTheLook : look.casual.completeTheLook;
    const selected = items.filter((i) => checked[i.sku]);
    if (selected.length === 0) return;
    toast.success(`${selected.length} item${selected.length > 1 ? "s" : ""} added to cart`, {
      description: selected.map((i) => i.label).join(", "),
    });
  };

  const renderCategory = (
    type: "formal" | "casual",
    category: typeof look.formal,
    checked: Record<string, boolean>,
    toggle: (sku: string) => void,
    finalScore: number,
    delay: string
  ) => (
    <div className="animate-fade-up" style={{ animationDelay: delay }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-xl lg:text-2xl font-light tracking-tight capitalize">
          {type} — Complete the Look
        </h2>
        <button
          onClick={() => handleAddToCart(type)}
          disabled={!category.completeTheLook.some((i) => checked[i.sku])}
          className="flex items-center gap-2 px-4 py-2 rounded-md text-xs font-medium tracking-wide transition-all duration-200 active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed bg-foreground text-background hover:bg-foreground/90"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          Add Cart
          {category.completeTheLook.filter((i) => checked[i.sku]).length > 0 &&
            ` (${category.completeTheLook.filter((i) => checked[i.sku]).length})`}
        </button>
      </div>

      {/* 3-column: Hero | Items Grid | Model */}
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_200px] gap-4 lg:gap-6 items-start">
        {/* Left: Hero product */}
        <div className="hidden md:block">
          <div className="rounded-md overflow-hidden ring-1 ring-border">
            <img
              src={look.heroImage}
              alt={look.heroName}
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
          <p className="mt-2 text-xs font-medium text-foreground">
            Hero Product: {look.heroName}
          </p>
        </div>

        {/* Center: 2x2 items grid */}
        <div>
          <div className="grid grid-cols-2 gap-3">
            {category.completeTheLook.map((item) => (
              <div key={item.sku} className="group relative">
                {/* Checkbox overlay */}
                <div className="absolute top-2 right-2 z-10">
                  <Checkbox
                    checked={!!checked[item.sku]}
                    onCheckedChange={() => toggle(item.sku)}
                    className="h-5 w-5 rounded-full bg-background/90 backdrop-blur-sm border-2 border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                  />
                </div>

                <div className="rounded-md overflow-hidden ring-1 ring-border image-hover bg-muted/30">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full aspect-square object-cover"
                  />
                </div>
                <div className="mt-2 space-y-0.5">
                  <p className="text-xs font-semibold text-foreground">
                    {item.category}: {item.label}
                  </p>
                  <p className="text-[0.65rem] text-muted-foreground font-mono">
                    Sku Num: {item.sku}
                  </p>
                  <p className="text-[0.65rem] text-muted-foreground">
                    Matching score: <span className="font-semibold text-foreground">{item.matchingScore}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Model image with caption */}
        <div>
          <div className="rounded-md overflow-hidden ring-1 ring-border">
            <img
              src={category.outfitImage}
              alt={`${type} outfit`}
              className="w-full aspect-[2/3] object-cover"
            />
          </div>
          <div className="mt-2 space-y-1">
            <p className="text-xs text-muted-foreground italic leading-relaxed">
              Caption: {category.caption}
            </p>
            <p className="text-xs font-medium text-foreground">
              Score: <ScoreBadge score={finalScore} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full overflow-y-auto scrollbar-thin px-4 lg:px-6 py-6 space-y-10" key={look.id}>
      {renderCategory("formal", look.formal, formalChecked, toggleFormal, formalFinalScore, "80ms")}
      <hr className="border-border" />
      {renderCategory("casual", look.casual, casualChecked, toggleCasual, casualFinalScore, "160ms")}
    </div>
  );
};

export default OutfitDisplay;
