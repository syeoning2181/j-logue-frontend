import React, { memo } from "react";
import styled from "styled-components";

export interface DividerProps {
  color?: string;
  borderWidth?: number;
  borderStyle?: "solid" | "dotted" | "dashed";
  margin?: string;
}

const Divider = ({
  color = "#ddd",
  borderWidth = 1,
  borderStyle = "solid",
  margin = "0 0 0 0",
  ...props
}: DividerProps) => {
  return (
    <Wrapper
      color={color}
      borderWidth={borderWidth}
      borderStyle={borderStyle}
      margin={margin}
      {...props}
    />
  );
};

export default memo(Divider);

const Wrapper = styled.div<DividerProps>`
  height: 0;
  border-top: ${({ borderWidth }) => `${borderWidth}px`}
    ${({ borderStyle }) => borderStyle} ${({ color }) => color};
  margin: ${({ margin }) => margin};
`;
