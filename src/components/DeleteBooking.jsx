'use client'
import { TrashBin } from '@gravity-ui/icons';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';

const DeleteBooking = ({bookingData}) => {
    const {destinationName, _id } =bookingData;

    const bookingId = _id;

    const handleDeleteBooking =async()=>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${bookingId}`, {
            method: "DELETE",
            headers:{
                'content-type' : 'application/json'
            }
        })
        const data = await res.json();

        window.location.reload();

    }



    return (
        <AlertDialog>
      <AlertDialog.Trigger className="group flex items-center  bg-surface  shadow-xs select-none hover:bg-surface-secondary">
        <div className="flex  px-5 py-3 shrink-0 items-center justify-center  bg-danger-soft text-danger-soft-foreground">
          <TrashBin className="size-6" />
          <p className="text-xl font-semibold pt-2">Cancel</p>
        </div>
      </AlertDialog.Trigger>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger">
                <TrashBin className="size-5" />
              </AlertDialog.Icon>
              <AlertDialog.Heading>Cancel this item?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>{destinationName} is permanent deleted?</p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Back
              </Button>
              <Button onClick={handleDeleteBooking} slot="close" variant="danger">
                Confirm Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
    );
};

export default DeleteBooking;