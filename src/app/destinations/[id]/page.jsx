import BookingCard from "@/components/BookingCard";
import { DeleteDestination } from "@/components/DeleteDestination";
import { EditModal } from "@/components/EditModal";
import { auth } from "@/lib/auth";
import { ArrowRight } from "@gravity-ui/icons";
import { Button, Card, Input } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  const {token} = await auth.api.getToken({
    headers: await headers()
  })

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`, {
    headers:{
      authorization: `Bearer ${token}`
    }
  });
  const destination = await res.json();

  return (
    <div className="">
      <div className=" max-w-7xl mx-auto my-15">
        <div className="mb-4 flex justify-end items-center gap-5">
          <EditModal destination={destination}></EditModal>
          <DeleteDestination destination={destination}></DeleteDestination>
        </div>

        <div className="relative w-full h-150">
          <Image
            alt={destination.destinationName}
            src={destination.imageUrl}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex justify-between ">
          <div className="space-y-10 my-10">
            <div className="space-y-2">
              <h3 className="flex items-center text-2xl">
                <MdLocationOn></MdLocationOn>
                {destination.country}
              </h3>

              <div className="flex justify-between ">
                <h1 className="text-5xl font-bold">
                  {destination.destinationName}
                </h1>
              </div>

              <h4 className="flex items-center  gap-1">
                <span>
                  <IoCalendarNumberOutline />{" "}
                </span>
                <span>{destination.duration}</span>
              </h4>
            </div>
            <div>
              <p className="text-3xl font-medium">Overview</p>
              <h5 className="text-xl">{destination.description}</h5>

              {/* <Link href={``}><Button variant="outline" className='text-[#15A1BF] font-extrabold text-'>BOOK NOW<span className="text-[#15A1BF] text-lg">↗</span></Button></Link> */}
            </div>
          </div>

         <BookingCard destination={destination}></BookingCard>

        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
