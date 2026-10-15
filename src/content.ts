export type Lang = 'en' | 'de' | 'uk' | 'ru'

export type Job = {
  id: string
  url: string
  company: string
  project: string
  role: string
  period: string
  summary: string
  highlights: string[]
  tech: string[]
}

export type Copy = {
  nav: { work: string; about: string; contact: string; cv: string }
  hero: {
    badge: string
    title: string
    accent: string
    sub: string
    primary: string
    secondary: string
    scroll: string
    role: string
    specs: { k: string; v: string; live?: boolean }[]
  }
  stats: { value: number; suffix: string; label: string }[]
  highlights: { kicker: string; title: string; text: string }[]
  highlightsHead: { eyebrow: string; title: string }
  exp: {
    eyebrow: string
    title: string
    text: string
    filter: string
    all: string
    uses: string
    visit: string
    matches: string
    consent: string
    load: string
    notUsed: string
    nda: string
    ndaSub: string
    jobs: Job[]
  }
  about: {
    eyebrow: string
    title: string
    paras: string[]
    seeking: string
    seekingText: string
    langsTitle: string
    langs: { name: string; level: string; value: number }[]
    eduTitle: string
    edu: { degree: string; school: string; period: string; text: string }
    volTitle: string
    vol: { role: string; items: string[] }
  }
  contact: { eyebrow: string; title: string; accent: string; text: string; location: string; footer: string; top: string }
  toggles: { theme: string; lang: string }
}

export const EMAIL = 'shevchuk.develop@gmail.com'
export const LINKEDIN = 'https://www.linkedin.com/in/vasiliy-shevchuk/'
export const GITHUB = 'https://github.com/vasiliy23v'

export const skills = [
  'TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Redux / RTK', 'Tailwind', 'shadcn/ui', 'Material UI',
  'React Hook Form', 'Vite', 'Webpack', 'Jest', 'RTL', 'Storybook', 'Loki', 'Stripe', 'i18n', 'Git', 'Figma / Zeplin',
] as const

