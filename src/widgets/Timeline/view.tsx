import TimelineWithSteps from "@widgets/common/TimelinewithSteps";
import Footer from "@widgets/Footer";
import Header from "@widgets/Header";
import React from "react";

export default function TimeLine() {
  return (
    <main>
      <Header />
      <div className="pt-[100px]">
      <TimelineWithSteps />
      </div>
      <Footer />
    </main>
  );
}
