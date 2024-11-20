import React from "react";
import { Container } from "../components/container/Container";
import { PostForm } from "../components/Post-Form/PostForm";
function AddPostPage() {
  return (
    <div className="py-8">
      <Container>
        <PostForm />
      </Container>
    </div>
  );
}

export default AddPostPage;
