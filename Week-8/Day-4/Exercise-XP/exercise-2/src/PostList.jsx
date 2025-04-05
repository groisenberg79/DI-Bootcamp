import data from "./List.json";
const PostList = () => {
  return data.map((item) => (
    <>
      <h1>{item.title}</h1>
      <p>{item.content}</p>
    </>
  ));
};

export default PostList;
