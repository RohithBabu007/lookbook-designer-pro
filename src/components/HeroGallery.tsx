import { LookData } from "@/data/looks";

interface HeroGalleryProps {
  looks: LookData[];
  activeId: string;
  onSelect: (id: string) => void;
}

const HeroGallery = ({ looks, activeId, onSelect }: HeroGalleryProps) => {
  return (
    <div className="flex flex-col h-full">
      <h2 className="category-label px-4 pt-6 pb-4">Hero Product</h2>
      <div className="flex-1 overflow-y-auto scrollbar-thin px-4 pb-6 space-y-3">
        {looks.map((look) => {
          const isActive = look.id === activeId;
          return (
            <button
              key={look.id}
              onClick={() => onSelect(look.id)}
              className={`group relative w-full rounded-md image-hover overflow-hidden transition-shadow duration-300 ${
                isActive
                  ? "ring-2 ring-accent shadow-lg"
                  : "ring-1 ring-border hover:ring-accent/40 hover:shadow-md"
              }`}
              style={{ aspectRatio: "3 / 4" }}
            >
              <img
                src={look.heroImage}
                alt={look.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/60 to-transparent p-3">
                <span className="font-display text-sm tracking-wide text-primary-foreground">
                  {look.title}
                </span>
              </div>
              {isActive && (
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HeroGallery;
