"use client";

import styled from "@emotion/styled";
import { vars } from "@join-world/themes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// utils
import { HeaderLinks } from "@/utils/Header.utils";
const { leftLinks, rightLinks, languageOpts } = HeaderLinks;

// media
import JUWLogo from "../../../public/assets/JUW_logo.png"


export default function Header() {

  const [currentLanguage, setCurrentLanguage] = useState("한국어");

  return (
    <S.Nav>
      <S.Contents>
          <Image src={JUWLogo} alt="JOINUSWORLD-KOREA" width={232.12} height={36} />
          <S.Links>
            {leftLinks.map((link, i) => {
              return (
                  <StyledLink href={link.url} key={i}>
                    {link.label}
                  </StyledLink>
              )
            })}
          </S.Links>
          <S.Searchbar placeholder="긍금한 점이 있으신가요?">
            
          </S.Searchbar>
          <S.LanguagePicker>
            <S.Icon className="material-symbols-outlined">
              language
            </S.Icon>
            <S.CurrentLanguage>{currentLanguage}</S.CurrentLanguage>
          </S.LanguagePicker>
          <S.Links>
            {rightLinks.map((link, i) => {
              return (
                <StyledLink href={link.url} key={i}>
                  {link.label}
                </StyledLink>
              )
            })}
          </S.Links>
      </S.Contents>
    </S.Nav>
  );
}

const S = {
  Nav: styled.nav`
    display: flex;
    justify-content: center;
    height: 60px;
    box-sizing: border-box;
    width: 100%;
    color: ${vars.colors.mode.ref.palette.black};
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
  LanguagePicker: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    cursor: pointer;
  `,
  CurrentLanguage: styled.span`
    font-size: ${vars.ref.typeface.fontSize[1]};
    font-weight: ${vars.ref.typeface.fontWeight.semibold};
    word-break: keep-all;
  `,
  Searchbar: styled.input`
    width: 100%;
    height: 40px;
    gap: 4px;
    padding: 0px 24px;
    border: none;
  `,
  Icon: styled.i`
    height: 24px;
    width: 24px;
    padding-right: 8px;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: ${vars.ref.typeface.fontWeight.semibold}
`
