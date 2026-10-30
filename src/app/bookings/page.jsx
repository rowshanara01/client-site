import BookingCollection from "@/components/BookingCollection";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const BookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

//   console.log(user)

    const {token} = await auth.api.getToken({
        headers: await headers()
    })

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/user/${user?.id}`, {
    headers:{
        authorization: `Bearer ${token}`
    }
  });
  const bookingsData = await res.json();

  return (
    <div className="container mx-auto my-15 ">
      <h1 className="text-4xl font-bold ">My Bookings</h1>
      <h3 className="text-xl text-[#848484] mb-10">
        Manage and view your upcoming travel plans
      </h3>
      <div className="flex flex-col gap-10">
        {bookingsData.map((bookingData) => (
          <BookingCollection
            key={bookingData._id}
            bookingData={bookingData}
          ></BookingCollection>
        ))}
      </div>
    </div>
  );
};

export default BookingsPage;
