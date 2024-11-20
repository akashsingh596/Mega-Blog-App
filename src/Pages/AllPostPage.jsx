import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import Container from "../components/container/Container";
import PostCard from "../components/assests/PostCard";

function AllPostPage() {
  const [post, setPost] = use([]);
  useEffect(() => {}, []);
  appwriteService.getPosts([]).then((posts) => {
    if (posts) {
      setPost(post.documents); // confuse
    }
  });
  return (
    <div className="w-full py-8">
      <Container>
        {/* {post.map((posts) => {
          <PostCard key={posts.$id} posts={posts} />;
        })} */}
        <div className="flex flex-wrap">
          {post.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPostPage;
