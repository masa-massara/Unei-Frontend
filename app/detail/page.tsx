"use client";
import { Button } from "@mui/material";
import React from "react";
import Tabs from "../components/Tabs";
import CommentPost from "../components/CommentPost";
import ChatIcon from "@mui/icons-material/Chat";
import EventDetail from "../components/EventDetail";
import Comments from "../components/Comments";
import PostButton from "../components/PostButton";

const DetailPage = () => {
  const comments = [
    "9月16日ではなくて9月17日の方が良いと思います。",
    "9月16日ではなくて9月17日の方が良いと思います。",
    "9月16日ではなくて9月17日の方が良いと思います。",
    "9月16日ではなくて9月17日の方が良いと思います。",
    "9月16日ではなくて9月17日の方が良いと思います。",
    "9月16日ではなくて9月17日の方が良いと思います。",
  ];
  return (
    <div>
      <EventDetail />
      <Tabs />
      <CommentPost />
      <Comments comments={comments} />
      <PostButton />
    </div>
  );
};

export default DetailPage;

// "use client";
// import { Button } from "@mui/material";
// import ChatIcon from "@mui/icons-material/Chat";
// import Link from "next/link";
// // import Event from "../components/Event";
// import { useRouter } from "next/router";

// const DetailPage = () => {
//   const router = useRouter();
//   const { name, tags } = router.query;

//   const parsedTags = tags ? JSON.parse(tags as string) : [];

//   return (
//     <div>
//       <Link href="/popular">
//         <Button>
//           <ChatIcon />
//         </Button>
//       </Link>
//       <h1>{name}</h1>
//       <ul>
//         {parsedTags.map((tag: { name: string }, index: number) => (
//           <li key={index}>{tag.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DetailPage;
