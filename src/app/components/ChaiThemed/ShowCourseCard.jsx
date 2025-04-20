import React from "react";
import CourseCard from "../../../../registry/ui/chaiThemed/courseCard";

function ShowCourseCard() {
  return (
    <div className="flex justify-center items-center gap-4  flex-wrap">
      <CourseCard
        title="Master the Art of Tea Blending"
        subtitle="From Leaf to Cup"
        desc="Dive deep into the world of artisanal tea crafting. Learn how to identify, blend, and brew exquisite teas from around the globe. Ideal for tea lovers and aspiring tea sommeliers."
        tags={["Green Tea", "Black Tea", "Herbal", "+1"]}
        startDate="Starts April 12, 2025"
        duration="6 months"
        price={6999}
        originalPrice={8999}
        discount="Save 22%"
        img="https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=600"
        link="https://your-tea-blending-course.com"
      />

      <CourseCard
        title="Tea Ceremony & Culture Bootcamp"
        subtitle="Traditions, Rituals & Brewing Mastery"
        desc="Explore the elegance and mindfulness of tea ceremonies across cultures. This immersive course covers Japanese, Chinese, and British traditions with hands-on guidance and live sessions."
        tags={["Matcha", "Chai", "Oolong"]}
        startDate="Starts May 5, 2025"
        duration="4 months"
        price={4999}
        originalPrice={7499}
        discount="Save 33%"
        img="https://images.pexels.com/photos/13737048/pexels-photo-13737048.jpeg?auto=compress&cs=tinysrgb&w=600"
        link="https://your-tea-ceremony-course.com"
        ChaiTheme={true}
      />
    </div>
  );
}

export default ShowCourseCard;
