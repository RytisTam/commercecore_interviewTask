import React from "react";
import { RightIcon } from "../../../lib/helpers/Icons";
import { Rating } from "./CardRating";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const HotelCard = ({ hotel, scrollPosition }) => {
  return (
    <li>
      <div className="flex flex-row bg-white rounded m-3 hover:bg-gray-50">
        <div className="basis-5/12 md:basis-3/12 shrink-0 ">
          <LazyLoadImage
            className="object-cover w-56 h-56 rounded-l-lg"
            src={hotel.image}
            scrollPosition={scrollPosition}
            onError={(e) => (e.target.src = "/failedToLoad.jpg")}
          />
        </div>
        <div className="grow flex flex-col justify-center flex-wrap">
          <span className="ml-3 md:ml-6 m-2 text-sm md:text-xl font-semibold tracking-tight text-slate-800 ">
            {hotel.name}
          </span>
          <div>
            <p className="ml-3 md:ml-6 text-sm font-semibold text-gray-500">
              {hotel.address}, {hotel.city}, {hotel.country}
            </p>
          </div>
          <Rating rating={Math.floor(Math.random() * 5) + 1} />
          {/* Random rating number for design purposes */}
          <div>
            <div className="ml-3 md:ml-6 md:flex justify-between items-center">
              <div className="mb-3 md:mb-0">
                <p className="text-sm text-gray-500">
                  From{" "}
                  <span className="font-semibold text-lg text-slate-800">
                    €{hotel.price_eur.toFixed(2)}
                  </span>
                </p>
                <p className="text-gray-500 text-sm font-semibold">Per night</p>
              </div>
              <a
                href="https://www.google.com/search?q=hotels"
                className="flex mr-6 text-slate-700"
              >
                See details <RightIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
