import React from "react";
import Button from "../../../../registry/ui/buttons/basicButton";

const SizesButton = () => {
  return (
    <div className="flex justify-center items-center gap-4  flex-wrap">
      <Button variant="chai" rounded="circle">
        chai
      </Button>
      <Button variant="yellow">chai</Button>
      <Button rounded="medium"> chai</Button>

      <Button variant="chai" rounded="rectangle">
        chai
      </Button>

      <Button variant="destructive" rounded="small">
        {" "}
        chai
      </Button>
    </div>
  );
};

export default SizesButton;
