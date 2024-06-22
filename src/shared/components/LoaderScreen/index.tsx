interface IFullScreenLoaderProps {
  isOpen: boolean;
}
const LoaderScreen = ({ isOpen }: IFullScreenLoaderProps) => {
  return (
    <>
      {isOpen && (
        <div className="bg-[rgba(0,0,0,.45)] h-screen w-screen absolute top-0 left-0 right-0 bottom-0 grid place-items-center z-[100]">
          <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600"></div>
        </div>
      )}
    </>
  );
};

export default LoaderScreen;
