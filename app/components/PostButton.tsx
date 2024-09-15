import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Link from "next/link";

const PostButton = () => {
  return (
    <div className="grid fixed bottom-4 right-4 z-20">
      <Link href="/post">
        <AddCircleOutlineIcon className="size-16" />
      </Link>
    </div>
  );
};

export default PostButton;
