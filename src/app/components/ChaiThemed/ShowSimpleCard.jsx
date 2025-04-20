import React from 'react'
import SimpleCard from '../../../../registry/ui/ChaiThemed/simpleCard';

function ShowSimpleCard() {
  return (
    <div className="flex justify-center items-center gap-4  flex-wrap">
        <SimpleCard
        title="Mountain Mist Tea" 
        subtitle="Peaceful Tea Experience" 
        desc="Experience tranquility in the heart of the mountains, where fresh air and breathtaking views await you every morning."  
        src="https://images.pexels.com/photos/734983/pexels-photo-734983.jpeg?auto=compress&cs=tinysrgb&w=600"
    />
        <SimpleCard 
        title="Urban Coffee Journey" 
        subtitle="City Brews & Beans" 
        desc="Dive into the vibrant energy of the city, discovering hidden gems, lively streets, and unforgettable urban experiences."  
        src="https://images.pexels.com/photos/1240961/pexels-photo-1240961.jpeg?auto=compress&cs=tinysrgb&w=600"
        ChaiTheme={true}
    />
    </div>
  )
}

export default ShowSimpleCard