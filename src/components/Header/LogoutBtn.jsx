import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout.then(() => {
      dispatch(logout());
    });
  };
  return (
    <button onClick = {logoutHandler} className="bg-red-500 hover:bg-blue-100 rounded-full px-6 py-2 duration-200 text-white">
      Logout
    </button>
  );
}

export default LogoutBtn;
