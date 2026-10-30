import React from "react";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";
import { IoCalendarNumberOutline } from "react-icons/io5";
import Link from "next/link";
import { Button } from "@heroui/react";

const DestinationCard = ({ destination }) => {
  const {
    _id,
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    imageUrl,
    description,
  } = destination;

  return (
    <div className="max-w-100 ">
      <div className="space-y-5">

        <div className="relative w-full h-56">
          <Image
            alt={destinationName}
            src={imageUrl.trimStart()}
            fill         
            className="object-cover"
          />
        </div>

        <div>

          <h3 className="flex items-center">
            <MdLocationOn></MdLocationOn>
            {country}
          </h3>

          <div className="flex justify-between ">
            <h1 className="text-2xl">{destinationName}</h1>
            <h4>
              <span className="text-2xl">${price}</span>
              <span>/person</span>
            </h4>
          </div>

          <h4 className="flex items-center  gap-1"><span><IoCalendarNumberOutline /> </span><span>{duration}</span></h4>

        </div>
        <div>
            <Link href={`/destinations/${_id}`}><Button variant="outline" className='text-[#15A1BF] font-extrabold text-'>BOOK NOW<span className="text-[#15A1BF] text-lg">↗</span></Button></Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
