import { projectsApi } from '@/api';
import { ProjectView } from '@/views';

const ProjectPage = ({ params: { id } }) => {
  const data = projectsApi.getOne(id, '?populate=thumbnail&populate=extras'),
    images = projectsApi.getOne(id, '?populate=images');

  return <ProjectView promises={{ data, images }} />;
};

const generateMetadata = async ({ params }) => {
  const { id } = params;

  const data = (await projectsApi.getOne(id)).data;

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
    },
  };
};

const generateStaticParams = async () => {
  const data = (await projectsApi.getSelecteds()).data;

  return data.map(({ id }) => ({ id: id.toString() }));
};

export default ProjectPage;
export { generateMetadata, generateStaticParams };
