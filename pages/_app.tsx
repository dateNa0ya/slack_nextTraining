import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../layouts/SidebarLayout';
import { createContext, useState } from 'react';
import { User } from "@/types/User";

export const AppContext = createContext(
  {} as {
    me: User;
  }
);

function MyApp({ Component, pageProps }: AppProps) {  
const [me, setMe] = useState({
  id: "1",
  name: "inada",
  profile: "Hello, world",
  profileImageUrl: "https://onl.la/6nbMiTA",
});

  return (
    <Layout>
      <AppContext.Provider value={{ me }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </Layout>
  )
}

export default MyApp;