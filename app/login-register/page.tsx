"use client";
import Login from "@/components/templates/login-register/Login";
import Register from "@/components/templates/login-register/Register";
import React, { useState } from "react";
import { authTypes } from "@/utils/constants";

function page() {
  const [authType, setAuthType] = useState(authTypes.LOGIN);
  const showLoginForm = () => setAuthType(authTypes.LOGIN);
  const showRegistedForm = () => setAuthType(authTypes.REGISTER);

  return (
    <div className="grid lg:grid-cols-2">
      <div className="hidden lg:flex">
        <img
          className="object-cover object-center w-full h-full"
          src="/images/peakpx-1.jpg"
          alt=""
        />
      </div>
      <div className="flex items-center justify-center h-screen bg-[#EEA042]">
        {authType === authTypes.LOGIN ? (
          <Login showRegistedForm={showRegistedForm} />
        ) : (
          <Register showLoginForm={showLoginForm} />
        )}
      </div>
    </div>
  );
}

export default page;
