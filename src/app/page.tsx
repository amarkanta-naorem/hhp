'use client';
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState(1);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleVideoEnd = () => {
      setCurrentVideo((prev) => (prev % 9) + 1);
    };

    if (videoElement) {
      videoElement.addEventListener('ended', handleVideoEnd);
      videoElement.setAttribute('preload', 'auto');
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('ended', handleVideoEnd);
      }
    };
  }, [currentVideo]);

  return (
    <div>
      <div className="landing-page-top">
        <div className="landing-page-banner">
          <video
            ref={videoRef}
            key={currentVideo}
            autoPlay
            muted
            playsInline
            className="absolute w-full h-full object-cover rounded-[10px]"
            preload="auto"
          >
            <source
              src={`/videos/landing-page-video-${currentVideo}.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="landing-page-banner-paragraph">
          <h3>Donate Blood🩸, Save Lives❤️</h3>
          <h2>Be Someone's Lifeline Today!</h2>
          <span className="banner-description">
            A single donation can save multiple lives. Take a step, make an impact, and give the gift of life!
          </span>
        </div>

        <div className="landing-page-logo">
          <Image src="../logo.svg" alt="HHP Logo" width={150} height={50} />
        </div>

        <div className="landing-page-action-buttons-section">
          <div className="landing-page-action-buttons">
            <div>Become a Donor</div>
            <div>Get Blood Help</div>
            <div>Blood Donation Camp</div>
          </div>
        </div>
      </div>

      <div className="landing-page-learning-about-donation">
        <h1>Learn About Donation</h1>
      </div>

      <div className="landing-page-learning-contact">
        <h1>Contact</h1>
      </div>

      <div className="landing-page-learning-footer">
        <h1>Footer</h1>
      </div>
    </div>
  );
}