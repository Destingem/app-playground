import { Container, Text } from '@mantine/core';

export default function AboutUs() {
  return (
    <div style={{ paddingLeft: '10vw' }}>
      <div
        style={{
          border: '3px solid #545454',
          borderRadius: '3px',
          borderStyle: 'solid none solid solid',
          backgroundImage: "url(/nadpis.svg)"
        }}
      >
        <Container px="xs" size="xl" sx={{ height: 'fitContent' }}>
          <h1>About Us</h1>
        </Container>
      </div>
      <Container px="xs" size="xl" sx={{ height: 'fitContent' }}>
        <Text component="p" size="xl">
          Jsme sportovní střelci z Brna, které baví střílet a inovovat, tak jsme
          to spojili dohromady a vznikla z toho Artilea. Produkty tvoříme dle našich zkušností a 
        </Text>
        <Text component="p" size="xl" sx={{textAlign: "right"}}>
        <em>- Ondřej Zaplatílek & Vojtěch Sysel</em>
        </Text>
      </Container>
    </div>
  );
}
