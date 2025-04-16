import React from "react";
import FlipCard from "../../../../registry/ui/animatedCards/FlipAnimatedCard";

const AllFlipAnimatedCard = () => {
  return (
    <div className="flex gap-5 flex-wrap">
      <FlipCard />
      <FlipCard
        front={<div className="text-xl font-bold">Hello</div>}
        back={<div className="text-xl font-bold">Goodbye</div>}
      />
      <FlipCard
        animation="flipX"
        front={<div className="p-4">🌞 Day</div>}
        back={<div className="p-4">🌜 Night</div>}
      />
      <FlipCard
        front={
          <img
            src="https://images.unsplash.com/photo-1522094883455-3364b09e4237?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Front Image"
          />
        }
        back={
          <img
            src="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Back Image"
          />
        }
      />
    </div>
  );
};

export default AllFlipAnimatedCard;
