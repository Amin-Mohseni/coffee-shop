import Comment from "@/components/modules/comment/Comment";
import React from "react";
import CommentForm from "./CommentForm";

function Comments() {
  return (
    <div>
      <p className="py-6 text-2xl">نظرات (7) :</p>
      <hr />

      <main className="grid lg:grid-cols-2 mt-4">
        <div>
          <p className="pb-3">
            7 دیدگاه برای کپسول قهوه SETPRESSO سازگار با دستگاه نسپرسو ( GOLD )
            ده -10- عددی
          </p>
          <div className="divide-y divide-gray-300 lg:pl-10">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
        <hr className="lg:hidden flex" />
        <div className="lg:mt-0 mt-6">
          <CommentForm />
        </div>
      </main>
    </div>
  );
}

export default Comments;
