"use client"
import { ActionIcon, Button, SimpleGrid, Text } from '@mantine/core';
import { useSpotlight } from '@mantine/spotlight';
import Image from 'next/image';
import Link from 'next/link';
import "pathseg";
import {MdSearch} from "react-icons/md"
export default function MainNavigation() {
    let links = [{name: "O nás", to: "/onas"}, {name: "Produkty", to: "/produkty"}, {name: "Kontakt", to: "/kontakt"}];
    const spotlight = useSpotlight();
  return (
    // absolute div in center of screen
    

    <div style={{ alignItems: 'center', height: 'fitContent', display: "flex", zIndex: "1100", }}>
      <div
        style={{
          width: '70vw',
          backgroundColor: 'white',
          height: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: '0px 0px 8px 8px',
          height: '7vh',
          display: 'flex',
          alignItems: 'center',
          padding: "0 2vw 0 2vw",
          justifyContent: "space-between",
          position: "absolute", marginLeft: "auto", top: "0", left: "50%", transform: "translate(-50%, 0)"
        }}
      >
        <div
          style={{
            minHeight: '10%',
            minWidth: '10%',
            display: 'block',
            position: 'relative',
            aspectRatio: '626 / 222',
          }}
        >
          <Image src="/artilea_transparent.png" alt="logo" fill />
        </div>
        <div style={{display: "flex", gap: "1vw"}}>
            {links.map((link) => {
                return(
                <Link href={link.to}><Text component="p" color="#3C28D7" weight={500}>{link.name}</Text></Link>
                )
            })}
        </div>
        <ActionIcon color="dark" onClick={spotlight.openSpotlight}>
        <MdSearch />
        </ActionIcon>
      </div>
      <Link href="https://www.shop.artilea.eu"><Button sx={{position: "absolute", right: "2vw", backgroundColor: "#ff5d39", color: "#131641", height: "6vh", top: "0.8vh"}} variant="gradient" gradient={["#ff5d39", "#131641"]}><Text size="md">Our shop</Text></Button></Link>
    </div>
  );
}
