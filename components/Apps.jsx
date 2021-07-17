import React, { useState } from "react";
import {
  Car,
  Music,
  Fan,
  Voice,
  Share,
  Location,
  Settings,
} from "./icons/icons";
import clsx from "clsx";

const AppWrapper = ({ initialSelectionState, children }) => {
  const [selected, setSelected] = useState(initialSelectionState);

  return (
    <div
      onClick={() => setSelected((s) => !s)}
      className={clsx(
        "cursor-pointer p-2 transition-all duration-100 ease-in-out hover:-translate-y-1 rounded-lg",
        selected && "bg-primary-light-gray"
      )}>
      {children}
    </div>
  );
};

const Apps = () => {
  return (
    <section className='max-w-screen-xl mx-auto flex items-center justify-between pt-8 px-12 xl:px-0'>
      <div className='w-full bg-primary-black rounded-lg px-12 py-8'>
        <div className='flex flex-row flex-wrap items-center justify-between'>
          <AppWrapper initialSelectionState={false}>
            <Car />
          </AppWrapper>
          <AppWrapper initialSelectionState={true}>
            <Music />
          </AppWrapper>
          <AppWrapper initialSelectionState={true}>
            <Fan />
          </AppWrapper>
          <AppWrapper initialSelectionState={false}>
            <Voice />
          </AppWrapper>
          <AppWrapper initialSelectionState={false}>
            <Share />
          </AppWrapper>
          <AppWrapper initialSelectionState={true}>
            <Location />
          </AppWrapper>
          <AppWrapper initialSelectionState={true}>
            <Settings />
          </AppWrapper>
        </div>
      </div>
    </section>
  );
};

export default Apps;
