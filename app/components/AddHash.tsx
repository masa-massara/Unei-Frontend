"use client";
import { useState } from "react";

interface HashTagUIProps {
	onAddTag: (tags: string[]) => void;
}

function HashTagUI({ onAddTag }: HashTagUIProps) {
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const availableTags = [
		"#JavaScript",
		"#React",
		"#TailwindCSS",
		"#NextJS",
		"#Python",
		"#Django",
	];

	const addTag = (tag: string) => {
		if (!selectedTags.includes(tag)) {
			const newTags = [...selectedTags, tag];
			setSelectedTags(newTags);
			onAddTag(newTags);
		}
	};

	const removeTag = (tag: string) => {
		const newTags = selectedTags.filter(
			(selectedTag) => selectedTag !== tag
		);
		setSelectedTags(newTags);
		onAddTag(newTags);
	};

	return (
		<div className="w-full mx-auto">
			<div className="flex flex-wrap items-center p-2 rounded">
				{selectedTags.map((tag, index) => (
					<span
						key={index}
						className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm mr-2 my-2 cursor-pointer"
						onClick={() => removeTag(tag)}
					>
						{tag}{" "}
						<span className="ml-2 text-gray-800">&times;</span>
					</span>
				))}
				<div>
					<label htmlFor="my_modal_7" className="btn bg-gray-200">
						追加
					</label>
					<input
						type="checkbox"
						id="my_modal_7"
						className="modal-toggle"
					/>
					<div className="modal" role="dialog">
						<div className="modal-box">
							<div className="mt-4">
								<p className="text-gray-700 mb-2">
									選択可能なハッシュタグ:
								</p>
								<div className="flex flex-wrap">
									{availableTags.map((tag, index) => (
										<button
											key={index}
											type="button"
											className={`px-3 py-2 rounded-full text-sm mr-2 mb-2 ${
												selectedTags.includes(tag)
													? "bg-custom-pink text-gray-700"
													: "bg-gray-200 text-gray-700 hover:bg-gray-300"
											}`}
											onClick={() => addTag(tag)}
										>
											{tag}
										</button>
									))}
								</div>
							</div>
							<div className="modal-action">
								<label htmlFor="my_modal_7" className="btn">
									閉じる
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HashTagUI;
