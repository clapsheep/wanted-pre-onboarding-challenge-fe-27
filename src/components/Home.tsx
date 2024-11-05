import { TodoType } from "@/components/TodoList";
import { TodoModal, TodoList, TodoDetail, BasicButton } from "@/components";
import { useEffect, useState } from "react";
import { useActionData, useLoaderData } from "react-router-dom";

const Home = () => {
  const { data: todos } = useLoaderData() as { data: TodoType[] };
  const actionData = useActionData() as { success: boolean; data: TodoType[] };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<TodoType | undefined>(
    undefined
  );
  const [selectedPost, setSelectedPost] = useState<TodoType | undefined>(
    undefined
  );
  useEffect(() => {
    if (actionData?.success) {
      setIsModalOpen(false);
      setEditingPost(undefined);
    }
  }, [actionData]);

  const handleAdd = (
    data: Omit<TodoType, "id" | "createdAt" | "updatedAt">
  ) => {
    // API 호출하여 새 게시글 TodoType
    console.log("Add Todo:", data);
    setIsModalOpen(false);
  };

  const handleEdit = (todo: TodoType) => {
    setEditingPost(todo);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    // API 호출하여 게시글 삭제
    console.log("Delete post:", id);
  };

  const handleSubmit = (
    data: Omit<TodoType, "id" | "createdAt" | "updatedAt">
  ) => {
    if (editingPost) {
      // API 호출하여 게시글 수정
      console.log("Edit post:", { ...data, id: editingPost.id });
    } else {
      handleAdd(data);
    }
    setIsModalOpen(false);
    setEditingPost(undefined);
  };

  const handlePostSelect = (todo: TodoType) => {
    setSelectedPost(todo);
  };

  if (todos.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">TO-DO 목록</h1>
          <BasicButton
            color="primary"
            onClick={() => {
              setEditingPost(undefined);
              setIsModalOpen(true);
            }}
          >
            새 할 일
          </BasicButton>
        </div>
        <div className="text-center py-10 text-gray-500">
          게시글이 없습니다. 첫 번째 할 일을 작성해보세요!
        </div>
        <TodoModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingPost(undefined);
          }}
          onSubmit={handleSubmit}
          initialData={editingPost}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">TO-DO 목록</h1>
        <BasicButton
          color="primary"
          onClick={() => {
            setEditingPost(undefined);
            setIsModalOpen(true);
          }}
        >
          새 할 일
        </BasicButton>
      </div>

      <div className="flex gap-6">
        <div
          className="w-1/2 overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 200px)" }}
        >
          <TodoList
            todos={todos}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onSelect={handlePostSelect}
            selectedPostId={selectedPost?.id}
          />
        </div>
        <div className="w-1/2 border-l pl-6">
          <TodoDetail
            todo={selectedPost}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </div>

      <TodoModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingPost(undefined);
        }}
        onSubmit={handleSubmit}
        initialData={editingPost}
      />
    </div>
  );
};

export default Home;
