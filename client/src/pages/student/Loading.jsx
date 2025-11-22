// Loader.jsx
const Loading = () => {
  return (
    <>
      <div className="animate-pulse p-6 space-y-4 h-screen">
        <div className="w-1/3 h-6 bg-gray-300 rounded"></div>
        <div className="w-full h-4 bg-gray-300 rounded"></div>
        <div className="w-full h-4 bg-gray-300 rounded"></div>
        <div className="w-2/3 h-4 bg-gray-300 rounded"></div>
      </div>
    </>
  );
};

export default Loading;
