import React, { useState } from "react";

const tags = ["React", "Laravel", "Go", "Git", "Firebase"];

const TagModal: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleTagChange = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="mr-4">
      <label htmlFor="tag_modal" className="btn">
        タグ検索({selectedTags.length})
      </label>

      <input type="checkbox" id="tag_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <p className="py-4">タグを選んでください</p>
          <div className="grid grid-cols-2 gap-2">
            {tags.map((tag) => (
              <label key={tag} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedTags.includes(tag)}
                  onChange={() => handleTagChange(tag)}
                  className="checkbox"
                />
                <span>{tag}</span>
              </label>
            ))}
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="tag_modal">
          Close
        </label>
      </div>
    </div>
  );
};

export default TagModal;
