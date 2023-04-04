import EditProfileImage from "@components/EditProfileImage";
import PageTemplate from "@components/PageTemplate";
import TobNavBar from "@components/TopNavBar";
import EditProfileAPI from "@pages/api/EditProfileAPI";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { IProfile } from "..";
import * as s from "./styles";

export interface IEditProfile {
  userName: string;
  userEmail: string;
  open: boolean;
  introduction: string;
  imgUrl?: string;
}

const EditMypage = () => {
  const [isFirstState, setIsFirstState] = useState(true); // 수정 사항 없다면 버튼 비활성화

  const [name, setName] = useState("");
  const [introduce, setIntroduce] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [imgURL, setImgURL] = useState("");

  const { data: session } = useSession();

  useEffect(() => {
    const profile: Promise<any> = EditProfileAPI.getProfile(session);
    profile
      .then((data: IProfile) => {
        setName(data.userName);
        setIntroduce(data.introduction);
        setImgURL(data.imgUrl);
        setIsOpen(data.open);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [session]);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
    setIsFirstState(false);
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setIsFirstState(false);
  };

  const onChangeIntroduce = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduce(e.target.value);
    setIsFirstState(false);
  };

  const sendEditProfile = () => {
    const formData = new FormData();
    if (imgURL) {
      formData.append("file", imgURL);
      console.log(imgURL);
    }

    const data = {
      introduction: introduce,
      open: isOpen,
      userName: name,
    };
    formData.append("data", new Blob([JSON.stringify(data)], { type: "application/json" }));
    console.log({formData});
    EditProfileAPI.patchProfile(formData, session);
    alert("프로필이 편집되었습니다.");
    window.location.href = "/mypage";
  };

  return (
    <PageTemplate>
      <s.Wrapper>
        <s.Container>
          <TobNavBar />
          <s.EditContainer>
            <s.EditImageContainer>
              <EditProfileImage serverImageURL={imgURL} setIsFirstState={setIsFirstState} setImgURL={setImgURL}/>
            </s.EditImageContainer>

            <s.EditInfoContainer>
              <s.ToggleContainer>
                <s.ToggleText>정보 공개 여부</s.ToggleText>
                <s.ToggleBtn onClick={toggleHandler}>
                  <div className={`toggle-container ${isOpen ? "toggle--checked" : ""}`} />
                  <div className={`toggle-circle ${isOpen ? "toggle--checked" : ""}`} />
                </s.ToggleBtn>
              </s.ToggleContainer>

              <s.NicknameContainer>
                <s.Nickname>닉네임</s.Nickname>
                <s.NicknameInput onChange={onChangeName} value={name} />
              </s.NicknameContainer>

              <s.IntroduceContainer>
                <s.Introduce>자기 소개</s.Introduce>
                <s.IntroduceTextarea onChange={onChangeIntroduce} value={introduce} />
              </s.IntroduceContainer>
            </s.EditInfoContainer>

            <s.EditBtnContainer>
              <s.EditFinishBtn onClick={sendEditProfile} aria-checked={isFirstState}>
                편집 완료
              </s.EditFinishBtn>
            </s.EditBtnContainer>
          </s.EditContainer>
        </s.Container>
      </s.Wrapper>
    </PageTemplate>
  );
};

export default EditMypage;
