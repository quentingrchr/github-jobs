import axios from "axios";

import Head from "next/head";
import CardsList from "../components/CardsList/CardsList.comp";
import Header from "../components/Header/Header.comp";
import SearchBar from "../components/SearchBar/SearchBar.comp";

import { getSearchUrlFromParams } from "../utils";

export default function Home({ data, filters }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.typekit.net/xpc8tjh.css"
        />
      </Head>
      <Header />
      <SearchBar filters={filters} />

      <main style={{ margin: "0 10vw" }}>
        {/* <SearchBar /> */}
        <CardsList data={data} />
      </main>
    </>
  );
}
//jobs.github.com/positions.json?search=node

export async function getServerSideProps({ query }) {
  const { search, location, full_time } = query;
  let url;
  const queryUrl = getSearchUrlFromParams({
    search,
    location,
    full_time,
  });
  if (queryUrl) {
    url = `https://jobs.github.com/positions.json${queryUrl}`;
  } else {
    url = `https://jobs.github.com/positions.json`;
  }
  const res = await axios.get(url);
  let data = res.data;

  return {
    props: {
      data: data,
      filters: {
        search: search || null,
        location: location || null,
        fullTime: full_time || null,
      },
    }, // will be passed to the page component as props
  };
}
