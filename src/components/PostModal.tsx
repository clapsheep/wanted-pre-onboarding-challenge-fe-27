import { useState, useEffect } from "react";
import { Post } from "./PostList";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<Post, "id" | "createdAt" | "updatedAt">) => void;
  initialData?: Post;
}

const PostModal = ({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}: PostModalProps) => {
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
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">
          {initialData ? "게시글 수정" : "새 게시글 작성"}
        </h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="제목"
          className="w-full p-2 border rounded mb-4"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용"
          className="w-full p-2 border rounded mb-4 h-32"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 border rounded hover:bg-gray-100"
          >
            취소
          </button>
          <button
            onClick={() => onSubmit({ title, content })}
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
