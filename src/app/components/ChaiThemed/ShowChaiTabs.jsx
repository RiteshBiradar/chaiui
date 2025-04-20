import React from "react";
import ChaiTabs from "../../../../registry/ui/chaiThemed/chaiTabs";

function ShowChaiTabs() {
    const chaiThemeData = [
        { 
          title: "Masala Chai", 
          content: "Masala chai is a spiced tea beverage made by brewing black tea with a mixture of aromatic spices and herbs. Originating from India, it's traditionally prepared with cardamom, cinnamon, ginger, cloves, and black peppercorns, creating a warm, spicy flavor profile that's both comforting and invigorating." 
        },
        { 
          title: "Brewing Tips", 
          content: "For the perfect cup of chai, simmer your spices in water for 5-10 minutes before adding tea leaves and milk. Use whole spices for stronger flavor, and adjust the milk-to-water ratio based on your preference. Don't forget to add sweetener like honey or jaggery while the tea is hot for the best taste experience." 
        },
        { 
          title: "Health Benefits", 
          content: "Chai contains antioxidants from tea and anti-inflammatory compounds from spices like ginger and cinnamon. These ingredients may help improve digestion, reduce inflammation, boost immunity, and provide a gentle energy lift with less caffeine than coffee. The warming spices also support circulation and overall wellness." 
        }
      ];
    
      // Data for the second ChaiTabs component (without ChaiTheme)
      const regularThemeData = [
        { 
          title: "Chai Varieties", 
          content: "Beyond traditional masala chai, explore Kashmiri kahwa with saffron and almonds, Tibetan butter tea with yak butter, or Mumbai cutting chai served in small glasses. Each region has its own unique preparation methods and ingredient combinations, reflecting local tastes and cultural traditions." 
        },
        { 
          title: "Chai Culture", 
          content: "Chai is more than a beverage; it's a cultural institution in many countries. In India, chai wallahs (tea vendors) are found on nearly every street corner. Chai breaks foster social connections, and offering chai to guests is considered essential hospitality in many South Asian homes and businesses." 
        },
        { 
          title: "Modern Twists", 
          content: "Contemporary chai innovations include chai lattes, chai-flavored ice cream, and chai-infused cocktails. Baristas worldwide experiment with alternative milks like oat or almond, while chefs incorporate chai spices into desserts, marinades, and even savory dishes for a unique flavor profile." 
        }
      ];
  return (
    <div className="flex justify-center items-center gap-4  flex-wrap">
                <ChaiTabs tabsData={chaiThemeData} ChaiTheme={true} />
                <ChaiTabs tabsData={regularThemeData} ChaiTheme={false} /> 


    </div>
  );
}

export default ShowChaiTabs;
