import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { usePosts } from "@/context";
import { useAuth } from "@/context";
import { useRouter } from "next/router";
import Button from "@/components/button";
import Input from "@/components/Input";
import { InputVariant } from "@/types";
import toast from "react-hot-toast";
import cls from "./add.post.module.css";

const AddPost = () => {
  const { control, handleSubmit, watch } = useForm();
  const { addPost, isLoading } = usePosts();
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState("JavaScript");

  const languages = [
    "JavaScript", "Python", "Java", "C++", "C#", "PHP", 
    "Ruby", "Go", "Rust", "TypeScript", "Swift", "Kotlin"
  ];

  // Redirect if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login');
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  const onSubmit = async (data: any) => {
    try {
      await addPost({
        title: data.title,
        author: user?.username || "Anonymous",
        code: data.code,
        language: selectedLanguage,
        likes: 0,
        dislikes: 0,
        userId: user?.id || "1",
      });
      
      toast.success('Post created successfully!');
      router.push('/');
    } catch (error) {
      toast.error('Failed to create post. Please try again.');
    }
  };

  return (
    <div className="container" style={{ padding: '20px' }}>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={cls.form}>
        <div>
          <label>Title:</label>
          <Input 
            control={control} 
            name="title" 
            variant={InputVariant.input} 
            placeholder="Enter post title" 
            required={true}
            style={{ width: '100%', marginBottom: '15px' }}
          />
        </div>

        <div>
          <label>Programming Language:</label>
          <select 
            value={selectedLanguage} 
            onChange={(e) => setSelectedLanguage(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '10px', 
              marginBottom: '15px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          >
            {languages.map(lang => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>

        <div>
          <label>Code:</label>
          <textarea
            {...control.register("code")}
            placeholder="Enter your code here..."
            required={true}
            style={{
              width: '100%',
              height: '300px',
              padding: '10px',
              marginBottom: '15px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontFamily: 'monospace',
              fontSize: '14px',
              resize: 'vertical'
            }}
          />
        </div>

        <Button 
          type="submit" 
          style={{ width: '100%' }}
          disabled={isLoading}
        >
          {isLoading ? 'Creating Post...' : 'Create Post'}
        </Button>
      </form>
    </div>
  );
};

export default AddPost;
