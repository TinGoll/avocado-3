import styled from "@emotion/styled";

export const EditableWrapper = styled.div`
  position: relative;
  display: inline-flex;
  padding-right: calc(var(--editable-button-width) + var(--editable-gap));
  border-radius: 4px;
  --editable-gap: 6px;
  --editable-button-width: 26px;

  &.loading-mode {
    color: ${({ theme }) => theme.pelette.text.tertiary} !important;
  }

  &.full-width {
    display: flex;
  }

  &.edit-mode {
    padding-right: calc(
      var(--editable-button-width) * 2 + var(--editable-gap) * 2
    );
  }

  &:not(.disabled).info-mode {
    cursor: pointer;

    &:hover::before {
      border-color: var(--color-border);
    }

    &:hover .editable-button {
      opacity: 1;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -4px;
    right: 0;
    bottom: 0;
    border: 1px solid transparent;
    border-radius: 4px;
    transition: border-color 0.3s ease-in-out;
    pointer-events: none;
  }

  &.disabled .editable-button button {
    cursor: default;
  }

  & .editable-button {
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--editable-hover-color);
    border-radius: 0 4px 4px 0;
    width: var(--editable-button-width);
    height: 100%;
    transition: background-color 0.3s ease-in-out, opacity 0.3s ease-in-out;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--editable-button-width);
      height: 100%;
      padding: 0;
      color: ${({ theme }) => theme.pelette.text.icon};
      cursor: pointer;

      &.ant-btn-text:not(:disabled):not(.ant-btn-disabled):hover {
        color: ${({ theme }) => theme.pelette.text.icon};
        background: var(--editable-hover-color);
      }
    }
  }

  & .buttons {
    position: absolute;
    top: 0;
    right: 0;
    display: none;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 4px;
    height: 100%;

    & > button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--editable-button-width);
      height: 100%;
      max-height: 32px;
      padding: 0;
      border: 1px solid var(--color-border);

      svg {
        width: 12px;
        height: 12px;
      }
    }
  }

  &.edit-mode .buttons {
    display: flex;
  }

  & .loading-icon {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    & .icon {
      width: 22px;
      height: 22px;
    }
  }

  & .editable-error {
    padding: 1px;
    position: absolute;
    left: 0;
    top: calc(100%);
    max-width: 100%;
    font-size: 9px;
    line-height: 6px;
    color: ${({ theme }) => theme.pelette.error.main};
    background-color: ${({ theme }) => theme.pelette.background.surface};
    border-radius: 2px;
  }
`;
