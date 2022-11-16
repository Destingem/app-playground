"use client";
import { useMantineTheme, useMantineColorScheme } from '@mantine/core';
import {Button} from "@mantine/core"
import { useEffect } from 'react';
import MainNavigation from './MainNavigation';
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "pathseg";
import Head from 'next/head';
import { MainScreen } from './MainScreen';
import Navbar from './NavBar';
export default function TopSection(props) {

    const particlesInit = useCallback(async engine => {
      require("pathseg");
      console.log(engine);
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    require("pathseg");
      await console.log(container);
  }, []);
  if (process.browser) {
    require("pathseg");
  }
  
  return (
    <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column"}}>
    
    <Navbar />
    
 
    <MainScreen />
 
 
    </div>
  );
}