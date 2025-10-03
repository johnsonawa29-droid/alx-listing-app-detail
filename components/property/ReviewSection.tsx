// components/property/ReviewSection.tsx
import { FaStar } from "react-icons/fa";

interface Review {
  name: string;
  avatar?: string;
  rating: number;
  comment: string;
}

const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold mb-6">Reviews</h3>

      {reviews.length === 0 && (
        <p className="text-gray-500">No reviews yet. Be the first to review!</p>
      )}

      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-sm bg-white"
          >
            {/* Reviewer Info */}
            <div className="flex items-center mb-3">
              <img
                src={review.avatar || "/default-avatar.png"}
                alt={review.name}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <p className="font-bold">{review.name}</p>
                <div className="flex text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < review.rating ? "text-yellow-500" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Review Content */}
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
