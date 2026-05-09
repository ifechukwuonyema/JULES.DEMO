'use client';

import React from 'react';
import { SearchX, Inbox } from 'lucide-react';

export const EmptyState = ({
  title = "Nothing here yet",
  message = "Try adjusting your filters or adding a new record.",
  type = "box"
}: { title?: string, message?: string, type?: "box" | "search" }) => (
  <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
    <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-300">
        {type === 'search' ? <SearchX size={40} /> : <Inbox size={40} />}
    </div>
    <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
    <p className="text-gray-500 max-w-xs mx-auto">{message}</p>
  </div>
);
