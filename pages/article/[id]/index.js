import Link from "next/link";
import Meta from "../../../component/Meta";
import { useRouter } from "next/router";
import { server } from "../../../config";
const article = ({ article }) => {
  //   const router = useRouter();
  //   const { id } = router.query;
  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>This is an article {article.id}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
};
/**
 * Fetching from API folder
 */
export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();
  return { props: { article } };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const article = await res.json();
  const ids = article.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return { paths, fallback: false };
};

/**
 * fetched from server
 */

// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );
//   const article = await res.json();
//   return { props: { article } };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const article = await res.json();
//   const ids = article.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return { paths, fallback: false };
// };

export default article;
