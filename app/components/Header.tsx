import TagModal from "./TagModal";

const Header = () => {
  return (
    <div className="h-16 border-b border-gray-200 flex items-center justify-end">
      {/* <Link href="/setting">
          <SettingsIcon className="size-10" />
        </Link> */}
      <TagModal />
    </div>
  );
};

export default Header;
