// AddPost.tsx
import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import Input from "@/components/Input";
import CodeEditor from "@/components/code-editor";
import Button from "@/components/button";
import styles from "./add.post.module.css";
import { InputVariant } from "@/types";
import { customAxios } from "@/api/instances/codeMuseum";
import { Category, FormData } from "./types";

const AddPost: React.FC = () => {
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      title: "",
      language: "#js",
      code: "",
      categoryId: "JAVASCRIPT",
      author: "",
      anonymous: true,
    },
  });

  const anonymous = useWatch({ control, name: "anonymous" });
  const [categories, setCategories] = useState<Category[]>([]);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  useEffect(() => {
    if (anonymous) {
      setValue("author", "");
    }
  }, [anonymous, setValue]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const resp = await customAxios.get("/categories");
        const data = resp.data?.data;
        console.log(resp);
        if (Array.isArray(data)) {
          setCategories(data);
        }
      } catch (e) {
        console.warn("Category fetch failed, using fallback", e);
      }
    };
    fetchCategories();
  }, []);

  const validate = (values: FormData) => {
    let valid = true;
    if (!values.title.trim()) {
      setError("title", { type: "required", message: "Title kerak" });
      valid = false;
    }
    if (!values.code.trim()) {
      setError("code", { type: "required", message: "Code kerak" });
      valid = false;
    }
    if (!values.categoryId) {
      setError("categoryId", {
        type: "required",
        message: "Category tanlanishi kerak",
      });
      valid = false;
    }
    return valid;
  };

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    setSuccessMessage(null);

    const isValid = validate(data);
    if (!isValid) return;

    const payload: Record<string, any> = {
      title: data.title,
      code: data.code,
      categoryId: data.categoryId,
      language: data.language,
      anonymous: data.anonymous,
      author: data.anonymous ? "" : data.author,
    };

    try {
      const res = await customAxios.post("/posts", payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setSuccessMessage("Post muvaffaqiyatli jo'natildi.");
      reset({
        title: "",
        code: "",
        categoryId: "JAVASCRIPT",
        language: "#python",
        author: "",
        anonymous: true,
      });
      console.log("API response:", res.data);
    } catch (err: any) {
      console.error("Submit error:", err);
      setSubmitError(
        err?.response?.data?.message || "Jo'natishda xatolik yuz berdi."
      );
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
      <h1 className={styles.title}>Add new code</h1>

      <div className={styles.panel}>
        <div className={styles.row}>
          <Input
            variant={InputVariant.input}
            name="title"
            placeholder="Title"
            control={control}
          />
        </div>

        <div className={styles.row}>
          <Input
            name="categoryId"
            variant={InputVariant.select}
            options={categories.map((c) => ({ value: c.id, label: c.name }))}
            placeholder="Category"
            control={control}
          />
        </div>

        <div className={styles.editorWrapper}>
          <CodeEditor name="code" control={control} style={{width:"100%"}}/>
          {errors.code && (
            <p className={styles.errorText}>
              {(errors.code as any)?.message || "Code kerak"}
            </p>
          )}
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
                checked={!!anonymous}
                onChange={(e) => setValue("anonymous", e.target.checked)}
              />
              Anonymous sharing
            </label>
          </div>
          <Button type="submit" >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>

        {submitError && (
          <div className={styles.feedbackError}>{submitError}</div>
        )}
        {successMessage && (
          <div className={styles.feedbackSuccess}>{successMessage}</div>
        )}

        <div style={{ marginTop: 8 }}>
          {errors.title && (
            <div className={styles.fieldError}>
              {(errors.title as any)?.message || "Title kerak"}
            </div>
          )}
          {errors.categoryId && (
            <div className={styles.fieldError}>
              {(errors.categoryId as any)?.message || "Category kerak"}
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default AddPost;
