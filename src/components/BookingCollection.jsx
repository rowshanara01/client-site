import Image from "next/image";
import React from "react";
import DeleteBooking from "./DeleteBooking";
import { Button } from "@heroui/react";
import { FaEye } from "react-icons/fa6";

const BookingCollection = ({ bookingData }) => {
  const { destinationName, imageUrl, price, departureData } = bookingData;
  return (
    <div className="flex justify-between p-5 border border-[#e4e4e4] shadow-sm ">
      <div className="flex gap-5">
        <div className="relative w-70 h-45">
          <Image
            src={imageUrl}
            alt={destinationName}
            fill
            className="object-cover"
          ></Image>
        </div>

        <div>
          <h1 className="text-3xl font-bold">{destinationName}</h1>
          <h2>{departureData || "Set departure date"}</h2>
          <h4 className="text-2xl font-semibold">${price}</h4>
        </div>
      </div>

      <div className="flex items-end">
        <DeleteBooking bookingData={bookingData} ></DeleteBooking>
        <Button>
          <FaEye />
          View
        </Button>
      </div>
    </div>
  );
};

export default BookingCollection;
