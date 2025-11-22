import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function WelcomeCard() {
  return (
    <Card elevation={4} sx={{ maxWidth: 900 }}>
      <CardContent>
        <Stack direction="row" spacing={1} alignItems="center" mb={2}>
          <Chip icon={<InfoOutlinedIcon />} label="Starter" color="primary" variant="outlined" />
          <Typography variant="overline" color="text.secondary">
            Next.js + MUI + Storybook
          </Typography>
        </Stack>
        <Typography variant="h1" gutterBottom sx={{ fontSize: { xs: 32, sm: 40 } }}>
          Welcome to your new design system sandbox
        </Typography>
        <Typography color="text.secondary" paragraph>
          You now have Material UI wired up with emotion caching and a shared theme provider. Use this
          space to build pages, compose components, and keep your design system in sync across Storybook
          and the app.
        </Typography>
        <Box display="grid" gap={1} mt={2}>
          <Typography variant="subtitle1" fontWeight={600}>
            Helpful links
          </Typography>
          <Link href="https://mui.com/material-ui/getting-started/" target="_blank" rel="noreferrer">
            <Typography color="primary">Material UI docs</Typography>
          </Link>
          <Link href="https://storybook.js.org/docs" target="_blank" rel="noreferrer">
            <Typography color="primary">Storybook docs</Typography>
          </Link>
          <Link href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
            <Typography color="primary">Next.js docs</Typography>
          </Link>
        </Box>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end", px: 3, py: 2 }}>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          href="https://mui.com/material-ui/react-button/"
          target="_blank"
        >
          Explore components
        </Button>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          href="http://localhost:6006"
          target="_blank"
        >
          Run Storybook
        </Button>
      </CardActions>
    </Card>
  );
}
