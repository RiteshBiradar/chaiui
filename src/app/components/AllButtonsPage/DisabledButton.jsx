import React from "react";
import Button from "../../../../registry/ui/buttons/basicButton";

const DisabledButton = () => {
  return (
    <div className="flex justify-center items-center gap-4  flex-wrap">
      <Button variant="chai" rounded="circle" disabled>
        chai
      </Button>
      <Button variant="yellow" disabled>
        chai
      </Button>
      <Button rounded="medium" disabled>
        chai
      </Button>

      <Button variant="chai" rounded="rectangle" disabled>
        chai
      </Button>

      <Button variant="destructive" rounded="small" disabled>
        chai
      </Button>
    </div>
  );
};

export default DisabledButton;
