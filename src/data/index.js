import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  netlify,
  nextjs,
  webflow,
  sanity,
  vercel,
  storybook,
  git,
  github,
  figma,
  tab,
  salus,
  bobby,
  mountainjade,
  npo,
  yoobee,
  brave,
  bravewebsite,
  mail,
  todolist,
  newsapp,
} from '../assets';

const socialLinks = [
  {
    icon: mail,
    title: 'Email',
    value: 'mailto:sujungyeo@gmail.com',
  },
  {
    icon: github,
    title: 'Github',
    value: 'https://github.com/Graceyeo95',
  },
];

export const navLinks = [
  {
    id: 'skill',
    title: 'Skill',
  },
  {
    id: 'project',
    title: 'Project',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
    points: [
      '시맨틱 태그를 활용하여 접근성과 SEO를 고려한 마크업 작성 가능.',
      '웹 표준과 크로스 브라우징 이슈를 이해하고 이를 프로젝트에 적용한 경험.',
    ],
  },
  {
    name: 'CSS 3',
    icon: css,
    points: [
      'Flexbox와 Grid를 사용한 반응형 레이아웃 설계 및 구현 경험.',
      'CSS 애니메이션과 트랜지션을 활용하여 인터랙티브 UI 구현 가능.',
    ],
  },
  {
    name: 'TypeScript',
    icon: typescript,
    points: [
      '타입 가드, type, interface에 대한 필요성 및 개념을 알고 이를 프로젝트에 적용',
      '데이터의 엄밀한 타입 지정으로 인한 이점을 알고 프로젝트에서 주로 활용',
    ],
  },
  {
    name: 'JavaScript',
    icon: javascript,
    points: [
      'ES6+ 문법을 활용한 가독성 높은 코드 작성 경험.',
      '비동기 프로그래밍(Async/Await, Promise)을 이해하고 프로젝트에서 활용 가능.',
    ],
  },
  {
    name: 'React JS',
    icon: reactjs,
    points: [
      'Life Cycle을 이해하고 상태관리 및 메모이제이션을 활용하여 소규모 프로젝트 진행 가능.',
      '컴포넌트 개념을 이해하고, 재사용을 위한 개발 가능.',
    ],
  },
  {
    name: 'Next JS',
    icon: nextjs,
    points: [
      'SSR 및 SSG를 활용하여 SEO에 최적화된 애플리케이션 개발.',
      'API Routes와 Middleware를 사용한 간단한 백엔드 처리 경험.',
    ],
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
    points: [
      'Flux 패턴의 전역 상태 관리 방식을 이해하고 Action 및 Dispatch의 생성을 프로젝트에 적용 가능.',
    ],
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
    points: [
      '유틸리티 퍼스트 접근법을 통해 효율적인 스타일링 및 유지보수 경험.',
      '커스터마이징 테마를 활용하여 프로젝트에 맞는 디자인 시스템 구축.',
    ],
  },
  {
    name: 'Sanity',
    icon: sanity,
    points: [
      '헤드리스 CMS로 클라이언트의 요구 사항에 맞는 데이터 모델링 경험.',
      'Sanity의 Portable Text 및 GROQ 쿼리를 활용하여 동적인 콘텐츠 구현 가능.',
    ],
  },
  {
    name: 'Storybook',
    icon: storybook,
    points: [
      'UI 컴포넌트의 독립적 개발 및 문서화를 위해 활용한 경험.',
      '디자이너 및 개발자 간의 커뮤니케이션을 위한 스토리북 활용 경험.',
    ],
  },
  {
    name: 'git',
    icon: git,
    points: [
      '브랜치 전략(Git Flow)을 활용하여 협업 프로젝트 진행 경험.',
      'Pull Request 및 코드 리뷰 프로세스를 통해 협업 효율성 증대.',
    ],
  },
  {
    name: 'Figma',
    icon: figma,
    points: ['컴포넌트 및 스타일 가이드를 활용한 UI 일관성 유지.'],
  },
  {
    name: 'Webflow',
    icon: webflow,
    points: [
      '노코드 방식으로 반응형 웹사이트 제작 및 관리 경험.',
      'Webflow CMS를 활용한 동적 콘텐츠 구현 경험.',
    ],
  },
  {
    name: 'Netlify',
    icon: netlify,
    points: [
      'Jamstack 아키텍처 기반 프로젝트 배포 경험.',
      'Netlify Functions를 활용한 간단한 서버리스 백엔드 구현.',
    ],
  },
  {
    name: 'Vercel',
    icon: vercel,
    points: [
      'Next.js 프로젝트를 CI/CD 파이프라인과 함께 배포한 경험.',
      'Custom Domain 설정 및 환경 변수 관리를 통한 배포 최적화.',
    ],
  },
];

