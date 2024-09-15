"use client";
import { useState } from "react";

function HashTagUI() {
  // 既存のハッシュタグと選択されたタグを管理
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const availableTags = [
    "#JavaScript",
    "#React",
    "#TailwindCSS",
    "#NextJS",
    "#Python",
    "#Django",
  ];

  // タグを追加する処理
  const addTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // タグを削除する処理
  const removeTag = (tag: string) => {
    setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag));
  };

  return (
    <div>
      {/* 選ばれたタグを表示 */}
      <div className="flex flex-wrap items-center p-2 rounded bg-white border border-gray-200 overflow-auto">
        {selectedTags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm mr-2 mb-2 cursor-pointer whitespace-nowrap"
            onClick={() => removeTag(tag)} // タグをクリックで削除
          >
            {tag} <span className="ml-2 text-gray-500">&times;</span>
          </span>
        ))}
        <div className="relative">
          <label htmlFor="my_modal_7" className="btn">
            追加
          </label>
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal">
            {/* モーダル中身 */}
            <div className="modal-box relative">
              {/* 既存のハッシュタグをリスト表示 */}
              <div className="mt-4">
                <p className="text-gray-700 mb-2">選択可能なハッシュタグ:</p>
                <div className="flex flex-wrap">
                  {availableTags.map((tag, index) => (
                    <button
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm mr-2 mb-2 ${
                        selectedTags.includes(tag)
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      } whitespace-nowrap`}
                      onClick={() => addTag(tag)}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HashTagUI;
