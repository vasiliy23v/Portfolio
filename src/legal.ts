import type { Lang } from './content'

export type Section = { h: string; p: string[] }
export type Doc = { title: string; sections: Section[] }
export type LegalSet = { imprint: Doc; privacy: Doc; updated: string; note: string }

export const LEGAL_LABELS: Record<Lang, { imprint: string; privacy: string; back: string }> = {
  en: { imprint: 'Impressum', privacy: 'Privacy', back: '← Back to portfolio' },
  de: { imprint: 'Impressum', privacy: 'Datenschutz', back: '← Zurück zum Portfolio' },
  uk: { imprint: 'Impressum', privacy: 'Конфіденційність', back: '← Назад до портфоліо' },
  ru: { imprint: 'Impressum', privacy: 'Конфиденциальность', back: '← Назад к портфолио' },
}

const NAME = 'Vasyl Shevchuk'
const EMAIL = 'shevchuk.develop@gmail.com'

const de: LegalSet = {
  updated: 'Stand: Oktober 2026',
  note: '',
  imprint: {
    title: 'Impressum',
    sections: [
      { h: 'Angaben gemäß § 5 DDG', p: [NAME, 'Düsseldorf, Deutschland'] },
      { h: 'Kontakt', p: [`E-Mail: ${EMAIL}`] },
      {
        h: 'Haftung für Inhalte',
        p: [
          'Die Inhalte dieser Seite wurden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität kann jedoch keine Gewähr übernommen werden. Als Diensteanbieter bin ich nach den allgemeinen Gesetzen für eigene Inhalte verantwortlich, nach §§ 8 bis 10 DDG jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen. Bei Bekanntwerden von Rechtsverletzungen entferne ich entsprechende Inhalte umgehend.',
        ],
      },
      {
        h: 'Haftung für Links',
        p: [
          'Diese Seite verlinkt auf Websites Dritter und Auf deren Inhalte habe ich keinen Einfluss und übernehme dafür keine Gewähr. Für die Inhalte verlinkter Seiten ist stets der jeweilige Anbieter verantwortlich. Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar.',
        ],
      },
      {
        h: 'Gezeigte Projekte und Marken',
        p: [
          'Die dargestellten Projekte sind Arbeiten, die ich für Dritte erbracht habe. Namen, Marken, Logos und Inhalte der jeweiligen Websites sind Eigentum ihrer Inhaber und werden hier ausschließlich als Arbeitsnachweis genannt. Es besteht keine Verbindung oder Billigung durch die genannten Unternehmen, soweit nicht ausdrücklich angegeben.',
        ],
      },
      {
        h: 'Urheberrecht',
        p: ['Die von mir erstellten Inhalte und Werke auf dieser Seite unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung und Verbreitung außerhalb der Grenzen des Urheberrechts bedürfen meiner schriftlichen Zustimmung.'],
      },
    ],
  },
  privacy: {
    title: 'Datenschutzerklärung',
    sections: [
      { h: '1. Verantwortlicher', p: [`${NAME}, Düsseldorf, Deutschland`, `E-Mail: ${EMAIL}`] },
      {
        h: '2. Hosting und Server-Logfiles',
        p: [
          'Diese Website wird bei Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet. Beim Aufruf der Seite verarbeitet der Hosting-Anbieter technisch notwendige Daten in Server-Logfiles, insbesondere IP-Adresse, Datum und Uhrzeit, aufgerufene URL, Referrer, Browsertyp und Betriebssystem.',
          'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb der Website). Mit dem Anbieter besteht ein Vertrag zur Auftragsverarbeitung. Eine Übermittlung in die USA stützt sich auf die vom Anbieter bereitgestellten Garantien (EU-Standardvertragsklauseln bzw. Zertifizierung nach dem EU-US Data Privacy Framework).',
        ],
      },
      {
        h: '3. Keine Cookies, keine Analyse',
        p: [
          'Diese Website setzt keine Cookies und verwendet keine Tracking- oder Analysedienste. Schriftarten werden lokal vom eigenen Server geladen, es erfolgt keine Verbindung zu Google Fonts.',
          'Ihre Auswahl von Sprache und Darstellung (hell/dunkel) wird im lokalen Speicher Ihres Browsers (localStorage) gespeichert, damit sie bei Ihrem nächsten Besuch erhalten bleibt. Diese Daten verlassen Ihr Gerät nicht. Rechtsgrundlage ist § 25 Abs. 2 Nr. 2 TDDDG.',
        ],
      },
      {
        h: '4. Kontaktaufnahme',
        p: ['Wenn Sie mir per E-Mail schreiben, verarbeite ich Ihre Angaben (E-Mail-Adresse, Inhalt der Nachricht) zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b oder f DSGVO. Die Daten werden gelöscht, sobald sie für den Zweck nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.'],
      },
      {
        h: '5. Externe Links',
        p: ['Links zu LinkedIn und GitHub sind einfache Verweise. Erst mit dem Anklicken verlassen Sie diese Website; für die dortige Datenverarbeitung ist der jeweilige Anbieter verantwortlich.'],
      },
      {
        h: '6. Ihre Rechte',
        p: [
          'Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21). Erteilte Einwilligungen können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Wenden Sie sich hierfür an die oben genannte E-Mail-Adresse.',
          'Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, zum Beispiel bei der Landesbeauftragten für Datenschutz und Informationsfreiheit Nordrhein-Westfalen, Postfach 20 04 44, 40102 Düsseldorf.',
        ],
      },
    ],
  },
}

