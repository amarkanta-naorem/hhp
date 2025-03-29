"use client";
import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState(1);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showBloodHelpModal, setShowBloodHelpModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    bloodType: "",
    unitsNeeded: "1",
    hospital: "",
    urgency: "normal",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      videoElement.play().catch((e) => console.log("Autoplay prevented:", e));
    };

    const handleEnded = () => {
      setIsVideoLoaded(false);
      setCurrentVideo((prev) => (prev % totalVideos) + 1);
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
  }, [currentVideo]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowBloodHelpModal(false);
      }
    };

    if (showBloodHelpModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showBloodHelpModal]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setShowBloodHelpModal(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          bloodType: "",
          unitsNeeded: "1",
          hospital: "",
          urgency: "normal",
          message: "",
        });
      }, 5000);
    }, 1000);
  };

  return (
    <>
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
                style={{ height: "auto" }}
              />
            </div>

            <div className="max-w-[55rem] mx-auto text-center space-y-6">
              <h3 className="text-xl md:text-2xl font-medium">
                Donate Blood🩸 Save Lives❤️
              </h3>
              <h1 className="text-4xl md:text-6xl font-bold">
                Be Someone's Lifeline Today!
              </h1>
              <p className="text-lg md:text-xl">
                A single donation can save multiple lives. Take a step, make an
                impact, and give the gift of life!
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() =>
                  alert("This feature is currently under development")
                }
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-colors cursor-pointer"
              >
                Become a Donor
              </button>
              <button
                onClick={() => setShowBloodHelpModal(true)}
                className="bg-white hover:bg-gray-100 text-red-600 px-6 py-3 rounded-full font-medium transition-colors cursor-pointer"
              >
                Get Blood Help
              </button>
              <button
                onClick={() =>
                  alert("This feature is currently under development")
                }
                className="bg-transparent hover:bg-white/10 text-white border border-white px-6 py-3 rounded-full font-medium transition-colors cursor-pointer"
              >
                Blood Donation Camp
              </button>
            </div>
          </div>
        </section>

        <footer className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-center md:text-left">
                  Contact Us
                </h3>
                <ul className="space-y-3">
                  {[
                    {
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      ),
                      text: "+91 9876543210",
                      href: "tel:+919876543210",
                    },
                    {
                      icon: (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      ),
                      text: "contact@hhpmanipur.org",
                      href: "mailto:contact@hhpmanipur.org",
                    },
                    {
                      icon: (
                        <>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </>
                      ),
                      text: "Imphal, Manipur 795001",
                      href: "https://maps.google.com/?q=Imphal,Manipur",
                    },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 justify-center md:justify-start"
                    >
                      <svg
                        className="w-5 h-5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {item.icon}
                      </svg>
                      <a
                        href={item.href}
                        className="hover:text-red-400 transition-colors text-center md:text-left"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-center">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  {[
                    { name: "Home", path: "/" },
                    { name: "Donate Blood", path: "/donate" },
                    { name: "Request Blood", path: "/request" },
                  ].map((link) => (
                    <li key={link.name} className="text-center">
                      <a
                        href={link.path}
                        className="hover:text-red-400 transition-colors inline-flex items-center gap-2"
                      >
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-center md:text-right">
                  Join the Community
                </h3>
                <div className="flex justify-center md:justify-end gap-5">
                  <a
                    href="https://www.facebook.com/groups/251400595265833"
                    aria-label="Facebook"
                    className="p-2 rounded-full bg-[#1877F2] hover:bg-[#166FE5] transition-colors flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>

                  <a
                    href="https://chat.whatsapp.com/FKkR2xFZACZ0Lv8wcuFj2M"
                    aria-label="Join our WhatsApp group"
                    className="p-2 rounded-full bg-[#25D366] hover:bg-[#1DA851] transition-colors flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-gray-800 text-center">
              <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                <Image
                  src="/logo.svg"
                  alt="HHP Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
                <p className="text-gray-400">
                  Made with ❤️ in Manipur, Kangleipak
                </p>
              </div>
              <p className="text-gray-500 text-sm mt-4">
                © {new Date().getFullYear()} Helping Hands for People
                (HHP),Manipur. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>

      {showBloodHelpModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div
            ref={modalRef}
            className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-white/20 transform transition-all duration-300 ease-out animate-slideUp [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          >
            {!submitSuccess && (
              <div className="relative p-8 pb-0">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-red-500 to-red-600 rounded-t-2xl"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="bg-red-100/80 p-2 rounded-lg mr-3">
                        <svg
                          className="w-6 h-6 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        Blood Request Form
                      </h2>
                    </div>
                    <p className="text-gray-700 ml-14">
                      Please fill all required fields
                    </p>
                  </div>
                  <button
                    onClick={() => setShowBloodHelpModal(false)}
                    className="text-gray-500 hover:text-gray-700 transition-colors p-2 rounded-full hover:bg-gray-100/50"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {submitSuccess ? (
              <div className="text-center p-12">
                <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-blue-50 mb-6">
                  <div className="relative">
                    <svg
                      width="96"
                      height="96"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 8.375C16 8.93437 15.8656 9.45312 15.5969 9.92813C15.3281 10.4031 14.9688 10.775 14.5156 11.0344C14.5281 11.1188 14.5344 11.25 14.5344 11.4281C14.5344 12.275 14.25 12.9937 13.6875 13.5875C13.1219 14.1844 12.4406 14.4812 11.6438 14.4812C11.2875 14.4812 10.9469 14.4156 10.625 14.2844C10.375 14.7969 10.0156 15.2094 9.54375 15.525C9.075 15.8438 8.55937 16 8 16C7.42812 16 6.90938 15.8469 6.44688 15.5344C5.98125 15.225 5.625 14.8094 5.375 14.2844C5.05312 14.4156 4.71562 14.4812 4.35625 14.4812C3.55937 14.4812 2.875 14.1844 2.30312 13.5875C1.73125 12.9937 1.44687 12.2719 1.44687 11.4281C1.44687 11.3344 1.45938 11.2031 1.48125 11.0344C1.02813 10.7719 0.66875 10.4031 0.4 9.92813C0.134375 9.45312 0 8.93437 0 8.375C0 7.78125 0.15 7.23438 0.446875 6.74062C0.74375 6.24687 1.14375 5.88125 1.64375 5.64375C1.5125 5.2875 1.44687 4.92812 1.44687 4.57188C1.44687 3.72813 1.73125 3.00625 2.30312 2.4125C2.875 1.81875 3.55937 1.51875 4.35625 1.51875C4.7125 1.51875 5.05312 1.58438 5.375 1.71563C5.625 1.20312 5.98438 0.790625 6.45625 0.475C6.925 0.159375 7.44063 0 8 0C8.55937 0 9.075 0.159375 9.54375 0.471875C10.0125 0.7875 10.375 1.2 10.625 1.7125C10.9469 1.58125 11.2844 1.51562 11.6438 1.51562C12.4406 1.51562 13.1219 1.8125 13.6875 2.40937C14.2531 3.00625 14.5344 3.725 14.5344 4.56875C14.5344 4.9625 14.475 5.31875 14.3562 5.64062C14.8562 5.87813 15.2563 6.24375 15.5531 6.7375C15.85 7.23438 16 7.78125 16 8.375ZM7.65938 10.7844L10.9625 5.8375C11.0469 5.70625 11.0719 5.5625 11.0437 5.40938C11.0125 5.25625 10.9344 5.13438 10.8031 5.05312C10.6719 4.96875 10.5281 4.94063 10.375 4.9625C10.2188 4.9875 10.0938 5.0625 10 5.19375L7.09062 9.56875L5.75 8.23125C5.63125 8.1125 5.49375 8.05625 5.34062 8.0625C5.18437 8.06875 5.05 8.125 4.93125 8.23125C4.825 8.3375 4.77187 8.47187 4.77187 8.63437C4.77187 8.79375 4.825 8.92813 4.93125 9.0375L6.77187 10.8781L6.8625 10.95C6.96875 11.0219 7.07812 11.0562 7.18437 11.0562C7.39375 11.0531 7.55313 10.9656 7.65938 10.7844Z"
                        fill="#3897F0"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Request Submitted!
                </h3>
                <p className="text-gray-700 max-w-md mx-auto mb-8">
                  Our team will contact you shortly to coordinate the blood
                  donation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 pt-6">
                <div className="space-y-4">
                  <div className="bg-gray-50/50 p-6 rounded-xl border border-gray-300 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <span className="flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 rounded-full mr-2 text-sm">
                        1
                      </span>
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                          placeholder="Patient's full name"
                        />
                      </div>

                      {/* Phone Field */}
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                          placeholder="Active contact number"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Blood Requirements Section */}
                  <div className="bg-gray-50/50 p-6 rounded-xl border border-gray-300 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <span className="flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 rounded-full mr-2 text-sm">
                        2
                      </span>
                      Blood Requirements
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Blood Type Field */}
                      <div className="space-y-2">
                        <label
                          htmlFor="bloodType"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Blood Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="bloodType"
                          name="bloodType"
                          value={formData.bloodType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                        >
                          <option value="" className="text-gray-500">
                            Select blood type
                          </option>
                          <option value="A+" className="text-gray-900">
                            A+
                          </option>
                          <option value="A-" className="text-gray-900">
                            A-
                          </option>
                          <option value="B+" className="text-gray-900">
                            B+
                          </option>
                          <option value="B-" className="text-gray-900">
                            B-
                          </option>
                          <option value="AB+" className="text-gray-900">
                            AB+
                          </option>
                          <option value="AB-" className="text-gray-900">
                            AB-
                          </option>
                          <option value="O+" className="text-gray-900">
                            O+
                          </option>
                          <option value="O-" className="text-gray-900">
                            O-
                          </option>
                        </select>
                      </div>

                      {/* Units Needed Field */}
                      <div className="space-y-2">
                        <label
                          htmlFor="unitsNeeded"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Units Required <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="unitsNeeded"
                          name="unitsNeeded"
                          value={formData.unitsNeeded}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <option
                              key={num}
                              value={num.toString()}
                              className="text-gray-900"
                            >
                              {num} unit{num !== 1 ? "s" : ""}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Emergency Details Section */}
                  <div className="bg-gray-50/50 p-6 rounded-xl border border-gray-300 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <span className="flex items-center justify-center w-6 h-6 bg-red-100 text-red-600 rounded-full mr-2 text-sm">
                        3
                      </span>
                      Emergency Details
                    </h3>
                    <div className="space-y-6">
                      {/* Urgency Field */}
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Urgency Level <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            {
                              value: "normal",
                              label: "Standard",
                              time: "48 hours",
                            },
                            {
                              value: "urgent",
                              label: "Critical",
                              time: "24 hours",
                            },
                            {
                              value: "emergency",
                              label: "Emergency",
                              time: "Immediate",
                            },
                          ].map((item) => (
                            <label
                              key={item.value}
                              className={`flex flex-col items-center p-3 border rounded-lg cursor-pointer transition-all ${
                                formData.urgency === item.value
                                  ? "border-red-500 bg-red-50 text-red-600"
                                  : "border-gray-300 hover:border-gray-400 text-gray-700"
                              }`}
                            >
                              <input
                                type="radio"
                                name="urgency"
                                value={item.value}
                                checked={formData.urgency === item.value}
                                onChange={handleInputChange}
                                className="sr-only"
                                required
                              />
                              <span className="font-medium md:text-[16px] text-xs">{item.label}</span>
                              <span className="text-xs mt-1">{item.time}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Hospital Field */}
                      <div className="space-y-2">
                        <label
                          htmlFor="hospital"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Hospital Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="hospital"
                          name="hospital"
                          value={formData.hospital}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                          placeholder="Where is the patient?"
                        />
                      </div>

                      {/* Message Field */}
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Additional Information
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-0 focus:ring-red-500 focus:border-red-500 outline-none transition-all"
                          placeholder="Patient condition, special requirements..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form Footer */}
                <div className="mt-8 flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowBloodHelpModal(false)}
                    className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all font-medium flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <svg
                          className="-ml-1 mr-2 h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                        Submit request
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <SpeedInsights />
    </>
  );
}
