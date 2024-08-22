import styled from "styled-components";

import { Layout, TabBar } from "@/shared/components";

const CalenderAdd = () => {
  return (
    <Wrapper hideHeader>
      <>Calender Add</>

      <TabBar />
    </Wrapper>
  );
};

export default CalenderAdd;

const Wrapper = styled(Layout)``;
