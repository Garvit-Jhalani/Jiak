import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <>
      <div className="flex flex-col h-screen justify-center items-center bg-gradient-to-br from-pink-100 to-orange-100 hover:bg-gradient-to-bl">
        <Outlet />
      </div>
    </>
  );
}
