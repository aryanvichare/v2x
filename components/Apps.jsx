import React from "react";
import {
  Car,
  Music,
  Fan,
  Voice,
  Share,
  Location,
  Settings,
} from "./icons/icons";

const Apps = () => {
  return (
    <section className='max-w-screen-xl mx-auto flex items-center justify-between pt-8 px-12 xl:px-0'>
      <div className='w-full bg-primary-black rounded-lg px-12 py-8'>
        <div className='flex flex-row flex-wrap items-center justify-between'>
          <div className='cursor-pointer p-2 transition-all duration-100 ease-in-out hover:bg-primary-light-gray rounded-lg'>
            <Car />
          </div>
          <div className='p-2 bg-primary-light-gray rounded-lg'>
            <Music />
          </div>
          <div className='p-2 bg-primary-light-gray rounded-lg'>
            <Fan />
          </div>
          <div className='cursor-pointer p-2 transition-all duration-100 ease-in-out hover:bg-primary-light-gray rounded-lg'>
            <Voice />
          </div>
          <div className='cursor-pointer p-2 transition-all duration-100 ease-in-out hover:bg-primary-light-gray rounded-lg'>
            <Share />
          </div>
          <div className='p-2 bg-primary-light-gray rounded-lg'>
            <Location />
          </div>
          <div className='p-2 bg-primary-light-gray rounded-lg'>
            <Settings />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apps;
