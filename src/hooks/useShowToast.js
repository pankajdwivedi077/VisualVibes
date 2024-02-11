import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";

const useShowToast = () => {
  const toast = useToast();

  // callback for caching
  const showToast = useCallback(
    (title, description, status) => {
    toast({
      title: title,
      description: description,
      status: status,
      duration: 3000,
      isCloseable: true,
     });
   },
  [toast]
  );

  return showToast;
};

export default useShowToast;
