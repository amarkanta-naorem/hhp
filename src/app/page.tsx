"use client";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import VideoBackground from "../components/VideoBackground";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import BloodHelpModal from "../components/BloodHelpModal";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState<number>(1); // Explicitly type as number
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showBloodHelpModal, setShowBloodHelpModal] = useState(false);
  const totalVideos = 9;

  useEffect(() => {
    const preloadVideo = (videoNum: number) => {
      const video = document.createElement("video");
      video.src = `/videos/landing-page-video-${videoNum}.mp4`;
      video.preload = "auto";
    };

    preloadVideo(currentVideo);
    preloadVideo((currentVideo % totalVideos) + 1);
  }, [currentVideo]);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <VideoBackground
          currentVideo={currentVideo}
          setCurrentVideo={setCurrentVideo}
          setIsVideoLoaded={setIsVideoLoaded}
          totalVideos={totalVideos}
        >
          <Header />
          <MainContent setShowBloodHelpModal={setShowBloodHelpModal} />
        </VideoBackground>
        <Footer />
      </div>

      <BloodHelpModal
        showBloodHelpModal={showBloodHelpModal}
        setShowBloodHelpModal={setShowBloodHelpModal}
      />

      <SpeedInsights />
    </>
  );
}