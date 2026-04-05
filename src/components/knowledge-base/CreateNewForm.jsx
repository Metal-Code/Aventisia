export default function CreateNewForm({ onClose }) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-start justify-between mb-5">
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Create New Knowledge Base
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Best for quick answers from documents, websites and text files.
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 p-1"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col gap-4 flex-1">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Name (Cannot be edited later) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            placeholder="Description"
            rows={4}
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent resize-none"
          />
        </div>


        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Vector Store <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#4F46E5] appearance-none bg-white">
              <option>Qdrant</option>
            </select>
            <svg className="w-4 h-4 absolute right-3 top-2.5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>


        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            LLM Embedding Model <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#4F46E5] appearance-none bg-white">
              <option>text-embedding-ada-002</option>
            </select>
            <svg className="w-4 h-4 absolute right-3 top-2.5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>


      <div className="mt-6 flex justify-end">
        <button className="bg-[#4F46E5] text-white text-sm font-medium px-6 py-2 rounded-md hover:bg-[#4338CA] transition-colors">
          Create
        </button>
      </div>
    </div>
  );
}