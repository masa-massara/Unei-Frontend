import { useState } from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PlaceIcon from "@mui/icons-material/Place";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import axios from "axios";

const CommentPost = ({
	onClose,
	event_id,
	group_id,
}: {
	onClose: () => void;
	event_id: string;
	group_id: string;
}) => {
	const [selectedIcon, setSelectedIcon] = useState({
		icon: <ArrowDropUpOutlinedIcon />,
		text: "選択",
	});

	const handleSelect = (icon: JSX.Element, text: string) => {
		setSelectedIcon({ icon, text });
	};

	const postComment = async (
		group_id: string,
		event_id: string,
		content: string,
		category: string
	) => {
		const url = `https://mock.apidog.com/m1/666106-637317-default/groups/${group_id}/events/${event_id}/comments`;
		const data = {
			content: content,
			category: category,
		};

		try {
			const response = await axios.post(url, data);
			console.log("サーバーからのレスポンス:", response.data);
			return response.data;
		} catch (error) {
			console.error("エラーが発生しました:", error);
			throw error;
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const content = formData.get("content") as string;
		const category = selectedIcon.text;

		try {
			await postComment(group_id, event_id, content, category);
			onClose();
		} catch (error) {
			console.error("エラーが発生しました:", error);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="p-4 border bg-white rounded-t-xl"
		>
			<div className="flex justify-between">
				<div className="dropdown dropdown-top">
					<div tabIndex={0} role="button" className="btn mb-4">
						{selectedIcon.icon ? (
							<div className="flex items-center">
								{selectedIcon.icon}
								<span className="ml-2">
									{selectedIcon.text}
								</span>
							</div>
						) : (
							selectedIcon.text
						)}
					</div>
					<ul
						tabIndex={0}
						className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 mb-2 shadow-sm"
					>
						<li>
							<a
								onClick={() =>
									handleSelect(
										<CalendarMonthOutlinedIcon />,
										"予定日"
									)
								}
							>
								<CalendarMonthOutlinedIcon />
								予定日
							</a>
						</li>
						<li>
							<a
								onClick={() =>
									handleSelect(<PlaceIcon />, "場所")
								}
							>
								<PlaceIcon />
								場所
							</a>
						</li>
						<li>
							<a
								onClick={() =>
									handleSelect(
										<PeopleAltOutlinedIcon />,
										"規模"
									)
								}
							>
								<PeopleAltOutlinedIcon />
								規模
							</a>
						</li>
					</ul>
				</div>
				<button
					type="submit"
					className="bg-custom-pink font-bold mb-4 w-16 h-12 rounded-2xl"
				>
					送信
				</button>
			</div>
			<textarea
				name="content"
				placeholder="コメントを入力"
				className="border w-full"
			></textarea>
		</form>
	);
};

export default CommentPost;
