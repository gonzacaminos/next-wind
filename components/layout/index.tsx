import Head from "next/head";

interface IProps {
  title?: string;
  children: React.ReactNode;
}
export default function Layout({ title, children }: IProps) {
  return (
    <main>
      <Head>
        <title>{title || "App Title"}</title>
        <meta name="description" content="App Description" />
      </Head>
      {children}
    </main>
  );
}
