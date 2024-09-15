import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="mx-4 my-4 overflow-y-scroll w-11/12 h-[800px]">
      {data?.events?.map((event: Event) => {
        return (
          <Comment
            key={event.comments_id}
            name={event.name}
            tags={event.tags} // タグの likeCount の合計
          />
        );
      })}
    </div>
  );
};

export default Comments;
