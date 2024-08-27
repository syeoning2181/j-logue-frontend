import styled from 'styled-components';

import { Color, Variant } from '@/shared/constants';
import { Layout, TabBar, Text } from '@/shared/components';

const ColorConstant = () => {
  return (
    <Wrapper title="Color Constant">
      {Object.entries(Color).map(([colorName, shades]) => (
        <div key={colorName} className="color-list">
          {typeof shades === 'object' &&
            Object.entries(shades).map(([shade, hex], index) => (
              <div
                key={shade}
                className="color"
                style={{
                  backgroundColor: hex,
                }}
              >
                <Text
                  variant={Variant.Body_14}
                  color={['50', '100'].includes(shade) ? Color[colorName][300] : Color.White}
                  inline
                >
                  {index === 0 && `${colorName} `}
                  {shade}
                </Text>
                <Text
                  variant={Variant.Body_14}
                  color={['50', '100'].includes(shade) ? Color[colorName][300] : Color.White}
                  inline
                >
                  {hex}
                </Text>
              </div>
            ))}
        </div>
      ))}

      <TabBar />
    </Wrapper>
  );
};

export default ColorConstant;

const Wrapper = styled(Layout)`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  padding: 10px;

  .color-list {
    .color {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
    }
  }
`;
