import Layout from "../components/Layout"
import "../sass/globals.css"
export default function MyApp({ Component, pageProps }) { 
   return ( 
       <Layout> 
           <Component {...pageProps} /> 
       </Layout> 
    );
}