import styled from "@emotion/styled";
import theme from "@styles/Theme";

export const Wrapper = styled.div`
  background-color: ${theme.COLORS.CONTAINER_WHITE};
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

export const EditImageContainer = styled.div`
  width: 60vw;
  margin-top: 5%;
  margin-bottom: 7%;
`;

export const EditInfoContainer = styled.div`
  width: 60vw;
`;

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
  font-weight: ${theme.FONT_WEIGHT.BOLD};
  align-items: center;
`;

export const ToggleText = styled.div``;

export const ToggleBtn = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 5%;

  > .toggle-container {
    width: 75px;
    height: 30px;
    border-radius: 40px;
    background-color: ${theme.COLORS.LINE_GRAY};
    transition: all 0.2s ease;
  }

  > .toggle--checked {
    background-color: ${theme.COLORS.BRIGHT_ORANGE};
  }

  > .toggle-circle {
    position: absolute;
    top: 2px;
    left: 5px;
    width: 25px;
    height: 25px;
    border-radius: 70%;
    background-color: ${theme.COLORS.BACKGROUND_WHITE};
    transition: all 0.25s ease;
  }

  > .toggle--checked {
    left: 45px;
  }
`;

export const NicknameContainer = styled.div`
  margin-top: 50px;
`;

export const Nickname = styled.div`
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
  font-weight: ${theme.FONT_WEIGHT.BOLD};
`;

export const NicknameInput = styled.input`
  margin-top: 3%;
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
  border: solid 2px ${theme.COLORS.BRIGHT_ORANGE};
  border-radius: 8px;
  background: ${theme.COLORS.BACKGROUND_WHITE};
  height: 40px;
  padding-left: 3%;
`;

export const IntroduceContainer = styled.div`
  margin-top: 50px;
`;

export const Introduce = styled.div`
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
  font-weight: ${theme.FONT_WEIGHT.BOLD};
`;

export const IntroduceTextarea = styled.textarea`
  width: 100%;
  height: 90px;
  margin-top: 3%;
  padding: 3%;
  font-size: ${theme.FONT_SIZE.SMALL_SIZE};
  border: solid 2px ${theme.COLORS.BRIGHT_ORANGE};
  border-radius: 8px;
  background: ${theme.COLORS.BACKGROUND_WHITE};
  resize: none;
`;

export const EditBtnContainer = styled.div`
  margin-top: 70px;
`;