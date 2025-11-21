import React from 'react';

const SkeletonLoader = ({ type = 'card' }) => {
  if (type === 'question') {
    return (
      <div className="bg-base-100 rounded-lg shadow-md p-6 mb-4">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <div className="bg-base-300 h-4 w-16 rounded animate-pulse"></div>
            <div className="bg-base-300 h-4 w-12 rounded animate-pulse"></div>
          </div>
          <div className="bg-base-300 h-6 w-6 rounded-full animate-pulse"></div>
        </div>
        <div className="bg-base-300 h-6 w-3/4 mb-4 rounded animate-pulse"></div>
        <div className="space-y-2 mb-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-base-300 h-10 w-full rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    );
