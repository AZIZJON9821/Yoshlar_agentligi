import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import Input from "@/components/Input";
import CodeEditor from "@/components/code-editor";
import Button from "@/components/button";
import styles from "./add.post.module.css";
import { InputVariant } from "@/types";
import { customAxios } from "@/api/instances/codeMuseum";

export interface FormData {
  title: string;
  code: string;
  categoryName: string;
  anonymous: boolean;
}

interface Category {
  id: string;
  name: string;
}

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
      code: "",
      categoryName: "",
      anonymous: true,
    },
  });

  

  const anonymous = useWatch({ control, name: "anonymous" });
  const [categories, setCategories] = useState<Category[]>([]);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
  }, [anonymous]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const resp = await customAxios.get("/categories");
        const data = resp.data?.data;
        if (Array.isArray(data)) {
          setCategories(data);
        }
      } catch (e) {
        console.warn("Category fetch failed, using fallback", e);
        setCategories([
          { id: "javascript", name: "JavaScript" },
          { id: "python", name: "Python" },
        ]);
      }
    };
    fetchCategories();
  }, []);

  const validate = (values: FormData) => {
    let valid = true;
    if (!values.title?.trim()) {
      setError("title", { type: "required", message: "Title kerak" });
      valid = false;
    }
    if (!values.code?.trim()) {
      setError("code", { type: "required", message: "Code kerak" });
      valid = false;
    }
    if (!values.categoryName?.trim()) {
      setError("categoryName", {
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

    if (!validate(data)) return;

    const payload = {
      title: data.title,
      code: data.code,
      categoryName: data.categoryName.toUpperCase(),
    };

    const endpoint = data.anonymous ? "/posts/anonymous" : "/posts";

    try {
      const res = await customAxios.post(endpoint, payload, {
        headers: { "Content-Type": "application/json" },
      });
      setSuccessMessage("Post muvaffaqiyatli jo'natildi.");
      reset({
        title: "",
        code: "",
        categoryName: "",
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
          <Input
            name="categoryName"
            variant={InputVariant.select}
            options={categories.map((c) => ({
              value: c.name.toUpperCase(),
              label: c.name,
            }))}
            placeholder="Category"
            control={control}
          />
        </div>

        <div className={styles.editorWrapper}>
          <CodeEditor name="code" control={control} style={{ width: "100%" }} />
          {errors.code && (
            <p className={styles.errorText}>
              {(errors.code as any)?.message || "Code kerak"}
            </p>
          )}
        </div>

        <div className={styles.actions}>
          <div className={styles.leftGroup}>
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
          {errors.categoryName && (
            <div className={styles.fieldError}>
              {(errors.categoryName as any)?.message || "Category kerak"}
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default AddPost;