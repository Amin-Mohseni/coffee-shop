import React from "react";
import { FaRegStar } from "react-icons/fa";

function CommentForm() {
  return (
    <div className="flex flex-col gap-4 pr-6">
      <p>دیدگاه خود را بنویسید</p>
      <p className="text-gray-500">
        نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند{" "}
        <span className="text-red-500">*</span>
      </p>
      <div className="flex items-center gap-3">
        <p>امتیاز شما :
          <span className="text-red-500">*</span>
        </p>
        <div className="flex items-center">
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="">
          دیدگاه شما
          <span className="text-red-500">*</span>
        </label>
        <textarea className="border outline-none py-3 px-4 w-full text-sm text-gray-500"
          id="comment"
          name="comment"
          cols={45}
          rows={8}
          required
          placeholder=""
        ></textarea>
      </div>
      <div>
        <div className="flex flex-col gap-2 mt-3">
          <label htmlFor="">
            نام
            <span className="text-red-500">*</span>
          </label>
          <input className="border py-2 px-4 w-full outline-none text-sm text-gray-500" type="text" />
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <label htmlFor="">
            ایمیل
            <span className="text-red-500">*</span>
          </label>
          <input className="border py-2 px-4 w-full outline-none text-sm text-gray-500" type="email" />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <input type="checkbox" name="" id="" />
        <p>
          ذخیره نام، ایمیل و وبسایت من در مرورگر برای زمانی که دوباره دیدگاهی
          می‌نویسم.
        </p>
      </div>
      <button className="btn rounded-none w-16 text-white bg-[#008978] hover:bg-[#711D1C]">ثبت</button>
    </div>
  );
}

export default CommentForm;
