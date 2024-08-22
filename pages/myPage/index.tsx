import styled from "styled-components";

import { Layout, TabBar } from "@/shared/components";

const MyPage = () => {
  return (
    <Wrapper hideHeader>
      <>MyPage</>

      <TabBar />
    </Wrapper>
  );
};

export default MyPage;

const Wrapper = styled(Layout)``;
