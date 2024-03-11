import { CheckCircleIcon } from "@heroicons/react/16/solid";

const SuccessBadge = ({ text }: { text: string }) => {
  return (
    <div className="rounded-full justify-center items-center bg-white w-auto flex gap-2 py-1 px-2">
      <CheckCircleIcon
        className="h-5 w-5 text-primary-blue"
        aria-hidden="true"
      />
      <span className="font-medium text-sm">{text}</span>
    </div>
  );
};

export default SuccessBadge;
