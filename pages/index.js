import { server } from "../config";
import ArticleList from "../component/ArticleList";

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

// Home.getInitialProps = async (ctx) => {
//   const res = await fetch(`${server}/api/articles`);
//   const articles = await res.json();
//   return { articles };
// };

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
