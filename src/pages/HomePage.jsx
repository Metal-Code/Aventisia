import { useState } from "react";
import ArticleCard from "../components/knowledge-base/ArticleCard";
import CreateNewForm from "../components/knowledge-base/CreateNewForm";
import Modal from "../components/ui/Modal";
import { Plus, Search, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

const allCards = Array(625).fill(null).map((_, i) => ({
  title: "Test",
  description:
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ${i+1}`,
  createdOn: "14/07/2025",
}));

export default function HomePage({ isModalOpen, setIsModalOpen }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const totalPages = Math.ceil(allCards.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentCards = allCards.slice(startIndex, startIndex + rowsPerPage);

  const goFirst = () => setCurrentPage(1);
  const goPrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const goNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));
  const goLast = () => setCurrentPage(totalPages);

  const handleRowsPerPage = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="p-6 flex flex-col min-h-full">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold text-gray-800">Knowledge Base</h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-1.5 gap-2 bg-white w-56">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="text-sm outline-none w-full text-gray-600"
            />
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1.5 bg-[#4F46E5] text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-[#4338CA] transition-colors"
          >
            <Plus className="w-4 h-4" />
            Create New
          </button>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg p-4 bg-white">
        <div className="grid grid-cols-3 gap-4">
          {currentCards.map((card, i) => (
            <ArticleCard key={startIndex + i} {...card} />
          ))}
        </div>
      </div>

      <div className="flex-1" />

      <div className="flex items-center justify-between mt-6 text-sm text-gray-500">
        <span>{allCards.length} rows</span>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span>Rows per page</span>
            <div className="relative">
              <select
                value={rowsPerPage}
                onChange={handleRowsPerPage}
                className="border border-gray-300 rounded px-2 py-1 text-sm appearance-none pr-6 bg-white"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <svg className="w-3 h-3 absolute right-1.5 top-2 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <span>page {currentPage} of {totalPages}</span>
          <div className="flex items-center gap-1">
            <button onClick={goFirst} disabled={currentPage === 1} className="p-1 rounded hover:bg-gray-100 disabled:opacity-40"><ChevronsLeft className="w-4 h-4" /></button>
            <button onClick={goPrev} disabled={currentPage === 1} className="p-1 rounded hover:bg-gray-100 disabled:opacity-40"><ChevronLeft className="w-4 h-4" /></button>
            <button onClick={goNext} disabled={currentPage === totalPages} className="p-1 rounded hover:bg-gray-100 disabled:opacity-40"><ChevronRight className="w-4 h-4" /></button>
            <button onClick={goLast} disabled={currentPage === totalPages} className="p-1 rounded hover:bg-gray-100 disabled:opacity-40"><ChevronsRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CreateNewForm onClose={() => setIsModalOpen(false)} />
      </Modal>
    </div>
  );
}