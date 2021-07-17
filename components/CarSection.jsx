import React, { useState } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import Switch from "react-switch";

function Map() {
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 36.778259, lng: -119.417931 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const CarSection = () => {
  const [hl1, setHl1] = useState(false);
  const [hl2, setHl2] = useState(false);

  return (
    <section className='max-w-screen-xl mx-auto flex items-center justify-between px-12 xl:px-0'>
      <div className='w-full grid grid-cols-12 gap-4'>
        <div className='col-span-12 md:col-span-6 lg:col-span-5 bg-primary-gray rounded-lg'>
          <img
            className='w-full flex items-center p-8'
            src='/images/car.png'
            alt='Car'
          />
          <div className='flex justify-between px-12 pb-4'>
            <div className='flex space-x-2'>
              <div className='font-semibold text-lg'>Headlight 1</div>
              <Switch
                className='inline-block'
                onChange={() => setHl1((s) => !s)}
                checked={hl1}
              />
            </div>
            <div className='flex space-x-2'>
              <div className='font-semibold text-lg'>Headlight 2</div>
              <Switch
                className='inline-block'
                onChange={() => setHl2((s) => !s)}
                checked={hl2}
              />
            </div>
          </div>
        </div>
        <div className='col-span-12 md:col-span-6 lg:col-span-7'>
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places&key=${process.env.NEXT_PUBLIC_GMAPS_API_KEY}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div className='h-48 md:w-full md:h-full' />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </div>
    </section>
  );
};

export default CarSection;
