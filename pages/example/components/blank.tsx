import styled from "styled-components";

import { Layout, TabBar } from "@/shared/components";

const BlankExample = () => {
  return (
    <Wrapper title="Blank Example">
      <>Blank Example</>

      <TabBar />
    </Wrapper>
  );
};

export default BlankExample;

const Wrapper = styled(Layout)``;
