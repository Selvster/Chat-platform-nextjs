'use client';

import React from 'react';

const shimmerStyle = `
@keyframes shimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

.shimmer-bg {
  background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-repeat: no-repeat;
  background-size: 800px 104px;
  animation: shimmer 1.2s linear infinite;
}
`;

const RoomsGridSkeleton = () => {
  const numberOfSkeletons = 3;

  return (
    <>
      {/* Inject the keyframe animation into the DOM */}
      <style dangerouslySetInnerHTML={{ __html: shimmerStyle }} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: numberOfSkeletons }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 border border-blue-200 flex flex-col justify-between animate-pulse"
          >
            {/* Shimmer effect for title */}
            <div className="h-6 bg-gray-200 rounded shimmer-bg w-3/4 mb-4"></div>
            {/* Shimmer effect for description lines */}
            <div className="h-4 bg-gray-200 rounded shimmer-bg w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded shimmer-bg w-5/6 mb-4"></div>
            {/* Shimmer effect for online users */}
            <div className="h-4 bg-gray-200 rounded shimmer-bg w-1/4 mt-auto"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RoomsGridSkeleton;
