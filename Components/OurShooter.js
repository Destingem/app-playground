import { Container, Grid, Space, Text, useMantineTheme } from "@mantine/core";

import useSWR from "swr";
import ShooterCard from "./ShooterCard";
import SectionHeading from "./UI/Index/SectionHeading";

export default function OurShooter(){
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const {data, error} = useSWR('/api/products', fetcher);
    let theme = useMantineTheme()
    const strelci = [{
        image: "/card_svg.svg",
        avatar: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80",
        name: "Ondřej Zaplatílek",
        job: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl eu nisl. Sed euismod, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl eu nisl.",
        stats: [
          {
            value: "1",
            "label": "Mistr"
          },
          {
            value: "3",
            label: "1. Abcdef"
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
          
           
          <SectionHeading>Partneři</SectionHeading>
     
       
        <Space h="xl" />
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