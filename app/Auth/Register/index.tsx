import Input from "@/components/Input";
import { InputVariant } from "@/types";
import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {control,handleSubmit} = useForm();
  return (
    <div className="container">
      <h1>Register</h1>
      <form>
        <Input control={control} name="username" variant={InputVariant.input} placeholder="Username" required={true}/>
        <Input control={control} name="password" type="password" variant={InputVariant.input} placeholder="Password" required={true} />
        <Input control={control} name="ghUsername" variant={InputVariant.input} placeholder="Git Hub username" />
        <Input control={control} name="email" variant={InputVariant.input} placeholder="Email" />
      </form>
    </div>
  )
};

export default Register;
