import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Card from "./Card.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const nearBy = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1eeFiOGqGmZUo8K9yaw3yDi-YV4vH37a-Nw&usqp=CAU",
    title: "Tequila MockingBird",
    location: "Raja Park , 0.7km",
    time: "Open till 10pm",
  },
  {
    img: "https://etimg.etb2bimg.com/photo/75161189.cms",
    title: "Tequila MockingBird",
    location: "Raja Park , 0.7km",
    time: "Open till 10pm",
  },
  {
    img: "https://images.news18.com/ibnlive/uploads/2021/10/untitled-design-2021-10-19t125503.638-16346283323x2.jpg",
    title: "Tequila MockingBird",
    location: "Raja Park , 0.7km",
    time: "Open till 10pm",
  },
  {
    img: "https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg",
    title: "Tequila MockingBird",
    location: "Raja Park , 0.7km",
    time: "Open till 10pm",
  },
];

const mostPopular = [
  {
    img: "https://resizer.otstatic.com/v2/photos/wide-huge/1/25870110.jpg",
    title: "Tequila MockingBird",
    location: "Raja Park , 0.7km",
    time: "Open till 10pm",
  },
  {
    img: "https://resizer.otstatic.com/v2/photos/wide-large/1/31888463.jpg",
    title: "Tequila MockingBird",
    location: "Raja Park , 0.7km",
    time: "Open till 10pm",
  },
  {
    img: "https://images.adsttc.com/media/images/5e4c/1025/6ee6/7e0b/9d00/0877/large_jpg/feature_-_Main_hall_1.jpg?1582043123",
    title: "Tequila MockingBird",
    location: "Raja Park , 0.7km",
    time: "Open till 10pm",
  },
  {
    img: "https://media-cdn.tripadvisor.com/media/photo-s/22/33/a4/94/caption.jpg",
    title: "Tequila MockingBird",
    location: "Raja Park , 0.7km",
    time: "Open till 10pm",
  },
];

const highRating = [
  {
    img: "https://images.news18.com/ibnlive/uploads/2021/10/untitled-design-2021-10-19t125503.638.jpg",
    title: "Tequila MockingBird",
    location: "Raja Park , 0.7km",
    time: "Open till 10pm",
  },
  {
    img: "https://media-cdn.tripadvisor.com/media/photo-s/27/03/71/88/interior.jpg",
    title: "Tequila MockingBird",
    location: "Raja Park , 0.7km",
    time: "Open till 10pm",
  },
  {
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    title: "Tequila MockingBird",
    location: "Raja Park , 0.7km",
    time: "Open till 10pm",
  },
  {
    img: "https://images.unsplash.com/photo-1552566626-ee081a9ffeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&w=1000&q=80",
    title: "Tequila MockingBird",
    location: "Raja Park , 0.7km",
    time: "Open till 10pm",
  },
];

const cuisines = [
  {
    img: "https://spiritbohemian.com/storage/2020/03/600x400-17-1280x720-1.jpg",
    title: "Tequila MockingBird",
    location: "Raja Park , 0.7km",
    time: "Open till 10pm",
  },
  {
    img: "https://images.chinahighlights.com/allpicture/2021/12/71879439c9ef4d0da835efb6_cut_750x400_39.jpg",
    title: "Tequila MockingBird",
    location: "Raja Park , 0.7km",
    time: "Open till 10pm",
  },
  {
    img: "https://img.traveltriangle.com/blog/wp-content/uploads/2022/10/Famous-Foods-of-Italy.jpg",
    title: "Tequila MockingBird",
    location: "Raja Park , 0.7km",
    time: "Open till 10pm",
  },
  {
    img: "https://img.theculturetrip.com/wp-content/uploads/2017/12/aditya-joshi-uwi48cpw7vo-unsplash.jpg",
    title: "Tequila MockingBird",
    location: "Raja Park , 0.7km",
    time: "Open till 10pm",
  },
];

