import { Button } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Link href="/">
        <Button>
          <ChatIcon />
        </Button>
      </Link>
    </div>
  );
};

export default page;
