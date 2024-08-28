import Comment from "@/components/modules/comment/Comment";
import React from "react";
import CommentForm from "./CommentForm";

function Comments({ comments, productID }: { comments: Array<any>; productID: string }) {
  return (
    <div>
      <p className="py-6 text-2xl">نظرات ({comments.length}) :</p>
      <hr />

      <main className="grid lg:grid-cols-2 mt-4">
        <div>
          <p className="pb-3">
            {comments.length} دیدگاه برای {productID} ثبت شده است
          </p>
          <div className="divide-y divide-gray-300 lg:pl-10">
            {comments.map((comment) => (
              <Comment key={comment._id} {...comment} />
            ))}
          </div>
        </div>
        <hr className="lg:hidden flex" />
        <div className="lg:mt-0 mt-6">
          <CommentForm productID={productID} />
        </div>
      </main>
    </div>
  );
}

export default Comments;
