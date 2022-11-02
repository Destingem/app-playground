import { Carousel } from '@mantine/carousel';
import { Card, Text, Image,Group, Badge, createStyles, Center, Button } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons';


const useStyles = createStyles((theme, _params, getRef) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    maxWidth: "100%",	
    maxHeight: "100%",
    margin: "auto 0",
    display: "flex"
  },

  imageSection: {
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: "60%",
    
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: 5,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
  },
  price: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  carousel: {
    '&:hover': {
      [`& .${getRef('carouselControls')}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getRef('carouselControls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  carouselIndicator: {
    width: 4,
    height: 4,
    transition: 'width 250ms ease',

    '&[data-active]': {
      width: 16,
    },
  },
}));

const mockdata = [
  { label: '4 passengers', icon: IconUsers },
  { label: '100 km/h in 4 seconds', icon: IconGauge },
  { label: 'Automatic gearbox', icon: IconManualGearbox },
  { label: 'Electric', icon: IconGasStation },
];

export default function Produkt(props) {
  const { classes } = useStyles();
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size={18} className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));
  const slides = props.images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image.file.url} alt="Tesla Model S"  withPlaceholder sx={{objectFit: "cover"}} />
    </Carousel.Slide>
  ));
  return (
    <Card withBorder radius="md" className={classes.card}>
      <div className={classes.imageSection}>
      <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </div>

      <Group>
      <Group position="apart" mt="md">
        <div>
          <Text weight={500}>{props.name}</Text>
          <Text size="xs" color="dimmed">
            {props.popis}
          </Text>
        </div>
        <Badge variant="outline">25% off</Badge>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text size="sm" color="dimmed" className={classes.label}>
          specifikace
        </Text>

        <Group spacing={8} mb={-8}>
          {features}
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group spacing={30}>
          <div>
            <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
              {props.price + " " + props.currency}
            </Text>
            <Text size="sm" color="dimmed" weight={500} sx={{ lineHeight: 1 }} mt={3}>
              {props.za}
            </Text>
          </div>

          <Button radius="sm" style={{ flex: 1 }}>
            Zakoupit
          </Button>
        </Group>
      </Card.Section>
      </Group>
    </Card>
  );
}