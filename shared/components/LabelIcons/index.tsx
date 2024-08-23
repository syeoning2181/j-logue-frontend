import React, { memo } from 'react';

export enum LabelIconType {
  Back,
}

interface IconProps {
  color?: string;
  width?: number;
  height?: number;
  viewBox?: string;
  className?: string;
  style?: React.CSSProperties;
  fill?: string;
  stroke?: string;
}

export interface LabelIconProps extends IconProps {
  type: LabelIconType;
}

type LabelIconRecord = Record<LabelIconType, (props: IconProps) => JSX.Element>;

const LabelIcons: LabelIconRecord = {
  [LabelIconType.Back]: ({ className, style, color }: Partial<IconProps>) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={className} style={style}>
      <path d="M16 4L8 12L16 20" stroke={color || '#fff'} strokeWidth="2" />
    </svg>
  ),
};

const LabelIcon = ({ type, ...labelIconProps }: LabelIconProps) => {
  return LabelIcons[type]({
    ...labelIconProps,
  });
};

export default memo(LabelIcon);
