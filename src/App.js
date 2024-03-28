
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./route";
import LanguageSelect from "./LanguageSelect";
function App() {
  return (
    <>
    <LanguageSelect />
      <BrowserRouter>
        <Routes>
          {AllRoutes?.map((item, index) => (
            <Route key={index} path={item.path} element={item.page}></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
