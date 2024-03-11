import LoadingSpinner from "./LoadingSpinner";

const LoadingBadge = ({ text }: { text: string }) => {
  return (
    <div className="rounded-full justify-center items-center bg-[#E5E5E5] w-auto flex gap-2 px-2">
      <LoadingSpinner />
      <span className="font-medium text-sm">{text}</span>
    </div>
  );
};

export default LoadingBadge;
