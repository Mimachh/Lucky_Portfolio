import React, { Component, useState } from "react";
import Slider from "react-slick";

import Layout from '@/components/Layout'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import entreprise1 from '../../public/images/entreprises/jean.jpg'
import entreprise2 from '../../public/images/entreprises/kokuban.jpg'
import entreprise3 from '../../public/images/entreprises/nutrimeaLogo.jpg'
import entreprise4 from '../../public/images/entreprises/veterans.jpg'
import entreprise5 from '../../public/images/entreprises/vivrefrancais.webp'
import entreprise6 from '../../public/images/entreprises/denis.jpg'


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: '50px', height: '50px' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: '50px', height: '50px' }}
      onClick={onClick}
    />
  );
}


const OnHoverImage = ({ hoveredImage, alt, bg = 'bg-gray-200' }) => {
    const [hover, setHover] = useState(false);
    return (
      <div className="relative m-4 cursor-pointer overflow-hidden rounded-2xl"

        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* <Image src={hoveredImage} alt={alt} className='h-auto w-full relative z-50'/>
        <div className="absolute z-40 top-0 left-0 right-0 text-red-800 bg-light opacity-20 bottom-0 flex items-center justify-center backdrop-blur-sm">         
                  <p className="relatlive z-50 opacity-1">Coucou</p>
              </div> */}

        {hover ? (
            <div className="relative bg-gray-800 hover:scale-105 duration-300">
              <Image src={hoveredImage} alt={alt} className='h-auto w-full z-49 opacity-50'/>
              <div className="absolute z-40 top-0 left-0 right-0 text-white font-semibold  bottom-0 flex items-center justify-center hover:backdrop-blur-sm">         
                  <p className="relative z-50">Coucou</p>
              </div>
            </div>

        ) : (
          <Image src={hoveredImage} alt={alt} className={`h-auto w-full relative z-50 ${bg}`}/>
               
        )}
      </div>
    );
  };


export default class Responsive extends Component {
    
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
            breakpoint: 2000,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },

        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
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
        <section className='relative flex w-full  flex-col items-center justify-center dark:text-light min-h-screen'>
        <Layout className='pt-8 '>
            <div className='absolute lg:relative lg:mb-16 md:mb-16 top-4 xl:top-16 left-1/2 -translate-x-1/2'>
                <div className='xl:block flex justify-center items-center'>
                    <AnimatedText text="Miniatures" className='z-10 mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 mx-4' />

                </div>
            </div>
            <div className="w-2/3 m-auto">
                <div>
                    <Slider {...settings}>
                    <div className="">
                    <OnHoverImage 
                    hoveredImage={entreprise1}
                    alt="test"
                    />
                    </div>
                    <div>
                    <OnHoverImage 
                    hoveredImage={entreprise2}
                    alt="test"
                    />
                    </div>
                    <div>
                    <OnHoverImage 
                    hoveredImage={entreprise3}
                    alt="test"
                    />
                    </div>
                    <div>
                    <OnHoverImage 
                    hoveredImage={entreprise4}
                    alt="test"
                    />
                    </div>
                    <div>
                    <OnHoverImage 
                    hoveredImage={entreprise5}
                    alt="test"
                    />
                    </div>
                    <div>
                    <OnHoverImage 
                    hoveredImage={entreprise6}
                    alt="test"
                    />
                    </div>
                    </Slider>
                </div>
            </div>
      </Layout>
      </section>
    );
  }
}