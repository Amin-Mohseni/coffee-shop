import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Swal from "sweetalert2";

function CommentForm({ productID }: { productID: string }) {
  const [body, setBody] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [score, setScore] = useState<number>(0);
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  console.log(score);

  const submitComment = async () => {
    const comment = {
      body,
      username,
      email,
      score,
      productID,
    };

    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    });

    console.log("Comment =>", comment);

    if (res.status === 201) {
      Swal.fire({
        title: "نظر شما با موفقیت ثبت شد",
        icon: "success",
        confirmButtonText: "بستن",
      });
      setBody("");
      setUsername("");
      setEmail("");
      setScore(0);
    }
  };

  return (
    <div className="flex flex-col gap-4 pr-6">
      <p>دیدگاه خود را بنویسید</p>
      <p className="text-gray-500">
        نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند{" "}
        <span className="text-red-500">*</span>
      </p>
      <div className="flex items-center gap-3">
        <p>
          امتیاز شما :<span className="text-red-500">*</span>
        </p>
        <div className="flex items-center text-gray-400 flex-row-reverse">
          {[5, 4, 3, 2, 1].map((star) => (
            <div
              key={star}
              onClick={() => setScore(star)}
              onMouseEnter={() => setHoveredStar(star)}
              onMouseLeave={() => setHoveredStar(null)}
            >
              {hoveredStar !== null && star <= hoveredStar ? (
                <FaStar className="text-yellow-500" />
              ) : star <= score ? (
                <FaStar className="text-yellow-500" />
              ) : (
                <FaRegStar />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="">
          دیدگاه شما
          <span className="text-red-500">*</span>
        </label>
        <textarea
          className="border outline-none py-3 px-4 w-full text-sm text-gray-500"
          id="comment"
          name="comment"
          cols={45}
          rows={8}
          required
          placeholder=""
          value={body}
          onChange={(event) => setBody(event.target.value)}
        ></textarea>
      </div>
      <div>
        <div className="flex flex-col gap-2 mt-3">
          <label htmlFor="">
            نام
            <span className="text-red-500">*</span>
          </label>
          <input
            className="border py-2 px-4 w-full outline-none text-sm text-gray-500"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <label htmlFor="">
            ایمیل
            <span className="text-red-500">*</span>
          </label>
          <input
            className="border py-2 px-4 w-full outline-none text-sm text-gray-500"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <input type="checkbox" name="" id="" />
        <p>
          ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی
          می‌نویسم.
        </p>
      </div>
      <button onClick={submitComment} className="btn rounded-none w-16 text-white bg-[#008978] hover:bg-[#711D1C]">
        ثبت
      </button>
    </div>
  );
}

export default CommentForm;
