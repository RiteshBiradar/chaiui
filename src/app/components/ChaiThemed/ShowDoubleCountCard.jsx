import React from "react";
import DoubleCountCard from "../../../../registry/ui/chaiThemed/doubleCountCard";

function ShowDoubleCountCard() {
  return (
    <div className="flex justify-center items-center gap-4  flex-wrap">
      <DoubleCountCard
        title="Projects"
        subtitle="Overview"
        count1={132}
        label1="Active"
        count2={87}
        label2="Completed"
        ChaiTheme={true}
      />
      <DoubleCountCard
        title="Projects"
        subtitle="Overview"
        count1={132}
        label1="Active"
        count2={87}
        label2="Completed"
        ChaiTheme={false}
      />
    </div>
  );
}

export default ShowDoubleCountCard;
