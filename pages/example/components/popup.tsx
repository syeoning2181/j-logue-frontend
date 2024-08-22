import styled from "styled-components";

import { Layout, TabBar } from "@/shared/components";

const PopupExample = () => {
  return (
    <Wrapper title="Popup Example">
      <>Popup Example</>

      <TabBar />
    </Wrapper>
  );
};

export default PopupExample;

const Wrapper = styled(Layout)``;
