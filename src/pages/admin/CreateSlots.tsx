/* eslint-disable @typescript-eslint/no-explicit-any */
import PHForm from "../../components/form/PHForm";
import PHSelect from "../../components/form/PHSelect";
import React from "react";
import { Button } from "antd";
import { useCreateSlotsMutation } from "../../redux/features/slots/slot.api";
import { toast } from "sonner";
import PHDatePicker from "../../components/form/PHDatePicker";
import PHTimePicker from "../../components/form/PHTimePicker";
import { useGetAllRoomsQuery } from "../../redux/features/room/roomApi";

const CreateSlot = () => {
  const [addSlots] = useCreateSlotsMutation();
  const { data: roomInfo, isLoading } = useGetAllRoomsQuery(undefined);

  const roomOptions = roomInfo?.data
    ? roomInfo?.data?.map((item: any) => ({
        value: item._id,
        label: item.name,
      }))
    : [];
  const onSubmit = async (data: any) => {
    const formattedData = {
      room: data.room,
      date: data.date.format("YYYY-MM-DD"),
      startTime: data.startTime.format("HH:mm"),
      endTime: data.endTime.format("HH:mm"),
    };

    console.log(formattedData);

    try {
      const res = await addSlots(formattedData);
      console.log("res", res);
      if ((res as any)?.data?.success) {
        toast.success((res as any)?.data?.message);
      } else {
        toast.error((res as any).error.data.message);
      }
    } catch (err) {
      console.log("err", err);
      toast.error((err as any).error.data.message);
    }
  };

  return (
    <div className="w-full md:w-1/2 mx-auto">
      <div className="font-bold text-3xl md:mb-10 mb-6">Create slot form</div>
      <div>
        <PHForm onSubmit={onSubmit}>
          <PHSelect
            label="Room"
            name="room"
            disabled={isLoading}
            options={roomOptions}
          />
          <PHDatePicker name="date" label="Select date" />
          <PHTimePicker name="startTime" label="Start Time" />
          <PHTimePicker name="endTime" label="End Time" />
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

export default CreateSlot;
