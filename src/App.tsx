import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <div className="mx-[20px] sm:mx-[30px] md:mx-[40px] ">
      {/* <ProtectedRoute role={undefined}> */}
      <MainLayout />
      {/* </ProtectedRoute> */}
    </div>
  );
}

export default App;
