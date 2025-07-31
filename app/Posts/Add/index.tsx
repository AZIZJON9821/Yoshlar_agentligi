import React from "react";
import { useForm, useWatch } from "react-hook-form";
import Input from "@/components/Input";
import CodeEditor from "@/components/code-editor";
import Button from "@/components/button";
import styles from "./add.post.module.css";
import { FormData, InputVariant } from "@/types";

const LANGUAGES = [
  { value: "#python", label: "Python" },
  { value: "#js", label: "JavaScript" },
  { value: "#ts", label: "TypeScript" },
  { value: "#cpp", label: "C++" },
];

const AddPost = () => {
  const { control, handleSubmit, setValue } = useForm<FormData>({
    defaultValues: {
      title: "",
      language: "#python",
      code: "",
      author: "",
      anonymous: true,
    },
  });

  const anonymous = useWatch({ control, name: "anonymous" });

  const onSubmit = (data: FormData) => {
    if (data.anonymous) {
      data.author = "";
    }
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
          <CodeEditor
            name="code"
            control={control}
            style={{ minHeight: 200 }}
          />
        </div>

        <div className={styles.actions}>
          <div className={styles.leftGroup}>
            <Input
              variant={InputVariant.input}
              name="author"
              placeholder="Author name"
              control={control}
              disabled={!!anonymous}
            />

            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={anonymous}
                onChange={(e) => setValue("anonymous", e.target.checked)}
              />
              Anonymous sharing
            </label>
          </div>
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  );
};

export default AddPost;
