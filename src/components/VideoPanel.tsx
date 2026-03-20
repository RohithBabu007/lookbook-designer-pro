const VideoPanel = () => {
  return (
    <div className="flex flex-col h-full">
      <h2 className="category-label px-4 pt-6 pb-4">Style Reel</h2>
      <div className="flex-1 px-4 pb-6">
        <div className="relative rounded-md overflow-hidden ring-1 ring-border h-full min-h-[300px]">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster=""
          >
            <source
              src="https://videos.pexels.com/video-files/4625518/4625518-uhd_1440_2560_30fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <span className="text-[0.65rem] tracking-widest uppercase font-medium text-primary-foreground/80">
              Behind the Collection
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPanel;
