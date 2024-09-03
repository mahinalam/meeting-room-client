/* eslint-disable @typescript-eslint/no-explicit-any */
// // // import RoomCard from "../../components/sharred/RoomFeaturedCard";
// // import { Link } from "react-router-dom";
// // import RoomCard from "../../components/sharred/RoomCard";
// // import { useGetAllRoomsQuery } from "../../redux/features/room/roomApi";
// // import React from "react";
// // import { Input, Select, Space } from "antd";
// // import PHSelect from "../../components/form/PHSelect";
// // import PHForm from "../../components/form/PHForm";
// // import Loader from "../../components/sharred/Loader";

// // const { Search } = Input;

// // const Rooms = () => {
// //   const { data: roomInfo, isLoading: roomInfoLoading } =
// //     useGetAllRoomsQuery(undefined);
// //   // console.log("rooms", data);
// //   if (roomInfoLoading) {
// //     return <Loader />;
// //   }

// //   const onSubmit = (data) => {
// //     console.log(data);
// //   };
// //   const option = [
// //     {
// //       value: "mahin",
// //       label: "mahin",
// //     },
// //   ];
// //   return (
// //     <div className="md:mt-[50px] sm:mt-[25px] mt-[20px] ">
// //       <section className="flex items-center">
// //         <div className="my-5 w-1/2 ">
// //           <Search
// //             placeholder="Search your desire rooms"
// //             enterButton="Search"
// //             size="large"
// //             loading={false}
// //             allowClear
// //           />
// //         </div>
// //         <div className="w-full">
// //           {/* <Space wrap>
// //             <Select
// //               defaultValue="lucy"
// //               style={{ width: "100%" }}
// //               // onChange={handleChange}
// //               options={[
// //                 { value: "jack", label: "Jack" },
// //                 { value: "lucy", label: "Lucy" },
// //                 { value: "Yiminghe", label: "yiminghe" },
// //                 { value: "disabled", label: "Disabled", disabled: true },
// //               ]}
// //             />
// //           </Space> */}
// //           <PHForm onSubmit={onSubmit}>
// //             <PHSelect
// //               label="Please Select"
// //               options={option}
// //               name="mahin"
// //               // options={}
// //             />
// //           </PHForm>
// //         </div>
// //       </section>
// //       <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
// //         {roomInfo?.data?.length > 0 &&
// //           roomInfo?.data?.map((room) => (
// //             <Link to={`/rooms/${room._id}`} key={room._id}>
// //               <RoomCard item={room} />
// //             </Link>
// //           ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Rooms;
// import React, { useState, useMemo } from "react";
// import { Link } from "react-router-dom";
// import RoomCard from "../../components/sharred/RoomCard";
// import { useGetAllRoomsQuery } from "../../redux/features/room/roomApi";
// import { Input, Select } from "antd";
// import PHSelect from "../../components/form/PHSelect";
// import PHForm from "../../components/form/PHForm";
// import Loader from "../../components/sharred/Loader";

// const { Search } = Input;

// const Rooms = () => {
//   const { data: roomInfo, isLoading: roomInfoLoading } =
//     useGetAllRoomsQuery(undefined);
//   console.log("roomInfo", roomInfo);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [sortOrder, setSortOrder] = useState("ascending");

//   // Handle Search Input
//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value.toLowerCase());
//   };

//   // Handle Sorting
//   const handleSortChange = (value) => {
//     setSortOrder(value);
//   };

//   // Filter and Sort Rooms
//   const filteredAndSortedRooms = useMemo(() => {
//     let filteredRooms = roomInfo?.data?.filter((room) =>
//       room.name.toLowerCase().includes(searchQuery)
//     );
//     if (roomInfoLoading) {
//       return <Loader />;
//     }

//     if (sortOrder === "ascending") {
//       filteredRooms = filteredRooms.sort((a, b) => a.price - b.price);
//     } else {
//       filteredRooms = filteredRooms.sort((a, b) => b.price - a.price);
//     }

//     return filteredRooms;
//   }, [searchQuery, sortOrder, roomInfo]);

//   return (
//     <div className="md:mt-[50px] sm:mt-[25px] mt-[20px] ">
//       <section className="flex items-center justify-between">
//         <div className="my-5 w-1/2 ">
//           <Search
//             placeholder="Search your desired rooms"
//             enterButton="Search"
//             size="large"
//             onChange={handleSearch}
//             allowClear
//           />
//         </div>
//         <div className="my-5 w-1/2">
//           <Select
//             defaultValue="ascending"
//             style={{ width: "100%" }}
//             onChange={handleSortChange}
//             options={[
//               { value: "ascending", label: "Price: Low to High" },
//               { value: "descending", label: "Price: High to Low" },
//             ]}
//           />
//         </div>
//       </section>
//       <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
//         {filteredAndSortedRooms?.length > 0 ? (
//           filteredAndSortedRooms.map((room) => (
//             <Link to={`/rooms/${room._id}`} key={room._id}>
//               <RoomCard item={room} />
//             </Link>
//           ))
//         ) : (
//           <p>No rooms found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Rooms;

import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import RoomCard from "../../components/sharred/RoomCard";
import { useGetAllRoomsQuery } from "../../redux/features/room/roomApi";
import { Input, Select } from "antd";
import Loader from "../../components/sharred/Loader";

const { Search } = Input;

const Rooms = () => {
  const { data: roomInfo, isLoading: roomInfoLoading } =
    useGetAllRoomsQuery(undefined);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("ascending");

  // Handle Search Input
  const handleSearch = (e: any) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Handle Sorting
  const handleSortChange = (value: any) => {
    setSortOrder(value);
  };

  // Filter and Sort Rooms
  const filteredAndSortedRooms = useMemo(() => {
    if (roomInfoLoading) {
      return []; // Return an empty array to prevent rendering issues
    }

    let filteredRooms =
      roomInfo?.data?.filter((room: any) =>
        room.name.toLowerCase().includes(searchQuery)
      ) || [];

    if (sortOrder === "ascending") {
      filteredRooms = filteredRooms.sort((a: any, b: any) => a.price - b.price);
    } else if (sortOrder === "descending") {
      filteredRooms = filteredRooms.sort((a: any, b: any) => b.price - a.price);
    }

    return filteredRooms;
  }, [searchQuery, sortOrder, roomInfo, roomInfoLoading]);

  if (roomInfoLoading) {
    return <Loader />;
  }

  return (
    <div className="md:mt-[50px] sm:mt-[25px] mt-[20px]">
      <section className="flex items-center justify-between gap-6">
        <div className="my-5 w-1/2">
          <Search
            placeholder="Search your desired rooms"
            enterButton="Search"
            size="large"
            onChange={handleSearch}
            allowClear
          />
        </div>
        <div className="my-5 w-1/2 ">
          <Select
            defaultValue="ascending"
            style={{ width: "80%" }}
            onChange={handleSortChange}
            options={[
              { value: "ascending", label: "Price: Low to High" },
              { value: "descending", label: "Price: High to Low" },
            ]}
            size="large"
          />
        </div>
      </section>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        {filteredAndSortedRooms.length > 0 ? (
          filteredAndSortedRooms.map((room: any) => (
            <Link to={`/rooms/${room._id}`} key={room._id}>
              <RoomCard item={room} />
            </Link>
          ))
        ) : (
          <p className=" font-bold">No rooms found</p>
        )}
      </div>
    </div>
  );
};

export default Rooms;
