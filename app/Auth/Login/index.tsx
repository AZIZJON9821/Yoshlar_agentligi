import Button from "@/components/button";
import Input from "@/components/Input";
import { InputVariant } from "@/types";
import React from "react";
import { useForm } from "react-hook-form";
import cls from './Login.module.css';
import Link from "next/link";
import { useAuth } from "@/context";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const Login = () => {
  const { control, handleSubmit } = useForm();
  const { login, isLoading } = useAuth();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      await login({username:data.username, password:data.password});
      toast.success('Login successful!');
      router.push('/');
    } catch (error) {
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <div className="container" style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '0 auto' }}>
      <h1>Login</h1>
      <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
        <Input control={control} style={{ width: '100%', minWidth: '400px' }} name="username" variant={InputVariant.input} placeholder="Username" required={true} />
        <Input control={control} style={{ width: '100%', minWidth: '400px' }} name="password" type="password" variant={InputVariant.input} placeholder="Password" required={true} />
        <Button type="submit" style={{ width: '100%' }} disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Submit'}
        </Button>
      </form>
      <Link href='/auth/register' className={cls.link}>Don't have an account?</Link>
    </div>
  )
};

export default Login;
