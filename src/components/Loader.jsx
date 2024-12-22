import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop :" 20px",
      }}
    >

      <div className="relative flex flex-col items-center justify-center bg-gradient-to-r from-gray-600 via-blue-800 to-indigo-900 p-6 rounded-xl shadow-2xl text-white w-[60vw] max-w-md mx-auto mt-14 animate-fade-in">
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 30,
        }}
      >
        {progress.toFixed(2)}%
      </p>
      <h1 className="text-3xl font-extrabold mb-2">Iam Loading! 🚀</h1>
      <p className="text-center text-lg">
       Once ready, you’ll get to rotate me in 3D! 😎
      </p>      
      </div>
    </Html>
  );
};

export default CanvasLoader;