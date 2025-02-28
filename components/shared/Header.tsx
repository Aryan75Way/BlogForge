const Header = ({
  children,
  heading,
  subHeading,
}: {
  children: React.ReactNode;
  heading: string;
  subHeading: string;
}) => {
  return (
    <div className="h-[60vh] w-full relative flex items-center pt-28 flex-col gap-2">
      <div className="absolute top-0 z-[-2] h-full w-full bg-transparent dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_10%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative w-fit px-2 overflow-hidden rounded-sm bg-white shadow-sm text-zinc-700 outline-none dark:border-zinc-50/20 dark:bg-zinc-950 dark:text-zinc-300">
        <div className="relative">
          <div className="border-t-8 border-r-8  top-0 left-0  border-primary border-r-transparent absolute" />
          <div className="border-b-8 border-l-8  bottom-0 right-0 border-primary border-l-transparent absolute" />
          <h1 className="heading">{heading}</h1>
        </div>
      </div>

      <div className="relative w-fit px-2 overflow-hidden rounded-sm font-geist-mono">
          <p className="text-thin text-sm font-mono">{subHeading}</p>
      </div>

      <div className="relative w-full px-5 mt-10">{children}</div>
    </div>
  );
};
export default Header;