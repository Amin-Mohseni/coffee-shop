"use client";

import React, { useState } from "react";
import Description from "./Description";
import MoreInfo from "./MoreInfo";
import Comments from "./Comments";

function Tabs(props: { product: any }) {
  const [showContent, setShowContent] = useState("description");

  return (
    <div>
      <ul className="flex items-center justify-center gap-x-10 py-6 mt-10 text-lg text-gray-500">
        <li>
          <span
            onClick={() => setShowContent("description")}
            className={` cursor-pointer mt-40 container m-auto ${
              showContent === "description" && "text-black"
            }`}
          >
            توضیحات
          </span>
        </li>
        <li>
          <span
            onClick={() => setShowContent("moreinfo")}
            className={` cursor-pointer mt-40 container m-auto ${
              showContent === "moreinfo" && "text-black"
            }`}
          >
            اطلاعات بیشتر
          </span>
        </li>
        <li>
          <span
            onClick={() => setShowContent("comments")}
            className={` cursor-pointer mt-40 container m-auto ${
              showContent === "comments" && "text-black"
            }`}
          >
            نظرات({props.product.comments.length})
          </span>
        </li>
      </ul>
      <hr />
      <div className="px-3 lg:p-0">
        {showContent === "description" && <Description />}
        {showContent === "moreinfo" && (
          <MoreInfo moreinfo={props.product} />
        )}
        {showContent === "comments" && (
          <Comments
            comments={JSON.parse(JSON.stringify(props.product.comments))}
          />
        )}
      </div>
    </div>
  );
}

export default Tabs;
