import React from 'react';

import styled from 'styled-components';

import { Text } from '@/shared/components';
import LabelIcon, { LabelIconType } from '@/shared/components/LabelIcons';
import { Size, Variant } from '@/shared/constants';

export const APP_BAR_HEIGHT = '62px';

interface AppBarProps {
  title?: string;
  onClickBack: () => void;
}

const AppBar = ({ title, onClickBack }: AppBarProps) => (
  <>
    <Header>
      <button type="button" className="backButton" onClick={onClickBack}>
        <LabelIcon type={LabelIconType.Back} color="#000" />
      </button>

      {title && (
        <Text className="title" variant={Variant.Head_16} alignCenter>
          {title}
        </Text>
      )}
    </Header>

    <PlaceHolder />
  </>
);

export default AppBar;

const Header = styled.header`
  width: 100%;
  max-width: ${Size.FULL_WIDTH}px;
  height: ${Size.APP_BAR_HEIGHT}px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  margin: 0 auto;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eeeeee;

  .backButton {
    padding: 0 0 0 20px;
    background: none;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .title {
    position: absolute;
    pointer-events: none;
  }
`;

const PlaceHolder = styled.div`
  width: 100%;
  height: ${Size.APP_BAR_HEIGHT}px;
`;
