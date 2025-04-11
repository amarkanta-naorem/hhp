interface MainContentProps {
    setShowBloodHelpModal: (show: boolean) => void;
  }
  
  export default function MainContent({ setShowBloodHelpModal }: MainContentProps) {
    return (
      <>
        <div className="max-w-[55rem] mx-auto text-center space-y-6">
          <h3 className="text-xl md:text-2xl font-medium">Donate Blood🩸 Save Lives❤️</h3>
          <h1 className="text-4xl md:text-6xl font-bold">Be Someone's Lifeline Today!</h1>
          <p className="text-lg md:text-xl">A single donation can save multiple lives. Take a step, make an impact, and give the gift of life!</p>
        </div>
  
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => alert("This feature is currently under development")} className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-medium transition-colors cursor-pointer">Become a Donor</button>
          <button onClick={() => setShowBloodHelpModal(true)} className="bg-white hover:bg-gray-100 text-red-600 px-6 py-3 rounded-full font-medium transition-colors cursor-pointer">Get Blood Help</button>
          <button onClick={() => alert("This feature is currently under development")} className="bg-transparent hover:bg-white/10 text-white border border-white px-6 py-3 rounded-full font-medium transition-colors cursor-pointer">Blood Donation Camp</button>
        </div>
      </>
    );
  }