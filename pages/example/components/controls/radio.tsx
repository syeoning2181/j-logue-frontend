import styled from 'styled-components';

import { Layout, TabBar } from '@/shared/components';

const RadioExample = () => {
  return (
    <Wrapper title="Radio Example">
      <>Radio Example</>

      <TabBar />
    </Wrapper>
  );
};

export default RadioExample;

const Wrapper = styled(Layout)``;
