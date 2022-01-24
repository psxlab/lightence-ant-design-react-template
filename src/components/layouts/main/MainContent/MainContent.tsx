import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export default styled(Content)`
  padding: ${(props) => `${props.theme.mobileLayout.paddingVertical} ${props.theme.mobileLayout.paddingHorizontal}`};
  overflow: overlay;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and ${(props) => props.theme.media.md} {
    padding: ${(props) =>
      `${props.theme.desktopLayout.paddingVertical} ${props.theme.desktopLayout.paddingHorizontal}`};
  }
`;
