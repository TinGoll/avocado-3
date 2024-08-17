import { App } from "antd";
import { Key, mutate } from "swr";
import useSWRMutation from "swr/mutation";
import { getRPCError } from "./getRPCError";

type AppRPCs = "test";

interface UseCUDProps<T> {
  rpc: T;
  fetch: (props: [T, any]) => Promise<any>;
  successMessage?: string;
  onSuccess?: (args?: any) => void;
  revalidateKey?: T;
}

export const useCUD = <In, Out, RPC extends AppRPCs>({
  rpc,
  fetch,
  successMessage,
  onSuccess,
  revalidateKey,
}: UseCUDProps<RPC>) => {
  const { message } = App.useApp();
  const swr = useSWRMutation<Out, Error, Key, In>(
    rpc,
    (_: string, { arg }: { arg: In }) => {
      return fetch([rpc, arg]);
    },
    {
      onSuccess: (res) => {
        if (!getRPCError(res)) {
          onSuccess?.(res);

          if (revalidateKey) {
            mutate(
              (key: [string, unknown]) =>
                key && Array.isArray(key) && key[0] === revalidateKey
            );
          }

          if (successMessage) {
            message.success({
              content: successMessage,
              duration: 3000,
            });
          }
        }
      },
    }
  );
  return swr;
};
