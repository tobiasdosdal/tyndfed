import { useState, useEffect } from 'react'
import { Link, createFileRoute } from '@tanstack/react-router'
import { WindowChrome } from '~/components/WindowChrome'

export const Route = createFileRoute('/privacy')({
  component: Privacy,
  head: () => ({
    meta: [
      { title: 'Tyndfed - Privacy Policy & Terms of Service' },
      { name: 'description', content: 'Privacy Policy and Terms of Service for Tyndfed apps and services.' },
    ],
    links: [
      { rel: 'canonical', href: 'https://tyndfed.dk/privacy' },
    ],
  }),
})

type Language = 'en' | 'da'

const CONTENT = {
  en: {
    privacy: {
      title: 'Privacy Policy',
      updated: 'Last Updated: December 21, 2025',
      sections: [
        { 
          heading: 'Introduction', 
          text: 'Tyndfed ("we", "us", or "our") operates mobile applications and websites. This policy explains how we collect, use, and protect your personal data when you use our services.' 
        },
        { 
          heading: 'Information We Collect', 
          text: 'We collect: (1) Information you provide directly, such as your name and email when creating an account; (2) Usage data including app interactions, features used, and crash reports; (3) Device information such as device type, operating system, and unique identifiers; (4) Payment information processed securely by Apple App Store or Google Play—we never store your payment details directly.' 
        },
        { 
          heading: 'How We Use Your Information', 
          text: 'We use your data to: provide and maintain our services; personalize your experience; send important updates and notifications; analyze usage patterns to improve our apps; respond to support requests; and comply with legal obligations.' 
        },
        { 
          heading: 'Data Sharing', 
          text: 'We do not sell your personal data. We may share data with: service providers who help operate our services (hosting, analytics); payment processors (Apple, Google); and authorities when required by law. All third parties are bound by confidentiality agreements.' 
        },
        { 
          heading: 'Data Retention', 
          text: 'We retain your data only as long as necessary to provide our services or as required by law. You can request deletion of your account and associated data at any time.' 
        },
        { 
          heading: 'Security', 
          text: 'We implement industry-standard security measures including encryption, secure servers, and access controls. However, no method of transmission over the internet is 100% secure.' 
        },
        { 
          heading: 'Your Rights (GDPR)', 
          text: 'Under EU/EEA law, you have the right to: access your personal data; correct inaccurate data; request deletion; restrict processing; data portability; and withdraw consent. Contact us to exercise these rights.' 
        },
        { 
          heading: 'Cookies & Analytics', 
          text: 'Our apps may use analytics services to understand usage patterns. Our websites use essential cookies only. We do not use advertising trackers.' 
        },
        { 
          heading: 'Children\'s Privacy', 
          text: 'Our services are not directed at children under 13. We do not knowingly collect data from children. If you believe we have collected such data, please contact us immediately.' 
        },
        { 
          heading: 'Changes to This Policy', 
          text: 'We may update this policy periodically. Significant changes will be communicated through our apps or via email. Continued use after changes constitutes acceptance.' 
        },
        { 
          heading: 'Contact', 
          text: 'Questions about this policy? Contact us at kontakt@tyndfed.dk or write to: Tyndfed, Denmark (CVR: 39125307).' 
        },
      ],
    },
    terms: {
      title: 'Terms of Service',
      updated: 'Last Updated: December 21, 2025',
      sections: [
        { 
          heading: 'Acceptance', 
          text: 'By using Tyndfed apps or services, you agree to these terms. If you disagree, please do not use our services.' 
        },
        { 
          heading: 'License', 
          text: 'We grant you a limited, non-exclusive, non-transferable, revocable license to use our apps for personal, non-commercial purposes. You may not copy, modify, distribute, sell, or reverse engineer our software.' 
        },
        { 
          heading: 'User Accounts', 
          text: 'You are responsible for maintaining the security of your account credentials. You must provide accurate information and promptly update any changes. We reserve the right to suspend accounts that violate these terms.' 
        },
        { 
          heading: 'Subscriptions & Payments', 
          text: 'Premium features require a subscription. Subscriptions auto-renew unless cancelled at least 24 hours before the renewal date. Manage subscriptions through your App Store or Google Play account settings. Prices may change with notice. Refunds are handled by the respective app store.' 
        },
        { 
          heading: 'User Content', 
          text: 'You retain ownership of content you create. By using our services, you grant us a license to store and display your content as necessary to provide the service. You are responsible for ensuring your content does not violate any laws or third-party rights.' 
        },
        { 
          heading: 'Prohibited Conduct', 
          text: 'You may not: use our services for illegal purposes; attempt to gain unauthorized access; interfere with service operation; upload malicious code; impersonate others; or violate others\' rights.' 
        },
        { 
          heading: 'Disclaimer of Warranties', 
          text: 'Our services are provided "AS IS" and "AS AVAILABLE" without warranties of any kind. We do not guarantee uninterrupted, error-free, or secure service. Use at your own risk.' 
        },
        { 
          heading: 'Limitation of Liability', 
          text: 'To the maximum extent permitted by law, Tyndfed shall not be liable for any indirect, incidental, special, consequential, or punitive damages. Our total liability is limited to the amount you paid us in the 12 months preceding the claim, or €100, whichever is greater.' 
        },
        { 
          heading: 'Termination', 
          text: 'We may terminate or suspend your access immediately, without notice, for conduct that violates these terms or is harmful to other users or us. Upon termination, your license to use the service ends.' 
        },
        { 
          heading: 'Governing Law', 
          text: 'These terms are governed by Danish law. Disputes shall be resolved in the courts of Denmark. If you are an EU consumer, you may also use the EU Online Dispute Resolution platform.' 
        },
        { 
          heading: 'Contact', 
          text: 'For questions about these terms, contact kontakt@tyndfed.dk.' 
        },
      ],
    },
  },
  da: {
    privacy: {
      title: 'Privatlivspolitik',
      updated: 'Senest opdateret: 21. december 2025',
      sections: [
        { 
          heading: 'Introduktion', 
          text: 'Tyndfed ("vi", "os" eller "vores") driver mobilapps og hjemmesider. Denne politik forklarer, hvordan vi indsamler, bruger og beskytter dine personoplysninger, når du bruger vores tjenester.' 
        },
        { 
          heading: 'Oplysninger vi indsamler', 
          text: 'Vi indsamler: (1) Oplysninger du giver direkte, såsom navn og email ved oprettelse af konto; (2) Brugsdata inkl. app-interaktioner, anvendte funktioner og fejlrapporter; (3) Enhedsoplysninger såsom enhedstype, operativsystem og unikke identifikatorer; (4) Betalingsoplysninger behandlet sikkert af Apple App Store eller Google Play—vi gemmer aldrig dine betalingsoplysninger direkte.' 
        },
        { 
          heading: 'Hvordan vi bruger dine oplysninger', 
          text: 'Vi bruger dine data til at: levere og vedligeholde vores tjenester; personliggøre din oplevelse; sende vigtige opdateringer og notifikationer; analysere brugsmønstre for at forbedre vores apps; besvare supporthenvendelser; og overholde juridiske forpligtelser.' 
        },
        { 
          heading: 'Datadeling', 
          text: 'Vi sælger ikke dine personoplysninger. Vi kan dele data med: tjenesteudbydere der hjælper med at drive vores tjenester (hosting, analyse); betalingsbehandlere (Apple, Google); og myndigheder når loven kræver det. Alle tredjeparter er bundet af fortrolighedsaftaler.' 
        },
        { 
          heading: 'Dataopbevaring', 
          text: 'Vi opbevarer kun dine data så længe det er nødvendigt for at levere vores tjenester eller som krævet ved lov. Du kan til enhver tid anmode om sletning af din konto og tilhørende data.' 
        },
        { 
          heading: 'Sikkerhed', 
          text: 'Vi implementerer branchestandarder for sikkerhed inkl. kryptering, sikre servere og adgangskontrol. Dog er ingen metode til transmission over internettet 100% sikker.' 
        },
        { 
          heading: 'Dine rettigheder (GDPR)', 
          text: 'Under EU/EØS-lovgivning har du ret til: indsigt i dine personoplysninger; berigtigelse af urigtige data; anmodning om sletning; begrænsning af behandling; dataportabilitet; og tilbagetrækning af samtykke. Kontakt os for at udøve disse rettigheder.' 
        },
        { 
          heading: 'Cookies & Analyse', 
          text: 'Vores apps kan bruge analysetjenester til at forstå brugsmønstre. Vores hjemmesider bruger kun essentielle cookies. Vi bruger ikke reklamesporere.' 
        },
        { 
          heading: 'Børns privatliv', 
          text: 'Vores tjenester er ikke rettet mod børn under 13 år. Vi indsamler ikke bevidst data fra børn. Hvis du mener, vi har indsamlet sådanne data, kontakt os straks.' 
        },
        { 
          heading: 'Ændringer til denne politik', 
          text: 'Vi kan opdatere denne politik periodisk. Væsentlige ændringer vil blive kommunikeret gennem vores apps eller via email. Fortsat brug efter ændringer udgør accept.' 
        },
        { 
          heading: 'Kontakt', 
          text: 'Spørgsmål om denne politik? Kontakt os på kontakt@tyndfed.dk eller skriv til: Tyndfed, Danmark (CVR: 39125307).' 
        },
      ],
    },
    terms: {
      title: 'Servicevilkår',
      updated: 'Senest opdateret: 21. december 2025',
      sections: [
        { 
          heading: 'Accept', 
          text: 'Ved at bruge Tyndfed apps eller tjenester accepterer du disse vilkår. Hvis du er uenig, bedes du ikke bruge vores tjenester.' 
        },
        { 
          heading: 'Licens', 
          text: 'Vi giver dig en begrænset, ikke-eksklusiv, ikke-overførbar, tilbagekaldelig licens til at bruge vores apps til personlige, ikke-kommercielle formål. Du må ikke kopiere, ændre, distribuere, sælge eller reverse-engineere vores software.' 
        },
        { 
          heading: 'Brugerkonti', 
          text: 'Du er ansvarlig for at opretholde sikkerheden af dine kontooplysninger. Du skal give korrekte oplysninger og straks opdatere eventuelle ændringer. Vi forbeholder os ret til at suspendere konti, der overtræder disse vilkår.' 
        },
        { 
          heading: 'Abonnementer & Betaling', 
          text: 'Premium-funktioner kræver abonnement. Abonnementer fornyes automatisk, medmindre de opsiges mindst 24 timer før fornyelsesdatoen. Administrer abonnementer via dine App Store- eller Google Play-kontoindstillinger. Priser kan ændres med varsel. Refusioner håndteres af den respektive app-butik.' 
        },
        { 
          heading: 'Brugerindhold', 
          text: 'Du bevarer ejerskab af indhold, du opretter. Ved at bruge vores tjenester giver du os licens til at gemme og vise dit indhold som nødvendigt for at levere tjenesten. Du er ansvarlig for at sikre, at dit indhold ikke overtræder love eller tredjeparts rettigheder.' 
        },
        { 
          heading: 'Forbudt adfærd', 
          text: 'Du må ikke: bruge vores tjenester til ulovlige formål; forsøge at få uautoriseret adgang; forstyrre tjenestens drift; uploade ondsindet kode; udgive dig for andre; eller krænke andres rettigheder.' 
        },
        { 
          heading: 'Ansvarsfraskrivelse', 
          text: 'Vores tjenester leveres "SOM DE ER" og "SOM TILGÆNGELIGE" uden garantier af nogen art. Vi garanterer ikke uafbrudt, fejlfri eller sikker service. Brug på egen risiko.' 
        },
        { 
          heading: 'Ansvarsbegrænsning', 
          text: 'I det omfang loven tillader, er Tyndfed ikke ansvarlig for indirekte, hændelige, særlige, følge- eller strafskader. Vores samlede ansvar er begrænset til det beløb, du har betalt os i de 12 måneder forud for kravet, eller €100, alt efter hvad der er størst.' 
        },
        { 
          heading: 'Opsigelse', 
          text: 'Vi kan opsige eller suspendere din adgang øjeblikkeligt uden varsel for adfærd, der overtræder disse vilkår eller er skadelig for andre brugere eller os. Ved opsigelse ophører din licens til at bruge tjenesten.' 
        },
        { 
          heading: 'Gældende lov', 
          text: 'Disse vilkår er underlagt dansk lovgivning. Tvister skal afgøres ved danske domstole. Hvis du er EU-forbruger, kan du også bruge EU\'s online tvistløsningsplatform.' 
        },
        { 
          heading: 'Kontakt', 
          text: 'Spørgsmål om disse vilkår? Kontakt kontakt@tyndfed.dk.' 
        },
      ],
    },
  },
}

