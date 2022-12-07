import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import "./AccountsTable.css";

const AccountsTable = () => {
  const [accountsData, setAccountsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/accounts")
      .then((resp) => setAccountsData(resp.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h1>Please wait...</h1>;

  if (!accountsData.length) return <h1>Account data is empty</h1>;

  return (
    <Table className="table table-bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Created On</th>
          <th>Owner</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {accountsData.map((accountData) => (
          <tr key={accountData.id}>
            <td>{accountData.id}</td>
            <td>{accountData.name}</td>
            <td>{accountData.createdOn}</td>
            <td>{accountData.owner}</td>
            <td>
              <Button
                className="btn"
                onClick={() => navigate(`/accounts/${accountData.id}`)}
              >
                View
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AccountsTable;
