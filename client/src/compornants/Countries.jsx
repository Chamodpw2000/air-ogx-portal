import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import austraila from "../assets/Countries/Australia.jpg";
import egypt from "../assets/Countries/Egypt.jpg";
import france from "../assets/Countries/France.jpg";
import india from "../assets/Countries/India.jpg";
import italy from "../assets/Countries/Italy.jpg";
import indonesia from "../assets/Countries/Indonesia.jpg";
import vietnam from  "../assets/Countries/Vietnam.jpg";
import CountryProd from './CountryProd';

const Countries = () => {
    var settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  
    return (
        <div style={{ backgroundColor: '#e0f7fa', padding: '20px' }}>
            <h1 className="text-center display-4 fw-bold text-">Where We Can Go?</h1>
            <div className="container">
                <Slider {...settings}>
                    <div className="p-1">
                        <CountryProd
                            Image={austraila}
                            Title="Australia"
                            Description="Australia, the world's sixth-largest country, is a vibrant nation in the Southern Hemisphere, known for its stunning beaches, deserts, rainforests, and mountains."
                        />
                    </div>
                    <div className="p-1">
                        <CountryProd
                            Image={egypt}
                            Title="Egypt"
                            Description="A transcontinental country linking northeast Africa with the Middle East, Egypt is famous for its ancient civilization and iconic monuments."
                        />
                    </div>
                    <div className="p-1">
                        <CountryProd
                            Image={france}
                            Title="France"
                            Description="Located in Western Europe, France is renowned for its rich history, cultural heritage, and landmarks such as the Eiffel Tower and the Louvre Museum."
                        />
                    </div>
                    <div className="p-1">
                        <CountryProd
                            Image={india}
                            Title="India"
                            Description="A diverse and populous country in South Asia, India is known for its vibrant culture, historic landmarks like the Taj Mahal, and its influential philosophy."
                        />
                    </div>
                    <div className="p-1">
                        <CountryProd
                            Image={indonesia}
                            Title="Indonesia"
                            Description="An archipelago of over 17,000 islands in Southeast Asia, Indonesia is celebrated for its cultural diversity, stunning landscapes, and rich biodiversity."
                        />
                    </div>
                    <div className="p-1">
                        <CountryProd
                            Image={italy}
                            Title="Italy"
                            Description="Located in Southern Europe, Italy is famous for its historic cities like Rome and Venice, its art and architecture, and its influential cuisine."
                        />
                    </div>
                    <div className="p-1">
                        <CountryProd
                            Image={vietnam}
                            Title="Vietnam"
                            Description="Situated in Southeast Asia, Vietnam is known for its lush landscapes, bustling cities like Hanoi and Ho Chi Minh City, and its unique culinary traditions."
                        />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Countries;
