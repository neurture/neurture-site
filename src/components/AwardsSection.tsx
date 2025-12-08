"use client";

import CounselorsChoiceAward from "./CounselorsChoiceAward";
import LaurelAward from "./LaurelAward";

export default function AwardsSection() {
  return (
    <section className="py-8 px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-6">
          {/* Counselor's Choice Award */}
          <CounselorsChoiceAward />

          {/* Ratings */}
          <LaurelAward topText="4.7 ratings" bottomText="avg. rating" />

          {/* MIND Apps */}
          <LaurelAward topText="Featured in" bottomText="MIND Apps" />
        </div>
      </div>
    </section>
  );
}
