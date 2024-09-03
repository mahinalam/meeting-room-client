/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import {
  useGetAllBookingsQuery,
  useUpdateBookingMutation,
  useDeleteBookingMutation,
} from "../../redux/features/bookings/bookings.api";
import { Button, Modal, Table } from "antd";
import moment, { MomentInput } from "moment";
import { useState } from "react";

const AllBookings = () => {
  const { data: bookingsInfo, isFetching } = useGetAllBookingsQuery(undefined);
  console.log("bookingsInfo", bookingsInfo);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [approveBookingId, setApproveBookingId] = useState("");
  const [deleteBookingId, setDeleteBookingId] = useState("");
  const [updateBooking] = useUpdateBookingMutation();
  const [deleteBooking] = useDeleteBookingMutation();

  const showModal = (id: string) => {
    setIsModalOpen(true);
    setApproveBookingId(id);
  };
  const showDeleteModal = (id: string) => {
    setIsDeleteModalOpen(true);
    setDeleteBookingId(id);
  };
  const handleOk = async () => {
    if (approveBookingId) {
      const updatedBookingInfo = {
        id: approveBookingId,
        data: { isConfirmed: "confirmed" },
      };
      const res = await updateBooking(updatedBookingInfo);
    }

    setIsModalOpen(false);
    setApproveBookingId("");
  };
  const handleDeleteOk = async () => {
    if (deleteBookingId) {
      const res = await deleteBooking(deleteBookingId);
      if (res?.data?.success) {
        toast.success("Booking deleted successfully");
      } else {
        toast.error("Failed to delete booking");
      }
      console.log("res from del", res);
    }

    setIsDeleteModalOpen(false);
    setDeleteBookingId("");
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setApproveBookingId("");
  };
  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
    setDeleteBookingId("");
  };

  const tableData = bookingsInfo?.data?.map(
    ({
      _id,
      room,
      user,
      date,
      createdAt,
      isConfirmed,
    }: Record<string, unknown>) => {
      console.log("room", room);
      console.log("user", user);
      return {
        key: _id,
        room: (room as any).name,
        date: moment(date as MomentInput).format("DD MMM YYYY"),
        user: (user as any).name,
        time: moment(createdAt as MomentInput).format("HH:mm"),
        isConfirmed,
      };
    }
  );

  const columns = [
    {
      title: "Room Name",
      key: "room",
      dataIndex: "room",
    },
    {
      title: "User Name",
      key: "user",
      dataIndex: "user",
    },
    {
      title: "Date",
      key: "date",
      dataIndex: "date",
    },
    {
      title: "Time",
      key: "time",
      dataIndex: "time",
    },
    {
      title: "Status",
      key: "isConfirmed",
      dataIndex: "isConfirmed",
    },
    {
      title: "Action",
      key: "x",
      render: (item: any) => {
        return (
          //   <Dropdown trigger={["click"]}>
          <>
            <Button onClick={() => showModal(item.key)} className="ml-2">
              Approve
            </Button>
            <Button onClick={() => showDeleteModal(item.key)} className="ml-2">
              Reject
            </Button>
          </>
          //   </Dropdown>
        );
      },
    },
  ];

  return (
    <>
      <Table loading={isFetching} columns={columns} dataSource={tableData} />
      <Modal
        title="Update Booking status"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are you sure want to confirm this booking?</p>
      </Modal>
      <Modal
        title="Delete Booking"
        open={isDeleteModalOpen}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
      >
        <p>Are you sure want to delete this booking?</p>
      </Modal>
    </>
  );
};

export default AllBookings;
