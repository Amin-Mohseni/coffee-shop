import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import moment from "moment-jalaali";
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
  const jalaliDate = moment(date).format("jYYYY/jMM/jDD");
  const persianDigits = jalaliDate.replace(
    /\d/g,
    (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]
  );

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
            <p>{persianDigits}</p>
          </div>
          <div className="flex items-center text-[#EABE0F]">
            {[...Array(score)].map((item, i) => (
              <FaStar key={i} />
            ))}
            {[...Array(5 - score)].map((item, i) => (
              <FaRegStar className="text-gray-300" key={i} />
            ))}
          </div>
        </div>
        <p className="py-4 text-gray-500">{body}</p>
      </div>
    </section>
  );
}

export default Comment;
