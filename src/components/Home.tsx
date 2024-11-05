import { TodoType } from "@/components/TodoList";
import {
  TodoModal,
  TodoList,
  TodoDetail,
  BasicButton,
  NoContent,
} from "@/components";
import { useEffect, useState } from "react";
import { useActionData, useLoaderData, useFetcher } from "react-router-dom";
import { getTodoDetail } from "@/routes/actions";

type ActionDataType = {
  success: boolean;
  data: TodoType | TodoType[];
};

const Home = () => {
  const { data: todos } = useLoaderData() as { data: TodoType[] };
  const actionData = useActionData() as ActionDataType;
  const fetcher = useFetcher();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<TodoType | undefined>(
    undefined
  );
  const [selectedPost, setSelectedPost] = useState<TodoType | undefined>(
    undefined
  );
  const [todoDetail, setTodoDetail] = useState<TodoType | undefined>(undefined);

  useEffect(() => {
    if (actionData?.success) {
      setIsModalOpen(false);
      setEditingPost(undefined);
    }
  }, [actionData]);

  const handleAdd = () => {
    setIsModalOpen(false);
  };

  const handleEdit = (todo: TodoType) => {
    setEditingPost(todo);
    setIsModalOpen(true);
  };

  const handleDelete = async () => {
    if (selectedPost) {
      try {
        fetcher.submit({ todoId: selectedPost.id }, { method: "DELETE" });
        setSelectedPost(undefined);
        // fetcher의 데이터로 에러 처리
        if (fetcher.data?.error) {
          alert(fetcher.data.error);
        }
      } catch (error) {
        console.error("Delete failed:", error);
        alert("삭제 중 오류가 발생했습니다.");
      }
    }
  };

  const handleSubmit = () => {
    if (!editingPost) {
      handleAdd();
    }
    setIsModalOpen(false);
    setEditingPost(undefined);
  };

  const handlePostSelect = (todo: TodoType) => {
    setSelectedPost(todo);
  };

  useEffect(() => {
    if (selectedPost) {
      (async () => {
        const { data } = await getTodoDetail(selectedPost);
        setTodoDetail(data);
      })();
    } else {
      setTodoDetail(undefined);
    }
  }, [selectedPost]);

  useEffect(() => {
    if (actionData?.data) {
      // 배열인 경우 무시하거나 첫 번째 항목만 사용
      if (!Array.isArray(actionData.data)) {
        setTodoDetail(actionData.data);
      }
    }
  }, [actionData]);

  if (todos.length === 0) {
    return (
      <NoContent
        modalState={isModalOpen}
        onClick={() => {
          setEditingPost(undefined);
          setIsModalOpen(true);
        }}
        onClose={() => {
          setIsModalOpen(false);
          setEditingPost(undefined);
        }}
        onSubmit={handleSubmit}
        initialData={editingPost}
      />
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
            todo={todoDetail}
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
