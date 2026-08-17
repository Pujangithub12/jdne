import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
}

const SITE_URL = "https://www.jdne.com.np";
const SITE_NAME = "Janda Devi Nepal Energy";

const setMeta = (attr: "name" | "property", key: string, content: string) => {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
};

const Seo: React.FC<SeoProps> = ({ title, description, path = "" }) => {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME)
      ? title
      : `${title} | ${SITE_NAME}`;
    const canonicalUrl = `${SITE_URL}${path}`;

    document.title = fullTitle;
    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);

    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [title, description, path]);

  return null;
};

export default Seo;
