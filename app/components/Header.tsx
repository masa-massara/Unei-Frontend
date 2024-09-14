import SettingsIcon from "@mui/icons-material/Settings";
import { Button } from "@mui/material";
import Link from "next/link";

const Header = () => {
  return (
    <div className="h-20 border-b border-gray-200 flex items-center justify-end">
      <Button>
        <Link href="/setting">
          <SettingsIcon className="size-10" />
        </Link>
      </Button>
    </div>
  );
};

export default Header;
