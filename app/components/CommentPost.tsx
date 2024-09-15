import { Button } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

const CommentPost = () => {
  return (
    <div className="grid fixed bottom-4 right-4 z-10">
      <Button
        className="btn"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_3"
          ) as HTMLDialogElement;
          modal?.showModal();
        }}
      >
        <ChatIcon className="size-16" />
      </Button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </div>
  );
};

export default CommentPost;
