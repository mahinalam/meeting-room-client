import React from "react";
import TrendingCard from "./TrendingCard";
import { Link } from "react-router-dom";
import Title from "./Title";

const TrendeningDestination = () => {
  const destinations = [
    {
      image:
        "https://cf.bstatic.com/xdata/images/city/600x600/666853.jpg?k=b2212159e829c00b8b19af72b6211b25325d70811829e2eb4ef1045f8a568be5&o=",
      title: "Cox's Bazar",
    },
    {
      image:
        "https://cf.bstatic.com/xdata/images/city/600x600/761433.jpg?k=21910a5884ba4c680badac1131347de875f68cf188a389376d8b5b2f7a75582e&o=",
      title: "Sylhet",
    },
    {
      image:
        "https://cf.bstatic.com/xdata/images/city/600x600/688201.jpg?k=586e76aa55aa92d886eaf5837e288d77e15c9b81534bd4c7121d0d020e99064d&o=",
      title: "Dhaka",
    },
    {
      image:
        "https://cf.bstatic.com/xdata/images/city/600x600/642704.jpg?k=0903b71cc050fb55188d9e570c3eb0df9329e73678d6b6d5c4fde3080f1560df&o=",
      title: "Chittagong",
    },
    {
      image:
        "https://cf.bstatic.com/xdata/images/city/600x600/642704.jpg?k=0903b71cc050fb55188d9e570c3eb0df9329e73678d6b6d5c4fde3080f1560df&o=",
      title: "Chittagong",
    },
  ];

  return (
    <div className="mt-[20px] md:mt-[30px]">
      <Title
        title="Trending destinations"
        subTitle="Travelers searching for Bangladesh also booked here"
      />

      <div className=" mt-[15px] md:mt-[20px]">
        {/* for large screen devices */}
        <section className="md:block hidden">
          <div className="grid  grid-cols-2 gap-4">
            {destinations.slice(0, 2).map((place) => (
              <Link to="/rooms">
                <TrendingCard image={place.image} place={place.title} />
              </Link>
            ))}
          </div>
          <div className="grid  grid-cols-3 gap-4 mt-4">
            {destinations.slice(2, 5).map((place) => (
              <Link to="/rooms">
                <TrendingCard image={place.image} place={place.title} />
              </Link>
            ))}
          </div>
        </section>

        {/* for small devices */}
        <section className="block md:hidden overflow-x-auto">
          <div className="flex gap-4">
            {destinations.map((place, index) => (
              <div key={index} className=" flex-shrink-0">
                <TrendingCard image={place.image} place={place.title} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TrendeningDestination;

// import React from "react";
// import Title from "../Title";
// import Card from "./Card";
// import { Carousel } from "antd";

// const PropertiesMayLike = () => {
//   return (
//     <div className="mt-[20px] md:mt-[30px]">
//       {/* Title Section */}
//       <section>
//         <Title
//           title="Properties you might like in Budapest"
//           subTitle="Check out these properties similar to the ones you recently viewed"
//         />
//       </section>

//       {/* Cards Section */}
//       <section className="w-full mt-[15px] md:mt-[25px]">
//         {/* For medium and larger screens, use Antd Carousel */}
//         <div className="hidden md:block">
//           <Carousel
//             slidesToShow={4} // 4 cards for medium and large screens
//             slidesToScroll={1}
//             dots={false}
//             infinite={false}
//             draggable
//           >
//             {/* Render each card inside a slide */}
//             {[...Array(8)].map((_, index) => (
//               <div key={index}>
//                 <Card />
//               </div>
//             ))}
//           </Carousel>
//         </div>

//         {/* For small screens, enable horizontal scrolling */}
//         <div className="block md:hidden overflow-x-auto">
//           <div className="flex gap-4">
//             {[...Array(8)].map((_, index) => (
//               <div key={index} className=" flex-shrink-0">
//                 <Card />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PropertiesMayLike;
