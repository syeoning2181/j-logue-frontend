import { css } from 'styled-components';

export enum Variant {
  Head_25 = 'Head_25',
  Head_22 = 'Head_22',
  Head_20 = 'Head_20',
  Head_18 = 'Head_18',
  Head_16 = 'Head_16',
  Title_16 = 'Title_16',
  Title_15 = 'Title_15',
  Title_14 = 'Title_14',
  Title_13 = 'Title_13',
  Body_16 = 'Body_16',
  Body_15 = 'Body_15',
  Body_14 = 'Body_14',
  Body_13 = 'Body_13',
  Body_12 = 'Body_12',
  Sub_11 = 'Sub_11',
}

export const FontWeight = {
  400: css`
    font-weight: 400;
  `,

  500: css`
    font-weight: 500;
  `,

  700: css`
    font-weight: 700;
  `,
};

export const FontSize = {
  25: css`
    font-size: 25px;
    line-height: 37px;
  `,
  22: css`
    font-size: 22px;
    line-height: 26px;
  `,
  20: css`
    font-size: 20px;
    line-height: 26px;
  `,
  18: css`
    font-size: 18px;
    line-height: 26px;
  `,
  16: css`
    font-size: 16px;
    line-height: 24px;
  `,
  15: css`
    font-size: 15px;
    line-height: 22px;
  `,
  14: css`
    font-size: 14px;
    line-height: 21px;
  `,
  13: css`
    font-size: 13px;
    line-height: 19px;
  `,
  12: css`
    font-size: 12px;
    line-height: 18px;
  `,
  11: css`
    font-size: 11px;
    line-height: 16px;
  `,
  10: css`
    font-size: 10px;
    line-height: 15px;
  `,
};
