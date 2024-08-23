import { useRouter } from 'next/router';
import styled from 'styled-components';

import { AppBar } from '@/shared/components';
import { Size } from '@/shared/constants';

export interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  hideHeader?: boolean;
  onClickBack?: () => void;
}

const Layout = ({ children, className, title, hideHeader = false, onClickBack }: LayoutProps) => {
  const router = useRouter();

  const goBack = () => {
    if (onClickBack) {
      onClickBack();
      return;
    }

    router.back();
  };

  return (
    <>
      {!hideHeader && <AppBar title={title} onClickBack={goBack} />}

      <Main className={className} $hideHeader={hideHeader}>
        {children}
      </Main>
    </>
  );
};

export default Layout;

const Main = styled.main<{ $hideHeader: boolean }>`
  box-sizing: border-box;
  max-width: ${Size.FULL_WIDTH}px;
  min-height: ${({ $hideHeader }) =>
    $hideHeader ? '100vh' : `calc(100vh - ${Size.APP_BAR_HEIGHT}px)`};
  margin: 0 auto;

  * {
    box-sizing: inherit;
  }
`;
