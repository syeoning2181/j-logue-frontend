import { useRouter } from 'next/router';
import styled from 'styled-components';

import { Size } from '@/shared/constants';

const TabList = [
  {
    id: 1,
    title: '캘린더',
    url: '/calender',
    icon: 'calender',
  },
  {
    id: 2,
    title: '할일',
    url: '/todo',
    icon: 'todo',
  },
  {
    id: 3,
    title: '캘린더 추가',
    url: '/calender/add',
    icon: 'calender_add',
  },
  {
    id: 4,
    title: '알림',
    url: '/alert',
    icon: 'alert',
  },
  {
    id: 5,
    title: '마이페이지',
    url: '/myPage',
    icon: 'myPage',
  },
];

const TabBar = () => {
  const router = useRouter();

  const handleClickNavButton = (targetPath: string) => {
    const path = window?.location?.pathname;

    if (path === targetPath) {
      return;
    }

    router.push(targetPath);
  };

  return (
    <>
      <Wrapper>
        <div className="buttonWrapper">
          {TabList.map((tab) => (
            <button
              type="button"
              key={tab.id}
              className="tabButton"
              onClick={() => handleClickNavButton(tab.url)}
            >
              <img src={`/images/tabBar/${tab.icon}.png`} width={16} alt={tab.title} />
            </button>
          ))}
        </div>
      </Wrapper>

      <PlaceHolder />
    </>
  );
};

export default TabBar;

const Wrapper = styled.nav`
  width: 100%;
  max-width: ${Size.FULL_WIDTH}px;
  position: fixed;
  left: auto;
  right: auto;
  bottom: 0;
  z-index: 10;

  .buttonWrapper {
    height: ${Size.TAB_BAR_HEIGHT}px;
    display: flex;
    align-items: center;
    padding-bottom: 10px;
    background: #fff;
    box-shadow: 0px -4px 8px 0px rgba(0, 0, 0, 0.06);

    .tabButton {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const PlaceHolder = styled.div`
  width: 100%;
  height: ${Size.TAB_BAR_HEIGHT}px;
`;
