import styled from "styled-components";

import { Layout, TabBar } from "@/shared/components";

const DatePickerExample = () => {
  return (
    <Wrapper title="DatePicker Example">
      <>DatePicker Example</>

      <TabBar />
    </Wrapper>
  );
};

export default DatePickerExample;

const Wrapper = styled(Layout)``;
