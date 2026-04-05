import { useState } from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import HomePage from "./pages/HomePage";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <HomePage
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </main>
      </div>
    </div>
  );
}