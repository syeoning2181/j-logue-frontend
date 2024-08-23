import styled from 'styled-components';

import { Layout, TabBar } from '@/shared/components';

const CheckBoxExample = () => {
  return (
    <Wrapper title="CheckBox Example">
      <>CheckBox Example</>

      <TabBar />
    </Wrapper>
  );
};

export default CheckBoxExample;

const Wrapper = styled(Layout)``;
