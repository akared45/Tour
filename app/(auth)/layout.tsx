import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <section
        className="
          relative
        min-h-[100svh]
        w-full
        bg-[url('/wallhaven.jpg')]
        bg-cover
        bg-center
        bg-no-repeat
        flex
        items-center
        justify-center
      "
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 flex items-center justify-center w-full p-5 md:p-9">
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">{children}</div>
        </div>
      </section>
    </>
  );
}
