import React, { useState, useEffect } from "react";
import AuthorIntro from "@components/AuthorIntro";
import ContentCard from "@components/ContentCard";
import ContentWrapper from "@components/ContentWrapper";
import CardSlider from "@components/CardSlider";
import ContentRow from "@components/ContentRow";
import infiniteArticle from "@pages/tmp/infiniteArticle";
import PageTemplate from "@components/PageTemplate";
import { Article } from "../../types/article";
import * as s from "./styles";

// 추후 authorName은 props로 받아오는것으로 수정되어야 함
interface textSetInterface {
  latestPost: string;
  allPost: string;
  authorName: string;
}

export default function AuthorInfo() {
  const [subscribe, setSubscribe] = useState<Boolean>(false);
  const [array, setArray] = useState<Article[]>([]);

  useEffect(() => {
    getArticleList();
  }, []);

  const textSet: textSetInterface = {
    latestPost: "님이 최근 작성한 글",
    allPost: "님이 작성한 글",
    authorName: "한수정",
  };

  // 추후 구독유무 넘겨주는 코드 추가되어야 함
  const onClickSubscribe = () => {
    setSubscribe(!subscribe);
  };

  // 임시 데이터 불러옴
  const getArticleList = () => {
    setArray([...array, ...infiniteArticle]);
  };

  return (
    <PageTemplate>
      <s.Wrapper>
        <s.TopContainer>
          <AuthorIntro />
          <s.SubscribeBtnContainer onClick={onClickSubscribe}>
            <s.SubscribeBtn className={subscribe ? "active" : ""}>
              {subscribe ? "구독 취소" : "구독"}
            </s.SubscribeBtn>
          </s.SubscribeBtnContainer>
        </s.TopContainer>
        <s.AllPostContainer>
          <s.AllPost>{textSet.authorName + textSet.allPost}</s.AllPost>
          <s.CountPost>{infiniteArticle.length}개</s.CountPost>
        </s.AllPostContainer>
        <s.BottomContainer>
          <ContentWrapper contentName={textSet.authorName + textSet.latestPost}>
            <CardSlider>
              {infiniteArticle.slice(0, 3).map((e: Article, index: number) => {
                return <ContentCard {...e} key={index + 1} />;
              })}
            </CardSlider>
          </ContentWrapper>
          <ContentWrapper contentName={textSet.authorName + textSet.allPost}>
            {infiniteArticle.length
              ? array.map((e: Article, index: number) => (
                  <ContentRow
                    index={index + 1}
                    key={index + 1}
                    contentInfo={{
                      ...e,
                    }}
                  />
                ))
              : "게시글이 없습니다."}
            <button onClick={() => getArticleList()}>더 불러오기</button>
          </ContentWrapper>
        </s.BottomContainer>
      </s.Wrapper>
    </PageTemplate>
  );
}
