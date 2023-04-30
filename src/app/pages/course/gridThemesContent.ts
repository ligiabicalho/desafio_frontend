import { gridTheme } from './course.interface';

export const gridThemesContent: gridTheme[] = [
  {
    title: 'Material didático',
    type: 'docs',
    description: 'Acesse suas últimas apresentações de aula.',
    docs: [],
    viewMore: {
      text: 'Ver todo o conteúdo',
      url: '/course/viewAll',
    },
  },
  {
    title: 'Vídeo aulas',
    type: 'yt',
    description:
      'Complemente os estudos assistindo o conteúdo de forma dinâmica.',
    videos: '/videos.png',
    viewMore: {
      text: 'Abrir no Youtube',
      url: 'https://www.youtube.com/@Trakto/videos',
      icon: 'icon-video.png',
    },
  },
];
