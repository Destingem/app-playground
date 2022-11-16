import { Button, Container, Grid, Text, useMantineTheme} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Produkt from "./Produkt";
import useSWR from "swr";
import SectionHeading from "./UI/Index/SectionHeading";
async function getData() {
   
    
    
  }
export default function SecondSection(){
    let fetcher = (...args) => fetch(...args).then(res => res.json());
    let { data, error } = useSWR("/api/products", fetcher);
    console.log(data);
    let theme = useMantineTheme()
    return(
        <div style={{width: "100%", height: "50vh",  padding: "3vh 15vw", display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundRepeat: "no-repeat", backgroundPosition: "right"}}>
       
          <SectionHeading>Produkty</SectionHeading>
       
    
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