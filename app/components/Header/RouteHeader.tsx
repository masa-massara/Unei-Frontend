import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

type Props = {
	title: string;
	prePath?: string;
};

const RouteHeader = ({ title, prePath }: Props) => {
	prePath = "aa";
	return (
		<div className="w-full flex justify-center">
			<div className="fixed flex items-center w-[calc(100%-2rem)] px-10 mt-2 top-0 z-50 h-16 border bg-white shadow-md  rounded-lg">
				<div className="flex-none">
					{prePath ? (
						<a href={prePath} className="text-black">
							<ArrowBackIosNewIcon />
						</a>
					) : (
						<div className="w-6"></div>
					)}
				</div>
				<div className="flex-grow text-center">
					<h1 className="text-lg font-bold">{title}</h1>
				</div>
				<div className="flex-none w-6"></div> {/* 右側のスペース */}
			</div>
		</div>
	);
};

export default RouteHeader;
