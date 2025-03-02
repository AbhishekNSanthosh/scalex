import GuidelinesContent from "@widgets/common/GuidelinesContent";
import Footer from "@widgets/Footer";
import Header from "@widgets/Header";
import React from "react";

export default function Guidelines() {
  return (
    <main>
      <Header />
      <div className="pt-[80px] lg:pt-[30px]">
      <GuidelinesContent />
      </div>
      <Footer />
    </main>
  );
}
