import styled from '../../styled-components';
import { CallbackTitle } from './CallbackTitle';

export const StyledCallbackTitle = styled(CallbackTitle)`
  padding: 10px;
  border-radius: 2px;
  margin-bottom: 4px;
  line-height: 1.5em;
  background-color: var(--callbacks-title-bg);
  cursor: pointer;
  outline-color: var(--callbacks-title-outline);
`;

export const CallbackDetailsWrap = styled.div`
  padding: 10px 25px;
  background-color: var(--callbacks-details-bg);
  margin-bottom: 5px;
  margin-top: 5px;
`;
