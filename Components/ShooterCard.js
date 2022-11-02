import { Carousel } from '@mantine/carousel';
import {
  createStyles,
  Card,
  Avatar,
  Text,
  Group,
  Button,
  SimpleGrid,
  Image,
} from '@mantine/core';
import Link from 'next/link';
import {MdOutlineExitToApp} from 'react-icons/md';
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  avatar: {
    border: `2px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
    }`,
  },
}));

export default function ShooterCard({
  image,
  avatar,
  name,
  job,
  stats,
  produkty,
}) {
  const { classes, theme } = useStyles();

  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text align="center" size="lg" weight={500}>
        {stat.value}
      </Text>
      <Text align="center" size="sm" color="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card withBorder p="xl" radius="md" className={classes.card}>
      <Card.Section
        sx={{
          backgroundImage: `url(${image})`,
          height: 140,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Avatar
        src={avatar}
        size={100}
        radius={100}
        mx="auto"
        mt={-40}
        className={classes.avatar}
      />
      <Text align="center" size="lg" weight={500} mt="sm">
        {name}
      </Text>
      <Text align="center" size="sm" color="dimmed">
        {job}
      </Text>
      <Group mt="md" position="center" spacing={30}>
        {items}
      </Group>
      <Group mt="md" position="center" spacing={30}>
        <SimpleGrid cols={2} spacing="md">
          {produkty.map((produkt) => {
            function decodeHTMLEntities(text) {
  let textArea = document.createElement('textarea');
  textArea.innerHTML = text;
  return textArea.value;
}
            if(!produkt) return null;
            return (
              <Card>
                <Card.Section>

                  <Carousel withIndicators loop>
                    {produkt && produkt.images.map((image) => {
                        return(
                            <Carousel.Slide key={image.id}>
                            <Image src={image.file.url} alt={produkt.name} />
                            </Carousel.Slide>
                        )
                    })}
                  </Carousel>
                 <div style={{display: "flex", justifyContent: "space-between"}}>
                 <div>
              
                 <Text align="center" size="md" weight={500} mt="sm">{produkt.name}</Text>
                 <Text align="center" size="sm" weight={500} mt="sm">{produkt.description.replace(/(<([^>]+)>)/gi, "").replace("&Scaron;", "Š").replace("&iacute;", "í").replace("&scaron;", "š").replace("&nbsp;", " ")}</Text>
                 </div>
                 <Link href={"https://artilea.vercel.app/product/" + produkt.name.toLowerCase().replace(" ", "-")}><div style={{color: "#3e30d7", display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%", marginTop: "6px"}}><MdOutlineExitToApp size={30} /></div></Link>
                 </div>
                </Card.Section>
              </Card>
            );
          })}
        </SimpleGrid>
      </Group>
    </Card>
  );
}
