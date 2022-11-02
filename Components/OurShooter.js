import { Container, Grid, Text, useMantineTheme } from "@mantine/core";

import useSWR from "swr";
import ShooterCard from "./ShooterCard";

export default function OurShooter(){
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const {data, error} = useSWR('/api/products', fetcher);
    let theme = useMantineTheme()
    const strelci = [{
        image: "/card_svg.svg",
        avatar: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        name: "Ondřej Zaplatílek",
        job: "Ondřej začal střílet ve svých 10 letech. Od té doby se věnuje střelbě na všech možných disciplínách. V současné době je členem týmu České republiky na olympiádě v střelbě.",
        stats: [
          {
            value: "1",
            "label": "Mistr ČR"
          },
          {
            value: "3",
            label: "1. místo v MČR Prosiměřice"
          },
          {
            value: "800",
            label: "závodů celkem"
          }
        ],
        produkty: ["Artemis One", "Artemis THE BLCK"]
      }]
     strelci.map(strelec => {
        let produkty = strelec.produkty.map(produkt => {
           let findedProdukt = data?.results?.filter(item => item.name == produkt)
          
           if(findedProdukt && findedProdukt[0]){
             return findedProdukt[0]
           }
        })
        console.log(produkty)
        strelec.produkty = produkty
        return strelec
     })
     console.log(strelci);
    return(
        <Container px="xs" size="xl" sx={{height: "fitContent"}}>
              <Text component="h2" size="xl" sx={{fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 48, margin: 0, whiteSpace: "nowrap"}}>Naši střelci</Text>
    <Grid sx={{minHeight: "10vh"}} >{strelci.map(strelec => {
        return(
            <Grid.Col span={4}>
            <ShooterCard {...strelec}/>
        </Grid.Col>
        )
    })}</Grid>
        </Container>
    )
}