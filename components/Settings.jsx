import React, { useState } from "react";
import clsx from "clsx";
import { sendCustomToast } from "@/utils/sendToast";

const Settings = () => {
  const [temperature, setTemperature] = useState(54);
  const [speed, setSpeed] = useState(2);
  const [chillMode, setChillMode] = useState(1); // binary

  return (
    <div className='bg-primary-gray rounded-lg p-8'>
      <div className='flex flex-col md:flex-row justify-start items-start space-y-8 md:space-x-16 md:space-y-0'>
        <div>
          <h3 className='font-semibold text-2xl'>Temperature</h3>
          <div className='mt-2'>
            <div
              onClick={() => setTemperature((t) => t + 1)}
              className='select-none cursor-pointer inline-block text-lg text-center bg-primary-black rounded-tl-lg rounded-bl-lg p-2 w-12 h-full text-white'>
              +
            </div>
            <div className='inline-block text-center text-lg bg-primary-black text-white w-12 h-full py-2'>
              {temperature} °F
            </div>
            <div
              onClick={() => setTemperature((t) => t - 1)}
              className='select-none cursor-pointer inline-block text-lg text-center bg-primary-black rounded-tr-lg p-2 rounded-br-lg w-12 h-full text-white'>
              -
            </div>
          </div>
        </div>
        <div>
          <h3 className='font-semibold text-2xl'>Speed</h3>
          <div className='mt-2'>
            <div
              onClick={() => {
                if (speed !== 1) {
                  setSpeed(1);
                  sendCustomToast({
                    message: "🐎 Speed 1 Mode Activated",
                    bgColor: "#E879F9",
                  });
                }
              }}
              className={clsx(
                "cursor-pointer inline-block text-lg text-center rounded-tl-lg rounded-bl-lg p-2 w-12 h-full text-white",
                speed === 1 ? "bg-primary-black" : "bg-primary-dark-gray"
              )}>
              1
            </div>
            <div
              onClick={() => {
                if (speed !== 2) {
                  setSpeed(2);
                  sendCustomToast({
                    message: "🐎 Speed 2 Mode Activated",
                    bgColor: "#F43F5E",
                  });
                }
              }}
              className={clsx(
                "cursor-pointer inline-block text-lg text-center p-2 w-12 h-full text-white",
                speed === 2 ? "bg-primary-black" : "bg-primary-dark-gray"
              )}>
              2
            </div>
            <div
              onClick={() => {
                if (speed !== 3) {
                  setSpeed(3);
                  sendCustomToast({
                    message: "🐎 Speed 3 Mode Activated",
                    bgColor: "#DB2777",
                  });
                }
              }}
              className={clsx(
                "cursor-pointer inline-block text-lg text-center rounded-tr-lg p-2 rounded-br-lg w-12 h-full text-white",
                speed === 3 ? "bg-primary-black" : "bg-primary-dark-gray"
              )}>
              3
            </div>
          </div>
        </div>
        <div>
          <h3 className='font-semibold text-2xl'>Chill Mode</h3>
          <div className='mt-2'>
            <div
              onClick={() => {
                if (chillMode !== 1) {
                  setChillMode(1);
                  sendCustomToast({
                    message: "🥶 Chill Mode Activated",
                    bgColor: "#22D3EE",
                  });
                }
              }}
              className={clsx(
                "cursor-pointer inline-block text-lg text-center rounded-tl-lg rounded-bl-lg p-2 w-12 h-full text-white",
                chillMode === 1 ? "bg-primary-black" : "bg-primary-dark-gray"
              )}>
              Yes
            </div>
            <div
              onClick={() => {
                if (chillMode !== 0) {
                  setChillMode(0);
                  sendCustomToast({
                    message: "😎 Chill Mode Deactivated",
                    bgColor: "#22D3EE",
                  });
                }
              }}
              className={clsx(
                "cursor-pointer inline-block text-lg text-center rounded-tr-lg p-2 rounded-br-lg w-12 h-full text-white",
                chillMode === 0 ? "bg-primary-black" : "bg-primary-dark-gray"
              )}>
              No
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
