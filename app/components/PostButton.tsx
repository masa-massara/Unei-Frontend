import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";
import Link from "next/link";

const PostButton = () => {
  return (
    <div className="grid fixed bottom-4 right-4 z-10">
      <Link href="/post">
        <Button>
          <AddCircleOutlineIcon className="size-16" />
        </Button>
      </Link>
    </div>
  );
};

export default PostButton;
