import styled from "styled-components";

import { Layout, TabBar } from "@/shared/components";

const UploadExample = () => {
  return (
    <Wrapper title="Upload Example">
      <>Upload Example</>

      <TabBar />
    </Wrapper>
  );
};

export default UploadExample;

const Wrapper = styled(Layout)``;
