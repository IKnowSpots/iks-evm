/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { pauseEvent } from "@/utils";
import { currency } from "@/config";
import LoadingModal from "../LoadingModal";
import "react-toastify/dist/ReactToastify.css";

const CardsActive = ({
  image,
  name,
  price,
  date,
  tokenId,
  remaining,
  supply,
  setActiveEvents,
  toast,
}: {
  image: any;
  name: string;
  price: any;
  date: any;
  tokenId: any;
  remaining: any;
  supply: any;
  setActiveEvents: any;
  toast: any;
}) => {
  const [loading, setLoading] = useState(false);
  const [remove, setRemove] = useState(false);

  async function pauseEventCall(tokenId: any) {
    setLoading(true);
    console.log(tokenId);
    await pauseEvent(tokenId);
    setRemove(true);
    setTimeout(() => {
      setActiveEvents((events: any) =>
        events.filter((event: any) => event.tokenId !== tokenId)
      );
    }, 3000);
    toast.success("Event Paused!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    console.log("Pausing");

    setLoading(false);
  }

  return (
    <>
      <LoadingModal visible={loading} />
      <div
        className={`text-white w-[23%] px-4 box-background pt-4 pb-5 rounded-xl ${
          remove ? "hidden" : ""
        }`}
      >
        <div className="flex flex-col gap-6">
          <img
            src={image}
            className="h-[250px] rounded-xl"
            // width="195"
            // height="200"
            alt="Event's Image"
          />
          <div className="flex gap-2 text-[0.85rem] flex-col">
            <div className="flex justify-between items-center">
              <p>{name}</p>
              <p>{price == 0.0 ? "Free" : price + " " + currency}</p>
              {/* <p>{price} {currency}</p> */}
            </div>
            <div className="h-[2px] rounded-full bg-white"></div>
            <div className="flex justify-between items-center">
              <p>Bought: {supply - remaining}</p>
              <p>{date}</p>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="view-btn px-4 py-0.5 outline rounded-lg"
                onClick={() => pauseEventCall(tokenId)}
              >
                Pause
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardsActive;
