import React from "react";
import Card from "../components/Card";
import Categories from "../components/Categories";
import { Tag } from "@mui/icons-material";
import RouteHeader from "../components/Header/RouteHeader";

const page = () => {
  return (
    <div>
      <RouteHeader title={"設定"} prePath={"/home"} />
      <Card>
        <Categories name={"グループプロフィール"} />
      </Card>
      <Card>
        <Categories name={"グループの共有"} />
      </Card>
      <Card>
        <Categories name={"タグの編集"} />
      </Card>
      <Card>
        <Categories name={"スタンプの編集"} />
      </Card>
      <Card>
        <Categories name={"権限設定"} />
      </Card>
    </div>
  );
};

export default page;
