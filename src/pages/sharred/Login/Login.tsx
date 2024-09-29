/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Divider } from "antd";
import PHForm from "../../../../src/components/form/PHForm";
import PHInput from "../../../../src/components/form/PHInput";
import React from "react";
import { useLoginMutation } from "../../../../src/redux/features/auth/authApi";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { verifyToken } from "../../../utils/verifyToken";
import { useAppDispatch } from "../../../redux/hooks";
import { setUser } from "../../../redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../../schemas/loginSchema";

const Login = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Logging in");
    console.log(data);
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      console.log("from login", res);
      const user = verifyToken(res.token);
      console.log("user", user);
      dispatch(setUser({ user: user, token: res.token }));
      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate("/");
    } catch (err: any) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  return (
    <PHForm onSubmit={onSubmit} resolver={zodResolver(loginSchema)}>
      <div className="md:w-[30%] sm:w-[60%] w-[80%] mx-auto mt-[50px]">
        <h1 className="md:text-xl font-bold">Sign in</h1>
        <PHInput
          name="email"
          type="email"
          disabled={false}
          label="Email address"
        />
        <PHInput
          name="password"
          type="password"
          disabled={false}
          label="Password"
        />
        <Button
          htmlType="submit"
          className="bg-blue-500 text-white hover:!bg-blue-600 hover:!text-white"
          size="large"
          block
        >
          Login
        </Button>
        <div>
          <Divider />
        </div>
        <div className="text-center text-[12px]">
          <p className="">
            By signing in or creating an account, you agree with our{" "}
            <span className="text-btn-primary cursor-pointer">Terms &</span>
          </p>
          <p className="">
            {" "}
            <span className="text-btn-primary cursor-pointer">
              Conditions and Privacy Statement
            </span>
          </p>
          <p className="mt-3">All rights reserved.</p>
          <p>Copyright (2006-2024) – BookNest™</p>
        </div>
      </div>
    </PHForm>
  );
};

export default Login;
