import React from "react";
import Button from "../../../../registry/ui/buttons/basicButton";

const SizesButton = () => {
  return (
    <div className="flex justify-center items-center gap-4  flex-wrap">
      <Button size="sdot" variant="chai">
        chai
      </Button>
      <Button size="sm" variant="yellow">
        chai
      </Button>
      <Button size="m"> chai</Button>

      <Button size="dot" variant="chai">
        chai
      </Button>

      <Button variant="destructive"> chai</Button>

      <Button size="xl" variant="primary">
        chai
      </Button>
    </div>
  );
};

export default SizesButton;
