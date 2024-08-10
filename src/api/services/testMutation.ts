/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation } from "@tanstack/react-query";
import fetchTestMutation from "../endPoints/testMutation";

export const useMutationService: any = (resource: any, params: any) => {
  return useMutation({
    mutationFn: (data) => fetchTestMutation({ data, ...resource, params }),
  });
};
