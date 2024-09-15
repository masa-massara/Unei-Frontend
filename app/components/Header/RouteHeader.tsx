import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

type Props = {
  title: string;
};

const RouteHeader = ({ title }: Props) => {
  return (
    <div className="fixed flex mx-4 w-[calc(100%-2rem)] mt-2 top-0 z-50 h-16 border bg-white border-gray-200 items-center rounded-lg justify-between">
      <a href="/home" className="ml-4 text-black">
        <ArrowBackIosNewIcon />
      </a>
      <div className="text-center">
        <h1 className="text-lg font-bold">{title}</h1>
      </div>
      <div className="mr-4 w-6"></div>
    </div>
  );
};

export default RouteHeader;
