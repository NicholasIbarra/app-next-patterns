import { Box, Container, Stack, Typography } from "@mui/material";
import WelcomeCard from "../components/WelcomeCard";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Stack spacing={4} alignItems="center">
        <Box textAlign="center">
          <Typography variant="overline" color="text.secondary">
            UI Foundations
          </Typography>
          <Typography variant="h3" component="h1" fontWeight={700} mt={1}>
            Kickstart your Next.js + MUI workspace
          </Typography>
          <Typography color="text.secondary" mt={1}>
            Build accessible, themed components with hot-reload in Storybook and ship them straight into your app.
          </Typography>
        </Box>
        <WelcomeCard />
      </Stack>
    </Container>
  );
}
