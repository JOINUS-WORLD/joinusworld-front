# 버튼 컴포넌트 / Button Component

- [Default Button](#1-default-button)
- [Icon Button](#2-icon-button)

## 1. Default Button

> 웹 접근성을 고려한 버튼 컴포넌트 구현 / Implementation of a button component with consideration for web accessibility.

### 0. figma

<img width="634" alt="image" src="https://github.com/JOINUS-WORLD/joinusworld-front/assets/125176463/b913b070-1fba-47db-a341-22fbc9dfd9c3">

[Figma Link](https://www.figma.com/file/455vVksnUhFPC60Xz8FrQZ/Design-System?type=design&node-id=79-76&mode=design&t=dIgj7KrVpqXdp5NY-0)

### 1. props

- **style**
  - **theme**:
    - `primary, secondary, tertiary, info, success, warning, danger`
  - **isFlexible**:
    - `true / false`
  - **size**:
    - `s, m, l, xl`
  - **variant**:
    - `solid, outline, ghost`
  - **etc...**
- **hook**
  - **elementType**
    - `button, a, div, span, input`
  - **type**
    - `button, submit, reset`
  - **isDisabled**
  - **isLoading**
  - **onKeyDown, onClick, ..**
  - **etc...**

### 2. example **(storybook)**

|                                                                                                                            |                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| ![sb_btn 시연](https://github.com/JOINUS-WORLD/joinusworld-front/assets/125176463/060ad050-8219-40b0-8a90-f5d0cbe963cf) | ![sb_btn 종류](https://github.com/JOINUS-WORLD/joinusworld-front/assets/125176463/d4c0dda2-627b-49c8-90eb-f26da2a04dcf) |

### 3. example **(code)**

1. package 다운로드 후, layout 파일에 CSS 파일 import  
   / Download packages and import CSS file into layout file.

```typescript
yarn add @join-world/ui-components-button @join-world/ui-hooks-button

// layout.tsx
import "@join-world/ui-components-button/style.css";
```

2. CSR 환경에서 Button 컴포넌트 import 후 필요한 속성 할당
   / Import Button component in CSR environment and assign necessary attributes.

```typescript
"use client";

import { Button } from "@join-world/ui-components-button";

export default function TestPage() {
  return (
       <Button state="secondary" variant="solid" size="m" onClick={()=>console.log('test')}>
        안녕하세요
      </Button>
   );
}

```

3. 테스트 화면 / Test screen

![sb default_btn](https://github.com/JOINUS-WORLD/joinusworld-front/assets/125176463/452959bb-4457-485b-85b4-10476f2c0379)

## 2. Icon Button

### 0. figma

| icon                                                                                                                                        | icon with Text                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="333" alt="image" src="https://github.com/JOINUS-WORLD/joinusworld-front/assets/125176463/cbd26fce-dcea-4868-93a3-aad01ec36c6d"> | <img width="333" alt="image" src="https://github.com/JOINUS-WORLD/joinusworld-front/assets/125176463/f75fe553-1b60-4b83-9baf-5b4b4c633be0"> |

[Figma Link](https://www.figma.com/file/455vVksnUhFPC60Xz8FrQZ/Design-System?type=design&node-id=79-76&mode=design&t=dIgj7KrVpqXdp5NY-0)

<br>

### 1. props

> basically same with the button component

+)

- **style**
  - **left-icon / right-icon / icon**:
    - `add icon component or emoji text`
  - **etc...**

<br>

### 2. icon button example **(code)**

1. package 다운로드 후, layout 파일에 CSS 파일 import  
   / Download packages and import CSS file into layout file.

```typescript
yarn add @join-world/ui-components-button @join-world/ui-hooks-button

// layout.tsx
import "@join-world/ui-components-button/style.css";
```

2. CSR 환경에서 ButtonWithIcon 컴포넌트 import 후 필요한 속성 할당
   / Import Button component in CSR environment and assign necessary attributes.

> Material Design Icon 라이브러리에서 아이콘 사용 / Use Icon based on Material Design Icon library

```typescript
"use client";

import { Button } from "@join-world/ui-components-button";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function TestPage() {
  const icon = () => {
    return <AcUnitIcon fontSize="small" />;
  };

  return (
     // icon with text button
      <ButtonWithIcon
        theme="primary"
        variant="outline"
        size="l"
        rightIcon={icon()}
        isFlexible={false}
      >
        안녕!
      </ButtonWithIcon>

    // or icon button
      <ButtonWithIcon
        theme="secondary"
        size="s"
        icon={icon()}
      >
  );
}
```

3. 테스트 화면 / Test screen

| icon                                                                                                                    | icon with text                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| ![sb icon_btn](https://github.com/JOINUS-WORLD/joinusworld-front/assets/125176463/b6d53b9a-741a-47e0-946e-d20e145cf787) | ![sb icon_with_text](https://github.com/JOINUS-WORLD/joinusworld-front/assets/125176463/fbe6bfda-868d-4126-8583-79186876d0cd) |

<br> [[이슈 번호 : juw-86]](https://joinuskorea.atlassian.net//browse/juw-86)
