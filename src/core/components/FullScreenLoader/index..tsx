import LoaderScreen from "@/shared/components/LoaderScreen";
import { useRootFullScreenLoaderStore } from "@/shared/store/useRootScreenLoader";

const RootFullScreenLoader = () => {
  const isOpen = useRootFullScreenLoaderStore((state) => state.isOpen);

  return <LoaderScreen isOpen={isOpen} />;
};

export default RootFullScreenLoader;
