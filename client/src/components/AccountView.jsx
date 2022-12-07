import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./AccountView.css";

const AccountView = () => {
  const [accountInfo, setAccountInfo] = useState();
  const [loading, setLoading] = useState(false);

  const { id: accountID } = useParams();

  useEffect(() => {
    if (!accountID) return;
    setLoading(true);
    axios
      .get(`/accounts/${accountID}`)
      .then((resp) => setAccountInfo(resp.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [accountID]);

  if (loading) return <h1>Please wait...</h1>;

  if (!accountInfo) return <h1>Account info is empty</h1>;

  return (
    <div className="account-view">
      <div className="list account-key-list">
        <p>ID</p>
        <p>Name</p>
        <p>Owner</p>
        <p>Created On</p>
        <p>Updated On</p>
      </div>
      <div className="list account-value-list">
        <p>{accountInfo?.id}</p>
        <p>{accountInfo?.name}</p>
        <p>{accountInfo?.owner}</p>
        <p>{accountInfo?.createdOn}</p>
        <p>{accountInfo?.updatedOn}</p>
      </div>
    </div>
  );
};

export default AccountView;
