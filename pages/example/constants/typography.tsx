import styled from 'styled-components';

import { Layout, TabBar, Text, Spacing, Divider } from '@/shared/components';
import { Variant } from '@/shared/constants';

const Typography = () => {
  return (
    <Wrapper title="Typography">
      <Text variant={Variant.Head_20}>Head</Text>
      <Divider margin="5px 0" />
      <Text variant={Variant.Body_12}>Weight: 700(bold)</Text>
      <Spacing size={5} />
      <div className="text-list">
        <Text variant={Variant.Head_16} isEllipsis>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text variant={Variant.Head_18} isEllipsis>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text variant={Variant.Head_20} isEllipsis>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text variant={Variant.Head_22} isEllipsis>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text variant={Variant.Head_25} isEllipsis>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </div>
      <Spacing size={16} />

      <Text variant={Variant.Head_20}>Title</Text>
      <Divider margin="5px 0" />
      <Text variant={Variant.Body_12}>Weight: 500(medium)</Text>
      <Spacing size={5} />
      <div className="text-list">
        <Text variant={Variant.Title_13} isEllipsis>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text variant={Variant.Title_14} isEllipsis>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text variant={Variant.Title_15} isEllipsis>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text variant={Variant.Title_16} isEllipsis>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </div>
      <Spacing size={16} />

      <Text variant={Variant.Head_20}>Body</Text>
      <Divider margin="5px 0" />
      <Text variant={Variant.Body_12}>Weight: 400(regular)</Text>
      <Spacing size={5} />
      <div className="text-list">
        <Text variant={Variant.Body_12} isEllipsis>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text variant={Variant.Body_13} isEllipsis>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text variant={Variant.Body_14} isEllipsis>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text variant={Variant.Body_15} isEllipsis>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        <Text variant={Variant.Body_16} isEllipsis>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </div>
      <Spacing size={16} />

      <Text variant={Variant.Head_20}>Sub</Text>
      <Divider margin="5px 0" />
      <Text variant={Variant.Body_12}>Weight: 400(regular)</Text>
      <Spacing size={5} />
      <div className="text-list">
        <Text variant={Variant.Sub_11} isEllipsis>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </div>

      <TabBar />
    </Wrapper>
  );
};

export default Typography;

const Wrapper = styled(Layout)`
  padding: 10px;

  .text-list {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 10px;
  }
`;
