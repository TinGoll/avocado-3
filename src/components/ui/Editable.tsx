import {
  CheckOutlined,
  CloseOutlined,
  EditOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import styled from "@emotion/styled";
import { Button, Typography } from "antd";
import dayjs from "dayjs";
import {
  ReactElement,
  ReactNode,
  Ref,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const Container = styled.div`
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

type Disabled = boolean | ((name: string) => boolean);
type EditableValue = string | number | Date;

type SelectEventValue = string | string[];
type DatePickerValue = dayjs.Dayjs | null;

type ChangeFn = (
  event:
    | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    | SelectEventValue
    | DatePickerValue
) => void;

type ControlProps<T extends EditableValue> = {
  value?: T | null;
  onChange?: ChangeFn;
  className?: string;
  placeholder?: string;
  defaultValue?: T;
  ref?: Ref<any>;
};

type Props<T extends EditableValue> = {
  children?: ReactNode;
  disabled?: Disabled;
  name: string;
  loading?: boolean;
  placeholder?: string;
  defaultValue?: T;
  autoSelect?: boolean;
  control?: (props: ControlProps<T>) => ReactNode;
  onSave?: (name: string, value: T) => Promise<void>;
};

const { Paragraph } = Typography;

export const Editable = <T extends EditableValue = string>({
  children,
  disabled,
  loading,
  name,
  placeholder,
  defaultValue,
  autoSelect,
  control,
  onSave,
}: Props<T>): ReactElement => {
  const [editing, setEditing] = useState<boolean>(false);
  const [value, setValue] = useState<T | undefined>(defaultValue || undefined);
  const [saving, setSaving] = useState(false);
  const [initialValue, setInitialValue] = useState<T | undefined>(defaultValue);
  const [error, setError] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const isDisabled = useMemo(
    () =>
      typeof control !== "function" ||
      (typeof disabled === "function" ? disabled(name) : disabled),
    [control, disabled, name]
  );

  // Начало редактирования
  const handleStartEdit = useCallback(() => {
    if (!editing && !isDisabled) {
      setInitialValue(value);
      setEditing(true);
    }
  }, [editing, isDisabled, value]);

  // Окончание редактирования
  const handleStopEdit = useCallback(() => {
    if (editing) {
      setEditing(false);
    }
  }, [editing]);

  // Подтверждение изменений
  const handleConfirm = useCallback(
    async (event?: React.MouseEvent<HTMLElement, MouseEvent>) => {
      event?.stopPropagation();
      setSaving(true);
      setError(null);
      handleStopEdit();

      if (value === initialValue) {
        setSaving(false);
        return;
      }

      try {
        if (onSave) {
          await onSave(name, value as T);
        }
      } catch (error) {
        setValue(initialValue); // Возвращаем предыдущее значение при ошибке
        setEditing(true); // Возвращаемся в режим редактирования при ошибке
        setError("Ошибка сохранения");
      } finally {
        setSaving(false);
      }
    },
    [onSave, name, value, initialValue, handleStopEdit]
  );

  // Отмена изменений
  const handleCancel = useCallback(
    (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
      event.stopPropagation();
      setValue(initialValue);
      handleStopEdit();
    },
    [handleStopEdit, initialValue]
  );

  const handleChange: ChangeFn = useCallback((event) => {
    if (event instanceof Object && "target" in event) {
      setValue(event.target.value as T);
    } else if (dayjs.isDayjs(event)) {
      setValue((event as dayjs.Dayjs).toDate() as T);
    } else {
      setValue(event as T);
    }
  }, []);

  // Установка фокуса и выделение текста при начале редактирования
  useEffect(() => {
    if (editing && autoSelect && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editing, autoSelect]);

  const inputControl = useMemo(
    () =>
      control
        ? control({
            onChange: handleChange,
            value,
            placeholder,
            defaultValue: value as T,
            ref: inputRef,
          })
        : null,
    [control, handleChange, placeholder, value]
  );

  const containerClass = useMemo(
    () =>
      `${
        loading || saving ? "loading-mode" : editing ? "edit-mode" : "info-mode"
      } ${isDisabled ? "disabled" : ""}`,
    [loading, saving, editing, isDisabled]
  );

  useEffect(() => {
    if (!editing) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        handleConfirm();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [editing, handleConfirm]);

  return (
    <Container
      ref={containerRef}
      className={containerClass}
      onClick={handleStartEdit}
    >
      {editing && !isDisabled ? <>{inputControl}</> : children}

      {loading ||
        (saving && (
          <div className="loading-icon">
            <div className="icon">
              <LoadingOutlined />
            </div>
          </div>
        ))}
      {editing ? (
        <div className="buttons">
          <Button
            onClick={handleConfirm}
            type="text"
            icon={<CheckOutlined />}
          />
          <Button onClick={handleCancel} type="text" icon={<CloseOutlined />} />
        </div>
      ) : (
        <div className="editable-button">
          <Button
            disabled={isDisabled || editing}
            type="text"
            icon={<EditOutlined />}
          />
        </div>
      )}

      {error && editing && (
        <Paragraph ellipsis className="editable-error">
          {error}
        </Paragraph>
      )}
    </Container>
  );
};
