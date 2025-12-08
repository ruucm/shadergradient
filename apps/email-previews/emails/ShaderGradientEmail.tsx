import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import {
  shaderEmailContent,
  type EmailContentInput,
} from "@/lib/emailContent";

type Props = EmailContentInput;

const SectionTitle = ({ children }: { children: string }) => (
  <Heading style={styles.sectionTitle}>{children}</Heading>
);

export default function ShaderGradientEmail(props: Props = PreviewProps) {
  const {
    headline,
    body,
    previewText,
    ctaLabel,
    ctaUrl,
    secondaryCtaLabel,
    secondaryCtaUrl,
    accentColor = "#ff340a",
    heroImage,
    featureGifUrl,
    pluginGifUrl,
    figmaGifUrl,
  } = {
    ...PreviewProps,
    ...props,
  };
  const paragraphs = body.split("\n").filter(Boolean);

  return (
    <Html>
      <Head />
      <Preview>{previewText || headline}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.hero}>
            <Text style={styles.label}>ShaderGradient v2</Text>
            <Heading style={styles.heading}>{headline}</Heading>
            <Text style={styles.subheading}>{previewText}</Text>
            {heroImage ? (
              <Img
                src={heroImage}
                alt="ShaderGradient hero"
                width="560"
                style={styles.image}
              />
            ) : null}
            {ctaUrl ? (
              <Button
                href={ctaUrl}
                style={{
                  ...styles.button,
                  backgroundColor: accentColor,
                }}
              >
                {ctaLabel || "Learn more"}
              </Button>
            ) : null}
          </Section>

          <Section style={styles.content}>
            <SectionTitle>What&apos;s new</SectionTitle>
            {paragraphs.map((text, idx) => (
              <Text key={idx} style={styles.paragraph}>
                {text}
              </Text>
            ))}
            {featureGifUrl ? (
              <Img
                src={featureGifUrl}
                alt="Performance demo"
                width="560"
                style={styles.image}
              />
            ) : null}

            <Row style={{ marginTop: 12 }}>
              {ctaUrl ? (
                <Column style={{ paddingRight: 8 }}>
                  <Button
                    href={ctaUrl}
                    style={{
                      ...styles.button,
                      backgroundColor: accentColor,
                      minWidth: 160,
                    }}
                  >
                    {ctaLabel || "Primary CTA"}
                  </Button>
                </Column>
              ) : null}
              {secondaryCtaUrl ? (
                <Column style={{ paddingLeft: 8 }}>
                  <Button
                    href={secondaryCtaUrl}
                    style={{
                      ...styles.button,
                      backgroundColor: "#0b1f33",
                      color: "#e2e8f0",
                      minWidth: 160,
                    }}
                  >
                    {secondaryCtaLabel || "Secondary CTA"}
                  </Button>
                </Column>
              ) : null}
            </Row>

            {pluginGifUrl ? (
              <Img
                src={pluginGifUrl}
                alt="Plugin preview"
                width="560"
                style={styles.image}
              />
            ) : null}
            {figmaGifUrl ? (
              <Img
                src={figmaGifUrl}
                alt="Figma plugin preview"
                width="560"
                style={styles.image}
              />
            ) : null}

            <Hr style={styles.hr} />
            <Text style={styles.footer}>
              Full details →{" "}
              <Link href="https://shadergradient-v2.framer.website/update">
                shadergradient-v2.framer.website/update
              </Link>
            </Text>
            <Text style={styles.footer}>
              Thanks for your continued support. Reach out to us on Twitter or
              reply for more questions!
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    backgroundColor: "#f6f9fc",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    margin: 0,
    padding: 0,
    color: "#0f172a",
  },
  container: {
    margin: "0 auto",
    padding: "32px 20px 48px",
    maxWidth: "640px",
  },
  hero: {
    background:
      "linear-gradient(135deg, rgba(255,52,10,0.08), rgba(15,23,42,0.03) 60%, #ffffff)",
    color: "#0f172a",
    borderRadius: "18px",
    padding: "36px 32px",
    textAlign: "left" as const,
    boxShadow: "0 18px 50px rgba(15, 23, 42, 0.08)",
    border: "1px solid #e2e8f0",
  },
  label: {
    display: "inline-block",
    fontSize: "12px",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "#0f172a",
    backgroundColor: "rgba(15,23,42,0.07)",
    padding: "6px 10px",
    borderRadius: "999px",
    marginBottom: "12px",
  },
  heading: {
    margin: "0 0 8px",
    fontSize: "30px",
    fontWeight: 700,
    letterSpacing: "-0.02em",
  },
  subheading: {
    margin: "0 0 20px",
    color: "#475569",
    fontSize: "16px",
    lineHeight: "24px",
  },
  button: {
    display: "inline-block",
    color: "#ffffff",
    padding: "15px 24px",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: 700,
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  content: {
    marginTop: "28px",
    backgroundColor: "#ffffff",
    borderRadius: "18px",
    padding: "28px 26px",
    boxShadow: "0 12px 40px rgba(15, 23, 42, 0.08)",
    border: "1px solid #e2e8f0",
  },
  sectionTitle: {
    fontSize: "19px",
    margin: "0 0 12px",
    color: "#0f172a",
  },
  paragraph: {
    color: "#1e293b",
    fontSize: "16px",
    lineHeight: "24px",
    margin: "0 0 12px",
  },
  image: {
    borderRadius: "14px",
    margin: "14px 0",
    display: "block",
    width: "100%",
  },
  hr: {
    borderColor: "#e2e8f0",
    margin: "18px 0",
  },
  footer: {
    color: "#475569",
    fontSize: "13px",
    margin: "4px 0",
  },
};

export const previewProps: Props = shaderEmailContent();
export const PreviewProps = previewProps;
