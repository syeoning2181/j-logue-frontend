import styled from 'styled-components';

import { Layout, TabBar } from '@/shared/components';

const TimePickerExample = () => {
  return (
    <Wrapper title="TimePicker Example">
      <>TimePicker Example</>

      <TabBar />
    </Wrapper>
  );
};

export default TimePickerExample;

const Wrapper = styled(Layout)``;
