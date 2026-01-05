import { ReactNode } from "react";
import Image from "next/image";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <section
        className="
          relative
        min-h-[100svh]
        w-full
       
        flex
        items-center
        justify-center
      "
      >
        <Image
          src="https://res.cloudinary.com/dcfaz2rme/image/upload/v1767585061/wallhaven_opqtwn.jpg"
          alt="Background"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 flex items-center justify-center w-full p-5 md:p-9">
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">{children}</div>
        </div>
      </section>
    </>
  );
}
