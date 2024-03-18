type LinkObject = {
  label: string,
  url: string,
}

type UserLanguage =
  | '한국어' // Korean
  | 'हिन्दी' // Hindi
  | 'ភាសាខ្មែរ' // Khmer
  | 'ဗမာစာ' // Burmese
  | 'नेपाली' // Nepalese
  | 'සිංහල' // Sri Lankan
  | 'Tiếng Việt' // Vietnamese
  | '中文' // Chinese
  | 'Deutsch' // German
  | 'Italiano' // Italian
  | 'Polski' // Polish
  | 'Svenska' // Swedish
  | 'Tagalog' // Tagalog
  | 'Français' // French
  | 'ภาษาไทย' // Thai
  | 'Русский' // Russian
  | 'العربية' // Arabic
  | 'Türkçe' // Turkish
  | 'Монгол' // Mongolian
  | 'বাংলা' // Bengali (Bangladesh)
  | "O'zbek" // Uzbek
  | 'Português' // Portuguese
  | 'Español' // Spanish
  | 'Bahasa Indonesia' // Indonesian
  | 'Bahasa Melayu' // Malaysian
  | 'Qazaq' // Kazakh
  | 'кыргыз' // Kyrgyz
  | 'اردو'; // Urdu

type LangOption = {
  label: string,
  value: UserLanguage
}


export const HeaderLinks: { leftLinks: LinkObject[], rightLinks:LinkObject[], languageOpts: LangOption[] } = {
  leftLinks: [
    { label: "QNA 홈", url: "/qna" },
    { label: "커뮤니티", url: "/community" },
    { label: "프리톡", url: "/free-talk" }
  ],
  rightLinks: [
    { label: "문의", url: "/inquiry" },
    { label: "후원", url: "/donate" },
    { label: "로그인/회원가입", url: "/login" }
  ],
  languageOpts: [
    { label: "한국어", value: "korean" },
    { label: "हिन्दी", value: "हिन्दी" },
    { label: "ភាសាខ្មែរ", value: "ភាសាខ្មែរ" },
    { label: "ဗမာစာ", value: "ဗမာစာ" },
    { label: "नेपाली", value: "नेपाली" },
    { label: "සිංහල", value: "සිංහල" },
    { label: "Tiếng Việt", value: "Tiếng Việt" },
    { label: "中文", value: "中文" },
    { label: "Deutsch", value: "Deutsch" },
    { label: "Italiano", value: "Italiano" },
    { label: "Polski", value: "Polski" },
    { label: "Svenska", value: "Svenska" },
    { label: "Tagalog", value: "Tagalog" },
    { label: "Français", value: "Français" },
    { label: "ภาษาไทย", value: "ภาษาไทย" },
    { label: "Русский", value: "Русский" },
    { label: "العربية", value: "العربية" },
    { label: "Türkçe", value: "Türkçe" }, // Turkish
    { label: "Монгол", value: "Монгол" }, // Mongolian
    { label: "বাংলা", value: "বাংলা" }, // Bengali (Bangladesh)
    { label: "O'zbek", value: "O'zbek" }, // Uzbek
    { label: "Português", value: "Português" }, // Portuguese
    { label: "Español", value: "Español" }, // Spanish
    { label: "Bahasa Indonesia", value: "Bahasa Indonesia" }, // Indonesian
    { label: "Bahasa Melayu", value: "Bahasa Melayu" }, // Malaysian
    { label: "Qazaq", value: "Qazaq" }, // Kazakh
    { label: "кыргыз", value: "кыргыз" }, // Kyrgyz
    { label: "اردو", value: "اردو" }, // Urdu
  ]
}
