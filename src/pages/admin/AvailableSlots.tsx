// /* eslint-disable @typescript-eslint/no-explicit-any */

// import { Button, Table } from "antd";
// // import { toast } from "sonner";
// import { useGetAvailableSlotsQuery } from "../../redux/features/slots/slot.api";

// const AvailableSlots = () => {
//   const { data: slotsInfo, isFetching } = useGetAvailableSlotsQuery(undefined);
//   console.log("slotsInfo", slotsInfo);
//   //   const [isModalOpen, setIsModalOpen] = useState(false);
//   //   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
//   //   const [selectedRoom, setSelectedRoom] = useState<Record<string, any> | null>(
//   //     null
//   //   );
//   //   const [deleteModalId, setDeleteModalId] = useState("");
//   //   const [deleteRoom] = useDeleteRoomMutation();
//   //   const [updateRoom] = useUpdateRoomMutation();

//   //   console.log("selectedRoom", selectedRoom);
//   //   const onSubmit = async (data) => {
//   //     // try {
//   //     //   const updatedRoomInfo = {
//   //     //     name: data.name,
//   //     //     roomNo: Number(data.roomNo),
//   //     //     floorNo: Number(data.floorNo),
//   //     //     capacity: Number(data.capacity),
//   //     //     pricePerSlot: Number(data.pricePerSlot),
//   //     //     amenities: data.amenities,
//   //     //   };
//   //     //   if (selectedRoom) {
//   //     //     const res = await updateRoom({
//   //     //       id: selectedRoom.key,
//   //     //       data: updatedRoomInfo,
//   //     //     });
//   //     //     console.log({ res });
//   //     //     if ((res as any)?.data?.success) {
//   //     //       toast.success((res as any)?.data?.message);
//   //     //       setIsModalOpen(false); // <-- UPDATED: Close modal after successful update
//   //     //       setSelectedRoom(null);
//   //     //     } else {
//   //     //       toast.error((res as any).error.data.message);
//   //     //     }
//   //     //     setIsModalOpen(false);
//   //     //   }
//   //     // } catch (err) {
//   //     //   console.log(err);
//   //     // }
//   //   };
//   //   console.log("deleteModalId", deleteModalId);
//   //   const handleUpdateClick = (room) => {
//   //     setSelectedRoom(room);
//   //     setIsModalOpen(true);
//   //   };

//   //   const handleModalCancel = () => {
//   //     setIsModalOpen(false);
//   //     setSelectedRoom(null);
//   //   };

//   const showDeleteModal = (id: string) => {
//     setDeleteModalId(id);
//     setIsDeleteModalOpen(true);
//   };

//   // const handleDeleteOk = async () => {
//   //   const res = await deleteRoom(deleteModalId);
//   //   if (res?.data?.success) {
//   //     toast.success("Room deleted successfully.");
//   //     refetch();
//   //   } else {
//   //     toast.success("Failed to delete room!");
//   //   }
//   //   setIsDeleteModalOpen(false);
//   // };

//   // const handleDeleteCancel = () => {
//   //   setIsDeleteModalOpen(false);
//   // };

//   const tableData = slotsInfo?.data?.map(
//     ({ _id, room, date, startTime, endTime }: Record<string, unknown>) => ({
//       key: _id,
//       roomName: (room as any).name,
//       roomNo: (room as any).roomNo,
//       date,
//       startTime,
//       endTime,
//     })
//   );

//   const columns = [
//     {
//       title: "Room Name",
//       key: "roomName",
//       dataIndex: "roomName",
//     },
//     {
//       title: "Room Number",
//       key: "roomNo",
//       dataIndex: "roomNo",
//     },
//     {
//       title: "Date",
//       key: "date",
//       dataIndex: "date",
//     },
//     {
//       title: "Start Time",
//       key: "startTime",
//       dataIndex: "startTime",
//     },
//     {
//       title: "End Time",
//       key: "endTime",
//       dataIndex: "endTime",
//     },
//     {
//       title: "Action",
//       key: "x",
//       render: (item: any) => {
//         return (
//           //   <Dropdown trigger={["click"]}>
//           <>
//             <Button onClick={() => showDeleteModal(item.key)} className="ml-2">
//               Delete
//             </Button>
//           </>
//           //   </Dropdown>
//         );
//       },
//     },
//   ];

//   return (
//     <>
//       <Table loading={isFetching} columns={columns} dataSource={tableData} />

//     </>
//   );
// };

// export default AvailableSlots;
