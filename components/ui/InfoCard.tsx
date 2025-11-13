"use client";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export interface InfoCardProps {
  /**
   * Headline text rendered at the top of the card.
   */
  title: string;
  /**
   * Supporting text rendered under the title.
   */
  subtitle?: string;
  /**
   * Body content for the card.
   */
  body: string;
  /**
   * Label for the primary call-to-action button.
   */
  actionLabel?: string;
  /**
   * Optional handler invoked when the primary action is clicked.
   */
  onAction?: () => void;
}

/**
 * A simple informational card with body text and an optional primary action.
 */
const InfoCard = ({
  title,
  subtitle,
  body,
  actionLabel = "Learn more",
  onAction,
}: InfoCardProps) => (
  <Card sx={{ maxWidth: 400 }}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      {subtitle ? (
        <Typography variant="subtitle1" color="text.secondary">
          {subtitle}
        </Typography>
      ) : null}
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        {body}
      </Typography>
    </CardContent>
    {onAction ? (
      <CardActions>
        <Button size="small" onClick={onAction}>
          {actionLabel}
        </Button>
      </CardActions>
    ) : null}
  </Card>
);

export default InfoCard;
