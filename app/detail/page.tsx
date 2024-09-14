import { Button } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import Link from "next/link";
import Event from "../components/Event";

const page = () => {
  return (
    <div>
      <Link href="/popular">
        <Button>
          <ChatIcon />
        </Button>
      </Link>
      <Event />
    </div>
  );
};

export default page;
