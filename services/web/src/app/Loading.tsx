"use client";
import styled from "@emotion/styled";

export default function Loading() {
  return (
    <S.Container>
      <S.Spinner />
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
  `,
  Spinner: styled.div`
    width: 60px;
    height: 60px;
    box-sizing: border-box;
    border: 11px solid lightgray;
    border-radius: 50%;
    border-left-color: green;
    animation: rotate 1s ease-in-out infinite;

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }

      100% {
        transform: rotate(360deg);
      }
    }
  `,
};
