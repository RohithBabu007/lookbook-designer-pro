import { useState } from "react";
import { looks } from "@/data/looks";
import HeroGallery from "@/components/HeroGallery";
import OutfitDisplay from "@/components/OutfitDisplay";
import VideoPanel from "@/components/VideoPanel";

const Index = () => {
  const [activeId, setActiveId] = useState(looks[0].id);
  const activeLook = looks.find((l) => l.id === activeId) ?? looks[0];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Mobile header */}
      <header className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-border">
        <span className="font-display text-lg tracking-tight">Atelier</span>
        <span className="category-label">Styling Suite</span>
      </header>

      {/* Left Panel — Hero Gallery */}
      <aside className="lg:w-[220px] xl:w-[260px] shrink-0 border-r border-border panel-surface lg:h-screen lg:sticky lg:top-0 overflow-hidden">
        <div className="lg:h-screen flex lg:flex-col">
          {/* On mobile: horizontal scroll; on desktop: vertical scroll */}
          <div className="lg:hidden flex overflow-x-auto scrollbar-thin gap-3 px-4 py-4">
            {looks.map((look) => {
              const isActive = look.id === activeId;
              return (
                <button
                  key={look.id}
                  onClick={() => setActiveId(look.id)}
                  className={`shrink-0 w-20 rounded-md overflow-hidden transition-shadow duration-300 ${
                    isActive
                      ? "ring-2 ring-accent shadow-lg"
                      : "ring-1 ring-border"
                  }`}
                >
                  <img
                    src={look.heroImage}
                    alt={look.title}
                    className="w-full aspect-[3/4] object-cover"
                  />
                  <p className="text-[0.6rem] py-1 text-center font-medium text-muted-foreground truncate">
                    {look.title}
                  </p>
                </button>
              );
            })}
          </div>
          <div className="hidden lg:block h-full">
            <HeroGallery looks={looks} activeId={activeId} onSelect={setActiveId} />
          </div>
        </div>
      </aside>

      {/* Center Section — Outfit Display */}
      <main className="flex-1 min-w-0 lg:h-screen lg:overflow-y-auto">
        <OutfitDisplay look={activeLook} />
      </main>

      {/* Right Panel — Video */}
      <aside className="lg:w-[280px] xl:w-[320px] shrink-0 border-l border-border panel-surface lg:h-screen lg:sticky lg:top-0">
        <VideoPanel />
      </aside>
    </div>
  );
};

export default Index;
