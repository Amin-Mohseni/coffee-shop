import React from "react";
import Ticket from "./ticket";

function Tickets() {
  return (
    <>
      <div>
        <p className="text-xl">تیکت های اخیر:‌</p>
        <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-6 py-10">
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
        </div>
      </div>
    </>
  );
}

export default Tickets;
