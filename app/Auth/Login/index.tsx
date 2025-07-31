import Button from "@/components/button";
import Input from "@/components/Input";
import { InputVariant } from "@/types";
import React from "react";
import { useForm } from "react-hook-form";
import cls from './Login.module.css';
import Link from "next/link";

const Login = () => {
  const { control, handleSubmit } = useForm();
  return (
    <div className="container" style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '0 auto' }}>
      <h1>Login</h1>
      <form className={cls.form}>
        <Input control={control} style={{ width: '100%', minWidth: '400px' }} name="username" variant={InputVariant.input} placeholder="Username" required={true} />
        <Input control={control} style={{ width: '100%', minWidth: '400px' }} name="password" type="password" variant={InputVariant.input} placeholder="Password" required={true} />
        <Button type="submit" style={{ width: '100%' }}>Submit</Button>
      </form>
      <Link href='/auth/register' className={cls.link}>Don't have an account?</Link>
    </div>
  )
};

export default Login;
