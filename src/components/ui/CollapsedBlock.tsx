import { useMode } from "@/theme";
import styled from "@emotion/styled";
import { Collapse, CollapseProps } from "antd";
import { FC, ReactNode } from "react";

type SizeType = "small" | "middle" | "large";
type StyledCollapseProps = { mode: Avocado.Mode };

const StyledCollapse = styled(Collapse)<StyledCollapseProps>`
  background: ${({ mode }) =>
    mode === "dark" ? "#ffffffa" : "#000000a"};
  /* background: transparent; */
  .ant-collapse-header {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .ant-collapse-content-box {
    padding: 4px 0px 4px 12px !important;
  }
`;
type Props = {
  label?: ReactNode;
  children?: ReactNode;
  extra?: ReactNode;
  size?: SizeType;
} & Omit<CollapseProps, "label" | "children" | "extra" | "size">;
export const CollapsedBlock: FC<Props> = ({
  label,
  children,
  extra,
  ...props
}) => {
  const mode = useMode();
  return (
    <StyledCollapse
      mode={mode}
      bordered={false}
      size="small"
      defaultActiveKey={["1"]}
      {...props}
      items={[
        {
          key: "1",
          label,
          children,
          extra,
        },
      ]}
    />
  );
};
