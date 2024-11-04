import { useState } from "react";
import PostList from "@/components/PostList";
import PostModal from "@/components/PostModal";
import { Post } from "@/components/PostList";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const { data: posts } = useLoaderData() as { data: Post[] };
  console.log(posts);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | undefined>(undefined);

  const handleAdd = (data: Omit<Post, "id" | "createdAt" | "updatedAt">) => {
    // API 호출하여 새 게시글 추가
    console.log("Add post:", data);
    setIsModalOpen(false);
  };

  const handleEdit = (post: Post) => {
    setEditingPost(post);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    // API 호출하여 게시글 삭제
    console.log("Delete post:", id);
  };

  const handleSubmit = (data: Omit<Post, "id" | "createdAt" | "updatedAt">) => {
    if (editingPost) {
      // API 호출하여 게시글 수정
      console.log("Edit post:", { ...data, id: editingPost.id });
    } else {
      handleAdd(data);
    }
    setIsModalOpen(false);
    setEditingPost(undefined);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">게시글 목록</h1>
        <button
          onClick={() => {
            setEditingPost(undefined);
            setIsModalOpen(true);
          }}
          className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
        >
          새 게시글
        </button>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          게시글이 없습니다. 첫 번째 게시글을 작성해보세요!
        </div>
      ) : (
        <PostList posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
      )}

      <PostModal
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
