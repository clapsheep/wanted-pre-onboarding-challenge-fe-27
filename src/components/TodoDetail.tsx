import { TodoType } from "./TodoList";
import { BasicButton } from "@/components";

interface TodoDetailProps {
  todo?: TodoType;
  onEdit: (todo: TodoType) => void;
  onDelete: (id: string) => void;
}

const TodoDetail = ({ todo, onEdit, onDelete }: TodoDetailProps) => {
  if (!todo) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        게시물을 클릭해서 자세한 내용을 확인해보세요!
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{todo.title}</h2>
        <div className="space-x-2">
          <BasicButton color="secondary" onClick={() => onEdit(todo)}>
            수정
          </BasicButton>
          <BasicButton color="danger" onClick={() => onDelete(todo.id)}>
            삭제
          </BasicButton>
        </div>
      </div>
      <div className="whitespace-pre-wrap">{todo.content}</div>
      <div className="mt-4 text-sm text-gray-500">
        작성일: {new Date(todo.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
};

export default TodoDetail;
