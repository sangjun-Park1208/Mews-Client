import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  gap: 20px;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;

  flex-wrap: nowrap;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
`;
