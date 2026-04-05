import { MoreVertical  } from "lucide-react";

export default function ArticleCard({ title, description, createdOn }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col justify-between hover:shadow-sm transition-shadow">
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-800 text-sm">{title}</h3>
          <button className="p-1 rounded hover:bg-gray-100">
            <MoreVertical  className="w-4 h-4 text-gray-400" />
          </button>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
      </div>
      <p className="text-xs text-gray-400 mt-6">
        <span className="font-medium text-gray-500">Created On:</span> {createdOn}
      </p>
    </div>
  );
}