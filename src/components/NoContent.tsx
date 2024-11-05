import BasicButton from "./BasicButton";
import { TodoType } from "./TodoList";
import TodoModal from "./TodoModal";

interface NoContentProps {
  onClick: () => void;
  modalState: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<TodoType, "id" | "createdAt" | "updatedAt">) => void;
  initialData: TodoType | undefined;
}
const NoContent = ({
  onClick,
  modalState,
  onClose,
  onSubmit,
  initialData,
}: NoContentProps) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">TO-DO 목록</h1>
        <BasicButton color="primary" onClick={onClick}>
          새 할 일
        </BasicButton>
      </div>
      <div className="text-center py-10 text-gray-500">
        게시글이 없습니다. 첫 번째 할 일을 작성해보세요!
      </div>
      <TodoModal
        isOpen={modalState}
        onClose={onClose}
        onSubmit={onSubmit}
        initialData={initialData}
      />
    </div>
  );
};

export default NoContent;
