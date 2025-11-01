import { useEffect } from "react";
import { Button, Form, Input } from "antd";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object({
    title: Yup.string()
        .trim()
        .required("Please enter a task title")
        .min(3, "Minimum 3 characters"),
});

export default function AddTodoForm({ onSubmit, editingTodo, onCancelEdit }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
        setValue,
        control,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: { title: "" },
        mode: "onBlur",
    });

    useEffect(() => {
        if (editingTodo) {
            setValue("title", editingTodo.title);
        } else {
            reset({ title: "" });
        }
    }, [editingTodo, setValue, reset]);

    const handleFormSubmit = (values) => {
        onSubmit(values, reset);
    };

    return (
        <Form layout="inline" onFinish={handleSubmit(handleFormSubmit)} style={{ marginBottom: 16 }}>
            <Controller
                name="title"
                control={control}
                render={({ field, fieldState }) => (
                    <Form.Item
                        validateStatus={fieldState.error ? "error" : ""}
                        help={fieldState.error?.message}
                        style={{ flex: 1 }}
                    >
                        <Input {...field} placeholder="Enter task..." />
                    </Form.Item>
                )}
            />

            <Form.Item>
                <Button type="primary" htmlType="submit" loading={isSubmitting}>
                    {editingTodo ? "Save" : "Add"}
                </Button>
            </Form.Item>

            {editingTodo && (
                <Form.Item>
                    <Button onClick={onCancelEdit}>Cancel</Button>
                </Form.Item>
            )}
        </Form>
    );
}
