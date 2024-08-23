import styled from 'styled-components';

import { Layout, TabBar } from '@/shared/components';

const SwitchExample = () => {
  return (
    <Wrapper title="Switch Example">
      <>Switch Example</>

      <TabBar />
    </Wrapper>
  );
};

export default SwitchExample;

const Wrapper = styled(Layout)``;
