import getComments from "../api/getComments";
import Comment from "./Comment";
import useSWR from "swr";

const Comments = () => {
  /**
   * Todo : apiを叩いてコメントを取得する
   */

  const { data, error, isLoading } = useSWR("", getComments);

  if (error) {
    return <div>failed to load</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <Comment title="aaa" detail="testです" likeCount={1} />
      <Comment title="aaa" detail="testです" likeCount={2} />
      <Comment title="aaa" detail="testです" likeCount={8} />
      <Comment title="aaa" detail="testです" likeCount={3} />
      <Comment title="aaa" detail="testです" likeCount={5} />
      <Comment title="aaa" detail="testです" likeCount={7} />
    </div>
  );
};

export default Comments;
