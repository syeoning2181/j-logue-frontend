import styled from "styled-components";

import { Layout, TabBar } from "@/shared/components";

const TextExample = () => {
  return (
    <Wrapper title="Text Example">
      <>Text Example</>

      <TabBar />
    </Wrapper>
  );
};

export default TextExample;

const Wrapper = styled(Layout)``;