const experiences = [
  {
    title: 'Diploma in Web and UX Design',
    company_name: 'Yoobee College',
    icon: yoobee,
    iconBg: '#383E56',
    date: 'Feb 2022 - Dec 2022',
    points: [
      'HTML, CSS, JavaScript, UX/UI 디자인을 포함한 웹 디자인 및 개발 원칙을 배웠습니다.',
      '사용자 중심 디자인 원칙과 와이어프레임, 목업, 프로토타입을 제작하는 방법을 익혔습니다.',
      '사용자 경험 리서치와 사용자 테스트 방법을 배웠습니다.',
      '최신 웹 개발 도구와 기술을 사용하여 반응형 웹사이트를 제작하는 방법을 배웠습니다.',
    ],
  },
  {
    title: 'Junior web developer',
    company_name: 'Brave creative agency',
    icon: brave,
    iconBg: '#E6DEDD',
    date: 'June 2023 - Dec 2024',
    points: [
      '기존 코드를 디버깅하고 성능 최적화를 위한 개선 작업을 수행했습니다.',
      '디자이너와 협력하여 UI/UX 요구 사항을 충족하는 사용자 친화적인 웹 페이지를 구현했습니다.',
      'Slack과 Notion을 활용해 프로젝트 진행 상황을 공유하며, 팀과 원활한 협업과 효율적인 업무 관리를 진행했습니다.',
      '반응형 디자인을 구현하고, 다양한 브라우저 환경에서의 호환성을 확보했습니다.',
      '코드 리뷰에 참여하며, 시니어 개발자들의 피드백을 반영해 코드 품질을 개선했습니다.',
    ],
  },
];

