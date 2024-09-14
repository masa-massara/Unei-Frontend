import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";
import Link from "next/link";

const PostButton = () => {
  return (
    <div>
      <Link href="/post">
        <Button>
          <AddCircleOutlineIcon className="size-12" />
        </Button>
      </Link>
    </div>
  );
};

export default PostButton;
