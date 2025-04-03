import { useEffect, useRef } from "react";

interface VideoBackgroundProps {
  currentVideo: number;
  setCurrentVideo: (video: number | ((prev: number) => number)) => void; // Updated to accept function
  setIsVideoLoaded: (loaded: boolean) => void;
  totalVideos: number;
  children: React.ReactNode;
}

export default function VideoBackground({
  currentVideo,
  setCurrentVideo,
  setIsVideoLoaded,
  totalVideos,
  children,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      videoElement.play().catch((e) => console.log("Autoplay prevented:", e));
    };

    const handleEnded = () => {
      setIsVideoLoaded(false);
      setCurrentVideo((prev) => (prev % totalVideos) + 1); // Functional update is now valid
    };

    const handleError = () => {
      console.error("Video loading failed");
      setTimeout(
        () => setCurrentVideo((prev) => (prev % totalVideos) + 1),
        1000
      );
    };

    videoElement.addEventListener("loadeddata", handleLoadedData);
    videoElement.addEventListener("ended", handleEnded);
    videoElement.addEventListener("error", handleError);

    return () => {
      videoElement.removeEventListener("loadeddata", handleLoadedData);
      videoElement.removeEventListener("ended", handleEnded);
      videoElement.removeEventListener("error", handleError);
    };
  }, [currentVideo, setCurrentVideo, setIsVideoLoaded, totalVideos]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          key={`video-${currentVideo}`}
          autoPlay
          muted
          playsInline
          preload="auto"
          className="absolute w-full h-full object-cover"
          aria-label="Blood donation awareness video"
        >
          <source
            src={`/videos/landing-page-video-${currentVideo}.webm`}
            type="video/webm"
          />
          <source
            src={`/videos/landing-page-video-${currentVideo}.mp4`}
            type="video/mp4"
          />
          Your browser does not support HTML5 video.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-around p-8 text-white">
        {children}
      </div>
    </section>
  );
}