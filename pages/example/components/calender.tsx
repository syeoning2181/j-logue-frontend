import styled from 'styled-components';

import { Layout, TabBar } from '@/shared/components';

const CalenderExample = () => {
  return (
    <Wrapper title="Calender Example">
      <>Calender Example</>

      <TabBar />
    </Wrapper>
  );
};

export default CalenderExample;

const Wrapper = styled(Layout)``;
