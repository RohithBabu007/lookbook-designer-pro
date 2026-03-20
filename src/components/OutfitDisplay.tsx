import { useState } from "react";
import { LookData, CompleteTheLookItem } from "@/data/looks";
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
    <span className={`inline-flex items-center text-[0.6rem] font-semibold px-1.5 py-0.5 rounded ring-1 ${color}`}>
      {score}%
    </span>
  );
};

const CategorySection = ({
  category,
  label,
  items,
  checked,
  onToggle,
  onAddToCart,
  finalScore,
}: {
  category: "formal" | "casual";
  label: string;
  items: CompleteTheLookItem[];
  checked: Record<string, boolean>;
  onToggle: (sku: string) => void;
  onAddToCart: () => void;
  finalScore: number;
  caption: string;
}) => {
  const selectedCount = items.filter((i) => checked[i.sku]).length;

  return (
    <div className="space-y-4 animate-fade-up" style={{ animationDelay: category === "formal" ? "80ms" : "160ms" }}>
      <div className="flex items-center justify-between">
        <span className="category-label">{label}</span>
        <div className="flex items-center gap-1.5">
          <span className="text-[0.6rem] text-muted-foreground font-medium">Score</span>
          <ScoreBadge score={finalScore} />
        </div>
      </div>

      {/* Outfit image with caption */}
      <div>
        <div className="rounded-md overflow-hidden image-hover ring-1 ring-border">
          <img
            src={
              category === "formal"
                ? arguments[0] as unknown as string
                : (arguments[0] as unknown as string)
            }
            alt={`${label} outfit`}
            className="w-full aspect-[3/4] object-cover"
          />
        </div>
      </div>

      {/* Complete the Look */}
      <div className="space-y-2">
        <span className="category-label text-[0.65rem]">Complete the Look</span>
        <div className="grid grid-cols-2 gap-3">
          {items.map((item) => (
            <div key={item.sku} className="group">
              <div className="relative rounded overflow-hidden ring-1 ring-border image-hover">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute top-1.5 left-1.5">
                  <Checkbox
                    checked={!!checked[item.sku]}
                    onCheckedChange={() => onToggle(item.sku)}
                    className="h-4 w-4 bg-background/80 backdrop-blur-sm border-border"
                  />
                </div>
              </div>
              <div className="mt-1.5 space-y-0.5">
                <div className="flex items-center justify-between gap-1">
                  <p className="text-[0.65rem] text-foreground font-medium tracking-wide truncate">
                    {item.label}
                  </p>
                  <ScoreBadge score={item.matchingScore} />
                </div>
                <p className="text-[0.55rem] text-muted-foreground font-mono tracking-wider">
                  {item.sku}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add to Cart */}
      <button
        onClick={onAddToCart}
        disabled={selectedCount === 0}
        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md text-xs font-medium tracking-wide transition-all duration-200 active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed bg-foreground text-background hover:bg-foreground/90"
      >
        <ShoppingCart className="w-3.5 h-3.5" />
        Add to Cart{selectedCount > 0 && ` (${selectedCount})`}
      </button>
    </div>
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
    toast.success(`${selected.length} item${selected.length > 1 ? "s" : ""} added to cart`, {
      description: selected.map((i) => i.label).join(", "),
    });
  };

  return (
    <div className="h-full overflow-y-auto scrollbar-thin px-4 lg:px-6 py-6" key={look.id}>
      <h1 className="font-display text-2xl lg:text-3xl font-light tracking-tight text-foreground mb-6 animate-fade-up">
        {look.title}
      </h1>

      <div className="grid grid-cols-2 gap-4 lg:gap-6">
        {/* Formal */}
        <div className="space-y-4 animate-fade-up" style={{ animationDelay: "80ms" }}>
          <div className="flex items-center justify-between">
            <span className="category-label">Formal</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[0.6rem] text-muted-foreground font-medium">Score</span>
              <ScoreBadge score={formalFinalScore} />
            </div>
          </div>

          <div>
            <div className="rounded-md overflow-hidden image-hover ring-1 ring-border">
              <img
                src={look.formal.outfitImage}
                alt={`${look.title} formal outfit`}
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-muted-foreground italic leading-relaxed">
              {look.formal.caption}
            </p>
          </div>

          <div className="space-y-2">
            <span className="category-label text-[0.65rem]">Complete the Look</span>
            <div className="grid grid-cols-2 gap-3">
              {look.formal.completeTheLook.map((item) => (
                <div key={item.sku} className="group">
                  <div className="relative rounded overflow-hidden ring-1 ring-border image-hover">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute top-1.5 left-1.5">
                      <Checkbox
                        checked={!!formalChecked[item.sku]}
                        onCheckedChange={() => toggleFormal(item.sku)}
                        className="h-4 w-4 bg-background/80 backdrop-blur-sm border-border"
                      />
                    </div>
                  </div>
                  <div className="mt-1.5 space-y-0.5">
                    <div className="flex items-center justify-between gap-1">
                      <p className="text-[0.65rem] text-foreground font-medium tracking-wide truncate">
                        {item.label}
                      </p>
                      <ScoreBadge score={item.matchingScore} />
                    </div>
                    <p className="text-[0.55rem] text-muted-foreground font-mono tracking-wider">
                      {item.sku}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => handleAddToCart("formal")}
            disabled={!look.formal.completeTheLook.some((i) => formalChecked[i.sku])}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md text-xs font-medium tracking-wide transition-all duration-200 active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed bg-foreground text-background hover:bg-foreground/90"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add to Cart
            {look.formal.completeTheLook.filter((i) => formalChecked[i.sku]).length > 0 &&
              ` (${look.formal.completeTheLook.filter((i) => formalChecked[i.sku]).length})`}
          </button>
        </div>

        {/* Casual */}
        <div className="space-y-4 animate-fade-up" style={{ animationDelay: "160ms" }}>
          <div className="flex items-center justify-between">
            <span className="category-label">Casual</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[0.6rem] text-muted-foreground font-medium">Score</span>
              <ScoreBadge score={casualFinalScore} />
            </div>
          </div>

          <div>
            <div className="rounded-md overflow-hidden image-hover ring-1 ring-border">
              <img
                src={look.casual.outfitImage}
                alt={`${look.title} casual outfit`}
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-muted-foreground italic leading-relaxed">
              {look.casual.caption}
            </p>
          </div>

          <div className="space-y-2">
            <span className="category-label text-[0.65rem]">Complete the Look</span>
            <div className="grid grid-cols-2 gap-3">
              {look.casual.completeTheLook.map((item) => (
                <div key={item.sku} className="group">
                  <div className="relative rounded overflow-hidden ring-1 ring-border image-hover">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute top-1.5 left-1.5">
                      <Checkbox
                        checked={!!casualChecked[item.sku]}
                        onCheckedChange={() => toggleCasual(item.sku)}
                        className="h-4 w-4 bg-background/80 backdrop-blur-sm border-border"
                      />
                    </div>
                  </div>
                  <div className="mt-1.5 space-y-0.5">
                    <div className="flex items-center justify-between gap-1">
                      <p className="text-[0.65rem] text-foreground font-medium tracking-wide truncate">
                        {item.label}
                      </p>
                      <ScoreBadge score={item.matchingScore} />
                    </div>
                    <p className="text-[0.55rem] text-muted-foreground font-mono tracking-wider">
                      {item.sku}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => handleAddToCart("casual")}
            disabled={!look.casual.completeTheLook.some((i) => casualChecked[i.sku])}
            className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md text-xs font-medium tracking-wide transition-all duration-200 active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed bg-foreground text-background hover:bg-foreground/90"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add to Cart
            {look.casual.completeTheLook.filter((i) => casualChecked[i.sku]).length > 0 &&
              ` (${look.casual.completeTheLook.filter((i) => casualChecked[i.sku]).length})`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OutfitDisplay;
