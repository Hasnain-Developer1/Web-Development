import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-5 size-[80] bg-red-300 relative">
      <Image className="mx-auto" fill={true} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgCGIiYoLVlHZh_EpPMHjQ8h8KAxQVE_VAnYS28gK6Hw&s=10" alt="" />
    </div>
  );
}
