import { createStyles, Text, Container, ActionIcon, Group, Affix, Transition, Button } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
import { IconArrowUp } from '@tabler/icons';
    
const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundImage: "url(/bottom2.svg)",
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));


export function FooterLinks(data) {
  const [scroll, scrollTo] = useWindowScroll()
    var data =     [
        {
          title: "About",
          links: [
            {
              label: "Features",
              link: "#"
            },
            {
              label: "Pricing",
              link: "#"
            },
            {
              label: "Support",
              link: "#"
            },
            {
              label: "Forums",
              link: "#"
            }
          ]
        },
        {
          title: "Project",
          links: [
            {
              label: "Contribute",
              link: "#"
            },
            {
              label: "Media assets",
              link: "#"
            },
            {
              label: "Changelog",
              link: "#"
            },
            {
              label: "Releases",
              link: "#"
            }
          ]
        },
        {
          title: "Community",
          links: [
            {
              label: "Join Discord",
              link: "#"
            },
            {
              label: "Follow on Twitter",
              link: "#"
            },
            {
              label: "Email newsletter",
              link: "#"
            },
            {
              label: "GitHub discussions",
              link: "#"
            }
          ]
        }
      ]
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
    <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 600}>
          {(transitionStyles) => (
            <Button
              
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              <IconArrowUp size={16} />
            </Button>
          )}
        </Transition>
      </Affix>
      <Container className={classes.inner}>
        <div className={classes.logo}>
        
          <Text size="sm" color="dimmed" className={classes.description}>
            <strong>Ondřej Zaplatílek</strong><br /> Moravské Bránice, 119 <br /> Dolní Kounice 664 64 <br /> Česká republika <br /> <strong>IČ:</strong> 17538408 <br /> Neplátce DPH
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2022 Artilea All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}