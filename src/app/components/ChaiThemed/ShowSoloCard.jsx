import React from "react";
import SoloCountCard from "../../../../registry/ui/chaiThemed/soloCountCard";

function ShowSimpleCard() {
  return (
    <div className="flex justify-center items-center gap-4  flex-wrap">
      <SoloCountCard label="Chai Lovers" />
    </div>
  );
}

export default ShowSimpleCard;