function Privacy() {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('tyndfed-lang')
      if (saved === 'en' || saved === 'da') return saved
    }
    return 'da'
  })

  useEffect(() => {
    localStorage.setItem('tyndfed-lang', lang)
  }, [lang])

  const content = CONTENT[lang]

  return (
    <WindowChrome title="privacy.exe">
      <div className="content-area">
        <nav className="lang-switch">
          <button
            className={lang === 'da' ? 'active' : ''}
            onClick={() => setLang('da')}
          >
            Dansk
          </button>
          <button
            className={lang === 'en' ? 'active' : ''}
            onClick={() => setLang('en')}
          >
            English
          </button>
        </nav>

        <section className="legal-section">
          <h2>{content.privacy.title}</h2>
          <p className="updated">{content.privacy.updated}</p>
          {content.privacy.sections.map((s) => (
            <div key={s.heading}>
              <h3>{s.heading}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </section>

        <hr />

        <section className="legal-section">
          <h2>{content.terms.title}</h2>
          <p className="updated">{content.terms.updated}</p>
          {content.terms.sections.map((s) => (
            <div key={s.heading}>
              <h3>{s.heading}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </section>

        <nav className="back-nav">
          <Link to="/" className="back-link">← Back to main</Link>
        </nav>
      </div>

      <style>{`
        .content-area {
          padding: 24px;
          max-height: calc(100vh - 120px);
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: var(--text-ghost, #3a3a3a) transparent;
        }
        
        .content-area::-webkit-scrollbar {
          width: 6px;
        }
        
        .content-area::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .content-area::-webkit-scrollbar-thumb {
          background: var(--text-ghost, #3a3a3a);
          border-radius: 3px;
        }
        
        .lang-switch {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-bottom: 24px;
        }
        
        .lang-switch button {
          font-family: inherit;
          font-size: 12px;
          font-weight: 500;
          background: var(--bg-elevated, #141414);
          color: var(--text-secondary, #8c8c8c);
          border: 1px solid var(--chrome-border, rgba(255, 255, 255, 0.08));
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          transition: 
            background 150ms ease,
            color 150ms ease,
            border-color 150ms ease;
        }
        
        .lang-switch button:hover {
          background: var(--bg-hover, #1a1a1a);
          color: var(--text-primary, #e8e8e8);
        }
        
        .lang-switch button.active {
          background: var(--accent-blue-dim, rgba(94, 175, 255, 0.12));
          color: var(--accent-blue, #5eafff);
          border-color: rgba(94, 175, 255, 0.2);
        }
        
        .legal-section {
          color: var(--text-secondary, #8c8c8c);
          line-height: 1.7;
          font-size: 13px;
        }
        
        .legal-section h2 {
          color: var(--text-primary, #e8e8e8);
          font-size: 16px;
          font-weight: 600;
          letter-spacing: -0.01em;
          border-bottom: 1px solid var(--chrome-border, rgba(255, 255, 255, 0.08));
          padding-bottom: 10px;
          margin-bottom: 16px;
        }
        
        .legal-section h3 {
          color: var(--text-primary, #e8e8e8);
          font-size: 13px;
          font-weight: 500;
          margin-top: 20px;
          margin-bottom: 8px;
        }
        
        .legal-section p {
          margin-bottom: 12px;
        }
        
        .legal-section .updated {
          color: var(--text-muted, #5c5c5c);
          font-size: 11px;
          margin-bottom: 16px;
        }
        
        .legal-section a {
          color: var(--accent-blue, #5eafff);
          transition: color 150ms ease;
        }
        
        .legal-section a:hover {
          color: #7ec4ff;
        }
        
        hr {
          border: none;
          border-top: 1px solid var(--chrome-border, rgba(255, 255, 255, 0.08));
          margin: 32px 0;
        }
        
        .back-nav {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid var(--chrome-border, rgba(255, 255, 255, 0.08));
          text-align: center;
        }
        
        .back-link {
          color: var(--text-muted, #5c5c5c);
          font-size: 12px;
          font-weight: 500;
          padding: 8px 16px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          border-radius: 6px;
          transition: 
            color 150ms ease,
            background 150ms ease;
        }
        
        .back-link:hover {
          color: var(--text-primary, #e8e8e8);
          background: var(--bg-hover, rgba(255, 255, 255, 0.05));
        }
        
        @media (max-width: 480px) {
          .content-area {
            padding: 16px;
          }
          
          .legal-section {
            font-size: 12px;
          }
          
          .legal-section h2 {
            font-size: 14px;
          }
        }
      `}</style>
    </WindowChrome>
  )
}
