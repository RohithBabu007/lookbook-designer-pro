import { LookData } from "@/data/looks";

interface OutfitDisplayProps {
  look: LookData;
}

const OutfitDisplay = ({ look }: OutfitDisplayProps) => {
  return (
    <div className="h-full overflow-y-auto scrollbar-thin px-4 lg:px-6 py-6" key={look.id}>
      <h1 className="font-display text-2xl lg:text-3xl font-light tracking-tight text-foreground mb-6 animate-fade-up">
        {look.title}
      </h1>

      <div className="grid grid-cols-2 gap-4 lg:gap-6">
        {/* Formal Column */}
        <div className="space-y-4 animate-fade-up" style={{ animationDelay: "80ms" }}>
          <span className="category-label">Formal</span>
          <div className="rounded-md overflow-hidden image-hover ring-1 ring-border">
            <img
              src={look.formal.outfitImage}
              alt={`${look.title} formal outfit`}
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
          <div className="space-y-2">
            <span className="category-label text-[0.65rem]">Complete the Look</span>
            <div className="grid grid-cols-2 gap-2">
              {look.formal.completeTheLook.map((item) => (
                <div key={item.label} className="group">
                  <div className="rounded image-hover ring-1 ring-border overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                  <p className="mt-1.5 text-[0.65rem] text-muted-foreground font-medium tracking-wide">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Casual Column */}
        <div className="space-y-4 animate-fade-up" style={{ animationDelay: "160ms" }}>
          <span className="category-label">Casual</span>
          <div className="rounded-md overflow-hidden image-hover ring-1 ring-border">
            <img
              src={look.casual.outfitImage}
              alt={`${look.title} casual outfit`}
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
          <div className="space-y-2">
            <span className="category-label text-[0.65rem]">Complete the Look</span>
            <div className="grid grid-cols-2 gap-2">
              {look.casual.completeTheLook.map((item) => (
                <div key={item.label} className="group">
                  <div className="rounded image-hover ring-1 ring-border overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.label}
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                  <p className="mt-1.5 text-[0.65rem] text-muted-foreground font-medium tracking-wide">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutfitDisplay;
