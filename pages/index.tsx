import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "../src/Link";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <h2>Lorem ipsum, dolo molestias sed accusamus</h2>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-beta with TypeScript example
        </Typography>
        <Link href="/about">
          Go to the about page
        </Link>
      </Box>
    </Container>
  );
}
