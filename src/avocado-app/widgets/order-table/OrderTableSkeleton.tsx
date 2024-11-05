import styled from "@emotion/styled";
import { Skeleton } from "antd";
import { FC } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const OrderTableSkeleton: FC = () => {
  return (
    <Wrapper>
      {Array.from({ length: 5 }, (_, value) => (
        <Skeleton.Button active block key={value} />
      ))}
    </Wrapper>
  );
};
