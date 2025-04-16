import React from "react";
import CracklingCard from "../../../../registry/ui/animatedCards/CracklingCard";

const CracklingAnimatedCard = () => {
  return (
    <div>
      <CracklingCard
        size="lg"
        variant="dark"
        title="Cosmic Card"
        description="With a glowy magical border!"
        animationDuration="6s"
      />
    </div>
  );
};

export default CracklingAnimatedCard;
