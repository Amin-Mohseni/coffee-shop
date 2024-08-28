import React from "react";

function MoreInfo(props: { moreinfo: any }) {
  return (
    <div>
      <p className="text-2xl text-[#1F2937] py-6">اطلاعات بیشتر :</p>
      <hr />
      <main className="text-gray-500">
        <div className="flex items-center justify-between py-3">
          <p>وزن</p>
          <p>{props.moreinfo.weight} گرم</p>
        </div>
        <div className="flex items-center justify-between py-3">
          <p>مناسب برای</p>
          <p>{props.moreinfo.suitableFor}</p>
        </div>
        <div className="flex items-center justify-between py-3 ">
          <p>بو</p>
          <p>{props.moreinfo.smell}</p>
        </div>
      </main>
    </div>
  );
}

export default MoreInfo;
