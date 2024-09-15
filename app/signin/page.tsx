import React from "react";
import HomeHeader from "../components/Header/HomeHeader";
import Card from "../components/Card";
import Tags from "../components/Tag/Tags";

const page = () => {
	return (
		<>
			<HomeHeader />
            <Card>
                <Tags tags={[{name:"ログイン",color:"#F5BDBD"}]}/>
            </Card>
		</>
	);
};

export default page;
