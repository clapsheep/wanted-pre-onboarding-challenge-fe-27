import { useState, useEffect } from "react";
import { Form } from "react-router-dom";
import { InputText, BasicButton } from "@/components";
import { TodoType } from "./TodoList";

interface TodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<TodoType, "id" | "createdAt" | "updatedAt">) => void;
  initialData?: TodoType;
}

const TodoModal = ({ isOpen, onClose, initialData }: TodoModalProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setContent(initialData.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <Form
        method={initialData ? "PUT" : "POST"}
        className="bg-white p-6 rounded-lg w-96"
      >
        <h2 className="text-xl font-bold mb-4">
          {initialData ? "게시글 수정" : "새 게시글 작성"}
        </h2>
        {initialData && (
          <input type="hidden" name="todoId" value={initialData.id} />
        )}
        <InputText
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목을 입력하세요"
        >
          제목
        </InputText>

        <div className="flex flex-col gap-2 mb-4">
          <label
            htmlFor="content"
            className="text-sm font-medium text-gray-700"
          >
            내용
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-32"
          />
        </div>

        <div className="flex justify-end space-x-2">
          <BasicButton onClick={onClose} color="secondary">
            취소
          </BasicButton>
          <BasicButton type="submit" color="primary">
            확인
          </BasicButton>
        </div>
      </Form>
    </div>
  );
};

export default TodoModal;
