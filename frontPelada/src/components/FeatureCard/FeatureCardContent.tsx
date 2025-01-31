import { CardContent } from "./styles";

interface FeatureCardContentProps {
  title: string;
  text: string;
  pWidth?: number;
}

export function FeatureCardContent({ title, text, pWidth }: FeatureCardContentProps) {
  return (
    <CardContent pWidth={pWidth}>
      <h1>{title}</h1>
      <p>{text}</p>
    </CardContent>
  );
}
