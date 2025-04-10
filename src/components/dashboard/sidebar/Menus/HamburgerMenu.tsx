"use client";

export default function HamburgerMenu({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  return (
    <button onClick={toggle} className="p-2 rounded-lg hover:bg-gray-100 transition-colors" >
      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"}></path>
      </svg>
    </button>
  );
}