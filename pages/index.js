import axios from "axios";

import Head from "next/head";
import CardList from "../components/CardList/CardList.comp";
import Header from "../components/Header/Header.comp";
import SearchBar from "../components/SearchBar/SearchBar.comp";

export default function Home({ data }) {
  return (
    <>
      <Head />
      <Header>
        <SearchBar />
      </Header>
      <main style={{ margin: "0 10vw" }}>
        {/* <SearchBar /> */}
        <CardList data={data} />
      </main>
    </>
  );
}
//jobs.github.com/positions.json?search=node

export async function getStaticProps(context) {
  const res = await axios.get(
    "https://jobs.github.com/positions.json?search=node",
  );
  return {
    props: { data: res.data }, // will be passed to the page component as props
  };
}
