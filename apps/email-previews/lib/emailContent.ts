export type EmailContentInput = {
  template?: "product" | "shader";
  subject: string;
  headline: string;
  body: string;
  previewText?: string;
  ctaLabel?: string;
  ctaUrl?: string;
  accentColor?: string;
  productImage?: string;
  secondaryCtaLabel?: string;
  secondaryCtaUrl?: string;
  heroImage?: string;
  featureGifUrl?: string;
  pluginGifUrl?: string;
  figmaGifUrl?: string;
};

export function productEmailContent(): EmailContentInput {
  return {
    template: "product",
    subject: "New Product Release Highlights",
    headline: "A faster workflow with our latest release",
    body: [
      "Hi there, a fresh update just landed for your team.",
      "Load times are down by 30% and notification settings are simpler than ever.",
      "Check the full changelog below and start using it today.",
    ].join("\n"),
    previewText: "Performance boost + simplified notifications.",
    ctaLabel: "See what’s new",
    ctaUrl: "https://example.com/product-update",
    accentColor: "#0f766e",
  };
}

export function shaderEmailContent(): EmailContentInput {
  return {
    template: "shader",
    subject: "ShaderGradient v2: Faster, lighter workflow",
    headline: "ShaderGradient just got faster",
    previewText: "Performance gains + Figma/Framer plugin updates",
    body: [
      "Hi!",
      "We've been working on some improvements for ShaderGradient to make it smoother, lighter, and easier to use. Today, we’re excited to share what’s new.",
      "",
      "Performance improvements",
      "We heard your feedback: performance was the main challenge when using ShaderGradient on the web. This update focuses heavily on speed and stability:",
      "- The package size is now 60% smaller",
      "- Added lazy load to offload gradients when they’re not visible",
      "",
      "New Figma plugin",
      "We also launched a brand-new ShaderGradient plugin for Figma! It includes:",
      "- ✨ Loop support for infinite moving gradients",
      "- Download, or add directly to Figma or even Slides and Buzz!",
      "- Many more UX improvements, including easy view control, letting you directly interact with gradient and change zoom/angle",
      "",
      "Framer Plugin",
      "Framer Plugin now uses our new, lighter component! If you've been using our ShaderGradient Framer component, check it out, and make sure to update your existing projects!",
      "",
      "Full details about the update here → https://shadergradient-v2.framer.website/update",
      "",
      "Thanks for your continued support, and hope you enjoy new updates! Reach out to us on Twitter or reply for more questions!",
    ].join("\n"),
    ctaLabel: "Figma Plugin",
    ctaUrl:
      "https://www.figma.com/community/plugin/1203016883447870818/shadergradient",
    secondaryCtaLabel: "Framer Plugin",
    secondaryCtaUrl: "https://www.framer.com/marketplace/plugins/shadergradient/",
    accentColor: "#ff340a",
    heroImage:
      "https://ruucm.github.io/shadergradient/ui@latest/assets/email/feconf.png",
    featureGifUrl:
      "https://ruucm.github.io/shadergradient/ui@latest/assets/email/intro.gif",
    pluginGifUrl:
      "https://ruucm.github.io/shadergradient/ui@latest/assets/email/framer.gif",
    figmaGifUrl:
      "https://ruucm.github.io/shadergradient/ui@latest/assets/email/figma.gif",
  };
}

export function defaultEmailContent(): EmailContentInput {
  return shaderEmailContent();
}
