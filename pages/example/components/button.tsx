import styled from 'styled-components';

import { Layout, TabBar } from '@/shared/components';

const ButtonExample = () => {
  return (
    <Wrapper title="Button Example">
      <>Button Example</>

      <TabBar />
    </Wrapper>
  );
};

export default ButtonExample;

const Wrapper = styled(Layout)``;
