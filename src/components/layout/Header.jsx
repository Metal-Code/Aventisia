import { Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-[#1E1B4B] text-white h-14 shrink-0">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <img src="public/aventisia_logo.jpg" alt="Aventisia Logo" className="w-8 h-8 object-contain" />
          <span className="font-semibold text-white text-base">Worcspace</span>
        </div>
        <div className="flex items-center gap-1 bg-white/10 rounded-full px-3 py-0.5 text-sm cursor-pointer">
          <span>Worcspace 1</span>
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div className="flex items-center bg-white/10 rounded-md px-3 py-1.5 w-64 gap-2">
        <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-sm text-white placeholder-gray-400 outline-none w-full"
        />
        <span className="text-xs text-gray-400 ml-auto">⌘K</span>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-1.5 rounded-md hover:bg-white/10">
          <Bell className="w-5 h-5 text-gray-300" />
        </button>
        <div className="w-8 h-8 rounded-full bg-[#6c4dea] flex items-center justify-center text-sm font-semibold">
          GK
        </div>
      </div>
    </header>
  );
}