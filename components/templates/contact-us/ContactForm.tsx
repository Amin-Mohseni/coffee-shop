import React from "react";

function ContactForm() {
  return (
    <div className="flex flex-col gap-3 mt-10 lg:mt-0">
      <span className="text-gray-500 text-sm">فرم تماس با ما</span>
      <span className="text-2xl">
        برای تماس با ما می توانید فرم زیر را تکمیل کنید
      </span>
      <div className="grid md:grid-cols-2 mt-4 gap-3">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="cursor-pointer" htmlFor="name">
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              id="name"
              className="outline-gray-300 border border-gray-500 py-2 px-4 text-sm rounded-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="cursor-pointer" htmlFor="phone">
              شماره تماس
            </label>
            <input
              type="text"
              id="phone"
              className="outline-gray-300 border border-gray-500 py-2 px-4 text-sm rounded-sm"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label className="cursor-pointer" htmlFor="email">
                آدرس ایمیل
              </label>
              <input
                type="text"
                id="email"
                className="outline-gray-300 border border-gray-500 py-2 px-4 text-sm rounded-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="cursor-pointer" htmlFor="companyName">
                نام شرکت
              </label>
              <input
                type="text"
                id="companyName"
                className="outline-gray-300 border border-gray-500 py-2 px-4 text-sm rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="textarea">درخواست شما</label>
        <textarea
          className="border border-gray-500 outline-gray-300 rounded-sm"
          cols={45}
          rows={5}
          required
          placeholder=""
          name="textarea"
          id="textarea"
        ></textarea>
      </div>
      <button className="btn bg-[#34180E] text-white border-none hover:bg-[#008978] rounded-none text-[16px]">
        ارسال
      </button>
    </div>
  );
}

export default ContactForm;
