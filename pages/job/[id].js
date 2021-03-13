import axios from "axios";

import Head from "next/head";
import Header from "../../components/Header/Header.comp";

import { useRouter } from "next/router";
import JobArticle from "../../components/JobArticle/JobArticle.comp";

export default function Job({ job }) {
  console.log(job);
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/xpc8tjh.css"
        />
      </Head>
      <Header />
      {job && <JobArticle job={job} />}
    </>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://jobs.github.com/positions.json");
  const jobs = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = jobs.map((job) => ({
    params: { id: job.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://jobs.github.com/positions/${params.id}.json`,
  );
  const job = await res.json();

  // Pass post data to the page via props
  return { props: { job } };
}
