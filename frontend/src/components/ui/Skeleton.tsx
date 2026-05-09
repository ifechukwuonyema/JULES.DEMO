'use client';

import React from 'react';

const Skeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-gray-200 rounded-xl ${className}`} />
);

export const DashboardSkeleton = () => (
  <div className="p-4 md:p-8 md:ml-64 space-y-8">
    <div className="space-y-2">
      <Skeleton className="h-10 w-64" />
      <Skeleton className="h-5 w-48" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Skeleton className="h-32" />
      <Skeleton className="h-32" />
      <Skeleton className="h-32" />
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Skeleton className="h-64" />
      <Skeleton className="h-64" />
    </div>
  </div>
);

export const MarketplaceSkeleton = () => (
    <div className="p-4 md:p-8 md:ml-64 space-y-8">
      <Skeleton className="h-12 w-full max-w-xl mx-auto rounded-2xl" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1,2,3,4,5,6,7,8].map(i => <Skeleton key={i} className="h-56" />)}
      </div>
    </div>
);
