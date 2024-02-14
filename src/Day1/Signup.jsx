import * as React from "react";
import Button from "@mui/material/Button";

export default function Signup(params) {
  return (
    <div className="bg-slate-400 w-full">
      <div className="bg-white w-[120px] h-[80px]  rounded-br-[100%] pt-3 pl-2">
        <h2 className="font-bold text-slate-400">Sign Up</h2>
      </div>
      <div className=" m-[auto] mt-20">
        <div className="flex flex-col gap-5 w-[200px] ml-5 mt-8 text-white  ">
          <input
            type="text"
            required
            placeholder="Username"
            className="pl-2 bg-slate-400 placeholder-white border-b border-white"
          />
          <input
            type="email"
            required
            placeholder="Email"
            className="pl-2 bg-slate-400 placeholder-white border-b border-white"
          />
          <input
            type="password"
            required
            placeholder="Password"
            className="pl-2 bg-slate-400 placeholder-white border-b border-white"
          />
          <input
            type="password"
            required
            placeholder="Re-type Password"
            className="pl-2 bg-slate-400 placeholder-white border-b border-white"
          />
        </div>
        <div className="justify-center w-[75%] m-[auto] pb-4 flex flex-col mt-3">
          <div className="flex flex-row w-[400px] mb-5">
            <input
              className="text-[13px] mr-1 text-blue-800 block"
              type="checkbox"
            />
            <label htmlFor="" className=" block">
              I agree to the&nbsp;
            </label>
            <a href="/" className="text-blue-700">
              Terms and Conditions
            </a>
          </div>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
