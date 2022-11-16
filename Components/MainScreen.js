import { createStyles, Container, Title, Text, Button } from '@mantine/core';
import Image from 'next/image';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#1B1D43',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: "url(/krivky.svg)",
    paddingTop: theme.spacing.xl * 4,
    minHeight: '80vh',
    height: 'fit-content',
   
    borderRadius:" 0 10 10 0",
  },

  inner: {
    height: '100%',

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
   display: 'flex',
    flexDirection: 'column',
    alignItems: "flex-start",
    
    paddingTop: theme.spacing.xl * 2,
    
    marginRight: theme.spacing.xl * 3,
    
    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: "#E6E7E8",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: 500,
    fontSize: 68,
    

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  description: {
    color: "#E6E7E8",
    opacity: 1,
    maxWidth: 500,
    fontSize: 24,
    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 22,
    marginTop: theme.spacing.xl * 2,
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
                sx={{margin: 0, whiteSpace: "nowrap"}}
              >
                Od střelců pro střelce
              </Text>{' '}
             
            </Title>

            <Text className={classes.description} mt={30}>
              Inovativní sportovní vybavení pro ty co chtějí objevit nové možnosti a nebojí se nových věcí.
            </Text>

            <Button
            sx={{marginTop: "10% !important"}}
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
