import styled from 'styled-components';

import { Layout, TabBar } from '@/shared/components';

const GridExample = () => {
  return (
    <Wrapper title="Grid Example">
      <>Grid Example</>

      <TabBar />
    </Wrapper>
  );
};

export default GridExample;

const Wrapper = styled(Layout)``;