export const copy: Record<Lang, Copy> = {
  de: {
    nav: { work: 'Erfahrung', about: 'Über mich', contact: 'Kontakt', cv: 'Lebenslauf' },
    hero: {
      badge: 'Offen für neue Aufgaben · Düsseldorf & remote',
      title: 'Frontends,',
      accent: 'die sich richtig anfühlen.',
      sub: 'Ich bin Vasyl, Frontend-Entwickler mit React und TypeScript. Ich baue schnelle, barrierearme Oberflächen für Produkte, die täglich von Tausenden Menschen genutzt werden.',
      primary: 'Lebenslauf herunterladen',
      secondary: 'Kontakt aufnehmen',
      scroll: 'Scrollen zum Entdecken',
      role: 'Frontend-Entwickler',
      specs: [
        { k: 'Fokus', v: 'React · TypeScript · Next.js' },
        { k: 'Standort', v: 'Düsseldorf, Deutschland' },
        { k: 'Arbeitsmodell', v: 'Vor Ort oder remote' },
        { k: 'Sprachen', v: 'Ukrainisch · Russisch · Englisch · Deutsch' },
        { k: 'Verfügbar', v: 'Offen für neue Aufgaben', live: true },
      ],
    },
    stats: [
      { value: 3.5, suffix: '+', label: 'Jahre Erfahrung im Frontend' },
      { value: 1000, suffix: '+', label: 'Spieler täglich auf meinem Produkt' },
      { value: 4, suffix: '', label: 'Sprachen im Arbeitsalltag' },
    ],
    highlightsHead: { eyebrow: 'Was ich liefere', title: 'Sorgfalt in jedem Detail.' },
    highlights: [
      { kicker: 'Eigenverantwortung', title: 'Ein Frontend, komplett alleine gebaut.', text: 'Bei einer Online-Casino-Plattform habe ich das gesamte Frontend eigenständig entwickelt – von der Game-Lobby bis zu Ein- und Auszahlungen.' },
      { kicker: 'Zahlungen', title: 'Stripe, sicher integriert.', text: 'Sichere Zahlungsabwicklung in einer medizinischen Web-Anwendung.' },
      { kicker: 'International', title: 'Mehrsprachig von Anfang an.', text: 'i18n-Architektur für mehrere Sprachen – sauber getrennt von der UI-Logik.' },
      { kicker: 'Qualität', title: 'Getestet. Dokumentiert.', text: 'Jest, React Testing Library, Storybook und visuelle Regressionstests mit Loki.' },
      { kicker: 'Design-Systeme', title: 'Wiederverwendbar statt kopiert.', text: 'Eigene Komponentenbibliotheken sorgen für ein konsistentes Markenbild.' },
      { kicker: 'Performance', title: 'Schnell geladen.', text: 'Bundle- und Build-Optimierung mit Webpack und Vite.' },
    ],
    exp: {
      eyebrow: 'Berufserfahrung',
      title: 'Wo ich Wirkung erzielt habe.',
      text: 'Wählen Sie eine oder mehrere Technologien. Die Projekte werden danach gerankt, wie viele davon ich dort eingesetzt habe.',
      filter: 'Technologie filtern',
      all: 'Alle',
      uses: 'Eingesetzt in diesem Projekt',
      visit: 'Website öffnen',
      matches: 'Treffer',
      consent: 'Beim Laden wird eine Verbindung zu {host} hergestellt und Ihre IP-Adresse an diese Website übermittelt.',
      load: 'Vorschau laden',
      notUsed: 'In diesem Projekt nicht eingesetzt',
      nda: 'Unter NDA',
      ndaSub: 'Screenshots und Live-Seite sind vertraulich',
      jobs: [
        {
          id: 'casino',
          url: '',
          company: 'NDA',
          project: 'Online-Casino-Plattform',
          role: 'Frontend-Entwickler',
          period: 'Aug 2024 – Jan 2026',
          summary: 'Frontend einer Plattform eigenständig entwickelt, die täglich von Tausenden Spielern genutzt wird.',
          highlights: [
            'Game-Lobby mit Suche, Kategorien und Integration mehrerer Anbieter',
            'Vollständige Ein- und Auszahlungsprozesse',
            'Bonus-System mit Free Spins, Promotions und Belohnungs-Tracking',
          ],
          tech: ['React', 'TypeScript', 'Redux / RTK', 'Tailwind', 'shadcn/ui', 'Vite', 'JavaScript', 'Git'],
        },
        {
          id: 'corp',
          url: 'https://chiswstg.wpengine.com/',
          company: 'CHI Software',
          project: 'Corporate Website',
          role: 'Frontend-Entwickler',
          period: 'Jun 2022 – Aug 2024',
          summary: 'Website für ein IT-Unternehmen mit responsivem, nutzerorientiertem UI/UX – das hat zur Kundengewinnung beigetragen.',
          highlights: [
            'Umfassende Formularvalidierung – weniger Eingabefehler, bessere Daten',
            'Wiederverwendbare UI-Komponenten für ein konsistentes Markenbild',
            'State-Management-System für effizienten Datenfluss',
          ],
          tech: ['React', 'TypeScript', 'Tailwind', 'Redux / RTK', 'React Hook Form', 'Material UI', 'JavaScript', 'Git', 'Figma / Zeplin'],
        },
        {
          id: 'med',
          url: '',
          company: 'CHI Software',
          project: 'Medizinische Web-Anwendung',
          role: 'Frontend-Entwickler',
          period: 'Jun 2022 – Aug 2024',
          summary: 'React-/TypeScript-Anwendung mit eigener Komponentenbibliothek.',
          highlights: [
            'Stripe-Integration für sichere Zahlungen',
            'Internationalisierung (i18n) für mehrere Sprachen',
            'Performance-Optimierung mit Webpack und Vite',
          ],
          tech: ['React', 'TypeScript', 'Redux / RTK', 'i18n', 'Jest', 'RTL', 'Storybook', 'Loki', 'Webpack', 'Stripe', 'Node.js', 'Vite', 'JavaScript', 'Git'],
        },
      ],
    },
    about: {
      eyebrow: 'Über mich',
      title: 'Logik trifft Neugier.',
      paras: [
        'Ich entdecke gerne neue Technologien und entwickle Softwarelösungen. Tricks aller Art sind meine große Leidenschaft: Wenn mir die Coding-Rätsel ausgehen, lese ich über Psychologie und lerne Zaubertricks.',
        'Mein Statistik-Studium (Wahrscheinlichkeitstheorie, Datenanalyse, Python, R, PostgreSQL) prägt, wie ich arbeite: Ich hinterfrage Annahmen, messe Ergebnisse und entscheide auf Basis von Daten.',
      ],
      seeking: 'Was ich suche',
      seekingText: 'Eine Frontend-Rolle in einem Produktteam – in Deutschland oder international, vor Ort oder remote.',
      langsTitle: 'Sprachen',
      langs: [
        { name: 'Ukrainisch', level: 'Fließend', value: 5 },
        { name: 'Russisch', level: 'Fließend', value: 5 },
        { name: 'Englisch', level: 'Gute Arbeitskenntnisse', value: 4 },
        { name: 'Deutsch', level: 'Grundkenntnisse', value: 2 },
      ],
      eduTitle: 'Ausbildung',
      edu: {
        degree: 'Bachelor in Statistik',
        school: 'Oles-Hontschar-Nationale-Universität, Dnipro',
        period: '2021 – 2025',
        text: 'Schwerpunkt: Wahrscheinlichkeitstheorie, Theorie zufälliger Prozesse und Datenanalyse.',
      },
      volTitle: 'Ehrenamt',
      vol: { role: 'PR-Leitung der Fakultät', items: ['Organisation studentischer Veranstaltungen', 'Betreuung der öffentlichen Kommunikationskanäle'] },
    },
    contact: {
      eyebrow: 'Kontakt',
      title: 'Lassen Sie uns',
      accent: 'sprechen.',
      text: 'Ich freue mich über Nachrichten zu Stellen, Projekten oder einfach zum Austausch.',
      location: 'Düsseldorf, Deutschland',
      footer: '© 2026 Vasyl Shevchuk',
      top: 'Nach oben ↑',
    },
    toggles: { theme: 'Darstellung wechseln', lang: 'Sprache wechseln' },
  },
  en: {
    nav: { work: 'Experience', about: 'About', contact: 'Contact', cv: 'Résumé' },
    hero: {
      badge: 'Open to new roles · Düsseldorf & remote',
      title: 'Frontends',
      accent: 'that feel right.',
      sub: 'I’m Vasyl, a frontend engineer working with React and TypeScript. I build fast, accessible interfaces for products used by thousands of people every day.',
      primary: 'Download résumé',
      secondary: 'Get in touch',
      scroll: 'Scroll to explore',
      role: 'Frontend Engineer',
      specs: [
        { k: 'Focus', v: 'React · TypeScript · Next.js' },
        { k: 'Based in', v: 'Düsseldorf, Germany' },
        { k: 'Work model', v: 'On-site or remote' },
        { k: 'Languages', v: 'Ukrainian · Russian · English · German' },
        { k: 'Availability', v: 'Open to new roles', live: true },
      ],
    },
    stats: [
      { value: 3.5, suffix: '+', label: 'Years of frontend experience' },
      { value: 1000, suffix: 's', label: 'Players daily on a product I built' },
      { value: 4, suffix: '', label: 'Languages in my everyday work' },
    ],
    highlightsHead: { eyebrow: 'What I deliver', title: 'Care in every detail.' },
    highlights: [
      { kicker: 'Ownership', title: 'A whole frontend, built solo.', text: 'For an online casino platform I independently built the entire frontend — from the game lobby to deposits and withdrawals.' },
      { kicker: 'Payments', title: 'Stripe, safely integrated.', text: 'Secure payment flows in a medical web application.' },
      { kicker: 'International', title: 'Multilingual from day one.', text: 'An i18n architecture for multiple languages, cleanly separated from UI logic.' },
      { kicker: 'Quality', title: 'Tested. Documented.', text: 'Jest, React Testing Library, Storybook and visual regression tests with Loki.' },
      { kicker: 'Design systems', title: 'Reusable, not copy-pasted.', text: 'Custom component libraries keep the brand consistent.' },
      { kicker: 'Performance', title: 'Fast to load.', text: 'Bundle and build optimisation with Webpack and Vite.' },
    ],
    exp: {
      eyebrow: 'Experience',
      title: 'Where I’ve made an impact.',
      text: 'Pick one or more technologies. Projects are ranked by how many of them I used there.',
      filter: 'Filter by technology',
      all: 'All',
      uses: 'Used in this project',
      visit: 'Open website',
      matches: 'matches',
      consent: 'Loading this preview connects to {host} and shares your IP address with that site.',
      load: 'Load preview',
      notUsed: 'Not used in this project',
      nda: 'Under NDA',
      ndaSub: 'Screenshots and live site are confidential',
      jobs: [
        {
          id: 'casino',
          url: '',
          company: 'NDA',
          project: 'Online casino platform',
          role: 'Frontend Developer',
          period: 'Aug 2024 – Jan 2026',
          summary: 'Independently built the frontend of a platform used by thousands of players every day.',
          highlights: [
            'Game lobby with search, categories and multi-provider integration',
            'Complete deposit and withdrawal flows',
            'Bonus system with free spins, promotions and reward tracking',
          ],
          tech: ['React', 'TypeScript', 'Redux / RTK', 'Tailwind', 'shadcn/ui', 'Vite', 'JavaScript', 'Git'],
        },
        {
          id: 'corp',
          url: 'https://chiswstg.wpengine.com/',
          company: 'CHI Software',
          project: 'Corporate website',
          role: 'Frontend Developer',
          period: 'Jun 2022 – Aug 2024',
          summary: 'A website for an IT company with responsive, user-centred UI/UX that helped drive customer acquisition.',
          highlights: [
            'Comprehensive form validation — fewer input errors, better data',
            'Reusable UI components for a consistent brand',
            'State management system for efficient data flow',
          ],
          tech: ['React', 'TypeScript', 'Tailwind', 'Redux / RTK', 'React Hook Form', 'Material UI', 'JavaScript', 'Git', 'Figma / Zeplin'],
        },
        {
          id: 'med',
          url: '',
          company: 'CHI Software',
          project: 'Medical clinic web app',
          role: 'Frontend Developer',
          period: 'Jun 2022 – Aug 2024',
          summary: 'A React/TypeScript application with a custom component library.',
          highlights: [
            'Stripe integration for secure payments',
            'Internationalisation (i18n) for multiple languages',
            'Performance optimisation with Webpack and Vite',
          ],
          tech: ['React', 'TypeScript', 'Redux / RTK', 'i18n', 'Jest', 'RTL', 'Storybook', 'Loki', 'Webpack', 'Stripe', 'Node.js', 'Vite', 'JavaScript', 'Git'],
        },
      ],
    },
    about: {
      eyebrow: 'About me',
      title: 'Logic meets curiosity.',
      paras: [
        'I love discovering new technologies and building software. Tricks of every kind are my passion — when I run out of coding puzzles, I read about psychology and learn magic tricks.',
        'My statistics degree (probability theory, data analysis, Python, R, PostgreSQL) shapes how I work: I question assumptions, measure results and decide based on data.',
      ],
      seeking: 'What I’m looking for',
      seekingText: 'A frontend role on a product team — in Germany or abroad, on-site or remote.',
      langsTitle: 'Languages',
      langs: [
        { name: 'Ukrainian', level: 'Fluent', value: 5 },
        { name: 'Russian', level: 'Fluent', value: 5 },
        { name: 'English', level: 'Good working proficiency', value: 4 },
        { name: 'German', level: 'Basic', value: 2 },
      ],
      eduTitle: 'Education',
      edu: {
        degree: 'Bachelor’s in Statistics',
        school: 'Oles Honchar Dnipro National University',
        period: '2021 – 2025',
        text: 'Focus on probability theory, stochastic processes and data analysis.',
      },
      volTitle: 'Volunteering',
      vol: { role: 'Faculty PR lead', items: ['Organised student events', 'Managed public communication channels'] },
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s',
      accent: 'talk.',
      text: 'I’d love to hear about roles, projects, or just to connect.',
      location: 'Düsseldorf, Germany',
      footer: '© 2026 Vasyl Shevchuk',
      top: 'Back to top ↑',
    },
    toggles: { theme: 'Toggle appearance', lang: 'Switch language' },
  },
  uk: {
    nav: { work: 'Досвід', about: 'Про мене', contact: 'Контакти', cv: 'Резюме' },
    hero: {
      badge: 'Відкритий до нових пропозицій · Дюссельдорф і віддалено',
      title: 'Фронтенд,',
      accent: 'який приємно відчувати.',
      sub: 'Я Василь, фронтенд-розробник на React і TypeScript. Створюю швидкі та доступні інтерфейси для продуктів, якими щодня користуються тисячі людей.',
      primary: 'Завантажити резюме',
      secondary: 'Зв’язатися',
      scroll: 'Прокрутіть, щоб дізнатися більше',
      role: 'Фронтенд-розробник',
      specs: [
        { k: 'Фокус', v: 'React · TypeScript · Next.js' },
        { k: 'Локація', v: 'Дюссельдорф, Німеччина' },
        { k: 'Формат роботи', v: 'В офісі або віддалено' },
        { k: 'Мови', v: 'Українська · Російська · Англійська · Німецька' },
        { k: 'Доступність', v: 'Відкритий до нових пропозицій', live: true },
      ],
    },
    stats: [
      { value: 3.5, suffix: '+', label: 'року досвіду у фронтенді' },
      { value: 1000, suffix: '+', label: 'гравців щодня на продукті, який я створив' },
      { value: 4, suffix: '', label: 'мови в моїй щоденній роботі' },
    ],
    highlightsHead: { eyebrow: 'Що я роблю', title: 'Увага до кожної деталі.' },
    highlights: [
      { kicker: 'Відповідальність', title: 'Увесь фронтенд, самостійно.', text: 'Для платформи онлайн-казино я самостійно розробив весь фронтенд: від ігрового лобі до депозитів і виведення коштів.' },
      { kicker: 'Платежі', title: 'Stripe, надійно інтегрований.', text: 'Безпечні платіжні процеси в медичному вебзастосунку.' },
      { kicker: 'Міжнародність', title: 'Багатомовність із самого початку.', text: 'Архітектура i18n для кількох мов, чітко відокремлена від логіки інтерфейсу.' },
      { kicker: 'Якість', title: 'Протестовано. Задокументовано.', text: 'Jest, React Testing Library, Storybook та візуальні регресійні тести з Loki.' },
      { kicker: 'Дизайн-системи', title: 'Повторне використання замість копіювання.', text: 'Власні бібліотеки компонентів забезпечують цілісний вигляд бренду.' },
      { kicker: 'Продуктивність', title: 'Швидке завантаження.', text: 'Оптимізація збірки та бандлу з Webpack і Vite.' },
    ],
    exp: {
      eyebrow: 'Досвід роботи',
      title: 'Де я створив цінність.',
      text: 'Оберіть одну чи кілька технологій. Проєкти ранжуються за тим, скільки з них я там використав.',
      filter: 'Фільтр за технологією',
      all: 'Усі',
      uses: 'Використано в цьому проєкті',
      visit: 'Відкрити сайт',
      matches: 'збігів',
      consent: 'Під час завантаження встановлюється з’єднання з {host}, і ваша IP-адреса передається цьому сайту.',
      load: 'Завантажити превʼю',
      notUsed: 'Не використано в цьому проєкті',
      nda: 'Під NDA',
      ndaSub: 'Скріншоти та живий сайт конфіденційні',
      jobs: [
        {
          id: 'casino',
          url: '',
          company: 'NDA',
          project: 'Платформа онлайн-казино',
          role: 'Фронтенд-розробник',
          period: 'Серп 2024 – Січ 2026',
          summary: 'Самостійно розробив фронтенд платформи, якою щодня користуються тисячі гравців.',
          highlights: [
            'Ігрове лобі з пошуком, категоріями та інтеграцією кількох провайдерів',
            'Повні процеси поповнення та виведення коштів',
            'Бонусна система з фріспінами, акціями та відстеженням винагород',
          ],
          tech: ['React', 'TypeScript', 'Redux / RTK', 'Tailwind', 'shadcn/ui', 'Vite', 'JavaScript', 'Git'],
        },
        {
          id: 'corp',
          url: 'https://chiswstg.wpengine.com/',
          company: 'CHI Software',
          project: 'Корпоративний сайт',
          role: 'Фронтенд-розробник',
          period: 'Чер 2022 – Серп 2024',
          summary: 'Сайт для IT-компанії з адаптивним, орієнтованим на користувача UI/UX, що допоміг залучати клієнтів.',
          highlights: [
            'Комплексна валідація форм: менше помилок введення, кращі дані',
            'Повторно використовувані UI-компоненти для єдиного вигляду бренду',
            'Система керування станом для ефективного потоку даних',
          ],
          tech: ['React', 'TypeScript', 'Tailwind', 'Redux / RTK', 'React Hook Form', 'Material UI', 'JavaScript', 'Git', 'Figma / Zeplin'],
        },
        {
          id: 'med',
          url: '',
          company: 'CHI Software',
          project: 'Вебзастосунок медичної клініки',
          role: 'Фронтенд-розробник',
          period: 'Чер 2022 – Серп 2024',
          summary: 'Застосунок на React і TypeScript із власною бібліотекою компонентів.',
          highlights: [
            'Інтеграція Stripe для безпечних платежів',
            'Інтернаціоналізація (i18n) для кількох мов',
            'Оптимізація продуктивності з Webpack і Vite',
          ],
          tech: ['React', 'TypeScript', 'Redux / RTK', 'i18n', 'Jest', 'RTL', 'Storybook', 'Loki', 'Webpack', 'Stripe', 'Node.js', 'Vite', 'JavaScript', 'Git'],
        },
      ],
    },
    about: {
      eyebrow: 'Про мене',
      title: 'Логіка зустрічає цікавість.',
      paras: [
        'Я люблю відкривати нові технології та створювати програмні рішення. Фокуси будь-якого роду — моя пристрасть: коли закінчуються задачі з кодингу, я читаю про психологію та вчуся ілюзіям.',
        'Моя освіта зі статистики (теорія ймовірностей, аналіз даних, Python, R, PostgreSQL) визначає мій підхід: я ставлю під сумнів припущення, вимірюю результати й ухвалюю рішення на основі даних.',
      ],
      seeking: 'Що я шукаю',
      seekingText: 'Роль фронтенд-розробника в продуктовій команді: у Німеччині чи за кордоном, в офісі або віддалено.',
      langsTitle: 'Мови',
      langs: [
        { name: 'Українська', level: 'Вільно', value: 5 },
        { name: 'Російська', level: 'Вільно', value: 5 },
        { name: 'Англійська', level: 'Хороші робочі навички', value: 4 },
        { name: 'Німецька', level: 'Базові знання', value: 2 },
      ],
      eduTitle: 'Освіта',
      edu: {
        degree: 'Бакалавр зі статистики',
        school: 'Дніпровський національний університет імені Олеся Гончара',
        period: '2021 – 2025',
        text: 'Акцент на теорії ймовірностей, теорії випадкових процесів і аналізі даних.',
      },
      volTitle: 'Волонтерство',
      vol: { role: 'Керівник PR факультету', items: ['Організація студентських заходів', 'Ведення публічних каналів комунікації'] },
    },
    contact: {
      eyebrow: 'Контакти',
      title: 'Давайте',
      accent: 'поговоримо.',
      text: 'Буду радий почути про вакансії, проєкти або просто познайомитися.',
      location: 'Дюссельдорф, Німеччина',
      footer: '© 2026 Vasyl Shevchuk',
      top: 'Нагору ↑',
    },
    toggles: { theme: 'Змінити тему', lang: 'Змінити мову' },
  },
  ru: {
    nav: { work: 'Опыт', about: 'Обо мне', contact: 'Контакты', cv: 'Резюме' },
    hero: {
      badge: 'Открыт к новым предложениям · Дюссельдорф и удалённо',
      title: 'Фронтенд,',
      accent: 'который приятно ощущать.',
      sub: 'Я Василий, фронтенд-разработчик на React и TypeScript. Создаю быстрые и доступные интерфейсы для продуктов, которыми ежедневно пользуются тысячи людей.',
      primary: 'Скачать резюме',
      secondary: 'Связаться',
      scroll: 'Прокрутите, чтобы узнать больше',
      role: 'Фронтенд-разработчик',
      specs: [
        { k: 'Фокус', v: 'React · TypeScript · Next.js' },
        { k: 'Локация', v: 'Дюссельдорф, Германия' },
        { k: 'Формат работы', v: 'В офисе или удалённо' },
        { k: 'Языки', v: 'Украинский · Русский · Английский · Немецкий' },
        { k: 'Доступность', v: 'Открыт к новым предложениям', live: true },
      ],
    },
    stats: [
      { value: 3.5, suffix: '+', label: 'года опыта во фронтенде' },
      { value: 1000, suffix: '+', label: 'игроков ежедневно на созданном мной продукте' },
      { value: 4, suffix: '', label: 'языка в моей ежедневной работе' },
    ],
    highlightsHead: { eyebrow: 'Что я делаю', title: 'Внимание к каждой детали.' },
    highlights: [
      { kicker: 'Ответственность', title: 'Весь фронтенд, самостоятельно.', text: 'Для платформы онлайн-казино я самостоятельно разработал весь фронтенд: от игрового лобби до пополнения и вывода средств.' },
      { kicker: 'Платежи', title: 'Stripe, надёжно интегрирован.', text: 'Безопасные платёжные процессы в медицинском веб-приложении.' },
      { kicker: 'Международность', title: 'Многоязычность с самого начала.', text: 'Архитектура i18n для нескольких языков, чётко отделённая от логики интерфейса.' },
      { kicker: 'Качество', title: 'Протестировано. Задокументировано.', text: 'Jest, React Testing Library, Storybook и визуальные регрессионные тесты с Loki.' },
      { kicker: 'Дизайн-системы', title: 'Повторное использование вместо копирования.', text: 'Собственные библиотеки компонентов обеспечивают единый облик бренда.' },
      { kicker: 'Производительность', title: 'Быстрая загрузка.', text: 'Оптимизация сборки и бандла с Webpack и Vite.' },
    ],
    exp: {
      eyebrow: 'Опыт работы',
      title: 'Где я принёс пользу.',
      text: 'Выберите одну или несколько технологий. Проекты ранжируются по тому, сколько из них я там использовал.',
      filter: 'Фильтр по технологии',
      all: 'Все',
      uses: 'Использовано в этом проекте',
      visit: 'Открыть сайт',
      matches: 'совпадений',
      consent: 'При загрузке устанавливается соединение с {host}, и ваш IP-адрес передаётся этому сайту.',
      load: 'Загрузить превью',
      notUsed: 'Не использовано в этом проекте',
      nda: 'Под NDA',
      ndaSub: 'Скриншоты и живой сайт конфиденциальны',
      jobs: [
        {
          id: 'casino',
          url: '',
          company: 'NDA',
          project: 'Платформа онлайн-казино',
          role: 'Фронтенд-разработчик',
          period: 'Авг 2024 – Янв 2026',
          summary: 'Самостоятельно разработал фронтенд платформы, которой ежедневно пользуются тысячи игроков.',
          highlights: [
            'Игровое лобби с поиском, категориями и интеграцией нескольких провайдеров',
            'Полные процессы пополнения и вывода средств',
            'Бонусная система с фриспинами, акциями и отслеживанием наград',
          ],
          tech: ['React', 'TypeScript', 'Redux / RTK', 'Tailwind', 'shadcn/ui', 'Vite', 'JavaScript', 'Git'],
        },
        {
          id: 'corp',
          url: 'https://chiswstg.wpengine.com/',
          company: 'CHI Software',
          project: 'Корпоративный сайт',
          role: 'Фронтенд-разработчик',
          period: 'Июн 2022 – Авг 2024',
          summary: 'Сайт для IT-компании с адаптивным, ориентированным на пользователя UI/UX, который помог привлекать клиентов.',
          highlights: [
            'Комплексная валидация форм: меньше ошибок ввода, лучше данные',
            'Переиспользуемые UI-компоненты для единого облика бренда',
            'Система управления состоянием для эффективного потока данных',
          ],
          tech: ['React', 'TypeScript', 'Tailwind', 'Redux / RTK', 'React Hook Form', 'Material UI', 'JavaScript', 'Git', 'Figma / Zeplin'],
        },
        {
          id: 'med',
          url: '',
          company: 'CHI Software',
          project: 'Веб-приложение медицинской клиники',
          role: 'Фронтенд-разработчик',
          period: 'Июн 2022 – Авг 2024',
          summary: 'Приложение на React и TypeScript с собственной библиотекой компонентов.',
          highlights: [
            'Интеграция Stripe для безопасных платежей',
            'Интернационализация (i18n) для нескольких языков',
            'Оптимизация производительности с Webpack и Vite',
          ],
          tech: ['React', 'TypeScript', 'Redux / RTK', 'i18n', 'Jest', 'RTL', 'Storybook', 'Loki', 'Webpack', 'Stripe', 'Node.js', 'Vite', 'JavaScript', 'Git'],
        },
      ],
    },
    about: {
      eyebrow: 'Обо мне',
      title: 'Логика встречает любопытство.',
      paras: [
        'Я люблю открывать новые технологии и создавать программные решения. Фокусы любого рода — моя страсть: когда заканчиваются задачи по кодингу, я читаю о психологии и учусь иллюзиям.',
        'Моё образование по статистике (теория вероятностей, анализ данных, Python, R, PostgreSQL) определяет мой подход: я ставлю под сомнение допущения, измеряю результаты и принимаю решения на основе данных.',
      ],
      seeking: 'Что я ищу',
      seekingText: 'Роль фронтенд-разработчика в продуктовой команде: в Германии или за рубежом, в офисе или удалённо.',
      langsTitle: 'Языки',
      langs: [
        { name: 'Украинский', level: 'Свободно', value: 5 },
        { name: 'Русский', level: 'Свободно', value: 5 },
        { name: 'Английский', level: 'Хорошие рабочие навыки', value: 4 },
        { name: 'Немецкий', level: 'Базовые знания', value: 2 },
      ],
      eduTitle: 'Образование',
      edu: {
        degree: 'Бакалавр по статистике',
        school: 'Днепровский национальный университет имени Олеся Гончара',
        period: '2021 – 2025',
        text: 'Акцент на теории вероятностей, теории случайных процессов и анализе данных.',
      },
      volTitle: 'Волонтёрство',
      vol: { role: 'Руководитель PR факультета', items: ['Организация студенческих мероприятий', 'Ведение публичных каналов коммуникации'] },
    },
    contact: {
      eyebrow: 'Контакты',
      title: 'Давайте',
      accent: 'поговорим.',
      text: 'Буду рад услышать о вакансиях, проектах или просто познакомиться.',
      location: 'Дюссельдорф, Германия',
      footer: '© 2026 Vasyl Shevchuk',
      top: 'Наверх ↑',
    },
    toggles: { theme: 'Сменить тему', lang: 'Сменить язык' },
  },
}
