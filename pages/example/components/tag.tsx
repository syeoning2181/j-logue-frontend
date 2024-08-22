import styled from "styled-components";

import { Layout, TabBar } from "@/shared/components";

const TagExample = () => {
  return (
    <Wrapper title="Tag Example">
      <>Tag Example</>

      <TabBar />
    </Wrapper>
  );
};

export default TagExample;

const Wrapper = styled(Layout)``;
