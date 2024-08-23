import styled from 'styled-components';

import { Layout, TabBar } from '@/shared/components';

const InputExample = () => {
  return (
    <Wrapper title="Input Example">
      <>Input Example</>

      <TabBar />
    </Wrapper>
  );
};

export default InputExample;

const Wrapper = styled(Layout)``;
