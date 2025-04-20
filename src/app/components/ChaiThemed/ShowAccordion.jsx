import React from "react";
import Accordion from "../../../../registry/ui/chaiThemed/accordion";

function ShowAccordion() {
  return (
    <div className="flex justify-center items-center gap-4  flex-wrap">
      <Accordion
        title="What makes chai different from regular tea?"
        content="Chai typically combines black tea with aromatic spices like cardamom, cinnamon, cloves, and ginger. It’s also brewed with milk and sugar, giving it a rich and spicy flavor profile."
      />

      <Accordion
        title="Is green tea part of chai culture?"
        content="Green tea is more prominent in East Asian traditions, while chai is more closely associated with Indian culture and uses black tea as a base. However, fusion styles do exist!"
        ChaiTheme={true}
      />
    </div>
  );
}

export default ShowAccordion;
