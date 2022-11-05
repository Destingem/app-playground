"use client";
import "../styles/globals.css";
import {MantineProvider,  ColorSchemeProvider, ColorScheme} from "@mantine/core";
import {FooterLinks} from "../Components/Footer";
import {useLocalStorage, useHotkeys, useWindowScroll} from "@mantine/hooks";
import { useState } from "react";
import "pathseg";
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }) {
    const [colorScheme, setColorScheme] = useState("light");
    
      const toggleColorScheme = (value) =>{ setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));}
       
        useHotkeys([['ctrl+B', () => toggleColorScheme()]]);
        if (process.browser) {
          require("pathseg");
        }
        
  return (

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
     <MantineProvider  withGlobalStyles withNormalizeCSS
      theme={{ colorScheme,  defaultGradient: {
            from: 'orange',
            to: '#ff5d39',
            deg: 45,
          }, }}>
        <GoogleAnalytics gaMeasurementId="G-GEB11YKD61" />
        <Component {...pageProps} />
        <Analytics />
        <FooterLinks />
        </MantineProvider>
    </ColorSchemeProvider>
    
  
  );
}