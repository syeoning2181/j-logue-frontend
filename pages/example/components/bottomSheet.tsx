import styled from 'styled-components';

import { Layout, TabBar } from '@/shared/components';

const BottomSheetExample = () => {
  return (
    <Wrapper title="BottomSheet Example">
      <>BottomSheet Example</>

      <TabBar />
    </Wrapper>
  );
};

export default BottomSheetExample;

const Wrapper = styled(Layout)``;
