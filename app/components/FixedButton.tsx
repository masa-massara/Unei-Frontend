import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Link from "next/link";

type Props = {
  link: string;
  onClick: () => void;
};

const FixedButton = ({ link, onClick }: Props) => {
  return (
    <div className="fixed bottom-4 right-4 z-20">
      <Link
        href={link}
        className="btn bg-custom-pink shadow-lg text-white rounded-full w-16 h-16 flex items-center justify-center"
      >
        <button onClick={onClick}>
          <AddOutlinedIcon className="text-3xl" />
        </button>
      </Link>
    </div>
  );
};

export default FixedButton;
