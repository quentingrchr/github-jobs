import axios from "axios";

import Head from "next/head";
import Header from "../../components/Header/Header.comp";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/xpc8tjh.css"
        />
      </Head>
      <Header />

      <main style={{ margin: "0 10vw" }}>
        <h1>{id}</h1>
      </main>
    </>
  );
}
//jobs.github.com/positions.json?search=node

// export async function getStaticProps(context) {
//   const res = await axios.get(
//     "https://jobs.github.com/positions.json?search=node",
//   );
//   return {
//     props: { data: res.data }, // will be passed to the page component as props
//   };
// }
