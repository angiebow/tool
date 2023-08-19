"use client"

import localFont from "next/font/local";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import AccordionItem from "@/components/AccordionItem";
import React, { useState } from 'react';
import Image from "next/image";
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const lun = localFont({ src: "/lunema-regular.ttf" });
const me = localFont({ src: "/MonumentExtended-Ultrabold.otf" });

const HomePage = () => {

  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index){
      return setOpen(null)
    }

    setOpen(index)
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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

  const accordionData = [
    {
      title: "Question text goes here",
      desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    },
    {
      title: "Question text goes here",
      desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    },
    {
      title: "Question text goes here",
      desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    },
    {
      title: "Question text goes here",
      desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    },
    {
      title: "Question text goes here",
      desc: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
    },
  ];

  return ( 
    <div class="overflow-hidden">
      <Navbar/>

{/* main */}
<div class="bg-image flex items-center justify-start">
  <div class={`mainbox`}>
    <div class={`w-85 ml-10 mt-100 text-lSize ${me.className}`}>
      The only repair service you need
    </div>
    <div class={`w-85 ml-10 text-mSize ${lun.className}`}>
      Kami paham betapa tidak terduga masalah kendaraan dapat muncul di saat yang paling tidak tepat. Itulah mengapa Toolbeng hadir untuk memberikan bantuan cepat dan tanggap di jalan, kapan pun Anda membutuhkannya. Tanpa perlu cemas di tengah perjalanan, kami siap membantu Anda melanjutkan perjalanan dengan aman dan nyaman.
    </div>
    <div class={`mr-1 mt-1 flex justify-start items-center`}>
      <a href="#" class={`ml-10 text-mSize m-5 bg-toolbeng-red text-white px-4 py-2 rounded hover:bg-red-700 ${lun.className}`}>
        Get Started
      </a>
      <a href="#" class={`text-mSize m-5 px-4 py-2 border border-toolbeng-red text-white rounded hover:bg-toolbeng-red hover:text-white ${lun.className}`}>
        Sign In
      </a>
    </div>
  </div>
</div>

{/* About Us */}
      <div class="bg-white text-black items-start">
        <div class="flex items-center justify-center h-screen bg-about">
          <div class={`mx-10 w-842px h-152px text-hSize ${me.className}`}>About Us</div>
          <div class={`mx-5 aboutbox w-45 text-nSize ${lun.className}`}>Toolbeng adalah platform yang menyediakan jasa memperbaiki kendaraan dan jual beli suku cadang dengan menggunakan sistem order dan pemesanan berbasis online.</div>
        </div>

{/* Our Service */}
        <div class="bg-service">
          <div class={`mb-5 flex text-hSize justify-center ${me.className}`}>Our Service</div>

          <div class={`gap-3 flex items-bottom justify-center ${lun.className}}`}>
            <div class={`servicebox`}>
              <img src="serRide.svg" alt="star" class="w-50 p-8"/>
              <div class={`flex justify-center text-nSize font-bold`}>Toolbeng Ride</div>
              <div class={`my-1 centex text-kSize`}>Perbaiki motormu tanpa perlu beranjak dari tempatmu</div>
              <div class="flex justify-center">
                <a class={`justify-center text-kSize bg-toolbeng-blue text-white px-4 py-2 rounded hover:bg-blue-700 ${lun.className}`}>
                  Order Now &gt;
                </a>
              </div>
            </div>
            <div class={`servicebox`}>
              <img src="serCar.svg" alt="star" class="w-50 p-8"/>
              <div class={`flex justify-center text-nSize font-bold`}>Toolbeng Car</div>
              <div class={`my-1 centex text-kSize`}>Perbaiki mobilmu tanpa perlu beranjak dari tempatmu</div>
              <div class="flex justify-center">
                <a class={`justify-center text-kSize bg-toolbeng-red text-white px-4 py-2 rounded hover:bg-red-700 ${lun.className}`}>
                  Order Now &gt;
                </a>
              </div>
            </div>
            <div class={`servicebox`}>
              <img src="serService.svg" alt="star" class="w-50 p-8"/>
              <div class={`flex justify-center text-nSize font-bold`}>Toolbeng Service</div>
              <div class={`my-1 centex text-kSize`}>Temukan bengkel terbaik di dekatmu</div>
              <div class="flex justify-center">
                <a class={`justify-center text-kSize bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-500 ${lun.className}`}>
                  Coming Soon
                </a>
              </div>
            </div>
            <div class={`servicebox`}>
              <img src="serShop.svg" alt="star" class="w-50 p-8"/>
              <div class={`flex justify-center text-nSize font-bold`}>Toolbeng Shop</div>
              <div class={`my-1 centex text-kSize`}>Belanja suku cadang tidak pernah semudah ini</div>
              <div class="flex justify-center">
                <a class={`justify-center text-kSize bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-500 ${lun.className}`}>
                  Cooming Soon
                </a>
              </div>
            </div>
          </div>

        </div>

{/* Testimonials */}
        <div class="bg-testimonial">
          <div class={`flex text-hSize justify-center ${me.className}`}>Customer Testimonials</div>
          <div class={`flex text-nSize justify-center ${lun.className}`}>Let's see what other people think about us.</div>

            <div className="carousel">
              <Slider {...settings}>
                <div class={`box text-black p-5 pt-10`}>
                <div class="flex gap-1">
                  <img src="star.png" alt="star" class="h-5 w-5"/>
                  <img src="star.png" alt="star" class="h-5 w-5"/>
                  <img src="star.png" alt="star" class="h-5 w-5"/>
                  <img src="star.png" alt="star" class="h-5 w-5"/>
                  <img src="star.png" alt="star" class="h-5 w-5"/>
                </div>
                  <div class={`py-5 text-kSize ${lun.className}`}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</div>
                  <div class={`flex`}>
                    <img src="man.png" alt="star" class="h-10 w-10"/>
                    <div class={`text-kSize font-bold ${lun.className}`}>Darrel Valentino</div>
                  </div>
                </div>
                <div class={`box text-black p-5 pt-10`}>
                <div class={`flex gap-1`}>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                  </div>
                  <div class={`py-5 text-kSize ${lun.className}`}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</div>
                  <div class={`flex`}>
                    <img src="woman.png" alt="star" class="h-10 w-10"/>
                    <div class={`text-kSize font-bold ${lun.className}`}>Pelangi Masita</div>
                  </div>
                </div>
                <div class={`box text-black p-5 pt-10`}>
                <div class={`flex gap-1`}>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                  </div>
                  <div class={`py-5 text-kSize ${lun.className}`}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</div>
                  <div class={`flex`}>
                    <img src="man.png" alt="star" class="h-10 w-10"/>
                    <div class={`text-kSize font-bold ${lun.className}`}>Mark Zuckerberg</div>
                  </div>
                </div>
                <div class={`box text-black p-5 pt-10`}>
                <div class={`flex gap-1`}>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                  </div>
                  <div class={`py-5 text-kSize ${lun.className}`}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</div>
                  <div class={`flex`}>
                    <img src="woman.png" alt="star" class="h-10 w-10"/>
                    <div class={`text-kSize font-bold ${lun.className}`}>Pelangi Masita</div>
                  </div>
                </div>
                <div class={`box text-black p-5 pt-10`}>
                <div class={`flex gap-1`}>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                  </div>
                  <div class={`py-5 text-kSize ${lun.className}`}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</div>
                  <div class={`flex`}>
                    <img src="man.png" alt="star" class="h-10 w-10"/>
                    <div class={`text-kSize font-bold ${lun.className}`}>Mark Zuckerberg</div>
                  </div>
                </div>
                <div class={`box text-black p-5 pt-10`}>
                <div class={`flex gap-1`}>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                  </div>
                  <div class={`py-5 text-kSize ${lun.className}`}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</div>
                  <div class={`flex`}>
                    <img src="woman.png" alt="star" class="h-10 w-10"/>
                    <div class={`text-kSize font-bold ${lun.className}`}>Pelangi Masita</div>
                  </div>
                </div>
                <div class={`box text-black p-5 pt-10`}>
                <div class={`flex gap-1`}>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                  </div>
                  <div class={`py-5 text-kSize ${lun.className}`}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</div>
                  <div class={`flex`}>
                    <img src="man.png" alt="star" class="h-10 w-10"/>
                    <div class={`text-kSize font-bold ${lun.className}`}>Mark Zuckerberg</div>
                  </div>
                </div>
                <div class={`box text-black p-5 pt-10`}>
                <div class={`flex gap-1`}>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                  </div>
                  <div class={`py-5 text-kSize ${lun.className}`}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</div>
                  <div class={`flex`}>
                    <img src="woman.png" alt="star" class="h-10 w-10"/>
                    <div class={`text-kSize font-bold ${lun.className}`}>Pelangi Masita</div>
                  </div>
                </div>
                <div class={`box text-black p-5 pt-10`}>
                <div class={`flex gap-1`}>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                  </div>
                  <div class={`py-5 text-kSize ${lun.className}`}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</div>
                  <div class={`flex`}>
                    <img src="man.png" alt="star" class="h-10 w-10"/>
                    <div class={`text-kSize font-bold ${lun.className}`}>Mark Zuckerberg</div>
                  </div>
                </div>
                <div class={`box text-black p-5 pt-10`}>
                <div class={`flex gap-1`}>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                    <img src="star.png" alt="star" class="h-5 w-5"/>
                  </div>
                  <div class={`py-5 text-kSize ${lun.className}`}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</div>
                  <div class={`flex`}>
                    <img src="man.png" alt="star" class="h-10 w-10"/>
                    <div class={`text-kSize font-bold ${lun.className}`}>Mark Zuckerberg</div>
                  </div>
                </div>
              </Slider>
            </div>
        </div>

{/* FAQ */}
        <div class="bg-faq">
        <div class={`flex text-hSize justify-center ${me.className}`}>FAQs</div>
        <div class={`flex justify-center`}>
          <div class={`flex text-nSize justify-center faqbox ${lun.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod nibh purus, a ultrices dolor pellentesque eu.</div>
        </div>
        <section className="bg-transparent h-screen grid place-items-center">
          <div className="px-[40px] max-w-[800px] text-sSize">
            {accordionData.map((data, index) => {
              return <AccordionItem 
              key={index} 
              open={index === open} 
              title={data.title} 
              desc={data.desc}
              toggle={() => toggle(index)}
              />;
            }
            )}
          </div>
        </section>
        <div class={`text-rSize flex justify-center ${me.className}`}>Got any questions?</div>
        <div class={`text-sSize flex justify-center ${lun.className}`}>Get in touch with Toolbeng team and we will help you as soon as we can.</div>
        <div class={`flex justify-center`}>
          <a href="#" class={`bg-transparent text-mSize m-5 px-4 py-2 border border-black text-black rounded hover:bg-black hover:text-white ${lun.className}`}>Contact</a>
        </div>
        </div>

{/* Medium */}
        <div class={`bg-medium bg-toolbeng-blue flex items-center justify-center`}>
        <div class="p-20 bg-medium bg-toolbeng-blue">
          <div class={`mt-5 mediumbox flex text-xSize text-white justify-center ${me.className}`}>Medium length heading goes here</div>
          <div class={`mediumbox flex justify-center m-5 text-white ${lun.className}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod nibh purus, a ultrices dolor pellentesque eu. Vestibulum tortor nisl.</div>

            <form>
              <div class={`flex justify-center`}>
              <div class="mb-4 pr-3">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@yourmail.com"
                  class={`text-kSize p-2 w-full border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300 ${lun.className}`}
                  required
                />
              </div>
              <div class="text-center">
                <button
                  type="submit"
                  class={`px-4 py-2 bg-toolbeng-red text-white rounded text-kSize hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-300 ${lun.className}`}
                >
                  Sign Up
                </button>
              </div>
              </div>
            </form>

          <div class={`flex justify-center m-5 text-white ${lun.className}`}>By clicking Sign Up you're confirming that you agree with our Terms and Conditions.</div>
        </div>
        </div>

      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;