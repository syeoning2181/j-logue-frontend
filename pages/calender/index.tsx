import styled from 'styled-components';

import { Layout, TabBar } from '@/shared/components';

const Calender = () => {
  return (
    <Wrapper hideHeader>
      <>Calender</>

      <TabBar />
    </Wrapper>
  );
};

export default Calender;

const Wrapper = styled(Layout)``;
