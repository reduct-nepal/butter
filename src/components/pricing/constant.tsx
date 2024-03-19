import DoubleStar from "assets/icons/doubleStar.svg";
import styles from "./pricing.module.css";

export const PRICING_GROWTH_COPY = {
  title: "Growth",
  titleIcon: DoubleStar,
  pricing: "$6k",
  pricingCriteria: (
    <p className={styles.pricingCriteria}>
      per <br /> month
    </p>
  ),
  ctaText: "Book a free call",
  whatsIncludedList: [
    "Attribution setup",
    "Content strategy and writing",
    " Pain point SEO BoFu content",
    "Technical SEO enhancements",
    "Custom SEO tool development",
    "Monthly performance reporting",
  ],
  teamEquivalent: "Head of SEO, 2x Content Marketers, Marketing Strategist",
};

export const ONE_OFF_BLOG_COPY = {
  title: "One-off blog",
  description:
    "Includes topic research, content writing and revision until you are satisfied",
  pricing: "$630",
  ctaText: "Get Started",
};

export const CUSTOM_PRICING_COPY = {
  title: "Have a unique need?",
  description:
    "Get on a call to discover how we can help you make your inbound marketing effort buttery smooth.",
  ctaText: "Book a call",
};
