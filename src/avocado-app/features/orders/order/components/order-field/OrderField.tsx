import styled from "@emotion/styled";
import { Skeleton } from "antd";
import { FC, ReactNode } from "react";

const Label = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.pelette.text.tertiary};
`;

const Content = styled.div`
  font-size: 14px;
  font-weight: 500;
  padding-right: 12px;
  color: ${({ theme }) => theme.pelette.text.primary};
`;

const SkeletonInput = styled(Skeleton.Input)`
  &.ant-skeleton.ant-skeleton-element {
    & .ant-skeleton-input-sm {
      height: 20px;
      line-height: 20px;
      min-width: calc(100% - 16px);
    }
  }
`
type Props = {
  label: string;
  children: ReactNode;
  labelClassName?: string;
  className?: string;
  loading?: boolean;
};
export const OrderField: FC<Props> = ({
  label,
  children,
  labelClassName,
  className,
  loading,
}) => {
  return (
    <>
      <Label className={labelClassName}>{label}:</Label>
      {loading ? (
        <SkeletonInput size="small" active />
      ) : (
        <Content className={className}>{children}</Content>
      )}
    </>
  );
};
