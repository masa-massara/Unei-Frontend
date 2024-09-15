import { Button } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import Link from "next/link";
import React from "react";
import RouteHeader from "../components/Header/RouteHeader";

const page = () => {
  return (
    <>
      <RouteHeader />
      <Link href="/popular">
        <Button>
          <ChatIcon />
        </Button>
      </Link>
    </>
  );
};

export default page;