const cloudEatery = [
  {
    img: "https://images.moneycontrol.com/static-mcnews/2022/06/AKINA-770x433.jpg?impolicy=website&width=770&height=431",
    title: "Tequila MockingBird",
    location: "Raja Park , 0.7km",
    time: "Open till 10pm",
  },
  {
    img: "https://www.akinarestaurant.com/images/KTS_6163-HDR-min.jpg",
    title: "Tequila MockingBird",
    location: "Raja Park , 0.7km",
    time: "Open till 10pm",
  },

  {
    img: "https://www.posist.com/restaurant-times/wp-content/uploads/2016/04/traits-successful-restaurant-business.jpg",
    title: "Tequila MockingBird",
    location: "Raja Park , 0.7km",
    time: "Open till 10pm",
  },
  {
    img: "https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg",
    title: "Tequila MockingBird",
    location: "Raja Park , 0.7km",
    time: "Open till 10pm",
  },
];

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const Dashboard = () => {
  return (
    <>
      {/* <-------------------------------Header-------------------------------> */}
      <Header />

      {/* <-------------------------------Middle Section & Footer-------------------------------> */}
      <div>
        <div className="pb-48">
          <div className="absolute left-0 right-0 top-24 pb-36 pt-2 ml-0 bg-slate-200 grid grid-flow-col gap-4 justify-left">
            <div>
              <img
                className="relative left-0 ml-0 h-64 float-left rounded-lg pr-20 pt-24"
                src="https://assets1.cbsnewsstatic.com/hub/i/2015/07/01/0b059f60-344d-4ada-baae-e683aff3650a/istock000044051102large.jpg"
              />
            </div>
            <div>
              <h1 className="font-bold pt-24 text-4xl font-mono">
                Be the fastest in booking your table
              </h1>
              <h1 className="font-bold text-4xl font-mono text-orange-600 pb-4">
                faster
              </h1>
              <p className="text-sm pb-24">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque nec justo at enim tempus bibendum sit amet sed
                velit. Sed hendrerit mattis rutrum.{" "}
              </p>
              <button
                type="button"
                class="mb-12 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
              >
                Get Started
              </button>
            </div>
            <div>
              <img
                className="relative right-0 pt-24 pr-34 mr-30 h-64 float-right rounded-full"
                src="https://cdn2.hubspot.net/hubfs/439788/Blog/Featured%20Images/Best%20Restaurant%20Website%20Design%20Inspirations.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* <-------------------------------Middle Section 2-------------------------------> */}

        <div className="bg-rose-50 pt-12 absolute left-0 right-0 ml-0 justify-left">
          <div className="relative left-16 right-24 mt-2 rounded-md shadow-sm">
            {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-7"></div> */}
            <input
              type="text"
              name="Location"
              id="location"
              className="ml-48 block pb-2 pt-2 rounded-lg border-0 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Your Location or PinCode"
            />
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 mr-96 inline-block rounded-full px-1 py-1 ring-1 ring-inset ring-orange-900 bg-orange-200 hover:bg-rose-50 float-right"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                />
              </svg>
              <span className="inline-block mr-56 rounded-lg border-orange-700 pb-16"></span>
            </div>
          </div>

          {/* nearby */}
          <div className="bg-rose-50 relative left-0 right-0 bg-white-100">
            <div className="left-0 right-0 mx-auto max-w-7xl sm:px-2 lg:px-2">
              <div className="mx-auto max-w-2xl py-2 sm:py-4 lg:max-w-none lg:py-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Nearby Restraunts
                </h2>
                <p className="">
                  <Link className="float-right text-orange-300" to="#">
                    <u>View More</u>
                  </Link>
                </p>
                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
                  {nearBy.map((user) => (
                    <Card img= {user.img}  title={user.title} location={user.location} time={user.time} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Most Popular */}
          <div className="bg-rose-50 relative left-0 right-0 bg-white-100">
            <div className="left-0 right-0 mx-auto max-w-7xl sm:px-2 lg:px-2">
              <div className="mx-auto max-w-2xl py-2 sm:py-4 lg:max-w-none lg:py-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Most Popular
                </h2>
                <p className="">
                  <Link className="float-right text-orange-300" to="#">
                    <u>View More</u>
                  </Link>
                </p>
                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
                  {mostPopular.map((user) => (
                    <div className="px-2 py-2 hover:border-2 border-black">
                      <div className="group relative">
                        <div className="relative max-h-full max-w-7xl overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                          <img
                            className="h-full w-full object-cover object-center"
                            src={user.img}
                            alt="Restraunt Image"
                          />
                        </div>
                        <h3 className="mt-6 text-sm text-gray-500">
                          {user.title}
                        </h3>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 inline-block"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                          </svg>
                          <span> </span>
                          <span className="text-base font-semibold text-gray-900">
                            {user.location}
                          </span>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 inline-block"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span> </span>
                          <span className="text-base font-semibold text-gray-900">
                            {user.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* hight rated */}
          <div className="bg-rose-50 relative left-0 right-0 bg-white-100">
            <div className="left-0 right-0 mx-auto max-w-7xl sm:px-2 lg:px-2">
              <div className="mx-auto max-w-2xl py-2 sm:py-4 lg:max-w-none lg:py-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  High Rating
                </h2>
                <p className="">
                  <Link className="float-right text-orange-300" to="#">
                    <u>View More</u>
                  </Link>
                </p>
                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
                  {highRating.map((user) => (
                    <Card img= {user.img}  title={user.title} location={user.location} time={user.time} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* cusine */}
          <div className="bg-rose-50 relative left-0 right-0 bg-white-100">
            <div className="left-0 right-0 mx-auto max-w-7xl sm:px-2 lg:px-2">
              <div className="mx-auto max-w-2xl py-2 sm:py-4 lg:max-w-none lg:py-6">
                <h2 className="text-2xl font-bold text-gray-900">Cuisines</h2>
                <p className="">
                  <Link className="float-right text-orange-300" to="#">
                    <u>View More</u>
                  </Link>
                </p>
                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
                  {cuisines.map((user) => (
                    <Card img= {user.img}  title={user.title} location={user.location} time={user.time} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Cloud Eatery */}
          <div className="mb-96 bg-rose-50 relative left-0 right-0 bg-white-100">
            <div className="left-0 right-0 mx-auto max-w-7xl sm:px-2 lg:px-2">
              <div className="mx-auto max-w-2xl py-2 sm:py-4 lg:max-w-none lg:py-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Cloud Eatery
                </h2>
                <p className="">
                  <Link className="float-right text-orange-300" to="#">
                    <u>View More</u>
                  </Link>
                </p>
                <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
                  {cloudEatery.map((user) => (
                    <Card img= {user.img}  title={user.title} location={user.location} time={user.time} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* <--------------------------- FOOTER ---------------------------> */}
          <Footer />
        </div>
      </div>
      
    </>
  );
};

export default Dashboard;
