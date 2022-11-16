import {
    ThemeIcon,
    Text,
    Title,
    Container,
    SimpleGrid,
    useMantineTheme,
    createStyles,
  } from '@mantine/core';
  import { IconGauge, IconCookie, IconUser, IconMessage2, IconLock, TablerIcon } from '@tabler/icons';
import SectionHeading from './UI/Index/SectionHeading';
  
  export const MOCKDATA = [
    {
      icon: IconGauge,
      title: 'Přesnost',
      description:
        'Každý produkt je individuálně testován na naší střelnici v Brně a je odesílán spolu s certifikátem přesnosti',
    },
    {
      icon: IconUser,
      title: 'Inovace',
      description:
        'Nechceme být jen dalším výrobce, ale chceme se snažit o inovace a vývoj nových produktů',
    },
    {
      icon: IconCookie,
      title: 'Podpora',
      description:
        'Nic není dokonalé a i ten nejlepší produkt může mít nějaké nedostatky. Proto jsme tu pro vás spolu s naším týmem zbrojařů',
    },
    {
      icon: IconLock,
      title: 'Integrace',
      description:
        'Všechny naše produkty jsou zvájemně kompatibilní a lze je snadno integrovat do vašeho systému',
    },
    {
      icon: IconMessage2,
      title: 'Kvalita',
      description:
        'Všechny produkty jsou vyvíjeny a vyrobeny v České republice s použitím ',
    },
  ];
  

  
  export function Feature({ icon: Icon, title, description }) {
    const theme = useMantineTheme();
    return (
      <div>
        <ThemeIcon variant="light" size={50} radius={40}>
          <Icon size={30} stroke={2} />
        </ThemeIcon>
        <Text style={{ marginTop: theme.spacing.lg, marginBottom: 7 }} size="lg">{title}</Text>
        <Text size="md" color="dimmed" style={{ lineHeight: 1.6 }}>
          {description}
        </Text>
      </div>
    );
  }
  
  const useStyles = createStyles((theme) => ({
    wrapper: {
      paddingTop: theme.spacing.xl * 4,
      paddingBottom: theme.spacing.xl * 4,
      maxWidth: 1360,
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontWeight: 900,
      marginBottom: theme.spacing.md,
      textAlign: 'left',
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: 28,
        textAlign: 'left',
      },
    },
  
    description: {
      textAlign: 'left',
  
      [theme.fn.smallerThan('sm')]: {
        textAlign: 'left',
      },
    },
  }));
  
 
  
  export function FeaturesGrid({ title, description, data = MOCKDATA }) {
    const { classes, theme } = useStyles();
    const features = data.map((feature, index) => <Feature {...feature} key={index} />);
  
    return (
      <>
     
      <Container className={classes.wrapper}>
    
           
          <SectionHeading>Naše zaměření</SectionHeading>
       
      
        
  
        <Container size={560} p={0}>
          <Text size="md" className={classes.description}>
            
          </Text>
        </Container>
  
        <SimpleGrid
          mt={60}
          cols={3}
          spacing={theme.spacing.xl * 2}
          breakpoints={[
            { maxWidth: 980, cols: 2, spacing: 'xl' },
            { maxWidth: 755, cols: 1, spacing: 'xl' },
          ]}
        >
          {features}
        </SimpleGrid>
      </Container>
      </>
    );
  }