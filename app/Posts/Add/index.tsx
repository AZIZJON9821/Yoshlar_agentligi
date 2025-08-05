import React, { useEffect, useRef, useState } from "react";
import {  useForm, useWatch } from "react-hook-form";
import Input from "@/components/Input";
import CodeEditor from "@/components/code-editor";
import Button from "@/components/button";
import styles from "./add.post.module.css";
import { InputVariant } from "@/types";
import { useCategories } from "@/hook/useCategories";
import { useSubmitPost } from "@/hook/useSubmitPost";
import { useRouter } from "next/router";

interface IUser {
  id: string;
  email: string;
  githubURL: string;
  username: string;
}

export interface FormData {
  title: string;
  code: string;
  categoryName: string;
  anonymous: boolean;
}

const AddPost: React.FC = () => {

  const router= useRouter()



  const {
    control,
    handleSubmit,
    setValue,
    reset,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: "",
      code: "",
      categoryName: "",
      anonymous: true,
    },
  });

  const anonymous = useWatch({ control, name: "anonymous" });

  const {
    data: categories = [],
    isLoading: categoriesLoading,
    isError,
  } = useCategories();

  const submitMutation = useSubmitPost();
  const {
    mutate: submitPost,
    error: mutationError,
    isSuccess,
  } = submitMutation;

  const isSubmitting = submitMutation.status === "pending";

  const [user, setUser] = useState<IUser | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("user");
        if (stored) {
          const parsed = JSON.parse(stored) as IUser;
          setUser(parsed);
        }
      }
    } catch {
    }
  }, []);

  const validate = (values: FormData) => {
    let valid = true;
    if (!values.title?.trim()) {
      setError("title", { type: "required", message: "Title need" });
      valid = false;
    }
    if (!values.code?.trim()) {
      setError("code", { type: "required", message: "Code need" });
      valid = false;
    }
    if (!values.categoryName?.trim()) {
      setError("categoryName", {
        type: "required",
        message: "Language by selected need",
      });
      valid = false;
    }
    return valid;
  };

  const onSubmit = (data: FormData) => {
    if (!validate(data)) return;

    if (data.categoryName === "Select Language") {
      return setError("categoryName", {
        message:"language need by selected"
      })
    }
      submitPost(
        {
          payload: {
            title: data.title,
            code: data.code,
            categoryName: data.categoryName,
          },
          anonymous: data.anonymous,
        },
        {
          onSuccess: () => {
            setSuccessMessage("Post added");
            setSubmitError(null);
            reset({
              title: "",
              code: "",
              categoryName: "",
              anonymous: true,
            });
            router.push("/");
          },
          onError: (err: any) => {
            const message =
              err?.message ||
              (err instanceof Error ? err.message : "Post error ");
            setSubmitError(message);
            setSuccessMessage(null);
          },
        }
      );
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
            options={[{ name: "Select Language" }, ...categories].map((c) => ({
              value: c.name.toUpperCase(),
              label: c.name,
            }))}
            placeholder="Category"
            control={control}
            style={
              errors.categoryName ? { border: "1px solid red" } : {}
            }
          />
        </div>

        {categoriesLoading && (
          <div className={styles.loading}>Loading categories...</div>
        )}
        {isError && (
          <div className={styles.fieldError}>
            Kategoriya yuklanmadi, defaultlar ishlatilishi mumkin.
          </div>
        )}

        <div className={styles.editorWrapper}>
          <CodeEditor name="code" control={control} style={{ width: "100%" }} />
          {errors.code && (
            <p className={styles.errorText}>
              {(errors.code as any)?.message || "Code need"}
            </p>
          )}
        </div>

        <div className={styles.actions}>
          <div className={styles.leftGroup}>
            {user && (
              <div
                className={`${styles.username} ${
                  anonymous ? styles["username-disabled"] : ""
                }`}
              >
                {user.username}
              </div>
            )}
            <label className={styles.checkbox}>
              <input
                type="checkbox"
                checked={!!anonymous}
                onChange={(e) => setValue("anonymous", e.target.checked)}
              />
              Anonymous sharing
            </label>
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>

        {submitError && (
          <div className={styles.feedbackError}>{submitError}</div>
        )}
        {successMessage && (
          <div className={styles.feedbackSuccess}>{successMessage}</div>
        )}
        {!submitError && mutationError && (
          <div className={styles.feedbackError}>
            {(mutationError as any)?.message || "Error."}
          </div>
        )}

        <div style={{ marginTop: 8 }}>
          {errors.title && (
            <div className={styles.fieldError}>
              {(errors.title as any)?.message || "Title need"}
            </div>
          )}
          {errors.categoryName && (
            <div className={styles.fieldError}>
              {(errors.categoryName as any)?.message || "Language need"}
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default AddPost;