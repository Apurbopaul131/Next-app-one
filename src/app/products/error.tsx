"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong in the dashboard!</h2>
      <h3 className="text-red-500">{error.message}</h3>
      <button
        onClick={() => reset()}
        className="w-24 mt-3 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl transition"
      >
        Try again
      </button>
    </div>
  );
}
