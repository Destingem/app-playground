import { Container, Mark, Text } from '@mantine/core';
import SectionHeading from './UI/Index/SectionHeading';

export default function AboutUs() {
  return (
    <div style={{ marginTop: '-25vh' }}>
      <Container px="xs" size="xl" sx={{ height: 'fitContent' }}>
        <SectionHeading >About.</SectionHeading>
        <Text component="p" size="xl">
          Vítejte na našich stránkách. Jsme sportovní střelci z Brna, které baví
          nejen střílet, ale také tvořit. V našem sortimentu najdete produkty ve
          kterých jsme viděli potenciál pro vylepšení, či na trhu vůbec nebyli.
          Například <Mark>šipky pro sportovní kuši</Mark>, dostupnost a cena byla 
          pro začinající střelce z kuše jako my velice špatná, především ta cena nás trápila stačí
          jediný špatný výstřel a je po šipce. Proto jsem vytvořili vlastí šipky{" "}
          <Mark>Artemis.</Mark> Do budoucna se však nechceme zaměrovat pouze na fyzické produkty, ale také poskytovat <Mark>specificky zaměřený software pro sportovní střelbu</Mark>. Máme několik modelů těchto šipek s ohledem na cílového zákazníka a použítí. Doufáme, že se vám naše produkty zalíbí a budeme rádi, když naše snažení koupí produktu podpoříte.
        </Text>
        <Text component="p" size="xl" sx={{ textAlign: 'right' }}>
          <em>- Ondřej Zaplatílek & Vojtěch Sysel</em>
        </Text>
        <div>
          
        </div>
      </Container>
    </div>
  );
}
