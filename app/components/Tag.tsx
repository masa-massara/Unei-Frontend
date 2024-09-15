import React from "react";
import CircleIcon from "@mui/icons-material/Circle";

type TagProps = {
	name: string;
	color?: string;
	icon?: React.ReactNode; // アイコンを受け取る
};

const Tag = ({ name, color = "#979797", icon }: TagProps) => {
	return (
		<div
			className="badge flex items-center heigit-[26px] rounded-lg "
			style={{ backgroundColor: "#F9F9F9" }} // バッジの背景色を指定
		>
			{/* アイコンが渡されている場合はそれを表示、渡されていない場合はデフォルトのCircleIconを表示 */}
			{icon ? icon : <CircleIcon sx={{ color: color, fontSize: 12 }} />}

			{/* タグの名前を表示 */}
			<span
				className="text-base pl-1
            "
			>
				{name}
			</span>
		</div>
	);
};

export default Tag;

// 使用例1: デフォルトのCircleIconを使う場合
// <Tag name="Settings" color="#F5BDBD" />
// Settings という名前のタグが表示され、アイコンの色が #F5BDBD になります。

// 使用例2: カスタムアイコンを使う場合
// import HomeIcon from "@mui/icons-material/Home";
// <Tag name="Home" icon={<HomeIcon sx={{ color: "#BDE8F5" }} />} />
// HomeIcon が表示され、アイコンの色は #BDE8F5 になります。
