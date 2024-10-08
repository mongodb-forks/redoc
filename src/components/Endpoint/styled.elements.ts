import { palette } from '@leafygreen-ui/palette';
import styled from '../../styled-components';
import { getBadgeStyles } from '../../utils/styling';

export const OperationEndpointWrap = styled.div`
  cursor: pointer;
  position: relative;
  margin-bottom: 5px;
`;

export const ServerRelativeURL = styled.span`
  font-family: ${props => props.theme.typography.code.fontFamily};
  font-size: ${props => props.theme.typography.code.fontSize};
  margin-left: 10px;
  flex: 1;
  overflow-x: hidden;
  text-overflow: ellipsis;
  color: #ffffff;
`;

export const EndpointInfo = styled.button<{ expanded?: boolean; inverted?: boolean }>`
  outline: 0;
  color: inherit;
  width: 100%;
  text-align: left;
  cursor: pointer;
  padding: 10px 30px 10px ${props => (props.inverted ? '10px' : '20px')};
  border-radius: ${props => (props.inverted ? '0' : '4px 4px 0 0')};
  background-color: ${palette.gray.dark3};
  display: flex;
  white-space: nowrap;
  align-items: center;
  border: ${props => (props.inverted ? '0' : '1px solid transparent')};
  border-bottom: ${props => (props.inverted ? '1px solid #ccc' : '0')};
  transition: border-color 0.25s ease;

  ${props =>
    (props.expanded && !props.inverted && `border-color: ${props.theme.colors.border.dark};`) || ''}

  &:focus {
    box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.45), 0 2px 0 rgba(128, 128, 128, 0.25);
  }
`;

export const HttpVerb = styled.span.attrs((props: { type: string; compact?: boolean }) => ({
  className: `http-verb ${props.type}`,
}))<{ type: string; compact?: boolean }>`
  font-size: 12px;
  line-height: ${props => (props.compact ? '18px' : '20px')};
  color: #ffffff;
  padding: ${props => (props.compact ? '2px 8px' : '3px 10px')};
  text-transform: uppercase;
  font-family: ${props => props.theme.typography.headings.fontFamily};
  font-weight: bold;
  margin: 0;
  border: ${props => props.theme.badges.border};
  border-radius: ${props => props.theme.badges.borderRadius};
  ${props => getBadgeStyles(props.theme.colors.http[props.type], 'dark')}
`;

export const ServersOverlay = styled.div<{ expanded: boolean }>`
  position: absolute;
  width: 100%;
  z-index: 100;
  background: ${props => props.theme.rightPanel.servers.overlay.backgroundColor};
  color: ${props => props.theme.rightPanel.servers.overlay.textColor};
  font-size: 13px;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.33);
  overflow: hidden;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  transition: all 0.25s ease;
  visibility: hidden;
  ${props => (props.expanded ? 'visibility: visible;' : 'transform: translateY(-50%) scaleY(0);')}
`;

export const ServerItem = styled.div`
  padding: 10px;
`;

export const ServerUrl = styled.div`
  padding: 5px;
  border: 1px solid ${palette.gray.dark2};
  background: ${props => props.theme.rightPanel.servers.url.backgroundColor};
  font-family: 'Source Code Pro';
  font-size: 13px;
  word-break: break-all;
  color: ${palette.white};
  > span {
    color: ${palette.white};
  }
`;
