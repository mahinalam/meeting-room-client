/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "antd";
import { useGetMyBookingsQuery } from "../../redux/features/bookings/bookings.api";
import moment, { MomentInput } from "moment";

const MyBookings = () => {
  const { data: myBookings, isFetching } = useGetMyBookingsQuery(undefined);
  console.log("myBookings", myBookings);

  const tableData = myBookings?.data?.map(
    ({ _id, room, slots, isConfirmed }: Record<string, unknown>) => {
      return {
        key: _id,
        room: (room as any).name,
        date: moment((slots as any).date as MomentInput).format("DD MMM YYYY"),
        time: `${moment((slots as any).startTime as MomentInput).format(
          "HH:mm"
        )} - ${moment((slots as any).endTime as MomentInput).format("HH:mm")}`,
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
  ];

  return (
    <div className="my-bookings-container  md:mt-[50px] sm:mt-[25px] mt-[20px]">
      <p className="text-2xl font-semibold ">My Bookings</p>
      <div>
        <Table loading={isFetching} columns={columns} dataSource={tableData} />
      </div>
    </div>
  );
};

export default MyBookings;
