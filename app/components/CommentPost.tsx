import { Button } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

const CommentPost = () => {
  return (
    <div className="grid fixed bottom-4 right-4 z-10">
      <Button
        className="btn"
        onClick={() => {
          const modal = document.getElementById(
            "comment_modal"
          ) as HTMLDialogElement;
          modal?.showModal();
        }}
      >
        <ChatIcon className="size-16" />
      </Button>
      <dialog id="comment_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <textarea
              className="textarea"
              placeholder="コメントを入力"
            ></textarea>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default CommentPost;
