import React from "react";

function MoreInfo(props: { moreinfo : any}) {
  return (
    <div>
      <p className="text-2xl text-[#1F2937] py-6">اطلاعات بیشتر :</p>
      <hr />
      <main>
        <div className="flex items-center justify-between py-3 text-gray-500">
          <p>وزن</p>
          <p>{props.moreinfo} گرم</p>
        </div>
      </main>
    </div>
  );
}

export default MoreInfo;
