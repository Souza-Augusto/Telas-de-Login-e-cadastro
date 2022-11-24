import React, { useContext } from "react";
import AuthContext from "../contexts/auth";
import AuthRoutes from "../routes/auth.routes";
import AppRoutes from "../routes/app.routes";
import { Loading } from "../components";

export default function routes() {
  const { signed, loading } = useContext(AuthContext);

  return (
    <>
      {signed ? <AppRoutes /> : <AuthRoutes />}

      {loading && <Loading />}
    </>
  );
}
