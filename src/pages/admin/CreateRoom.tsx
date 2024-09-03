/* eslint-disable @typescript-eslint/no-explicit-any */
import PHInput from "../../components/form/PHInput";
import PHForm from "../../components/form/PHForm";
import PHSelect from "../../components/form/PHSelect";
import React from "react";
import { Button } from "antd";
import { useCreateRoomMutation } from "../../redux/features/room/roomApi";
import { toast } from "sonner";

const CreateRoom = () => {
  const [addRoom] = useCreateRoomMutation();

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      if (data) {
        const roomInfo = {
          name: data.name,
          roomNo: Number(data.roomNo),
          floorNo: Number(data.floorNo),
          capacity: Number(data.capacity),
          pricePerSlot: Number(data.pricePerSlot),
          amenities: data.amenities,
          image: data.image,
        };
        const res = await addRoom(roomInfo);
        console.log("res", res);
        if ((res as any)?.data?.success) {
          toast.success((res as any)?.data?.message);
        } else {
          toast.error((res as any).error.data.message);
        }
      }
    } catch (err) {
      console.log("err", err);
      toast.error((err as any).error.data.message);
    }
  };

  const amenitiesOptions = [
    {
      value: "Projector",
      label: "Projector",
    },
    {
      value: "Whiteboard",
      label: "Whiteboard",
    },
    {
      value: "Electricity",
      label: "Electricity",
    },
  ];

  return (
    <div className="w-full md:w-1/2 mx-auto">
      <div className="font-bold text-3xl md:mb-10 mb-6">Create room form</div>
      <div>
        <PHForm onSubmit={onSubmit}>
          <PHInput type="text" name="name" label="Name" />
          <PHInput type="number" name="roomNo" label="Room number" />
          <PHInput type="number" name="floorNo" label="Floor number" />
          <PHInput type="number" name="capacity" label="Capacity" />
          <PHInput type="number" name="pricePerSlot" label="Price per slot" />
          <PHSelect
            label="Amenities"
            name="amenities"
            mode="multiple"
            options={amenitiesOptions}
          />
          <PHInput type="text" name="image" label="Image URL" />
          <Button
            htmlType="submit"
            size="large"
            type="primary"
            className="w-full mx-auto"
          >
            Submit
          </Button>
        </PHForm>
      </div>
    </div>
  );
};

export default CreateRoom;
