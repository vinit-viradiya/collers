import playBtn from './assets/play-circle.svg'
import icon1 from './assets/icon1.svg'
import icon2 from './assets/icon2.svg'
import icon3 from './assets/icon3.svg'
import cart from './assets/cart.svg'
import rightArrow from './assets/right-arrow.svg'
import leftArrow from './assets/left-arrow.svg'
import menu from './assets/menu.svg'
import shoe from './assets/img1.png'
import cardImg1 from './assets/cardImg1.png'
import cardImg2 from './assets/cardImg2.png'
import cardImg3 from './assets/cardImg3.png'
import desktop from './assets/desktop.png'
import tes1 from './assets/tes1.png'
import tes2 from './assets/tes2.png'
import tes3 from './assets/tes3.png'
import user1 from './assets/user1.png'
import user2 from './assets/user2.png'
import user3 from './assets/user3.png'
import user4 from './assets/user4.png'
import article1 from './assets/article1.png'
import article2 from './assets/article2.png'
import article3 from './assets/article3.png'
import article4 from './assets/article4.png'
import events1 from './assets/events1.png'
import events2 from './assets/events2.png'
import events3 from './assets/events3.png'
import events4 from './assets/events4.png'
import collection from './assets/collection.png'
import astore from './assets/astore.png'
import gplay from './assets/gplay.png'
import map from './assets/map.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React, { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  return (
    <>
      <header>
        <div className="container">
          <div className="flex items-center justify-between text-primary py-6">
            <a href='#' className="text-[32px] font-semibold">
              Collers
            </a>
            <nav className="flex gap-2 lg:gap-7 items-center font-semibold">
              <ul className="hidden lg:flex gap-7">
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Solutions</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Resources</a>
                </li>
              </ul>
              <div className="flex gap-7">
                <button>
                  Log In
                </button>
                <button className="border-primary border-2 rounded-lg py-3 px-7 hover:bg-primary hover:text-white transition-colors">
                  Sign up now
                </button>
              </div>
              <div className="relative inline-block text-left lg:hidden">
                <button
                  onClick={toggleDropdown}
                  className="inline-flex justify-center w-full rounded-md border-2 p-3"
                >
                  <img src={menu} alt="" />
                </button>
                {isOpen && (
                  <div
                    className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        onClick={closeDropdown}
                      >
                        Products
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        onClick={closeDropdown}
                      >
                        Solutions
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        onClick={closeDropdown}
                      >
                        Pricing
                      </a>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        onClick={closeDropdown}
                      >
                        Resources
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <div className='f-sec overflow-hidden relative'>
          <section className="hero py-20">
            <div className="container">
              <div className="flex items-center">
                <div className="flex flex-col gap-8 ">
                  <h1 className='text-4xl lg:text-6xl 3xl:text-7xl font-bold'>
                    Collectible Sneakers
                  </h1>
                  <p className='text-lg'>
                    Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.
                  </p>
                  <div className="flex text-primary gap-7 font-semibold">
                    <button className="border-primary border-2 rounded-lg py-3 px-7 text-xl hover:bg-primary hover:text-white transition-colors">
                      Sign up now
                    </button>
                    <button className='flex items-center gap-3'>
                      <img src={playBtn} alt="" /> <span>Watch Demo</span>
                    </button>
                  </div>
                </div>
                <div className='hidden lg:block lg:shrink-0'>
                  <img src={shoe} alt="" />
                </div>
              </div>
            </div>
          </section>
          <section className='py-20'>
            <div className="container">
              <div className="grid md:w-8/12 mx-auto lg:w-full lg:grid-cols-3 gap-20 text-center lg:text-start">
                {
                  [
                    {
                      img: icon1,
                      title: "Nibh viverra",
                      des: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
                    },
                    {
                      img: icon2,
                      title: "Cursus amet",
                      des: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
                    },
                    {
                      img: icon3,
                      title: "Ipsum fermentum",
                      des: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
                    }
                  ].map((item, index) => {
                    return (
                      <div className="flex flex-col gap-4" key={index}>
                        <img src={item.img} alt="" width={64} className='mx-auto lg:m-0' />
                        <h2 className='font-semibold text-xl'>{item.title}</h2>
                        <p className='text-lg'>{item.des}</p>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </section>
        </div>
        <section className='bg-secondary text-white py-20'>
          <div className="container">
            <div className="flex items-center justify-between mb-20">
              <h2 className='text-3xl lg:text-4xl 2xl:text-[56px] font-bold'>The best of the best</h2>
              <button className='text-2xl font-bold border-2 py-2 px-4 md:py-4 md:px-12 rounded-lg hover:bg-white hover:text-secondary transition-colors'>Sign up now</button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 2xl:gap-12">
              {
                [
                  {
                    img: cardImg1,
                    title: "Title",
                    des: " Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
                  },
                  {
                    img: cardImg2,
                    title: "Title",
                    des: " Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
                  },
                  {
                    img: cardImg3,
                    title: "Title",
                    des: " Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
                  }
                ].map((item, index) => {
                  return (
                    <div key={index} className="card rounded-[10px] overflow-hidden shadow-[0_25px_50px_0_rgba(255,255,255,.2)]">
                      <div className="image">
                        <img src={item.img} alt="" className='w-full' />
                      </div>
                      <div className="p-8">
                        <h2 className='text-2xl'>{item.title}</h2>
                        <p className='mt-4 mb-8 text-lg'>
                          {item.des}
                        </p>
                        <button className='font-semibold border-2 p-3 flex items-center gap-2 text-xl w-full justify-center rounded-lg'>
                          <img src={cart} alt="" />
                          <span>Buy Now</span>
                        </button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>
        <section className='py-20'>
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-y-10 bg-white p-20 items-center justify-between shadow-[0_20px_25px_-5px_rgba(0,0,0,.1)] rounded-[30px]">
              <div className="flex flex-col gap-6">
                <h2 className='text-3xl lg:text-4xl 2xl:text-[56px] font-bold'>Why join us</h2>
                <ul className='text-xl list-tick'>
                  {
                    ["Est et in pharetra magna adipiscing ornare aliquam.", "Tellus arcu sed consequat ac velit ut eu blandit.", "Ullamcorper ornare in et egestas dolor orci."].map((item, index) => {
                      return <li key={index}>{item}</li>
                    })
                  }
                </ul>
                <button className="border-primary border-2 text-primary rounded-lg py-3 px-7 text-xl w-fit font-semibold hover:bg-primary hover:text-white transition-colors">
                  Sign up now
                </button>
              </div>
              <div>
                <img src={desktop} alt="" className='shadow-[0_0_50px_-12px_rgba(0,0,0,.2)] rounded-2xl' />
              </div>
            </div>
          </div>
        </section>
        <section className='bg-[#FDE68A] py-20'>
          <div className="container">
            <div className="flex items-center justify-between mb-10">
              <h2 className='text-3xl lg:text-4xl 2xl:text-[56px] font-bold'>Because they love us</h2>
              <div className="flex gap-4">
                <img src={leftArrow} alt="" />
                <img src={rightArrow} alt="" />
              </div>
            </div>
            <Swiper
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {
                [
                  {
                    logo: tes1,
                    des: " Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
                    userImg: user1,
                    name: "Hellen Jummy",
                    pos: "Team Lead"
                  },
                  {
                    logo: tes2,
                    des: " Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
                    userImg: user2,
                    name: "Hellena John",
                    pos: "Co-founder"
                  },
                  {
                    logo: tes3,
                    des: " Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
                    userImg: user3,
                    name: "David Oshodi",
                    pos: "Manager"
                  },
                  {
                    logo: tes1,
                    des: " Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
                    userImg: user4,
                    name: "Hellen Jummy",
                    pos: "Team Lead"
                  },
                ].map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="flex flex-col gap-10 bg-white rounded-2xl shadow-[0_10px_15px_-3px_rgba(0,0,0,.1)] p-8 mb-4">
                        <div>
                          <img src={item.logo} alt="" />
                        </div>
                        <p className='text-2xl'>
                          {item.des}
                        </p>
                        <div className="flex items-center gap-3">
                          <img src={item.userImg} alt="" />
                          <div>
                            <h5 className='text-lg'>{item.name}</h5>
                            <h6 className='text-[#475569]'>{item.pos}</h6>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
        </section>
        <section className='py-20'>
          <div className="container">
            <h2 className='text-3xl lg:text-4xl 2xl:text-[56px] font-bold mb-8'>Grow your collection</h2>
            <p className='text-lg'>
              Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
              Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.
            </p>
          </div>
          <div className="container mt-20">
            <div className="flex flex-col lg:flex-row lg:items-start">
              <ul className='grid grid-cols-2 lg:grid-cols-1 gap-4 shrink-0'>
                <li>
                  <a href="#" className='flex items-center gap-4 text-xl p-4 bg-white group transition-colors rounded-lg shadow-[0_4px_6px_-1px_rgba(0,0,0,.1)]'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 16.5C11.2879 16.5 12.0682 16.3448 12.7961 16.0433C13.5241 15.7418 14.1855 15.2998 14.7427 14.7427C15.2998 14.1855 15.7418 13.5241 16.0433 12.7961C16.3448 12.0682 16.5 11.2879 16.5 10.5C16.5 9.71208 16.3448 8.93187 16.0433 8.20391C15.7418 7.47596 15.2998 6.81453 14.7427 6.25737C14.1855 5.70022 13.5241 5.25827 12.7961 4.95674C12.0682 4.65521 11.2879 4.50002 10.5 4.50002C8.90872 4.50002 7.38259 5.13216 6.25737 6.25737C5.13216 7.38259 4.50002 8.90872 4.50002 10.5C4.50002 12.0913 5.13216 13.6174 6.25737 14.7427C7.38259 15.8679 8.90872 16.5 10.5 16.5ZM16.82 15.406L20.4 18.986C20.4955 19.0783 20.5716 19.1887 20.6239 19.3108C20.6762 19.4328 20.7037 19.564 20.7048 19.6968C20.7058 19.8296 20.6804 19.9613 20.63 20.0841C20.5797 20.207 20.5053 20.3186 20.4114 20.4124C20.3174 20.5062 20.2057 20.5804 20.0828 20.6306C19.9599 20.6808 19.8282 20.706 19.6954 20.7048C19.5626 20.7035 19.4314 20.6758 19.3095 20.6233C19.1875 20.5708 19.0772 20.4946 18.985 20.399L15.405 16.819C13.7975 18.0669 11.7748 18.6552 9.74877 18.4642C7.72273 18.2732 5.84562 17.3173 4.49957 15.7911C3.15351 14.2648 2.4397 12.283 2.50344 10.2489C2.56718 8.21492 3.40368 6.28164 4.84266 4.84266C6.28164 3.40368 8.21492 2.56718 10.2489 2.50344C12.283 2.4397 14.2648 3.15351 15.7911 4.49957C17.3173 5.84562 18.2732 7.72273 18.4642 9.74877C18.6552 11.7748 18.0669 13.7975 16.819 15.405L16.82 15.406Z" fill="#0F172A" />
                    </svg>
                    <span>Bibendum tellus</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.586 5.65692L6.636 1.70692C6.45384 1.51832 6.35305 1.26571 6.35533 1.00352C6.3576 0.741321 6.46277 0.490508 6.64818 0.3051C6.83359 0.119692 7.0844 0.0145233 7.3466 0.0122448C7.6088 0.00996641 7.8614 0.110761 8.05 0.292919L13.707 5.94992C13.8002 6.04257 13.8741 6.15273 13.9246 6.27407C13.9751 6.3954 14.001 6.52551 14.001 6.65692C14.001 6.78833 13.9751 6.91844 13.9246 7.03977C13.8741 7.16111 13.8002 7.27127 13.707 7.36392L8.05 13.0209C7.95775 13.1164 7.84741 13.1926 7.7254 13.245C7.6034 13.2974 7.47218 13.325 7.3394 13.3262C7.20662 13.3273 7.07494 13.302 6.95205 13.2517C6.82915 13.2015 6.7175 13.1272 6.62361 13.0333C6.52971 12.9394 6.45546 12.8278 6.40518 12.7049C6.3549 12.582 6.3296 12.4503 6.33075 12.3175C6.3319 12.1847 6.35949 12.0535 6.4119 11.9315C6.46431 11.8095 6.54049 11.6992 6.636 11.6069L10.586 7.65692H1C0.734784 7.65692 0.48043 7.55156 0.292893 7.36403C0.105357 7.17649 0 6.92214 0 6.65692C0 6.3917 0.105357 6.13735 0.292893 5.94981C0.48043 5.76228 0.734784 5.65692 1 5.65692H10.586Z" fill="#0F172A" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className='flex items-center gap-4 text-xl p-4 hover:bg-white group transition-colors rounded-lg hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,.1)] w-fit'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 6.386V10C6.00014 11.2854 6.27502 12.556 6.80622 13.7265C7.33741 14.897 8.11266 15.9405 9.08 16.787L12 19.342L14.92 16.787C15.8874 15.9405 16.6627 14.8971 17.1939 13.7265C17.7251 12.556 17.9999 11.2854 18 10V6.386L12 4.136L6 6.386ZM4.649 4.756L12 2L19.351 4.757C19.5416 4.82844 19.7058 4.95632 19.8218 5.12357C19.9377 5.29082 19.9999 5.48948 20 5.693V10C20 13.177 18.628 16.2 16.237 18.293L12 22L7.763 18.293C6.58096 17.2587 5.63369 15.9837 4.98469 14.5534C4.33569 13.1231 3.99996 11.5706 4 10V5.693C4.00008 5.48948 4.06225 5.29082 4.17822 5.12357C4.29419 4.95632 4.45843 4.82844 4.649 4.757V4.756ZM10.939 12.268L14.475 8.732C14.6636 8.54984 14.9162 8.44905 15.1784 8.45133C15.4406 8.4536 15.6914 8.55877 15.8768 8.74418C16.0622 8.92959 16.1674 9.1804 16.1697 9.4426C16.172 9.7048 16.0712 9.9574 15.889 10.146L11.646 14.39C11.4585 14.5775 11.2042 14.6828 10.939 14.6828C10.6738 14.6828 10.4195 14.5775 10.232 14.39L8.111 12.269C7.92884 12.0804 7.82805 11.8278 7.83033 11.5656C7.8326 11.3034 7.93777 11.0526 8.12318 10.8672C8.30859 10.6818 8.5594 10.5766 8.8216 10.5743C9.0838 10.572 9.3364 10.6728 9.525 10.855L10.939 12.269V12.268Z" fill="#0F172A" />
                    </svg>
                    <span>Cras eget</span>
                    <svg className='opacity-0 group-hover:opacity-100 transition-opacity' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.586 5.65692L6.636 1.70692C6.45384 1.51832 6.35305 1.26571 6.35533 1.00352C6.3576 0.741321 6.46277 0.490508 6.64818 0.3051C6.83359 0.119692 7.0844 0.0145233 7.3466 0.0122448C7.6088 0.00996641 7.8614 0.110761 8.05 0.292919L13.707 5.94992C13.8002 6.04257 13.8741 6.15273 13.9246 6.27407C13.9751 6.3954 14.001 6.52551 14.001 6.65692C14.001 6.78833 13.9751 6.91844 13.9246 7.03977C13.8741 7.16111 13.8002 7.27127 13.707 7.36392L8.05 13.0209C7.95775 13.1164 7.84741 13.1926 7.7254 13.245C7.6034 13.2974 7.47218 13.325 7.3394 13.3262C7.20662 13.3273 7.07494 13.302 6.95205 13.2517C6.82915 13.2015 6.7175 13.1272 6.62361 13.0333C6.52971 12.9394 6.45546 12.8278 6.40518 12.7049C6.3549 12.582 6.3296 12.4503 6.33075 12.3175C6.3319 12.1847 6.35949 12.0535 6.4119 11.9315C6.46431 11.8095 6.54049 11.6992 6.636 11.6069L10.586 7.65692H1C0.734784 7.65692 0.48043 7.55156 0.292893 7.36403C0.105357 7.17649 0 6.92214 0 6.65692C0 6.3917 0.105357 6.13735 0.292893 5.94981C0.48043 5.76228 0.734784 5.65692 1 5.65692H10.586Z" fill="#0F172A" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className='flex items-center gap-4 text-xl p-4 hover:bg-white group transition-colors rounded-lg hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,.1)] w-fit'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.3081 15.471L12.3841 14.407L13.3111 13.878C14.2011 13.3622 15.0189 12.7307 15.7431 12C18.3831 9.35898 19.1891 6.25398 18.2181 5.28198C17.2461 4.31198 14.1411 5.11598 11.5001 7.75698C10.7401 8.51698 10.1031 9.34698 9.62205 10.189L9.09205 11.116L8.02905 11.192C7.15671 11.2532 6.32893 11.6004 5.67405 12.18C6.92401 12.73 8.06043 13.5083 9.02505 14.475C10.0051 15.455 10.7771 16.592 11.3201 17.826C11.8996 17.1711 12.2469 16.3433 12.3081 15.471ZM9.33505 18.3C9.13394 18.5734 8.9123 18.8312 8.67205 19.071C7.50005 20.243 5.73205 20.596 3.36805 20.131C2.90405 17.768 3.25805 16 4.42805 14.828C4.67605 14.582 4.93405 14.36 5.20005 14.165C4.38026 13.7645 3.50419 13.4914 2.60205 13.355C2.89249 12.4433 3.39766 11.6147 4.07505 10.939C5.09345 9.91804 6.44661 9.2997 7.88505 9.19798C8.48884 8.15316 9.22863 7.19311 10.0851 6.34298C13.4051 3.02298 17.6791 1.91598 19.6321 3.86798C21.5841 5.82098 20.476 10.095 17.1571 13.414C16.3069 14.2704 15.3469 15.0102 14.3021 15.614C14.2003 17.0524 13.582 18.4056 12.5611 19.424C11.8859 20.1023 11.0571 20.6079 10.1451 20.898C10.0087 19.9958 9.73554 19.1198 9.33505 18.3ZM7.61005 15.89C7.44903 15.7286 7.26747 15.589 7.07005 15.475C6.63805 15.625 6.13005 15.955 5.66505 16.419C5.44605 16.639 5.17805 17.378 5.17505 18.324C6.12105 18.321 6.86305 18.05 7.08005 17.834C7.54505 17.368 7.87505 16.861 8.02405 16.429C7.9103 16.2316 7.77111 16.0501 7.61005 15.889V15.89ZM15.3881 8.10998C15.2904 8.01825 15.2121 7.90783 15.158 7.78527C15.1038 7.66271 15.0748 7.53052 15.0727 7.39654C15.0706 7.26256 15.0955 7.12953 15.1458 7.00535C15.1962 6.88117 15.271 6.76837 15.3657 6.67365C15.4605 6.57894 15.5734 6.50424 15.6976 6.45399C15.8218 6.40374 15.9549 6.37897 16.0888 6.38114C16.2228 6.38332 16.355 6.4124 16.4775 6.46665C16.6 6.52091 16.7104 6.59923 16.8021 6.69698C16.9745 6.88714 17.0672 7.13633 17.0609 7.39295C17.0547 7.64957 16.95 7.89397 16.7686 8.07555C16.5871 8.25712 16.3428 8.36197 16.0862 8.36838C15.8296 8.37479 15.5803 8.28227 15.3901 8.10998H15.3881Z" fill="#0F172A" />
                    </svg>
                    <span>Dolor pharetra</span>
                    <svg className='opacity-0 group-hover:opacity-100 transition-opacity' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.586 5.65692L6.636 1.70692C6.45384 1.51832 6.35305 1.26571 6.35533 1.00352C6.3576 0.741321 6.46277 0.490508 6.64818 0.3051C6.83359 0.119692 7.0844 0.0145233 7.3466 0.0122448C7.6088 0.00996641 7.8614 0.110761 8.05 0.292919L13.707 5.94992C13.8002 6.04257 13.8741 6.15273 13.9246 6.27407C13.9751 6.3954 14.001 6.52551 14.001 6.65692C14.001 6.78833 13.9751 6.91844 13.9246 7.03977C13.8741 7.16111 13.8002 7.27127 13.707 7.36392L8.05 13.0209C7.95775 13.1164 7.84741 13.1926 7.7254 13.245C7.6034 13.2974 7.47218 13.325 7.3394 13.3262C7.20662 13.3273 7.07494 13.302 6.95205 13.2517C6.82915 13.2015 6.7175 13.1272 6.62361 13.0333C6.52971 12.9394 6.45546 12.8278 6.40518 12.7049C6.3549 12.582 6.3296 12.4503 6.33075 12.3175C6.3319 12.1847 6.35949 12.0535 6.4119 11.9315C6.46431 11.8095 6.54049 11.6992 6.636 11.6069L10.586 7.65692H1C0.734784 7.65692 0.48043 7.55156 0.292893 7.36403C0.105357 7.17649 0 6.92214 0 6.65692C0 6.3917 0.105357 6.13735 0.292893 5.94981C0.48043 5.76228 0.734784 5.65692 1 5.65692H10.586Z" fill="#0F172A" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className='flex items-center gap-4 text-xl p-4 hover:bg-white group transition-colors rounded-lg hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,.1)] w-fit'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 5C4.73478 5 4.48043 5.10536 4.29289 5.29289C4.10536 5.48043 4 5.73478 4 6V15C4 15.2652 4.10536 15.5196 4.29289 15.7071C4.48043 15.8946 4.73478 16 5 16H19C19.2652 16 19.5196 15.8946 19.7071 15.7071C19.8946 15.5196 20 15.2652 20 15V6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5H5ZM5 3H19C19.7956 3 20.5587 3.31607 21.1213 3.87868C21.6839 4.44129 22 5.20435 22 6V15C22 15.7956 21.6839 16.5587 21.1213 17.1213C20.5587 17.6839 19.7956 18 19 18H5C4.20435 18 3.44129 17.6839 2.87868 17.1213C2.31607 16.5587 2 15.7956 2 15V6C2 5.20435 2.31607 4.44129 2.87868 3.87868C3.44129 3.31607 4.20435 3 5 3V3ZM9 19H15C15.2652 19 15.5196 19.1054 15.7071 19.2929C15.8946 19.4804 16 19.7348 16 20C16 20.2652 15.8946 20.5196 15.7071 20.7071C15.5196 20.8946 15.2652 21 15 21H9C8.73478 21 8.48043 20.8946 8.29289 20.7071C8.10536 20.5196 8 20.2652 8 20C8 19.7348 8.10536 19.4804 8.29289 19.2929C8.48043 19.1054 8.73478 19 9 19Z" fill="#0F172A" />
                    </svg>
                    <span>Amet, fringilla</span>
                    <svg className='opacity-0 group-hover:opacity-100 transition-opacity' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.586 5.65692L6.636 1.70692C6.45384 1.51832 6.35305 1.26571 6.35533 1.00352C6.3576 0.741321 6.46277 0.490508 6.64818 0.3051C6.83359 0.119692 7.0844 0.0145233 7.3466 0.0122448C7.6088 0.00996641 7.8614 0.110761 8.05 0.292919L13.707 5.94992C13.8002 6.04257 13.8741 6.15273 13.9246 6.27407C13.9751 6.3954 14.001 6.52551 14.001 6.65692C14.001 6.78833 13.9751 6.91844 13.9246 7.03977C13.8741 7.16111 13.8002 7.27127 13.707 7.36392L8.05 13.0209C7.95775 13.1164 7.84741 13.1926 7.7254 13.245C7.6034 13.2974 7.47218 13.325 7.3394 13.3262C7.20662 13.3273 7.07494 13.302 6.95205 13.2517C6.82915 13.2015 6.7175 13.1272 6.62361 13.0333C6.52971 12.9394 6.45546 12.8278 6.40518 12.7049C6.3549 12.582 6.3296 12.4503 6.33075 12.3175C6.3319 12.1847 6.35949 12.0535 6.4119 11.9315C6.46431 11.8095 6.54049 11.6992 6.636 11.6069L10.586 7.65692H1C0.734784 7.65692 0.48043 7.55156 0.292893 7.36403C0.105357 7.17649 0 6.92214 0 6.65692C0 6.3917 0.105357 6.13735 0.292893 5.94981C0.48043 5.76228 0.734784 5.65692 1 5.65692H10.586Z" fill="#0F172A" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className='flex items-center gap-4 text-xl p-4 hover:bg-white group transition-colors rounded-lg hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,.1)] w-fit'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 21.8C5.436 20.873 2 16.838 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 16.838 18.564 20.873 14 21.8V19.748C15.8853 19.2612 17.5284 18.1035 18.6212 16.492C19.714 14.8804 20.1816 12.9256 19.9362 10.994C19.6909 9.06237 18.7495 7.28653 17.2885 5.99936C15.8275 4.71218 13.9471 4.00203 12 4.00203C10.0529 4.00203 8.17255 4.71218 6.71153 5.99936C5.25052 7.28653 4.30911 9.06237 4.06376 10.994C3.81841 12.9256 4.28597 14.8804 5.3788 16.492C6.47162 18.1035 8.11468 19.2612 10 19.748V21.8ZM10 17.659C8.66557 17.1872 7.54089 16.2589 6.82474 15.038C6.10858 13.8172 5.84707 12.3825 6.08641 10.9875C6.32575 9.59254 7.05054 8.32707 8.13268 7.41479C9.21482 6.50251 10.5846 6.00215 12 6.00215C13.4154 6.00215 14.7852 6.50251 15.8673 7.41479C16.9495 8.32707 17.6742 9.59254 17.9136 10.9875C18.1529 12.3825 17.8914 13.8172 17.1753 15.038C16.4591 16.2589 15.3344 17.1872 14 17.659V15.465C14.7626 15.0247 15.3586 14.3451 15.6955 13.5316C16.0325 12.7181 16.0916 11.8162 15.8637 10.9656C15.6358 10.1151 15.1336 9.36352 14.435 8.82749C13.7365 8.29145 12.8805 8.0009 12 8.0009C11.1195 8.0009 10.2635 8.29145 9.56495 8.82749C8.86638 9.36352 8.3642 10.1151 8.1363 10.9656C7.9084 11.8162 7.96751 12.7181 8.30448 13.5316C8.64145 14.3451 9.23743 15.0247 10 15.465V17.659ZM13 13.732V22H11V13.732C10.6187 13.5119 10.3207 13.1721 10.1522 12.7653C9.98376 12.3586 9.9542 11.9076 10.0681 11.4823C10.1821 11.057 10.4332 10.6813 10.7825 10.4132C11.1318 10.1452 11.5597 9.99995 12 9.99995C12.4403 9.99995 12.8682 10.1452 13.2175 10.4132C13.5668 10.6813 13.8179 11.057 13.9319 11.4823C14.0458 11.9076 14.0162 12.3586 13.8478 12.7653C13.6793 13.1721 13.3813 13.5119 13 13.732Z" fill="#0F172A" />
                    </svg>
                    <span>Amet nibh</span>
                    <svg className='opacity-0 group-hover:opacity-100 transition-opacity' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.586 5.65692L6.636 1.70692C6.45384 1.51832 6.35305 1.26571 6.35533 1.00352C6.3576 0.741321 6.46277 0.490508 6.64818 0.3051C6.83359 0.119692 7.0844 0.0145233 7.3466 0.0122448C7.6088 0.00996641 7.8614 0.110761 8.05 0.292919L13.707 5.94992C13.8002 6.04257 13.8741 6.15273 13.9246 6.27407C13.9751 6.3954 14.001 6.52551 14.001 6.65692C14.001 6.78833 13.9751 6.91844 13.9246 7.03977C13.8741 7.16111 13.8002 7.27127 13.707 7.36392L8.05 13.0209C7.95775 13.1164 7.84741 13.1926 7.7254 13.245C7.6034 13.2974 7.47218 13.325 7.3394 13.3262C7.20662 13.3273 7.07494 13.302 6.95205 13.2517C6.82915 13.2015 6.7175 13.1272 6.62361 13.0333C6.52971 12.9394 6.45546 12.8278 6.40518 12.7049C6.3549 12.582 6.3296 12.4503 6.33075 12.3175C6.3319 12.1847 6.35949 12.0535 6.4119 11.9315C6.46431 11.8095 6.54049 11.6992 6.636 11.6069L10.586 7.65692H1C0.734784 7.65692 0.48043 7.55156 0.292893 7.36403C0.105357 7.17649 0 6.92214 0 6.65692C0 6.3917 0.105357 6.13735 0.292893 5.94981C0.48043 5.76228 0.734784 5.65692 1 5.65692H10.586Z" fill="#0F172A" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className='flex items-center gap-4 text-xl p-4 hover:bg-white group transition-colors rounded-lg hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,.1)] w-fit'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 16V5C11 4.73478 11.1054 4.48043 11.2929 4.29289C11.4804 4.10536 11.7348 4 12 4C12.2652 4 12.5196 4.10536 12.7071 4.29289C12.8946 4.48043 13 4.73478 13 5V16H14C14.2652 16 14.5196 16.1054 14.7071 16.2929C14.8946 16.4804 15 16.7348 15 17C15 17.2652 14.8946 17.5196 14.7071 17.7071C14.5196 17.8946 14.2652 18 14 18H13V19C13 19.2652 12.8946 19.5196 12.7071 19.7071C12.5196 19.8946 12.2652 20 12 20C11.7348 20 11.4804 19.8946 11.2929 19.7071C11.1054 19.5196 11 19.2652 11 19V18H10C9.73478 18 9.48043 17.8946 9.29289 17.7071C9.10536 17.5196 9 17.2652 9 17C9 16.7348 9.10536 16.4804 9.29289 16.2929C9.48043 16.1054 9.73478 16 10 16H11ZM18 6V5C18 4.73478 18.1054 4.48043 18.2929 4.29289C18.4804 4.10536 18.7348 4 19 4C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V6H21C21.2652 6 21.5196 6.10536 21.7071 6.29289C21.8946 6.48043 22 6.73478 22 7C22 7.26522 21.8946 7.51957 21.7071 7.70711C21.5196 7.89464 21.2652 8 21 8H20V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20C18.7348 20 18.4804 19.8946 18.2929 19.7071C18.1054 19.5196 18 19.2652 18 19V8H17C16.7348 8 16.4804 7.89464 16.2929 7.70711C16.1054 7.51957 16 7.26522 16 7C16 6.73478 16.1054 6.48043 16.2929 6.29289C16.4804 6.10536 16.7348 6 17 6H18ZM6 9H7C7.26522 9 7.51957 9.10536 7.70711 9.29289C7.89464 9.48043 8 9.73478 8 10C8 10.2652 7.89464 10.5196 7.70711 10.7071C7.51957 10.8946 7.26522 11 7 11H6V19C6 19.2652 5.89464 19.5196 5.70711 19.7071C5.51957 19.8946 5.26522 20 5 20C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V11H3C2.73478 11 2.48043 10.8946 2.29289 10.7071C2.10536 10.5196 2 10.2652 2 10C2 9.73478 2.10536 9.48043 2.29289 9.29289C2.48043 9.10536 2.73478 9 3 9H4V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4C5.26522 4 5.51957 4.10536 5.70711 4.29289C5.89464 4.48043 6 4.73478 6 5V9Z" fill="#0F172A" />
                    </svg>
                    <span>Sed velit</span>
                    <svg className='opacity-0 group-hover:opacity-100 transition-opacity' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.586 5.65692L6.636 1.70692C6.45384 1.51832 6.35305 1.26571 6.35533 1.00352C6.3576 0.741321 6.46277 0.490508 6.64818 0.3051C6.83359 0.119692 7.0844 0.0145233 7.3466 0.0122448C7.6088 0.00996641 7.8614 0.110761 8.05 0.292919L13.707 5.94992C13.8002 6.04257 13.8741 6.15273 13.9246 6.27407C13.9751 6.3954 14.001 6.52551 14.001 6.65692C14.001 6.78833 13.9751 6.91844 13.9246 7.03977C13.8741 7.16111 13.8002 7.27127 13.707 7.36392L8.05 13.0209C7.95775 13.1164 7.84741 13.1926 7.7254 13.245C7.6034 13.2974 7.47218 13.325 7.3394 13.3262C7.20662 13.3273 7.07494 13.302 6.95205 13.2517C6.82915 13.2015 6.7175 13.1272 6.62361 13.0333C6.52971 12.9394 6.45546 12.8278 6.40518 12.7049C6.3549 12.582 6.3296 12.4503 6.33075 12.3175C6.3319 12.1847 6.35949 12.0535 6.4119 11.9315C6.46431 11.8095 6.54049 11.6992 6.636 11.6069L10.586 7.65692H1C0.734784 7.65692 0.48043 7.55156 0.292893 7.36403C0.105357 7.17649 0 6.92214 0 6.65692C0 6.3917 0.105357 6.13735 0.292893 5.94981C0.48043 5.76228 0.734784 5.65692 1 5.65692H10.586Z" fill="#0F172A" />
                    </svg>
                  </a>
                </li>
              </ul>
              <div>
                <img src={collection} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className='bg-primary py-20 facts relative'>
          <div className="container">
            <div className="grid place-items-center relative">
              <img src={map} alt="" />
              <h2 className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 font-bold flex flex-col items-center text-white'>
                <span className='text-8xl'>11,658,467</span>
                <span className='text-3xl lg:text-4xl 2xl:text-[56px]'>Shoes Collected</span>
              </h2>
            </div>
          </div>
        </section>
        <section className='py-20 collectors relative'>
          <div className="container">
            <div className="flex items-center justify-between mb-16">
              <h2 className='text-3xl lg:text-4xl 2xl:text-[56px] font-bold'>Articles by Collectors</h2>
              <button className="flex items-center gap-5 text-primary font-semibold">
                More Articles
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.586 5.65692L6.636 1.70692C6.45384 1.51832 6.35305 1.26571 6.35533 1.00352C6.3576 0.741321 6.46277 0.490508 6.64818 0.3051C6.83359 0.119692 7.0844 0.0145233 7.3466 0.0122448C7.6088 0.00996641 7.8614 0.110761 8.05 0.292919L13.707 5.94992C13.8002 6.04257 13.8741 6.15273 13.9246 6.27407C13.9751 6.3954 14.001 6.52551 14.001 6.65692C14.001 6.78833 13.9751 6.91844 13.9246 7.03977C13.8741 7.16111 13.8002 7.27127 13.707 7.36392L8.05 13.0209C7.95775 13.1164 7.84741 13.1926 7.7254 13.245C7.6034 13.2974 7.47218 13.325 7.3394 13.3262C7.20662 13.3273 7.07494 13.302 6.95205 13.2517C6.82915 13.2015 6.7175 13.1272 6.62361 13.0333C6.52971 12.9394 6.45546 12.8278 6.40518 12.7049C6.3549 12.582 6.3296 12.4503 6.33075 12.3175C6.3319 12.1847 6.35949 12.0535 6.4119 11.9315C6.46431 11.8095 6.54049 11.6992 6.636 11.6069L10.586 7.65692H1C0.734784 7.65692 0.48043 7.55156 0.292893 7.36403C0.105357 7.17649 0 6.92214 0 6.65692C0 6.3917 0.105357 6.13735 0.292893 5.94981C0.48043 5.76228 0.734784 5.65692 1 5.65692H10.586Z" fill="#78350F" />
                </svg>
              </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
              {
                [
                  {
                    img: article1,
                    title: "Aliquam tortor nunc",
                    des: "In sed bibendum metus pretium cursus tellus pharetra."
                  },
                  {
                    img: article2,
                    title: "Aliquam tortor nunc",
                    des: "In sed bibendum metus pretium cursus tellus pharetra."
                  },
                  {
                    img: article3,
                    title: "Aliquam tortor nunc",
                    des: "In sed bibendum metus pretium cursus tellus pharetra."
                  },
                  {
                    img: article4,
                    title: "Aliquam tortor nunc",
                    des: "In sed bibendum metus pretium cursus tellus pharetra."
                  },
                ].map((item, index) => {
                  return (
                    <div key={index} className="bg-white rounded-[10px] overflow-hidden shadow-[0_10px_15px_-3px_rgba(0,0,0,.1)] border border-[#E2E8F0]">
                      <div className="image">
                        <img src={item.img} alt="" className='w-full' />
                      </div>
                      <div className="p-8">
                        <h2 className='text-2xl font-semibold'>{item.title}</h2>
                        <p className='mt-4 mb-8 text-lg'>{item.des}</p>
                        <button className="flex items-center gap-5 text-primary font-semibold">
                          Read article
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.586 5.65692L6.636 1.70692C6.45384 1.51832 6.35305 1.26571 6.35533 1.00352C6.3576 0.741321 6.46277 0.490508 6.64818 0.3051C6.83359 0.119692 7.0844 0.0145233 7.3466 0.0122448C7.6088 0.00996641 7.8614 0.110761 8.05 0.292919L13.707 5.94992C13.8002 6.04257 13.8741 6.15273 13.9246 6.27407C13.9751 6.3954 14.001 6.52551 14.001 6.65692C14.001 6.78833 13.9751 6.91844 13.9246 7.03977C13.8741 7.16111 13.8002 7.27127 13.707 7.36392L8.05 13.0209C7.95775 13.1164 7.84741 13.1926 7.7254 13.245C7.6034 13.2974 7.47218 13.325 7.3394 13.3262C7.20662 13.3273 7.07494 13.302 6.95205 13.2517C6.82915 13.2015 6.7175 13.1272 6.62361 13.0333C6.52971 12.9394 6.45546 12.8278 6.40518 12.7049C6.3549 12.582 6.3296 12.4503 6.33075 12.3175C6.3319 12.1847 6.35949 12.0535 6.4119 11.9315C6.46431 11.8095 6.54049 11.6992 6.636 11.6069L10.586 7.65692H1C0.734784 7.65692 0.48043 7.55156 0.292893 7.36403C0.105357 7.17649 0 6.92214 0 6.65692C0 6.3917 0.105357 6.13735 0.292893 5.94981C0.48043 5.76228 0.734784 5.65692 1 5.65692H10.586Z" fill="#78350F" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>
        <section className='py-20 events relative bg-[#FEF3C7]'>
          <div className="container relative">
            <div className="flex items-center justify-between mb-16">
              <h2 className='text-3xl lg:text-4xl 2xl:text-[56px] font-bold'>Amazing events</h2>
              <button className="flex items-center gap-5 text-primary font-semibold">
                Explore Articles
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.586 5.65692L6.636 1.70692C6.45384 1.51832 6.35305 1.26571 6.35533 1.00352C6.3576 0.741321 6.46277 0.490508 6.64818 0.3051C6.83359 0.119692 7.0844 0.0145233 7.3466 0.0122448C7.6088 0.00996641 7.8614 0.110761 8.05 0.292919L13.707 5.94992C13.8002 6.04257 13.8741 6.15273 13.9246 6.27407C13.9751 6.3954 14.001 6.52551 14.001 6.65692C14.001 6.78833 13.9751 6.91844 13.9246 7.03977C13.8741 7.16111 13.8002 7.27127 13.707 7.36392L8.05 13.0209C7.95775 13.1164 7.84741 13.1926 7.7254 13.245C7.6034 13.2974 7.47218 13.325 7.3394 13.3262C7.20662 13.3273 7.07494 13.302 6.95205 13.2517C6.82915 13.2015 6.7175 13.1272 6.62361 13.0333C6.52971 12.9394 6.45546 12.8278 6.40518 12.7049C6.3549 12.582 6.3296 12.4503 6.33075 12.3175C6.3319 12.1847 6.35949 12.0535 6.4119 11.9315C6.46431 11.8095 6.54049 11.6992 6.636 11.6069L10.586 7.65692H1C0.734784 7.65692 0.48043 7.55156 0.292893 7.36403C0.105357 7.17649 0 6.92214 0 6.65692C0 6.3917 0.105357 6.13735 0.292893 5.94981C0.48043 5.76228 0.734784 5.65692 1 5.65692H10.586Z" fill="#78350F" />
                </svg>
              </button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
              {
                [
                  {
                    img: events1,
                    title1: "Ipsum",
                    title2: "Varius est diam"
                  },
                  {
                    img: events2,
                    title1: "Purus",
                    title2: "Diam felis tempus"
                  },
                  {
                    img: events3,
                    title1: "Urna",
                    title2: "Vel nulla varius"
                  },
                  {
                    img: events4,
                    title1: "Vitae",
                    title2: "Amet tristique a"
                  },
                ].map((item, index) => {
                  return (
                    <div key={index} className="card rounded-[10px] overflow-hidden shadow-[0_10px_15px_-3px_rgba(0,0,0,.1)] p-4 bg-white">
                      <p className='text-lg'>{item.title1}</p>
                      <h2 className='text-2xl font-semibold'>{item.title2}</h2>
                      <div className="image my-4">
                        <img src={item.img} alt="" className='w-full' />
                      </div>
                      <button className="flex items-center gap-5 text-primary font-semibold">
                        Buy Tickets
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.586 5.65692L6.636 1.70692C6.45384 1.51832 6.35305 1.26571 6.35533 1.00352C6.3576 0.741321 6.46277 0.490508 6.64818 0.3051C6.83359 0.119692 7.0844 0.0145233 7.3466 0.0122448C7.6088 0.00996641 7.8614 0.110761 8.05 0.292919L13.707 5.94992C13.8002 6.04257 13.8741 6.15273 13.9246 6.27407C13.9751 6.3954 14.001 6.52551 14.001 6.65692C14.001 6.78833 13.9751 6.91844 13.9246 7.03977C13.8741 7.16111 13.8002 7.27127 13.707 7.36392L8.05 13.0209C7.95775 13.1164 7.84741 13.1926 7.7254 13.245C7.6034 13.2974 7.47218 13.325 7.3394 13.3262C7.20662 13.3273 7.07494 13.302 6.95205 13.2517C6.82915 13.2015 6.7175 13.1272 6.62361 13.0333C6.52971 12.9394 6.45546 12.8278 6.40518 12.7049C6.3549 12.582 6.3296 12.4503 6.33075 12.3175C6.3319 12.1847 6.35949 12.0535 6.4119 11.9315C6.46431 11.8095 6.54049 11.6992 6.636 11.6069L10.586 7.65692H1C0.734784 7.65692 0.48043 7.55156 0.292893 7.36403C0.105357 7.17649 0 6.92214 0 6.65692C0 6.3917 0.105357 6.13735 0.292893 5.94981C0.48043 5.76228 0.734784 5.65692 1 5.65692H10.586Z" fill="#78350F" />
                        </svg>
                      </button>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>
        <section className='bg-secondary text-white py-10 lg:py-20'>
          <div className="container">
            <div className="flex items-center justify-between">
              <h2 className='text-3xl lg:text-4xl 2xl:text-[56px] font-bold'>Collect More Sneakers Today</h2>
              <button className='text-2xl font-bold border-2 py-3 px-10 rounded-lg'>Sign up now</button>
            </div>
          </div>
        </section>
      </main>
      <footer className='bg-secondary text-white'>
        <div className="container">
          <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4 py-12 border-y border-[#334155]">
            <ul className='space-y-3 lg:space-y-6'>
              <li className='font-semibold'>
                Product
              </li>
              {
                ["Pricing", "Overview", "Browse", "Accessibility", "Five"].map((item, index) => {
                  return <li key={index}><a href="#">{item}</a></li>
                })
              }
            </ul>
            <ul className='space-y-3 lg:space-y-6'>
              <li className='font-semibold'>
                Solutions
              </li>
              {
                ["Brainstorming", "Ideation", "Wireframing", "Research", "Design"].map((item, index) => {
                  return <li key={index}><a href="#">{item}</a></li>
                })
              }
            </ul>
            <ul className='space-y-3 lg:space-y-6'>
              <li className='font-semibold'>
                Support
              </li>
              {
                ["Contact Us", "Developers", "Documentation", "Integrations", "Reports"].map((item, index) => {
                  return <li key={index}><a href="#">{item}</a></li>
                })
              }
            </ul>
            <ul className='space-y-3 lg:space-y-6'>
              <li className='font-semibold'>
                Get the App
              </li>
              <li>
                <a href="#">
                  <img src={astore} alt="" />
                </a>
              </li>
              <li className='!mt-2'>
                <a href="#">
                  <img src={gplay} alt="" />
                </a>
              </li>
              <li>
                Follow us
              </li>
              <li>
                <ul className="flex gap-4">
                  <li>
                    <a href="#">
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.4785 5.01699H6.8115C4.5215 5.01699 2.6665 6.85199 2.6665 9.11599V14.884C2.6665 17.148 4.5225 18.984 6.8115 18.984H18.4785C20.7685 18.984 22.6235 17.148 22.6235 14.884V9.11599C22.6235 6.85199 20.7675 5.01599 18.4785 5.01599V5.01699ZM15.6755 12.28L10.2185 14.855C10.1852 14.871 10.1484 14.8784 10.1115 14.8763C10.0747 14.8743 10.0389 14.863 10.0075 14.8434C9.9762 14.8239 9.95032 14.7967 9.9323 14.7645C9.91429 14.7322 9.90473 14.6959 9.9045 14.659V9.34999C9.90517 9.31286 9.91522 9.27651 9.93373 9.24432C9.95223 9.21212 9.97858 9.18513 10.0103 9.16587C10.0421 9.1466 10.0782 9.13568 10.1153 9.13413C10.1524 9.13258 10.1893 9.14044 10.2225 9.15699L15.6805 11.892C15.7169 11.9101 15.7474 11.9381 15.7685 11.9728C15.7897 12.0075 15.8006 12.0474 15.8001 12.0881C15.7996 12.1287 15.7876 12.1683 15.7656 12.2025C15.7435 12.2366 15.7123 12.2638 15.6755 12.281V12.28Z" fill="#E2E8F0" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.71249 5.865V8.613H7.69849V11.973H9.71249V21.959H13.8465V11.974H16.6215C16.6215 11.974 16.8815 10.363 17.0075 8.601H13.8635V6.303C13.8635 5.96 14.3135 5.498 14.7595 5.498H17.0135V2H13.9495C9.60949 2 9.71249 5.363 9.71249 5.865Z" fill="#E2E8F0" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.6665 5.90704C21.9169 6.23442 21.123 6.44908 20.3105 6.54404C21.1633 6.04327 21.8046 5.24915 22.1145 4.31004C21.3065 4.78037 20.4252 5.11164 19.5075 5.29004C19.1211 4.88525 18.6562 4.56343 18.1413 4.34422C17.6263 4.12501 17.0721 4.01301 16.5125 4.01504C14.2465 4.01504 12.4095 5.82504 12.4095 8.05504C12.4095 8.37104 12.4455 8.68004 12.5155 8.97504C10.8901 8.89774 9.29862 8.48245 7.84267 7.75568C6.38672 7.02891 5.09826 6.00662 4.0595 4.75404C3.69533 5.36844 3.50392 6.06982 3.5055 6.78404C3.5062 7.45201 3.67333 8.10927 3.99179 8.69644C4.31026 9.2836 4.77001 9.78215 5.3295 10.147C4.67899 10.126 4.04253 9.95237 3.4715 9.64004V9.69004C3.4715 11.648 4.8865 13.281 6.7615 13.653C6.40911 13.7465 6.04609 13.7939 5.6815 13.794C5.4165 13.794 5.1595 13.769 4.9085 13.719C5.17659 14.527 5.68961 15.2314 6.37632 15.7344C7.06303 16.2374 7.88935 16.5141 8.7405 16.526C7.28057 17.6506 5.48832 18.2581 3.6455 18.253C3.3135 18.253 2.9875 18.233 2.6665 18.197C4.54776 19.3877 6.7291 20.0183 8.9555 20.015C16.5025 20.015 20.6285 13.858 20.6285 8.51904L20.6145 7.99604C21.4194 7.42971 22.1146 6.72189 22.6665 5.90704Z" fill="#E2E8F0" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.6835 2H8.6135C7.03666 2.00185 5.52494 2.62914 4.41003 3.74424C3.29513 4.85933 2.66809 6.37115 2.6665 7.948L2.6665 16.018C2.66836 17.5948 3.29565 19.1066 4.41074 20.2215C5.52583 21.3364 7.03766 21.9634 8.6145 21.965H16.6845C18.2614 21.9631 19.7731 21.3359 20.888 20.2208C22.0029 19.1057 22.6299 17.5938 22.6315 16.017V7.947C22.6297 6.37015 22.0024 4.85844 20.8873 3.74353C19.7722 2.62862 18.2604 2.00159 16.6835 2V2ZM20.6235 16.017C20.6235 16.5344 20.5216 17.0468 20.3236 17.5248C20.1256 18.0028 19.8354 18.4371 19.4695 18.803C19.1036 19.1689 18.6693 19.4591 18.1913 19.6571C17.7133 19.8551 17.2009 19.957 16.6835 19.957H8.6135C7.56872 19.9567 6.56683 19.5415 5.82815 18.8026C5.08947 18.0638 4.6745 17.0618 4.6745 16.017V7.947C4.67477 6.90222 5.08999 5.90032 5.82886 5.16165C6.56772 4.42297 7.56972 4.008 8.6145 4.008H16.6845C17.7293 4.00827 18.7312 4.42349 19.4699 5.16235C20.2085 5.90122 20.6235 6.90322 20.6235 7.948V16.018V16.017Z" fill="#E2E8F0" />
                        <path d="M12.6486 6.81897C11.28 6.82109 9.9681 7.36576 9.00047 8.33358C8.03284 9.3014 7.48842 10.6134 7.48657 11.982C7.48816 13.3509 8.03259 14.6633 9.00047 15.6314C9.96835 16.5994 11.2807 17.1441 12.6496 17.146C14.0187 17.1444 15.3312 16.5998 16.2993 15.6317C17.2674 14.6636 17.812 13.3511 17.8136 11.982C17.8115 10.6131 17.2665 9.30085 16.2983 8.33316C15.33 7.36547 14.0175 6.82129 12.6486 6.81997V6.81897ZM12.6486 15.138C11.8118 15.138 11.0093 14.8056 10.4177 14.2139C9.82597 13.6222 9.49357 12.8197 9.49357 11.983C9.49357 11.1462 9.82597 10.3437 10.4177 9.75205C11.0093 9.16037 11.8118 8.82797 12.6486 8.82797C13.4853 8.82797 14.2878 9.16037 14.8795 9.75205C15.4712 10.3437 15.8036 11.1462 15.8036 11.983C15.8036 12.8197 15.4712 13.6222 14.8795 14.2139C14.2878 14.8056 13.4853 15.138 12.6486 15.138Z" fill="#E2E8F0" />
                        <path d="M17.8224 8.09497C18.5056 8.09497 19.0594 7.54115 19.0594 6.85797C19.0594 6.1748 18.5056 5.62097 17.8224 5.62097C17.1393 5.62097 16.5854 6.1748 16.5854 6.85797C16.5854 7.54115 17.1393 8.09497 17.8224 8.09497Z" fill="#E2E8F0" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.6255 13.719V21.098H18.3475V14.213C18.3475 12.483 17.7285 11.303 16.1805 11.303C14.9985 11.303 14.2945 12.099 13.9855 12.868C13.8725 13.143 13.8435 13.526 13.8435 13.911V21.098H9.5635C9.5635 21.098 9.6215 9.438 9.5635 8.229H13.8435V10.053L13.8155 10.095H13.8435V10.053C14.4115 9.178 15.4265 7.927 17.6995 7.927C20.5145 7.927 22.6255 9.767 22.6255 13.719ZM5.0875 2.026C3.6245 2.026 2.6665 2.986 2.6665 4.249C2.6665 5.484 3.5965 6.473 5.0315 6.473H5.0595C6.5525 6.473 7.4795 5.484 7.4795 4.249C7.4535 2.986 6.5535 2.026 5.0885 2.026H5.0875ZM2.9205 21.098H7.1985V8.229H2.9205V21.098Z" fill="#E2E8F0" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="flex items-center justify-between py-9">
            <p>
              <a href="#">Collers</a> @ 2023. All rights reserved.
            </p>
            <ul className='flex gap-8'>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#" className='flex gap-2 items-center'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.252 8C2.08416 8.6534 1.99949 9.32538 2 10C2 10.69 2.088 11.36 2.252 12H5.1C4.96518 10.6701 4.96518 9.32993 5.1 8H2.252ZM3.07 6H5.416C5.682 4.783 6.066 3.693 6.537 2.786C5.08518 3.48542 3.87722 4.60523 3.07 6ZM17.748 8H14.9C15.0348 9.32993 15.0348 10.6701 14.9 12H17.748C18.0847 10.6879 18.0847 9.31208 17.748 8ZM16.93 6C16.1228 4.60523 14.9148 3.48542 13.463 2.786C13.935 3.693 14.318 4.783 14.584 6H16.93ZM7.112 8C7.03708 8.66403 6.99968 9.33176 7 10C7 10.685 7.038 11.355 7.112 12H12.888C13.0386 10.6709 13.0386 9.32908 12.888 8H7.112ZM7.47 6H12.53C12.348 5.2483 12.0855 4.51841 11.747 3.823C11.119 2.568 10.447 2 10 2C9.552 2 8.881 2.568 8.253 3.823C7.938 4.455 7.673 5.19 7.47 6ZM3.07 14C3.87722 15.3948 5.08518 16.5146 6.537 17.214C6.065 16.307 5.682 15.217 5.416 14H3.07ZM16.93 14H14.584C14.318 15.217 13.934 16.307 13.463 17.214C14.9148 16.5146 16.1228 15.3948 16.93 14ZM7.47 14C7.673 14.81 7.938 15.545 8.253 16.177C8.881 17.432 9.553 18 10 18C10.448 18 11.119 17.432 11.747 16.177C12.062 15.545 12.327 14.81 12.53 14H7.47ZM10 20C4.477 20 0 15.523 0 10C0 4.477 4.477 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20Z" fill="#E2E8F0" />
                  </svg>
                  <span>EN</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}