import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import {
  productEmailContent,
  type EmailContentInput,
} from "@/lib/emailContent";

export type ProductUpdateEmailProps = EmailContentInput;

export default function ProductUpdateEmail(
  props: ProductUpdateEmailProps = PreviewProps
) {
  const {
    headline,
    body,
    ctaLabel = "자세히 보기",
    ctaUrl = "#",
    previewText = "",
    accentColor = "#0f766e",
    productImage,
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
            <Heading style={styles.heading}>{headline}</Heading>
            <Text style={styles.subheading}>{previewText || "업데이트 소식"}</Text>
            {productImage ? (
              <Img
                src={productImage}
                alt="Product"
                width="520"
                style={styles.image}
              />
            ) : null}
            <Button
              href={ctaUrl}
              style={{
                ...styles.button,
                backgroundColor: accentColor,
              }}
            >
              {ctaLabel}
            </Button>
          </Section>

          <Section style={styles.content}>
            {paragraphs.map((text, idx) => (
              <Text key={idx} style={styles.paragraph}>
                {text}
              </Text>
            ))}
            <Hr style={styles.hr} />
            <Text style={styles.footer}>
              Questions? Just reply to this email and we’ll help.
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
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    margin: 0,
    padding: 0,
  },
  container: {
    margin: "0 auto",
    padding: "32px 20px 48px",
    maxWidth: "640px",
    backgroundColor: "#f6f9fc",
  },
  hero: {
    background:
      "linear-gradient(135deg, #fff7f5 0%, #ffffff 45%, #f7fbff 100%)",
    color: "#0f172a",
    borderRadius: "18px",
    padding: "36px 32px",
    textAlign: "center" as const,
    border: "1px solid #e2e8f0",
  },
  heading: {
    margin: "0 0 12px",
    fontSize: "30px",
    fontWeight: 700,
    letterSpacing: "-0.02em",
  },
  subheading: {
    margin: "0 0 24px",
    color: "#475569",
    fontSize: "16px",
  },
  image: {
    borderRadius: "12px",
    margin: "0 auto 24px",
    maxWidth: "100%",
  },
  button: {
    display: "inline-block",
    color: "#f8fafc",
    padding: "15px 24px",
    borderRadius: "12px",
    fontSize: "16px",
    fontWeight: 600,
    textDecoration: "none",
  },
  content: {
    marginTop: "28px",
    backgroundColor: "#ffffff",
    borderRadius: "18px",
    padding: "28px 26px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
  },
  paragraph: {
    color: "#0f172a",
    fontSize: "16px",
    lineHeight: "24px",
    margin: "0 0 14px",
  },
  hr: {
    borderColor: "#e2e8f0",
    margin: "18px 0",
  },
  footer: {
    color: "#64748b",
    fontSize: "13px",
    margin: 0,
  },
};

export const previewProps: ProductUpdateEmailProps = productEmailContent();

export const PreviewProps = previewProps;
