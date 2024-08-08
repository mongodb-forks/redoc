import styled from '../../styled-components';

export const ToggleButton = styled.button`
  appearance: unset;
  display: inline-block;
  position: relative;
  cursor: pointer;
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 0);
  height: 28px;
  width: 28px;
  color: var(--button-color);
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  padding: unset;
  border-radius: 100px;
  transition: color 150ms ease-in-out 0s, box-shadow;
  margin: 0px 16px;

  :before {
    content: '';
    transition: all 150ms ease-in-out 0s;
    position: absolute;
    inset: 0px;
    border-radius: 100%;
    opacity: 0;
    transform: scale(0.8);
  }

  &:hover {
    color: var(--button-color-on-hover);
  }

  &:hover::before {
    opacity: 1;
    transform: scale(1);
    background-color: var(--button-bg-on-hover);
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
`;

export const Placeholder = styled.div`
  width: 16px;
  height: 16px;
  margin: 0 16px;
`;
