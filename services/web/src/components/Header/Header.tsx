"use client";

import styled from "@emotion/styled";
import { vars } from "@join-world/themes";
import { sys } from "@packages/themes/dist/variables/colors/mode";

export default function Header() {
  return (
    <S.Nav>
      <h1>Hello World</h1>
    </S.Nav>
  );
}

const S = {
  Nav: styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    max-width: 1920px;
    top: 42px;
    left: 20px;
    border-bottom: 1px solid ${sys.color.container.base.border.light1}
    padding: 0px 24px;
  `,
  Contents: styled.div`
    width: 1440px;
    height: 60px;
    padding: 0px 24px;
    gap: 24px;
  `
  // Text: styled.div`
  //   /* 아래에서 테스트 해보세요. */

  //   /* (1) var 이용 */

  //   /* font-weight: var(--ref-typeface-fontweight-bold); */

  //   /* font-weight: ${vars.ref.typeface.fontweightBold}  */

  //   /* 특히 colors는 static 말고 다크모드 대응을 위해 2번째의 경우, 전역변수를 이용해서 dark를 동적 데이터로 삽입해야 함 */

  //   /* color: var(--ref-palette-blue800); */

  //   /* color: ${vars.colors.dark.ref.palette.blue900}; */

  //   /* (2) class는 직접 className에 넣거나 아래와 같이 이용 */

  //   /* ${vars.sys.typescale.bodyB1} */
  // `,
};
