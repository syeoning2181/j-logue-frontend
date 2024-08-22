import styled from "styled-components";

import { Layout, TabBar } from "@/shared/components";

const Todo = () => {
  return (
    <Wrapper hideHeader>
      <>Todo</>

      <TabBar />
    </Wrapper>
  );
};

export default Todo;

const Wrapper = styled(Layout)``;
