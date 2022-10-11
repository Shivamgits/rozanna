
import React from "react";
import easy from "../images/easy.png"
import calendar from "../images/calendar.png"
import themes from "../images/themes.png"
import "../Styles/Home.css";
const Home = () => {
  return (
    <div className="home">
     <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="text-center mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">The best way to organize your life</h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Organize your tasks, lists and reminders in one easy to use utility. Sync seamlessly across all your devices.</p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
         
          <img src={easy}></img>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Easy to Use</h2>
          <p className="leading-relaxed text-base">Wherever you are, take your to do list with you. Access it on mobile, laptop, desktop, tablet.</p>
         
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
          {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg> */}
          <img src={calendar}></img>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Calender Remainder</h2>
          <p className="leading-relaxed text-base">Keep track of your progress. Add smart reminders so you never forget a thing.</p>
        
        </div>
      </div>
      <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
         <img src={themes}></img>
        </div>
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Multiple Themes</h2>
          <p className="leading-relaxed text-base">Beautiful themes and turbo-charging powers, you’re guaranteed to save time and achieve great things.</p>
         
        </div>
      </div>
    </div>
    <button className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">Sign Up Now</button>
  </div>
</section>
    </div>
  );
};

export default Home;
