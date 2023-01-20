import TobNavBar from "@components/TopNavBar";
import ContentWrapper from "@components/ContentWrapper";
import CardsSlider from "@components/CardSlider";
import myBookmarkArticle from "@pages/tmp/myBookmarkArticle";
import ContentCard from "@components/ContentCard";
import { useEffect, useState } from "react";
import { Article } from "src/types/article";
import * as s from "./styles";

const MyPage = () => {
  const bookmarkArticle = "내가 북마크한 글";
  /* 더미 데이터 */
  const [articleNumData, setArticleNumData] = useState([3, 2, 1]);
  const [articleNumType, setArticleNumType] = useState(["좋아요", "북마크", "구독"]);
  const [name, setName] = useState("박상준");
  const [introduce, setIntroduce] = useState("테스트 자기소개");
  const tmpImageURL =
    "data:image/png;base64,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";

  /* 비동기 처리 필요 */
  useEffect(() => {
    setName("박상준");
    setIntroduce("테스트 자기소개");
    setArticleNumData([3, 2, 1]);
    setArticleNumType(["좋아요", "북마크", "구독"]);
  }, []);

  return (
    <s.Wrapper>
      <TobNavBar />
      <s.TopContainer>
        <s.ProfileContainer>
          <s.ImageBox>
            <s.Image src={tmpImageURL} />
          </s.ImageBox>
          <s.TextBox>
            <s.Name>{name}</s.Name>
            <s.Introduce>{introduce}</s.Introduce>
          </s.TextBox>
        </s.ProfileContainer>
        <s.EditProfileBtn>프로필 편집</s.EditProfileBtn>

        <s.ArticleNumberContainer>
          {articleNumData.map((d, i) => {
            return (
              <s.ArticleNumberItem>
                <s.Num>{d}</s.Num>
                <s.Type>{articleNumType[i]}</s.Type>
              </s.ArticleNumberItem>
            );
          })}
        </s.ArticleNumberContainer>
      </s.TopContainer>

      <s.BottomContainer>
        <ContentWrapper contentName={bookmarkArticle}>
          <CardsSlider>
            {myBookmarkArticle.map((e: Article) => {
              return (
                <ContentCard
                  key={e.id}
                  category={e.category}
                  title={e.title}
                  authorNames={e.authorNames}
                  isActive={e.isActive}
                  isLike={e.isLike}
                  likeNum={e.likeNum}
                />
              );
            })}
          </CardsSlider>
        </ContentWrapper>
      </s.BottomContainer>
    </s.Wrapper>
  );
};

export default MyPage;
