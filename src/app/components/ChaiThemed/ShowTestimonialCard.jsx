import React from "react";
import TestimonialCard from "../../../../registry/ui/chaiThemed/testimonialCard";

function ShowTestimonialCard() {
  return (
    <div className="flex justify-center items-center gap-4  flex-wrap">
      <TestimonialCard
        personName="Piyush Garg"
        personDesignation="Moscow"
        personAddress="Russia"
        companyName="Teachyst"
        testimonialText="Tea is the elixir of life, bringing tranquility to my weary soul. Each sip of this masala chai transports me back to memories of home."
      />

      <TestimonialCard
        ChaiTheme={true}
        personName="Hitesh Choudary"
        personDesignation="Jaipur"
        personAddress="India"
        testimonialText="Tea time is a chance to slow down, pull back and appreciate our surroundings. This chai blend perfectly captures the essence of traditional Indian flavors."
        companyName="Learnyst"
        personImage="https://images.pexels.com/photos/1759524/pexels-photo-1759524.jpeg?auto=compress&cs=tinysrgb&w=600"
        // companyLogo="https://images.pexels.com/photos/26576975/pexels-photo-26576975/free-photo-of-close-up-of-a-logo-and-sign-on-white-paper-sheet.jpeg?auto=compress&cs=tinysrgb&w=600"
      />
    </div>
  );
}

export default ShowTestimonialCard;
