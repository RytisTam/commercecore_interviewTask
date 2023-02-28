import React from "react";
import { StarIcon } from "../../../lib/helpers/Icons";

export const Rating = ({ rating }) => {
  return (
    <div className="ml-3 m-2 md:m-5 h-5 w-fit p-1 flex bg-yellow-500 rounded">
      {[...Array(rating)].map((rating, idx) => {
        return (
          <div key={idx} className="flex items-center justify-center">
            <StarIcon />
          </div>
        );
      })}
    </div>
  );
};
