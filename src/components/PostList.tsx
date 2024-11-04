export interface Post {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

interface PostListProps {
  posts: Post[];
  onEdit: (post: Post) => void;
  onDelete: (id: string) => void;
}

const PostList = ({ posts, onEdit, onDelete }: PostListProps) => {
  return (
    <div className="space-y-4">
      {posts?.map((post) => (
        <div key={post.id} className="p-4 border rounded-lg shadow">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="mt-2">{post.content}</p>
          <div className="mt-4 space-x-2">
            <button
              onClick={() => onEdit(post)}
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              수정
            </button>
            <button
              onClick={() => onDelete(post.id)}
              className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
            >
              삭제
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
