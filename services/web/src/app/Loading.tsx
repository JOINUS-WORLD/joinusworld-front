"use client";

import styled from "@emotion/styled";
import { vars } from "@join-world/themes";

export default function Loading() {
  return (
    <S.Container>
      <S.Spinner />
      <S.Text>예시</S.Text>
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
  Text: styled.div`
    /* 아래에서 테스트 해보세요. */

    /* (1) var 이용 */

    /* font-weight: var(--ref-typeface-fontweight-bold); */

    /* font-weight: ${vars.ref.typeface.fontweightBold}  */

    /* 특히 colors는 static 말고 다크모드 대응을 위해 2번째의 경우, 전역변수를 이용해서 dark를 동적 데이터로 삽입해야 함 */

    /* color: var(--ref-palette-blue800); */

    /* color: ${vars.colors.dark.ref.palette.blue900}; */

    /* (2) class는 직접 className에 넣거나 아래와 같이 이용 */

    /* ${vars.sys.typescale.bodyB1} */
  `,
};
