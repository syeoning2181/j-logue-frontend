import React, { ComponentPropsWithoutRef, ForwardedRef, forwardRef, memo } from 'react';

import styled, { css } from 'styled-components';

import { Variant, FontSize, FontWeight } from '@/shared/constants';

type FontSizeType = keyof typeof FontSize;
type FontWeightType = keyof typeof FontWeight;

export interface TextProps extends ComponentPropsWithoutRef<'p'> {
  variant?: Variant; // 텍스트 프리셋
  color?: string; // 텍스트 색상
  size?: FontSizeType; // 텍스트 크기
  weight?: FontWeightType; // 텍스트 굵기
  alignCenter?: boolean; // 텍스트 가운데 정렬 여부
  isEllipsis?: boolean; // 텍스트 말줄임 여부
  inline?: boolean; // 텍스트 span 태그 적용
}

export const Text = forwardRef(
  (
    {
      inline = false,
      isEllipsis = false,
      alignCenter = false,
      color = '#000',
      ...props
    }: TextProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const tagName = inline ? 'span' : 'p';

    return (
      <Wrapper
        as={tagName}
        color={color}
        $alignCenter={alignCenter}
        $isEllipsis={isEllipsis}
        $inline={inline}
        {...props}
        ref={ref}
      />
    );
  },
);
Text.displayName = 'Text';

export default memo(Text);

const Head_25 = css`
  ${FontWeight[700]}
  ${FontSize[25]}
`;

const Head_22 = css`
  ${FontWeight[700]}
  ${FontSize[22]}
`;

const Head_20 = css`
  ${FontWeight[700]}
  ${FontSize[20]}
`;

const Head_18 = css`
  ${FontWeight[700]}
  ${FontSize[18]}
`;

const Head_16 = css`
  ${FontWeight[700]}
  ${FontSize[16]}
`;

const Title_16 = css`
  ${FontWeight[500]}
  ${FontSize[16]}
`;

const Title_15 = css`
  ${FontWeight[500]}
  ${FontSize[15]}
`;

const Title_14 = css`
  ${FontWeight[500]}
  ${FontSize[14]}
`;

const Title_13 = css`
  ${FontWeight[500]};
  ${FontSize[13]}
`;

const Body_16 = css`
  ${FontWeight[400]}
  ${FontSize[16]}
`;

const Body_15 = css`
  ${FontWeight[400]}
  ${FontSize[15]}
`;

const Body_14 = css`
  ${FontWeight[400]}
  ${FontSize[14]}
`;

const Body_13 = css`
  ${FontWeight[400]}
  ${FontSize[13]}
`;

const Body_12 = css`
  ${FontWeight[400]}
  ${FontSize[12]}
`;

const Sub_11 = css`
  ${FontWeight[400]}
  ${FontSize[11]}
`;

const Wrapper = styled.p<{
  color?: string;
  variant?: Variant;
  size?: FontSizeType;
  weight?: FontWeightType;
  $isEllipsis?: boolean;
  $alignCenter?: boolean;
  $inline?: boolean;
}>`
  margin: 0;
  padding: 0;
  width: 100%;
  font-family: 'Noto Sans KR', sans-serif !important;
  color: ${({ color }) => color};
  letter-spacing: -0.2px;
  white-space: pre-line;

  ${(props) => props.variant === Variant.Head_25 && Head_25}
  ${(props) => props.variant === Variant.Head_22 && Head_22}
  ${(props) => props.variant === Variant.Head_20 && Head_20}
  ${(props) => props.variant === Variant.Head_18 && Head_18}
  ${(props) => props.variant === Variant.Head_16 && Head_16}
  ${(props) => props.variant === Variant.Title_16 && Title_16}
  ${(props) => props.variant === Variant.Title_15 && Title_15}
  ${(props) => props.variant === Variant.Title_14 && Title_14}
  ${(props) => props.variant === Variant.Title_13 && Title_13}
  ${(props) => props.variant === Variant.Body_16 && Body_16}
  ${(props) => props.variant === Variant.Body_15 && Body_15}
  ${(props) => props.variant === Variant.Body_14 && Body_14}
  ${(props) => props.variant === Variant.Body_13 && Body_13}
  ${(props) => props.variant === Variant.Body_12 && Body_12}
  ${(props) => props.variant === Variant.Sub_11 && Sub_11}

  ${({ size }) => size && FontSize[size]}
  ${({ weight }) => weight && FontWeight[weight]}

  ${({ $isEllipsis }) =>
    $isEllipsis &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}

  ${({ $alignCenter }) =>
    $alignCenter &&
    css`
      text-align: center;
    `}

    ${({ $inline }) =>
    $inline &&
    css`
      display: inline-block;
      width: auto;
    `}
`;
