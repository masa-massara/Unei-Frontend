"use server";

export async function postComment(formData: FormData) {
  const comment = formData.get("name");
  const select = formData.get("select");
  console.log(comment);
  console.log(select);
}