const projects = [
  {
    name: 'News App',
    description:
      'Material UI로 반응형 UI를 구현했으며, REST API와 Axios를 사용해 뉴스 데이터를 불러옵니다. 또한 사용자가 뉴스를 검색하고, 카테고리 별로 뉴스를 볼 수 있습니다.',
    contribution_rate: '100',
    tags: ['React', 'Rest API', 'Axios', 'MUI'],
    points: [
      'RapidAPI의 REST API와 Axios를 사용하여 뉴스를 불러오는 기능을 구현했습니다.',
      'Material UI를 사용해 반응형 UI를 구현했습니다.',
      '뉴스 카테고리를 선택하여 필터링할 수 있는 기능을 구현했습니다.',
      '사용자가 원하는 뉴스를 검색할 수 있는 기능을 추가했습니다.',
      'MUI의 CircularProgress를 사용하여 데이터 로딩 중 스피너를 구현했습니다.',
    ],
    image: newsapp,
    website_link: 'https://crystal-news-api.app/',
  },
  {
    name: 'Todo List',
    description:
      'React와 Redux를 사용하여 만든 Todo List 애플리케이션입니다. 사용자는 할 일을 추가하고, 수정하고, 삭제할 수 있습니다.',
    contribution_rate: '100',
    tags: ['React', 'Redux', 'Vite', 'Local Storage', 'Tailwind'],
    points: [
      'Redux Toolkit을 사용하여 상태 관리를 했습니다.',
      'Local Storage를 활용하여 사용자의 Todo List를 저장하고 불러오는 기능을 구현했습니다.',
      '커스텀 훅을 사용하여 다크 모드를 전환할 수 있습니다. (LocalStorage에 상태 저장)',
      'Modal 컴포넌트를 만들어 사용자가 할 일을 추가할 수 있도록 구현했습니다.',
      '검색 기능을 추가하여 사용자가 할 일을 검색할 수 있도록 구현했습니다.',
    ],
    image: todolist,
    website_link: 'https://todo-list-crystal-yeo.vercel.app/',
  },
  {
    name: 'TAB',
    description:
      'TAB NZ는 뉴질랜드 스포츠 산업의 지속 가능한 성장을 지원하기 위해 개발된 사이트로, 사용자에게 보조금 신청, 스폰서십 정보, 파트너십 기회 등을 제공합니다.',
    contribution_rate: '80',
    tags: [
      'Nextjs',
      'Typescript',
      'Tailwind',
      'Sanity CMS',
      'Vercel',
      'TurboRepo',
      'Storybook',
    ],
    points: [
      'Mapbox GL 라이브러리를 통해 Head office 위치를 시각화한 인터랙티브 지도 구현 했습니다.',
      'React CountUp 라이브러리를 통해 통계 데이터를 역동적인 애니메이션으로 표시 했습니다.',
      'React Fast Marquee: 사용자 몰입감을 높이는 텍스트 슬라이더 효과 적용 했습니다.',
      'Storybook: UI 컴포넌트를 체계적으로 개발 및 관리 했습니다.',
      'News 카테고리 필터 기능: Sanity CMS에서 제공된 카테고리 데이터를 기반으로 동적으로 필터 기능 구현 했습니다.',
      'SSG(Static Site Generation)를 활용하여 웹사이트 속도를 최적화했습니다.',
    ],
    image: tab,
    website_link: 'https://www.tabnz.org/',
  },
  {
    name: 'BOBBY FOUNDATION',
    description:
      'Bobby Foundation 웹사이트는 TAB NZ에서 제공하는 스포츠 지원 프로그램에 대한 자세한 정보를 제공하며, 보조금을 신청할 수 있는 링크를 제공합니다.',
    contribution_rate: '80',
    tags: [
      'Nextjs',
      'Typescript',
      'Tailwind',
      'Sanity CMS',
      'Vercel',
      'TurboRepo',
      'Storybook',
    ],
    points: [
      'SSG(Static Site Generation)를 활용하여 웹사이트 속도를 최적화했습니다.',
      'Lottie-web 라이브러리를 활용해 애니메이션 로고를 구현했습니다.',
      'Framer Motion을 활용해 텍스트와 이미지에 동적인 애니메이션 효과를 구현했습니다.',
      '뉴질랜드 지역 지도(SVG)를 사용하여 사용자들이 gaming location을 쉽게 찾을 수 있는 기능을 추가했습니다.',
    ],
    image: bobby,
    website_link: 'https://www.bobby.org.nz/',
  },
  {
    name: 'BRAVE WEBSITE',
    description:
      'Brave Agency의 리브랜딩 과정에서 새롭게 만들어진 웹사이트에 기여했습니다.',
    contribution_rate: '20',
    tags: [
      'Nextjs',
      'Typescript',
      'Tailwind',
      'Sanity CMS',
      'Vercel',
      'TurboRepo',
      'Storybook',
    ],
    points: [
      'Approach 페이지에서 Embla 라이브러리를 활용해 testimonial 캐러셀를 구현했습니다.',
      'UAT (user acceptance test) 과정에서 발생한 문제를 해결하며, 사이트 품질을 높이는 데 중요한 역할을 했습니다.',
    ],
    image: bravewebsite,
    website_link: 'https://www.wearebrave.nz/',
  },
  {
    name: 'SALUS AVIATION',
    description:
      'Salus Aviation 웹사이트는 헬리콥터 부품 및 헬리콥터 판매 서비스를 제공합니다. 사용자는 다양한 헬리콥터 부품을 찾아볼 수 있으며, 구매에 필요한 정보를 쉽게 얻을 수 있습니다.',
    contribution_rate: '20',
    tags: [
      'Nextjs',
      'Typescript',
      'Tailwind',
      'Sanity CMS',
      'Vercel',
      'TurboRepo',
      'Storybook',
    ],
    points: [
      '스토리북을 활용하여 base & module UI 컴포넌트를 개발했습니다',
      'Footer, Sticky Nav, Image text 등 컴포넌트를 만들었습니다 .',
      'Sanity CMS를 사용하여 sold/Leased tag 추가 기능을 구현했습니다.',
      'Grid Layout을 사용하여 팀 페이지를 구현했습니다.',
    ],
    image: salus,
    website_link: 'https://www.salusaviation.com/',
  },
  {
    name: 'Mountain Jade',
    description:
      'Mountain Jade 웹사이트는 뉴질랜드 전통 보석인 Pounamu(녹색 옥)와 다양한 주얼리를 판매하는 이커머스 플랫폼입니다. 사용자들에게 제품의 특성에 대한 자세한 정보를 제공합니다.',
    contribution_rate: '5',
    tags: [
      'Nextjs',
      'Typescript',
      'Tailwind',
      'Sanity CMS',
      'Vercel',
      'TurboRepo',
      'Storybook',
      'Shopify',
    ],
    points: [
      '하드코딩된 데이터를 대신해, Sanity CMS 데이터를 활용하도록 웹사이트를 연결하여, 여러 페이지의 콘텐츠를 동적으로 관리할 수 있게 구현했습니다.',
      'Why Choose Pounamu 페이지에 아코디언 구현',
      'Product 페이지에 사진 확대 기능 구현',
    ],
    image: mountainjade,
    website_link: 'https://www.mountainjade.co.nz/',
  },
  {
    name: 'Ngati Porou (NPO)',
    description:
      'NPO는 마오리 사람들을 위한 의료 서비스, 취업 지원, 주택 제공 등 필수적인 서비스를 알리는 웹사이트입니다.',
    contribution_rate: '60',
    points: [
      'Custom 코드와 라이브러리를 통해 Webflow에서 제공하지 않는 기능을 구현했습니다 - Carousel, Pagination, Filter',
      'Webflow CMS',
    ],
    tags: ['Webflow', 'Finsweet', 'Swiper', 'Mapbox'],
    image: npo,
    website_link: 'https://www.npo.org.nz/',
  },
];

export { technologies, experiences, projects, socialLinks };
