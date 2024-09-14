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
      <Comment title="aaa" likeCount={1} />
      <Comment title="aaa" likeCount={2} />
      <Comment title="aaa" likeCount={8} />
      <Comment title="aaa" likeCount={3} />
      <Comment title="aaa" likeCount={5} />
      <Comment title="aaa" likeCount={7} />
    </div>
  );
};

export default Comments;
