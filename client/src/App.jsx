import { Routes, Route, Navigate } from "react-router-dom";
import AccountsTable from "./components/AccountsTable";
import AccountView from "./components/AccountView";
import NotFound from "./components/NotFound";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/accounts" />} />
      <Route path="/accounts" element={<AccountsTable />} />
      <Route path="/accounts/:id" element={<AccountView />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
