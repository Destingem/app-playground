import { createStyles, Container, Title, Text, Button } from '@mantine/core';
import Image from 'next/image';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#1B1D43',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: "url(/krivky.svg)",
    paddingTop: theme.spacing.xl * 3,
    paddingBottom: theme.spacing.xl * 3,
    height: '80vh',
   
    borderRadius:" 0 10 10 0",
  },

  inner: {
    

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column',
    },
  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    marginRight: theme.spacing.xl * 3,
    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 48,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: 500,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 22,

    [theme.fn.smallerThan('md')]: {
      width: '100%',
    },
  },
}));

export function MainScreen() {
  const { classes } = useStyles();
  const router = useRouter()
  return (
    <div className={classes.root}>
      <Container size="xl">
        <div className={classes.inner}>
          <div className={classes.content}>
           
           <Title className={classes.title}>
          
              <Text
                component="h1"
                inherit
                
              >
                Střelecké vybavení
              </Text>{' '}
              kterému můžete věřit
            </Title>

            <Text className={classes.description} mt={30}>
              Kvalitní sportovní vybavení jenž pomůže růst nejen vám, ale i vašim výsledkům
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: '#FF5C35', to: ' #FC6840' }}
              size="xl"
              className={classes.control}
              mt={40}
              href="/products"
              onClick={()=> {router.push('/products')}}
            >
              Prohlédnout produkty
            </Button>
           </div>
        
         
         
        </div>
      </Container>
    </div>
  );
}
