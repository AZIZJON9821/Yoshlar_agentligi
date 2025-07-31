import Button from "@/components/button";
import Input from "@/components/Input";
import { InputVariant } from "@/types";
import React from "react";
import { useForm } from "react-hook-form";
import cls from './Register.module.css';
import Link from "next/link";
import { useAuth } from "@/context";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const Register = () => {
  const { control, handleSubmit } = useForm();
  const { register, isLoading } = useAuth();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      await register(data.username, data.email, data.password, data.ghUsername);
      toast.success('Registration successful!');
      router.push('/');
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    }
  };

  return (
    <div className="container" style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '0 auto' }}>
      <h1>Register</h1>
      <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
        <Input control={control} style={{ width: '100%', minWidth: '400px' }} name="username" variant={InputVariant.input} placeholder="Username" required={true} />
        <Input control={control} style={{ width: '100%', minWidth: '400px' }} name="email" variant={InputVariant.input} placeholder="Email" required={true} />
        <Input control={control} style={{ width: '100%', minWidth: '400px' }} name="password" type="password" variant={InputVariant.input} placeholder="Password" required={true} />
        <Input control={control} style={{ width: '100%', minWidth: '400px' }} name="ghUsername" variant={InputVariant.input} placeholder="GitHub username" required={true} />
        <Button type='submit' style={{ width: '100%' }} disabled={isLoading}>
          {isLoading ? 'Registering...' : 'Submit'}
        </Button>
      </form>
      <Link href='/auth/login' className={cls.link}>Do you already have an account?</Link>
    </div>
  )
};

export default Register;
