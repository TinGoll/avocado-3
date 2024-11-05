import {
  CheckOutlined,
  CloseOutlined,
  EditOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Button, Typography } from "antd";
import dayjs from "dayjs";
import {
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { EditableWrapper } from "./EditableWrapper";
import {
  EditableChangeFn,
  EditableProps,
  EditableValue,
} from "./types/editable.types";

const { Paragraph } = Typography;

export const Editable = <T extends EditableValue = string>({
  children,
  disabled,
  loading,
  name,
  placeholder,
  defaultValue,
  autoSelect,
  confirmOnBlur,
  ignoredOutsideClasses,
  confirmOnEnter,
  control,
  onSave,
}: EditableProps<T>): ReactElement => {
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

        const errorMessage =
          error instanceof Error && "message" in error
            ? `Ошибка: ${error.message}`
            : "Ошибка сохранения";
        setError(errorMessage);
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
      setError(null);
      handleStopEdit();
    },
    [handleStopEdit, initialValue]
  );

  const handleChange: EditableChangeFn = useCallback((event) => {
    if (event instanceof Object && "target" in event) {
      setValue(event.target.value as T);
    } else if (dayjs.isDayjs(event)) {
      setValue((event as dayjs.Dayjs).toDate() as T);
    } else {
      setValue(event as T);
    }
  }, []);

  // Обработка нажатия Enter
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (confirmOnEnter && event.key === "Enter") {
        handleConfirm();
      }
    },
    [confirmOnEnter, handleConfirm]
  );

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
            value: value as T,
            placeholder,
            defaultValue: value as T,
            ref: inputRef,
            onKeyDown: handleKeyDown,
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
    if (!editing || !confirmOnBlur) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Проверка, находится ли кликнутый элемент внутри одного из игнорируемых классов
      const isIgnoredClick = ignoredOutsideClasses?.some((className) =>
        target.closest(`.${className}`)
      );

      if (
        containerRef.current &&
        !containerRef.current.contains(target) &&
        !isIgnoredClick // Игнорируем клики по элементам с указанными классами
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
    <EditableWrapper
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
    </EditableWrapper>
  );
};
