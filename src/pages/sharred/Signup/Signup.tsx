import { Button, Divider } from "antd";
import PHForm from "../../../../src/components/form/PHForm";
import PHInput from "../../../../src/components/form/PHInput";
import React from "react";
import { useSignupMutation } from "../../../../src/redux/features/auth/authApi";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import signupSchema from "../../../schemas/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import PHSelect from "../../../components/form/PHSelect";

const Signup = () => {
  const [signup] = useSignupMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    if (data) {
      const userInfo = { ...data, role: "user" };
      const res = await signup(userInfo).unwrap();
      console.log("res", res);
      if (res?.success) {
        toast.success(res.message);
      }
      console.log(res);
    }
  };

  return (
    <PHForm onSubmit={onSubmit} resolver={zodResolver(signupSchema)}>
      <div className="md:w-[30%] sm:w-[70%] w-[80%] mx-auto mt-[85px]">
        <h1 className="text-xl font-bold mb-5">Sign up</h1>
        <PHInput name="name" type="text" disabled={false} label="Name" />
        <PHInput name="email" type="email" disabled={false} label="Email" />
        <PHInput
          name="password"
          type="password"
          disabled={false}
          label="Password"
        />
        <PHInput name="phone" type="text" disabled={false} label="Phone" />
        <PHInput name="address" type="text" disabled={false} label="Address" />
        <PHSelect
          options={[
            { value: "user", label: "User" },
            { value: "admin", label: "Admin" },
          ]}
          name="role"
          label="Role"
        />
        <Button
          htmlType="submit"
          className="bg-blue-500 mt-5 text-white hover:!bg-blue-600 hover:!text-white"
          size="large"
          block
        >
          Signup
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

export default Signup;
