import UserLayout from "@/components/layouts/UserLayout";
import Index from "@/components/templates/p-user/Index";
import LinkBox from "@/components/templates/p-user/LinkBox";
import React from "react";

function page() {
  return (
    <UserLayout>
      <Index />
      <LinkBox />
    </UserLayout>
  );
}

export default page;
