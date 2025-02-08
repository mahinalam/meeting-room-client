// for room
export type TGuest = {
  adult: number;
  child: number;
  totalCapacity?: number;
};

export interface IRoom {
  _id: string;
  host: string;
  title: string;
  location: string;
  price: number;
  bedRoom: number;
  bathRoom: number;
  images: string[];
  guests: TGuest;
  from: Date;
  to: Date;
  isDeleted: boolean;
}
