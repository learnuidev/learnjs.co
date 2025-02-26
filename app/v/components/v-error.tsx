import { DogIcon } from "lucide-react";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const VError = ({
  children,
  error,
}: {
  children: React.ReactNode;
  error: any;
}) => {
  if (error) {
    return (
      <div className="text-red-400 flex text-sm items-center py-4 gap-2 text-center flex-col">
        <DogIcon size={30} />
        <p className="font-mono mt-4">{error.message}</p>
      </div>
    );
  }

  return children;
};
