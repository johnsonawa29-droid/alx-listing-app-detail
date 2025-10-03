// components/property/PropertyDetail.tsx
import { useState } from "react";
import { PropertyProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const tabs = ["What we offer", "Reviews", "About host"];

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState("What we offer");

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2 text-gray-600">
        <span className="text-yellow-500 font-semibold">{property.rating} ★</span>
        <span>
          {property.address.city}, {property.address.country}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        {/* Left Section */}
        <div className="lg:col-span-2">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={property.image}
              alt={property.name}
              className="col-span-2 w-full h-96 object-cover rounded-lg"
            />
            {property.images?.slice(0, 4).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Property image ${index}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>

          {/* Tabs */}
          <div className="mt-8">
            <div className="flex space-x-6 border-b">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`pb-2 ${
                    activeTab === tab
                      ? "border-b-2 border-blue-600 text-blue-600 font-semibold"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="mt-4">
              {activeTab === "What we offer" && (
                <div>
                  <h2 className="text-xl font-semibold mb-2">Amenities</h2>
                  <ul className="flex flex-wrap gap-3">
                    {property.category?.map((amenity, index) => (
                      <li
                        key={index}
                        className="bg-gray-100 px-4 py-2 rounded-lg text-gray-700"
                      >
                        {amenity}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "Reviews" && (
                <ReviewSection reviews={property.reviews || []} />
              )}

              {activeTab === "About host" && (
                <div>
                  <h2 className="text-xl font-semibold">Hosted by</h2>
                  <p className="mt-2 text-gray-700">{property.host?.name}</p>
                  <p className="text-gray-500">{property.host?.about}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Section - Booking */}
        <BookingSection price={property.price} />
      </div>
    </div>
  );
};

export default PropertyDetail;
