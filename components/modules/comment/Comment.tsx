import React from "react";
import { FaStar } from "react-icons/fa";

function Comment({
  username,
  email,
  date,
  score,
  body,
}: {
  username: String;
  email: String;
  date: Date;
  score: number;
  body: String;
}) {
  return (
    <section className="py-6 flex items-center gap-4">
      <img
        className="rounded-full object-cover object-center w-[70px] min-w-[70px]"
        src="/images/profile.jpg"
        alt=""
      />
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <strong>{username}</strong>
            <p>{date.toLocaleString()}</p>
          </div>
          <div className="flex items-center text-[#EABE0F]">
          {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < score ? "" : "text-gray-300"} />
            ))}
          </div>
        </div>
        <p className="py-4 text-gray-500">{body}</p>
      </div>
    </section>
  );
}

export default Comment;
