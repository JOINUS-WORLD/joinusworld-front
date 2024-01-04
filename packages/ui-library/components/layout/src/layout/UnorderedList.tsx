import { vars } from "@join-world/themes";
import * as React from "react";

import { Flex } from "./Flex";
import { UnorderedListProps } from "./types";

const UnorderedList = (
  props: UnorderedListProps,
  ref: React.Ref<HTMLOListElement>,
) => {
  const {
    listStyleType = "disc",
    spacing = "size3",
    children,
    ...rest
  } = props;

  return (
    <Flex
      {...rest}
      as="ul"
      ref={ref}
      direction="column"
      style={{
        gap: vars.sys.spacing[spacing],
        listStyleType: listStyleType as string,
      }}
    >
      {children}
    </Flex>
  );
};

const _UnorderedList = React.forwardRef(UnorderedList);
export { _UnorderedList as UnorderedList };
