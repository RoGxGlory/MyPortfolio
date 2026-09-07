import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  const siteUrl = "https://rayanebenabdeljalil.com";
  const title = "Rayane Benabdeljalil — Game Developer & Musician";
  const description =
    "Portfolio of Rayane Benabdeljalil — founder of Havoc Interactive, game developer, community manager and musician. Browse shipped games, technical projects and creative work.";

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rayane Benabdeljalil",
    jobTitle: "Game Developer, Community Manager & Musician",
    url: siteUrl,
    founder: { "@type": "Organization", name: "Havoc Interactive" },
    worksFor: { "@type": "Organization", name: "Havoc Interactive" },
    sameAs: [
      "https://github.com/RoGxGlory",
      "https://www.linkedin.com/in/rayane-benabdeljalil-",
      "https://www.youtube.com/@BenabRayane",
    ],
  };

  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Havoc Interactive",
    description:
      "Independent game studio founded by Rayane Benabdeljalil, creator of HAVOC: The New Reckoning and SpellBound: Survival.",
    url: siteUrl,
    founder: {
      "@type": "Person",
      name: "Rayane Benabdeljalil",
      url: siteUrl,
    },
    makesOffer: [
      { "@type": "VideoGame", name: "HAVOC: The New Reckoning", url: "https://havocthenewreckoning.org/" },
      { "@type": "VideoGame", name: "SpellBound: Survival", url: "https://spellboundsurvival.com" },
    ],
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: title,
    url: siteUrl,
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${siteUrl}/`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${siteUrl}/`} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(personLd)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationLd)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteLd)}</script>
      </Helmet>
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>© 2025 Portfolio. Crafted with passion.</p>
      </footer>
    </div>
  );
};

export default Index;
