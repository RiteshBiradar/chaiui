import React from "react";
import Button from "../../../../registry/ui/buttons/basicButton";

const HoverButtons = () => {
  return (
    <div className="flex justify-center items-center gap-4  flex-wrap">
      <Button variant="chai" rounded="circle">
        chai
      </Button>
      <Button variant="yellow" hover="shadow">
        chai
      </Button>
      <Button variant="yellow" hover="rotate">
        chai
      </Button>
      <Button rounded="medium" hover="slide">
        chai
      </Button>

      <Button variant="chai" rounded="rectangle" hover="ring">
        chai
      </Button>
    </div>
  );
};

export default HoverButtons;
