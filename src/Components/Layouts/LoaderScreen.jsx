const LoaderScreen = () => {
  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="w-14 h-14 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

export default LoaderScreen
