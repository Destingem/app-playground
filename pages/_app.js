'use client';
import '../styles/globals.css';
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';
import { FooterLinks } from '../Components/Footer';
import { useLocalStorage, useHotkeys, useWindowScroll } from '@mantine/hooks';
import { useState } from 'react';
import 'pathseg';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from 'nextjs-google-analytics';
import { SpotlightProvider } from '@mantine/spotlight';
import { MdFolder, MdOutlineDashboardCustomize, MdOutlineHome, MdSearch } from 'react-icons/md';
import { useRouter } from 'next/router';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  const [colorScheme, setColorScheme] = useState('light');
  const router = useRouter();
  const toggleColorScheme = (value) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  };
  const actions = [ {
    title: 'Home',
    description: 'Get to home page',
    onTrigger: () => router.push('home'),
    icon: <MdOutlineHome size={18} />,
  },
  {
    title: 'About us',
    description: 'Get information about our company',
    onTrigger: () => router.push('dashboard'),
    icon: <MdOutlineDashboardCustomize size={18} />,
  },
  {
    title: 'Products',
    description: 'Explore Artilea products',
    onTrigger: () => router.push('products'),
    icon: <MdFolder size={18} />,
  },]

  useHotkeys([['ctrl+B', () => toggleColorScheme()]]);
  if (process.browser) {
    require('pathseg');
  }

  return (
    
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
          defaultGradient: {
            from: 'orange',
            to: '#ff5d39',
            deg: 45,
          },
          colors: {
            orange: ['#ff5d39', '#ff5d39'],
            darkBlue: ["#1B1D43"],
            grey: ["#BCBEC0"],
            lightGrey: ["#E6E7E8"],
            lightBlue: ["#281C64"],
            violet: ["#612096"],
            pink: [" #A01789"],
            lightOrange: ["#FC6840"],
            yellow: ["#F8C93D"]
          }
        }}
      >
        <SpotlightProvider
          actions={actions}
          shortcut={['mod + P', 'mod + K', '/', 'mod + F']}
          searchIcon={<MdSearch size={18} />}
          searchPlaceholder="Hledám..."
          nothingFoundMessage="Nic jsme nenašli..."
        >
        
          <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-GEB11YKD61"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GEB11YKD61');
        `}
      </Script>
          <Component {...pageProps} />
          <Analytics />
          <FooterLinks />
        </SpotlightProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
