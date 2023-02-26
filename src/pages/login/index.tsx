import React from "react";
import LargeLogo from "@public/icon/LargeLogo.svg";
import TopNavBar from "@components/TopNavBar";
import BottomNavBar from "@components/BottomNavbar";
import { signIn, useSession } from "next-auth/react";
import GLogo from "@public/icon/GLogo.svg";
import UserAPI from "@api/UserAPI";
import * as s from "./styles";

const NotLoginPage = () => {
  const { data, status } = useSession();
  console.log(data, status);
  const handleClick = async () => {
    const response = await UserAPI.googleLogin();
    console.log(response);

    return response;
  };

  return (
    <s.Wrapper>
      <s.NotLoginContainer>
        <TopNavBar />
        <div>
          <LargeLogo />
        </div>

        <s.MewsIntro>지금 뮤즈에 가입하고</s.MewsIntro>
        <s.MewsAd>기깔나는 홍보문구 들어갈 자리</s.MewsAd>

        <s.Button onClick={() => signIn("google")}>
          <GLogo style={{ marginRight: "4%" }} />
          Sign in with Google
        </s.Button>

        <BottomNavBar />
      </s.NotLoginContainer>
    </s.Wrapper>
  );
};

export default NotLoginPage;
