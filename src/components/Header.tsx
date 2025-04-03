import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-between items-start">
      <Image
        src="/logo.svg"
        alt="HHP Logo"
        width={160}
        height={53}
        priority
        className="w-40"
        style={{ height: "auto" }}
      />
    </div>
  );
}