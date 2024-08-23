import { useRouter } from 'next/router';
import styled from 'styled-components';

import { Layout, TabBar, Text } from '@/shared/components';
import { Variant } from '@/shared/constants';

const Example = () => {
  const router = useRouter();

  const exampleList = {
    components: [
      {
        title: 'calender',
        url: '/components/calender',
      },
      {
        title: 'grid',
        url: '/components/grid',
      },
      {
        title: 'popup',
        url: '/components/popup',
      },
      {
        title: 'bottomSheet',
        url: '/components/bottomSheet',
      },
      {
        title: 'picker',
        content: [
          {
            title: 'datePicker',
            url: '/components/controls/datePicker',
          },
          {
            title: 'timePicker',
            url: '/components/controls/timePicker',
          },
        ],
      },
      {
        title: 'button',
        url: '/components/button',
      },
      {
        title: 'select',
        url: '/components/select',
      },
      {
        title: 'input',
        url: '/components/input',
      },
      {
        title: 'text',
        url: '/components/text',
      },
      {
        title: 'tag',
        url: '/components/tag',
      },
      {
        title: 'upload',
        url: '/components/upload',
      },
      {
        title: 'blank',
        url: '/components/blank',
      },
      {
        title: 'controls',
        content: [
          {
            title: 'checkBox',
            url: '/components/controls/checkBox',
          },
          {
            title: 'radio',
            url: '/components/controls/radio',
          },
          {
            title: 'selector',
            url: '/components/controls/selector',
          },
          {
            title: 'switch',
            url: '/components/controls/switch',
          },
        ],
      },
    ],
    constants: [
      {
        title: 'colors',
        url: '/constants/colors',
      },
      {
        title: 'typography',
        url: '/constants/typography',
      },
    ],
  };

  const handleClickExample = (item: any) => {
    if (!item.url) return;

    router.push('/example' + item.url);
  };

  const renderList = (items: any) => {
    return (
      <ul className="example-list">
        {items.map((item: any, index: number) => (
          <li key={index}>
            <Text
              variant={Variant.Body_14}
              className={`${'example-item'} ${!item.content && 'cursor'}`}
              onClick={() => handleClickExample(item)}
            >
              {item.title}
            </Text>
            {item.content && renderList(item.content)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Wrapper title="Example">
      <Text variant={Variant.Head_16}>Components</Text>
      {renderList(exampleList.components)}

      <Text variant={Variant.Head_16}>Constants</Text>
      {renderList(exampleList.constants)}

      <TabBar />
    </Wrapper>
  );
};

export default Example;

const Wrapper = styled(Layout)`
  padding: 10px;

  .example-list {
    padding-left: 28px;
    list-style-type: disc;

    .example-item {
      &.cursor {
        cursor: pointer;
      }
    }
  }
`;
