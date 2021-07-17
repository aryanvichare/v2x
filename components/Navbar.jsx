import React from "react";
import moment from "moment";

const Navbar = () => {
  return (
    <nav className='h-20 max-w-screen-xl mx-auto flex items-center justify-between py-12 px-12 xl:px-0 mb-16'>
      <div className='flex items-center'>
        <svg
          className='h-6 w-6'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2.5}
            d='M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0'
          />
        </svg>
        <h1 className='text-2xl ml-4'>VoLTE</h1>
      </div>
      <img className='w-28' src='/images/ford.png' alt='Ford Logo' />
      <div className='flex items-center space-x-4'>
        <div className='flex justify-center items-center'>
          <svg
            width='39'
            height='33'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M13.792 4.494a1.12 1.12 0 001.12-1.12V1.12a1.12 1.12 0 10-2.24 0v2.255c0 .618.501 1.12 1.12 1.12zM3.633 8.593L1.68 7.466a1.12 1.12 0 10-1.12 1.94l1.953 1.127a1.12 1.12 0 101.12-1.94zM2.513 20.97L.56 22.098a1.12 1.12 0 001.12 1.94l1.953-1.128a1.12 1.12 0 10-1.12-1.94zM25.07 10.533l1.953-1.128a1.12 1.12 0 00-1.12-1.94L23.95 8.594a1.12 1.12 0 101.12 1.94zM29.779 17.341a8.418 8.418 0 00-7.812-5.247c-1.402-3.121-4.539-5.3-8.176-5.3-4.94 0-8.958 4.018-8.958 8.957a8.958 8.958 0 004.145 7.551c-2.655 4.195.364 9.694 5.33 9.694 17.62-.018 16.656.045 16.962-.05a7.839 7.839 0 006.952-7.788c0-4.6-3.93-8.17-8.443-7.817zm-22.706-1.59a6.726 6.726 0 016.718-6.718 6.721 6.721 0 015.839 3.4 8.399 8.399 0 00-6.035 7.974 6.203 6.203 0 00-3.064 1.216 6.723 6.723 0 01-3.458-5.872zm23.774 14.986c-.399.033-10.56.014-16.538.02-3.692 0-5.492-4.577-2.744-7.086a4.03 4.03 0 013.119-1.045 1.12 1.12 0 001.21-1.27c-.52-3.706 2.35-7.023 6.098-7.023a6.169 6.169 0 015.943 4.54 1.12 1.12 0 001.308.802c3.49-.722 6.739 1.946 6.739 5.483 0 2.893-2.256 5.344-5.135 5.58z'
              fill='#2B2B2B'
            />
          </svg>
          <h2 className='font-medium text-2xl mt-1 ml-2'>75°F</h2>
        </div>
        <div className='flex justify-center items-center'>
          <h2 className='font-medium text-2xl mt-1 ml-2 uppercase'>
            {moment(new Date().getTime()).format("h:mm a")}
          </h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
