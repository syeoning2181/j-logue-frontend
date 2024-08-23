import styled from 'styled-components';

import { Layout, TabBar } from '@/shared/components';

const Alert = () => {
  return (
    <Wrapper hideHeader>
      <>Alert</>

      <TabBar />
    </Wrapper>
  );
};

export default Alert;

const Wrapper = styled(Layout)``;
