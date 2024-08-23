import styled from 'styled-components';

import { Layout, TabBar } from '@/shared/components';

const ColorConstant = () => {
  return (
    <Wrapper title="Color Constant">
      <>Color Constant</>

      <TabBar />
    </Wrapper>
  );
};

export default ColorConstant;

const Wrapper = styled(Layout)``;
