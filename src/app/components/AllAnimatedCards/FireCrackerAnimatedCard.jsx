import React from "react";
import FirecrackerCard from "../../../../registry/ui/animatedCards/FireCrackerCard";

const CracklingAnimatedCard = () => {
  return (
    <div>
      <FirecrackerCard
        size="lg"
        variant="dark"
        title="New Year Boom!"
        description="Hover or click to see the sparks fly!"
        buttonLabel="Light It Up"
      />
    </div>
  );
};

export default CracklingAnimatedCard;
