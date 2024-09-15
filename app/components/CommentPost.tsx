import { useState } from "react";
import { postComment } from "../api/postComment";
import HomeIcon from "@mui/icons-material/Home";
import PlaceIcon from "@mui/icons-material/Place";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

const CommentPost = () => {
  const [selectedIcon, setSelectedIcon] = useState({
    icon: <ArrowDropUpOutlinedIcon />,
    text: "選択",
  });

  const handleSelect = (icon: any, text: string) => {
    setSelectedIcon({ icon, text });
  };

  // Custom submit handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Append selected icon text to the form data
    formData.append("select", selectedIcon.text);

    // Call the postComment function with the form data
    await postComment(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border">
      <div className="flex justify-between">
        <div className="dropdown dropdown-top">
          <div tabIndex={0} role="button" className="btn m-1">
            {selectedIcon.icon ? (
              <div className="flex items-center">
                {selectedIcon.icon}
                <span className="ml-2">{selectedIcon.text}</span>
              </div>
            ) : (
              selectedIcon.text
            )}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a onClick={() => handleSelect(<HomeIcon />, "予定日")}>
                <HomeIcon />
                予定日
              </a>
            </li>
            <li>
              <a onClick={() => handleSelect(<PlaceIcon />, "場所")}>
                <PlaceIcon />
                場所
              </a>
            </li>
            <li>
              <a
                onClick={() => handleSelect(<PeopleAltOutlinedIcon />, "規模")}
              >
                <PeopleAltOutlinedIcon />
                規模
              </a>
            </li>
          </ul>
        </div>
        <button
          type="submit"
          className="bg-custom-pink font-bold m-1 w-16 h-12 rounded-2xl"
        >
          送信
        </button>
      </div>
      <textarea
        name="name"
        placeholder="コメントを入力"
        className="border w-full"
      ></textarea>
    </form>
  );
};

export default CommentPost;
