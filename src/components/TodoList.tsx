export interface TodoType {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

interface TodoListProps {
  todos: TodoType[];
  onEdit: (todo: TodoType) => void;
  onDelete: (id: string) => void;
  onSelect: (todo: TodoType) => void;
  selectedPostId?: string;
}

const TodoList = ({
  todos,
  onEdit,
  onDelete,
  onSelect,
  selectedPostId,
}: TodoListProps) => {
  return (
    <div className="space-y-4">
      {todos.map((post) => (
        <div
          key={post.id}
          className={`p-4 border rounded-lg cursor-pointer hover:border-blue-500 transition-colors ${
            selectedPostId === post.id ? "border-blue-500 bg-blue-50" : ""
          }`}
          onClick={() => onSelect(post)}
        >
          <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
          <p className="text-gray-600 line-clamp-2">{post.content}</p>
          <div className="mt-2 text-sm text-gray-500">
            {new Date(post.createdAt).toLocaleDateString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