const en: LegalSet = {
  updated: 'Last updated: October 2026',
  note: 'The German version is the legally binding one. This translation is provided for convenience.',
  imprint: {
    title: 'Legal notice (Impressum)',
    sections: [
      { h: 'Information pursuant to § 5 DDG', p: [NAME, 'Düsseldorf, Germany'] },
      { h: 'Contact', p: [`Email: ${EMAIL}`] },
      {
        h: 'Liability for content',
        p: [
          'The content of this site was created with care. However, no guarantee can be given for its accuracy, completeness or timeliness. As a service provider I am responsible for my own content under general law, but under §§ 8 to 10 DDG I am not obliged to monitor transmitted or stored third-party information. If I become aware of legal violations, I will remove the content promptly.',
        ],
      },
      {
        h: 'Liability for links',
        p: [
          'This site links to third-party websites. I have no influence over their content and accept no liability for it. The respective provider is always responsible for the content of linked pages. No legal violations were apparent at the time of linking.',
        ],
      },
      {
        h: 'Featured projects and trademarks',
        p: [
          'The projects shown are work I carried out for third parties. Names, trademarks, logos and content of the respective websites belong to their owners and are mentioned here solely as evidence of my work. No affiliation with or endorsement by the named companies is implied unless expressly stated.',
        ],
      },
      {
        h: 'Copyright',
        p: ['Content and works created by me on this site are subject to German copyright law. Reproduction, editing and distribution beyond the limits of copyright law require my written consent.'],
      },
    ],
  },
  privacy: {
    title: 'Privacy policy',
    sections: [
      { h: '1. Controller', p: [`${NAME}, Düsseldorf, Germany`, `Email: ${EMAIL}`] },
      {
        h: '2. Hosting and server log files',
        p: [
          'This website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA. When you visit the site, the hosting provider processes technically necessary data in server log files, in particular your IP address, date and time, requested URL, referrer, browser type and operating system.',
          'The legal basis is Art. 6(1)(f) GDPR (legitimate interest in secure and stable operation of the website). A data processing agreement exists with the provider. Transfers to the USA rely on the safeguards provided by the provider (EU standard contractual clauses and/or certification under the EU-US Data Privacy Framework).',
        ],
      },
      {
        h: '3. No cookies, no analytics',
        p: [
          'This website sets no cookies and uses no tracking or analytics services. Fonts are served from this site’s own server; no connection to Google Fonts is made.',
          'Your choice of language and appearance (light/dark) is stored in your browser’s local storage so that it persists on your next visit. This data does not leave your device. The legal basis is § 25(2) no. 2 TDDDG.',
        ],
      },
      {
        h: '4. Contacting me',
        p: ['If you email me, I process your details (email address, message content) to handle your enquiry. The legal basis is Art. 6(1)(b) or (f) GDPR. Data is deleted once it is no longer needed for its purpose and no statutory retention duties apply.'],
      },
      {
        h: '5. External links',
        p: ['Links to LinkedIn and GitHub are plain links. You leave this website only when you click them; the respective provider is responsible for data processing there.'],
      },
      {
        h: '6. Your rights',
        p: [
          'You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20) and objection (Art. 21). You may withdraw consent at any time with effect for the future. Please contact the email address above.',
          'You also have the right to lodge a complaint with a data protection supervisory authority, for example the State Commissioner for Data Protection and Freedom of Information of North Rhine-Westphalia (LDI NRW), Postfach 20 04 44, 40102 Düsseldorf, Germany.',
        ],
      },
    ],
  },
}

export const LEGAL: Record<Lang, LegalSet> = { de, en, uk: en, ru: en }
