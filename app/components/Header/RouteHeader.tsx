const RouteHeader = () => {
  return (
    <div className="fixed w-full top-0 bg-white z-50 flex h-20 border-b border-gray-200 items-center justify-end">
      <a href="/" className="ml-2 text-black">
        戻る
      </a>
      <div className="flex-grow text-center">
        <h1 className="text-lg font-bold">詳細ページのタイトル</h1>
      </div>
    </div>
  );
};

export default RouteHeader;
