import React from "react";
import Button from "../../../../registry/ui/buttons/basicButton";

const SizesButton = () => {
  return (
    <div className="flex justify-center items-center gap-4  flex-wrap">
      <Button size="m">small</Button>
      <Button variant="destructive">Default</Button>

      <Button size="xl" variant="primary">
        Extra Large
      </Button>
      <Button size="sm" variant="yellow">
        Yellow Button
      </Button>

      <Button size="dot" variant="chai">
        Chai Button
      </Button>
      <Button size="sdot" variant="chai">
        Chai Button
      </Button>
    </div>
  );
};

export default SizesButton;
