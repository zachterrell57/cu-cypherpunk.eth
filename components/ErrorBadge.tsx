import { ExclamationCircleIcon } from "@heroicons/react/16/solid";

const ErrorBadge = ({ text }: { text: string }) => {
  return (
    <div className="rounded-full justify-center items-center bg-[#FAEAE8] w-auto flex gap-2 py-1 px-2">
      <ExclamationCircleIcon
        className="h-5 w-5 text-red-500"
        aria-hidden="true"
      />
      <span className="font-medium text-sm">{text}</span>
    </div>
  );
};

export default ErrorBadge;
