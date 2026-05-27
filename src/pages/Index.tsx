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
    "Portfolio of Rayane Benabdeljalil — game developer, community manager and musician. Browse shipped games, technical projects and creative work.";

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rayane Benabdeljalil",
    jobTitle: "Game Developer, Community Manager & Musician",
    url: siteUrl,
    sameAs: [
      "https://github.com/RoGxGlory",
      "https://www.linkedin.com/in/rayane-benabdeljalil-",
      "https://open.spotify.com/artist/1HSQULPueap6RRJf0bz7ph",
      "https://www.youtube.com/@BenabRayane",
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
