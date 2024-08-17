import styled from "@emotion/styled";
import { FC, ReactNode } from "react";

const Label = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.pelette.text.tertiary};
`;

const Content = styled.div`
  font-size: 14px;
  font-weight: 500;
  padding-right: 12px;
  color: ${({ theme }) => theme.pelette.text.primary};
`;
type Props = {
  label: string;
  children: ReactNode;
  labelClassName?: string;
  className?: string;
};
export const OrderField: FC<Props> = ({
  label,
  children,
  labelClassName,
  className,
}) => {
  return (
    <>
      <Label className={labelClassName}>{label}:</Label>
      <Content className={className}>{children}</Content>
    </>
  );
};
