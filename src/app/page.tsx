"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'futuristicAndOutOfBox', colorTemplate: 2, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          logoSrc="/images/logo.svg"
          navItems={[
            { name: 'Hero', id: 'hero' },
            { name: 'About', id: 'about' },
            { name: 'How to Buy', id: 'how-to-buy' },
            { name: 'Tokenomics', id: 'tokenomics' },
            { name: 'Footer', id: 'footer' }
          ]}
          buttonText="Get Started"
          onButtonClick={() => {}}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <TokenBillboardHero
          title="Welcome to NovaPulse"
          subtitle="The Next Generation SaaS Platform"
          contractAddress="0x123...abc"
          copyButtonText="Copy Address"
          copiedText="Address Copied!"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="Why Choose NovaPulse?"
          descriptions={["A platform that empowers you to manage your SaaS business effortlessly.", "We provide tools that help you grow and succeed.", "Our customer support is here 24/7."]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy NovaPulse"
          steps={[
            { title: 'Step 1', description: 'Visit our website', image: '/images/placeholder1.avif', position: 'left', isCenter: false },
            { title: 'Step 2', description: 'Create an account', image: '/images/placeholder2.avif', position: 'center', isCenter: true },
            { title: 'Step 3', description: 'Start using our services', image: '/images/placeholder3.avif', position: 'right', isCenter: false }
          ]}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Tokenomics Overview"
          description="Understanding our economic structure and how it benefits you."
          cardItems={[
            { id: 1, title: 'Market Cap', description: 'Estimated value on the market.' },
            { id: 2, title: 'Total Supply', description: 'Total number of coins available.' },
            { id: 3, title: 'Liquidity', description: 'Easy access to your investments.' }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logowhite.svg"
          logoAlt="NovaPulse Logo"
          logoText="NovaPulse"
          className="text-center"
          svgClassName="w-20"
        />
      </div>
    </SiteThemeProvider>
  );
}
