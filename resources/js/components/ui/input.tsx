import * as React from 'react';
import { cn } from '@/lib/utils';

export function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-10 w-full min-w-0 rounded-lg border border-gray-300 bg-white px-4 py-2 text-base font-medium shadow-sm transition-[color,box-shadow] outline-none placeholder:text-gray-400 disabled:cursor-not-allowed disabled:opacity-50",
        "focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20",
        "dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500",
        "dark:focus:border-blue-500 dark:focus:ring-blue-500/40",
        "file:inline-flex file:h-7 file:rounded-md file:border file:border-gray-300 file:bg-gray-100 file:px-3 file:py-1 file:text-sm file:font-medium file:text-gray-800",
        "dark:file:border-gray-600 dark:file:bg-gray-700 dark:file:text-gray-200",
        "aria-[invalid=true]:border-red-500 aria-[invalid=true]:ring-4 aria-[invalid=true]:ring-red-500/20",
        className
      )}
      {...props}
    />
  );
}