import React from "react";
import { useNavigate } from "react-router-dom";
import mobopackLogin from "../image/bg-landing.png";
import logo from "../image/logo.png";

export default function FormDemo() {
  const navigate = useNavigate();

  return (
    <>
      <div className="grid grid-cols-2 gap-4 px-16 py-12 h-full items-center">
        <div className="text-center">
          <div className="text-center">
            <img className="h-1/6	m-auto" src={logo} />
            <p className="lg:text-4xl">mobopak</p>
          </div>
          <div className="py-16 px-20">
            <form>
              <input
                className="w-full py-3 px-8 my-3 border-solid border-2 border-purple-800 rounded-xl"
                placeholder="username..."
                type="username"
              />
              <input
                className="w-full py-3 px-8 my-3 border-solid border-2 border-purple-800 rounded-xl"
                placeholder="password..."
                type="password"
              />
              <div className="w-full p-2 my-3 text-left">
                <label>
                  <input type="checkbox" />
                  <span class="ml-2 text-gray-600">Remember me</span>
                </label>
              </div>
              <button
                className="w-full p-2 my-10 bg-purple-800 text-white rounded-3xl"
                onClick={() => navigate("/dashboard")}
              >
                log In
              </button>
            </form>
          </div>
        </div>
        <div>
          <img src={mobopackLogin} />
        </div>
      </div>
    </>
  );
}
