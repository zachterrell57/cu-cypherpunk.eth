import { CheckCircleIcon } from "@heroicons/react/16/solid";

const SuccessBadge = ({ text }: { text: string }) => {
  return (
    <div className="flex w-auto items-center justify-center gap-2 rounded-full bg-white px-2 py-1">
      <CheckCircleIcon
        className="h-5 w-5 text-primary-blue"
        aria-hidden="true"
      />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
};

export default SuccessBadge;
