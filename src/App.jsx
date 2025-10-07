import { Route, Routes } from "react-router";
import BaseLayout from "./shared/components/layout/BaseLayout";
import ErrorPage from "./shared/components/errors/ErrorPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={null} />  {/** Home page */}
        <Route path="*" element={<ErrorPage />} /> 
      </Route>
      <Route path="/get-your-morscore" element={<BaseLayout />}>
        <Route index element={null} /> {/** Input mor-score-here */}
        <Route path=":algorithm/results" element={null} {/** Results from given algo */}/>
      </Route>
      <Route path="/users" element={<BaseLayout />}>
        <Route path="login" element={null} /> {/** Login page */}
        <Route path="register" element={null} /> {/** Register page */}
        <Route path="account" element={null} /> {/** Account page */}
      </Route>
    </Routes>
  );
}
