"use client";
import { useSearchParams } from "next/navigation";

const DetailPage = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const description = searchParams.get("description");
  const place = searchParams.get("place");
  const tags = searchParams.get("tags");

  // クエリパラメータとして受け取ったタグをJSON.parseで復元
  const parsedTags = tags ? JSON.parse(tags) : [];

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{place}</p>
      <ul>
        {parsedTags.map((tag: { name: string }, index: number) => (
          <li key={index}>{tag.name}</li>
        ))}
      </ul>
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
