import dayjs from "dayjs";
import { ReactNode, Ref } from "react";

type Disabled = boolean | ((name: string) => boolean);
export type EditableValue = string | number | Date;

type SelectEventValue = string | string[];
type DatePickerValue = dayjs.Dayjs | null;

export type EditableChangeFn = (
  event:
    | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    | SelectEventValue
    | DatePickerValue
) => void;

export type EditableKeyDownFn = (event: React.KeyboardEvent) => void;

type EditableControlProps<T extends EditableValue> = {
  value: T;
  onChange?: EditableChangeFn;
  onKeyDown?: EditableKeyDownFn;
  className?: string;
  placeholder?: string;
  defaultValue?: T;
  ref?: Ref<any>;
};

export type EditableProps<T extends EditableValue> = {
  children?: ReactNode;
  disabled?: Disabled;
  name: string;
  loading?: boolean;
  placeholder?: string;
  defaultValue?: T;
  autoSelect?: boolean;
  confirmOnBlur?: boolean;
  confirmOnEnter?: boolean;
  ignoredOutsideClasses?: string[];
  control?: (props: EditableControlProps<T>) => ReactNode;
  onSave?: (name: string, value: T) => Promise<void>;
};
