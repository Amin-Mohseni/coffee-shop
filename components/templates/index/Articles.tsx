import Article from "@/components/modules/article/Article";
import React from "react";

function Articles() {
  return (
    <div className="mt-20" data-aos="fade-up">
      <section className="text-center">
        <span className="text-4xl">مقالات ما</span>
        <p className="text-gray-400 mt-4">دانستنی های جذاب دنیای قهوه</p>
      </section>
      <main className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-6">
        <Article/>
        <Article/>
        <Article/>
      </main>
    </div>
  );
}

export default Articles;
