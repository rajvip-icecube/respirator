'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import '../app/styles/calendar.css'
import '../app/styles/style1.css'
import '../app/styles/owl-carousel.css'
import '../app/styles/jquery.fancybox.css';
import '../app/styles/porto-icons-codes.css'
import '../app/styles/simple-line-icons.css'
import '../app/styles/animation.css'
import '../app/styles/custom2.css'
import '../app/styles/header.css'
import '../app/styles/style.css'
import '../app/styles/style2.css'
import '../app/styles/font-awesome.css'
import '../app/styles/searchsuiteautocomplete.css'
import '../app/styles/trustpilot.min.css'
import '../app/styles/blog-m.css'
import '../app/styles/blog-new.css'
import '../app/styles/styles-l.css'
import '../app/styles/type1.css'
import '../app/styles/bootstrap.optimized.min.css'
import '../app/styles/print.css'
import '../app/styles/custom.css'
import '../app/styles/design_default.css'
import '../app/styles/type1.css'
import '../app/styles/animate.optimized.css'
import '../app/styles/bootstrap.optimized.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/styles/setting_default.css'
import Head from 'next/head';

import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { createContext } from 'react'

 
const Context = createContext()
const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Dusks Mask & Respirators | Buy PPE Online | Respirator Shop",
  description: "respirator, respirators, mask, masks, dust, dust mask, filters, face mask, fit testing, 3m, moldex, portwest, dust respirator, p3 dust mask, ffp3 dust mask, dust masks and respirators",
};
const client = new ApolloClient({
  uri: "https://newdev.respiratorshop.co.uk/graphql",
  cache: new InMemoryCache(),
});
export default function RootLayout({ children }) {
  return (
      <html lang="en">
         <Head>
         <link href="https://db.onlinewebfonts.com/c/39a84af025b3c9a5820be9699d7fc8d4?family=porto-icons" rel="stylesheet" />
      </Head>
        <body style={{ margin: "0px" }} className="cms-index-index " >
 
        <ApolloProvider client={client}>
         
          {children}
        
          </ApolloProvider>
        
        </body>
      </html>
  );
}
