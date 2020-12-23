import { Router } from 'express';

const pagesRouter = Router();
const data = [
  { title: 'Home', icon: 'fa-home', url: 'page://home', content: [] },
  {
    title: 'Camera',
    icon: 'fa-building',
    url: 'page://camera',
    content: [
      {
        type: 'post',
        title: 'Mensagens do Presidente',
        properties: { categories: ['messages'] },
      },
      { type: 'post', title: 'Notícias', properties: { categories: ['news'] } },
      {
        type: 'post',
        title: 'Horas e serviços',
        properties: { categories: ['schedules', 'services'] },
      },
      {
        type: 'post',
        title: 'Taxas e Tarifários',
        properties: { categories: ['taxes'] },
      },
    ],
  },
  { title: 'Comunicar', icon: 'fa-chat', url: 'page://comunicar', content: [] },
  {
    title: 'Proteção civil',
    icon: 'fa-danger',
    url: 'page://protecao-civil',
    content: [],
  },
  { title: 'Covid', icon: 'fa-band-aid', url: 'page://covid', content: [] },
  { title: 'Agenda', icon: 'fa-calendar', url: 'page://agenda', content: [] },
];
pagesRouter.get('/', async (request, response) => {
  return response.json(data);
});

pagesRouter.get('/:id', async (request, response) => {
  const { id } = request.params;
  const filteredData = data.filter(
    ({ url }) => url === `page://${id.toString()}`,
  );
  if (filteredData.length) {
    return response.json(filteredData);
  }
  return response.json({ message: 'Page not Found, please verify page name' });
});

export default pagesRouter;
