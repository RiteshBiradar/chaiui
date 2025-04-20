import React from "react";
import FeatureCard from "../../../../registry/ui/chaiThemed/featureCard";

function ShowFeatureCard() {
  return (
    <div className="flex justify-center items-center gap-4  flex-wrap">
      <FeatureCard
        title="Regular Feature"
        description="This is a standard feature card without the ChaiTheme applied."
        icon="⚡"
        ChaiTheme={true}
      />

      <FeatureCard
        title="Chai Feature"
        description="This feature card has the warm ChaiTheme colors applied for a cozy feel."
        icon="☕"
        ChaiTheme={false}
      />
    </div>
  );
}

export default ShowFeatureCard;
