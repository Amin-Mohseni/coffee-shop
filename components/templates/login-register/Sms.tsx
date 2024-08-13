import React from "react";

function Sms({hideOtpForm}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="form-control w-80 bg-white gap-y-4 px-14 py-10 text-center shadow-md">
        <p className="font-bold">کد تایید</p>
        <span className="text-sm text-gray-500">
          لطفا کد تایید ارسال شده را تایپ کنید
        </span>
        <span className="text-sm text-gray-500">09921558293</span>
        <input className="outline-none border rounded-md p-3 text-center" type="text" />
        <button className="btn bg-[#34180E] text-white hover:bg-[#34180E] hover:text-gray-300">
          ثبت کد تایید
        </button>
        <p className="text-sm">ارسال مجدد کد یکبار مصرف</p>
      </div>
      <p onClick={hideOtpForm} className="mt-6 cursor-pointer">
        لغو
      </p>
    </div>
  );
}

export default Sms;
