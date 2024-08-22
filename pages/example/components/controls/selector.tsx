import styled from "styled-components";

import { Layout, TabBar } from "@/shared/components";

const SelectorExample = () => {
  return (
    <Wrapper title="Selector Example">
      <>Selector Example</>

      <TabBar />
    </Wrapper>
  );
};

export default SelectorExample;

const Wrapper = styled(Layout)``;
