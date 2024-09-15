import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import Link from "next/link";

type Props = {
  link: string;
  onClick: () => void;
  icon_name: string;
};

const FixedButton = ({ link, onClick, icon_name }: Props) => {
  let icon = null;

  if (icon_name === "post") {
    icon = <AddOutlinedIcon className="text-3xl" />;
  } else if (icon_name === "comment") {
    icon = <ModeCommentOutlinedIcon className="text-3xl" />;
  }

  return (
    <div className="fixed bottom-4 right-4 z-20">
      <Link
        href={link}
        className="btn bg-custom-pink shadow-lg text-white rounded-full w-16 h-16 flex items-center justify-center"
      >
        <div onClick={onClick}>{icon}</div>
      </Link>
    </div>
  );
};

export default FixedButton;
