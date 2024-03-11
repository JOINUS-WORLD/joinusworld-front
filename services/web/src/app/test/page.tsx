"use client";

import { ButtonWithIcon } from "@join-world/ui-components-button";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Link from "next/link";

export default function TestPage() {
  const icon = () => {
    return <AcUnitIcon fontSize="small" />;
  };

  return (
    <div>
      <h1>Test</h1>
      <Link href="/">Home</Link>
      <ButtonWithIcon
        theme="secondary"
        variant="outline"
        size="s"
        icon={icon()}
      >
        안녕!
      </ButtonWithIcon>
    </div>
  );
}
