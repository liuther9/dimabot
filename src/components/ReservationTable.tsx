import React from "react";
import { format } from "date-fns";

export interface Reservation {
  id: number;
  guestName: string;
  email: string;
  checkIn: string;
  checkOut: string;
  status: "confirmed" | "pending" | "canceled";
}

interface ReservationTableProps {
  reservations: Reservation[];
}

const ReservationTable: React.FC<ReservationTableProps> = ({
  reservations,
}) => {
  const getStatusColor = (status: Reservation["status"]) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "canceled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Guest
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Check-in
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Check-out
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {reservation.guestName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {reservation.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {format(new Date(reservation.checkIn), "MMM dd, yyyy")}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {format(new Date(reservation.checkOut), "MMM dd, yyyy")}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(reservation.status)}`}
                >
                  {reservation.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationTable;
