import React from "react";
import Button from "../../../../registry/ui/buttons/basicButton";

const AllButtons = () => {
  return (
    <div className="flex justify-center items-center gap-4  flex-wrap">
      <Button>Default </Button>
      <Button variant="destructive">Destructive</Button>

      <Button variant="primary">Primary </Button>
      <Button variant="yellow">Yellow </Button>

      <Button variant="chai">Chai </Button>
      <Button variant="lavender">Lavender </Button>

      <Button variant="purple">Purple </Button>
      <Button variant="teal">Teal </Button>

      <Button variant="green">Green </Button>
      <Button variant="sky">Sky </Button>

      <Button variant="blue">Blue </Button>
      <Button variant="facebook">Facebook </Button>
      <Button variant="stroke">Stroke </Button>
    </div>
  );
};

export default AllButtons;
