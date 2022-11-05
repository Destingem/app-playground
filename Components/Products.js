import { Button, Container, Grid, Text, useMantineTheme} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Produkt from "./Produkt";
import useSWR from "swr";
async function getData() {
   
    
    
  }
export default function SecondSection(){
    let fetcher = (...args) => fetch(...args).then(res => res.json());
    let { data, error } = useSWR("/api/products", fetcher);
    console.log(data);
    let theme = useMantineTheme()
    return(
        <div style={{width: "100%", height: "50vh",  padding: "3vh 15vw", display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundRepeat: "no-repeat", backgroundPosition: "right"}}>
        <div
        style={{
          border: '3px solid #545454',
          borderRadius: '3px',
          borderStyle: 'none none solid solid',
          maxWidth: "fit-content",
          textAlign: "center",
          padding: "0 5vw"
          
        }}>
             <Container px="xs" size="xl" sx={{ height: 'fitContent'}}>
          <h2>Produkty</h2>
        </Container>
        </div>
    
    <Carousel
      slideSize="50%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
      slideGap="xl"
      align="start"
      slidesToScroll={ 2}
    >
     {data && data.results && data.results.map((product) => {return <Carousel.Slide key={product.title}><Produkt {...product}/></Carousel.Slide>})}
    </Carousel>

        


        </div>
    )
}