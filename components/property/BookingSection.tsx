// components/property/BookingSection.tsx
import { useState } from "react";

interface BookingSectionProps {
  price: number;
}

const BookingSection: React.FC<BookingSectionProps> = ({ price }) => {
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");

  // Calculate number of nights
  const getNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = end.getTime() - start.getTime();
    return diff > 0 ? diff / (1000 * 60 * 60 * 24) : 0;
  };

  const nights = getNights();
  const total = nights * price;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg sticky top-20">
      <h3 className="text-2xl font-semibold">${price}/night</h3>

      {/* Check-in */}
      <div className="mt-4">
        <label className="block text-gray-600 font-medium">Check-in</label>
        <input
          type="date"
          className="border p-2 w-full mt-1 rounded-md"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>

      {/* Check-out */}
      <div className="mt-4">
        <label className="block text-gray-600 font-medium">Check-out</label>
        <input
          type="date"
          className="border p-2 w-full mt-1 rounded-md"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>

      {/* Total Payment */}
      <div className="mt-6 border-t pt-4">
        <p className="text-lg">
          Total payment:{" "}
          <strong>
            {nights > 0 ? `$${total.toFixed(2)}` : "Select valid dates"}
          </strong>
        </p>
        {nights > 0 && (
          <p className="text-sm text-gray-500">
            {nights} night{nights > 1 ? "s" : ""}
          </p>
        )}
      </div>

      {/* Reserve button */}
      <button
        disabled={nights <= 0}
        className={`mt-4 w-full py-2 px-4 rounded-md font-medium transition ${
          nights > 0
            ? "bg-green-600 text-white hover:bg-green-700"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
