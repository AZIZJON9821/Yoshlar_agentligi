import React from "react";
import { useForm } from "react-hook-form";
import Input from "@/components/Input";
import CodeEditor from "@/components/code-editor";
import Button from "@/components/button";
import styles from "./add-post.module.css";
import { InputVariant } from "@/types";

const LANGUAGES = [
  { value: "#python", label: "Python" },
  { value: "#js", label: "JavaScript" },
  { value: "#ts", label: "TypeScript" },
  { value: "#cpp", label: "C++" },
];

type FormData = {
  title: string;
  language: string;
  code: string;
  author: string;
};

const AddPostTwo = () => {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      title: "",
      language: "#python",
      code: "",
      author: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h1 className={styles.title}>Add new code</h1>

      <div className={styles.panel}>
        <div className={styles.row}>
          <Input
            variant={InputVariant.input}
            name="title"
            placeholder="Title"
            control={control}
          />
          <Input
            name="language"
            variant={InputVariant.select}
            options={LANGUAGES}
            control={control}
          />
        </div>

        <div className={styles.editorWrapper}>
          <CodeEditor name="code" control={control} style={{ width: "100%" }} />
        </div>

        <div className={styles.actions}>
          <Input
            variant={InputVariant.input}
            name="author"
            placeholder="Author name"
            control={control}
          />
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default AddPostTwo;
