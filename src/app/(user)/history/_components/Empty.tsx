import Image from "next/image";

const Empty = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full mt-4">
      <Image
        src={"/images/no_record_compressed.png"}
        alt="no_chat"
        width={200}
        height={100}
      />
      <span className="text-muted/70 text-sm">
        Ops! You don't have any history yet
      </span>
    </div>
  );
};

export default Empty;
