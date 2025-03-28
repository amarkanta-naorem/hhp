'use client';
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState(1);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const totalVideos = 9;

  useEffect(() => {
    const preloadVideo = (videoNum: number) => {
      const video = document.createElement('video');
      video.src = `/videos/landing-page-video-${videoNum}.mp4`;
      video.preload = 'auto';
    };

    preloadVideo(currentVideo);
    preloadVideo((currentVideo % totalVideos) + 1);
  }, [currentVideo]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      videoElement.play().catch(e => console.log("Autoplay prevented:", e));
    };

    const handleEnded = () => {
      setIsVideoLoaded(false);
      setCurrentVideo(prev => (prev % totalVideos) + 1);
    };

    const handleError = () => {
      console.error("Video loading failed");
      setTimeout(() => setCurrentVideo(prev => (prev % totalVideos) + 1), 1000);
    };

    videoElement.addEventListener('loadeddata', handleLoadedData);
    videoElement.addEventListener('ended', handleEnded);
    videoElement.addEventListener('error', handleError);

    return () => {
      videoElement.removeEventListener('loadeddata', handleLoadedData);
      videoElement.removeEventListener('ended', handleEnded);
      videoElement.removeEventListener('error', handleError);
    };
  }, [currentVideo]);

  return (
    <div className="min-h-screen flex flex-col">
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
          
          {!isVideoLoaded && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-white text-xl">Loading video...</div>
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
        <div className="flex justify-between items-start">
          <Image 
            src="/logo.svg" 
            alt="HHP Logo" 
            width={160}
            height={53}
            priority
            className="w-40"
            style={{
              height: 'auto'
            }}
          />
        </div>

          <div className="max-w-[55rem] mx-auto text-center space-y-6">
            <h3 className="text-xl md:text-2xl font-medium">Donate Blood🩸 Save Lives❤️</h3>
            <h1 className="text-4xl md:text-6xl font-bold">Be Someone's Lifeline Today!</h1>
            <p className="text-lg md:text-xl">
              A single donation can save multiple lives. Take a step, make an impact, 
              and give the gift of life!
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-colors cursor-pointer">
              Become a Donor
            </button>
            <button className="bg-white hover:bg-gray-100 text-red-600 px-6 py-3 rounded-full font-medium transition-colors cursor-pointer">
              Get Blood Help
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border border-white px-6 py-3 rounded-full font-medium transition-colors cursor-pointer">
              Blood Donation Camp
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Learn About Donation</h2>
        <div className="grid md:grid-cols-3 gap-8">
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        </div>
      </section>

      <footer className="bg-black text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center">© {new Date().getFullYear()} Helping Hands for People (HHP), Manipur</p>
        </div>
      </footer>
    </div>
  );
}