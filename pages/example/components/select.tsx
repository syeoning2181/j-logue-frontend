import styled from "styled-components";

import { Layout, TabBar } from "@/shared/components";

const SelectExample = () => {
  return (
    <Wrapper title="Select Example">
      <>Select Example</>

      <TabBar />
    </Wrapper>
  );
};

export default SelectExample;

const Wrapper = styled(Layout)``;
