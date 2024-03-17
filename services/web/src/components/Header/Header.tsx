"use client";

import styled from "@emotion/styled";
import { vars } from "@join-world/themes";
import Image from "next/image";
import Link from "next/link";

import JUWLogo from "../../../public/assets/JUW_logo.png"

export default function Header() {
  return (
    <S.Nav>
      <S.Contents>
          <Image src={JUWLogo} alt="JOINUSWORLD-KOREA" width={232.12} height={36} />
          <S.Links>
            <Link href="/">QNA 홈</Link>
            <Link href="/">커뮤니티</Link>
            <Link href="/">프리톡</Link>
          </S.Links>
          <S.Searchbar>

          </S.Searchbar>
          <S.Links>
            <Link href="/">한국어</Link>
            <Link href="/">문의</Link>
            <Link href="/">후원</Link>
            <Link href="/">로그인/회원가입</Link>
          </S.Links>
      </S.Contents>
    </S.Nav>
  );
}

const S = {
  Nav: styled.nav`
    display: flex;
    width: 100%;
    height: 60px;
    box-sizing: border-box;
    width: 1920px;
    padding: 0px 24px;
    border-bottom: 1px solid black;
  `,
  Contents: styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    width: 1440px;
    height: 60px;
    padding: 0px 24px;
    gap: 24px;
  `,
  Links: styled.div`
    display: flex;
    justify-content: center;
    width: 1280px;
    gap: 36px;
  `,
  Searchbar: styled.input`
    width: 553.68px;
    height: 40px;
    gap: 4px;
  `,
  Icon: styled.i`
    height: 24px;
    width: 24px;
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
