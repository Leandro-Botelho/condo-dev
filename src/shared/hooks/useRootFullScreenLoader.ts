import { useRootFullScreenLoaderStore } from "../store/useRootScreenLoader";

export const useRootFullScreenLoader = () => {
  const { hideLoader, showLoader } = useRootFullScreenLoaderStore();

  return { hide: hideLoader, show: showLoader };
};
