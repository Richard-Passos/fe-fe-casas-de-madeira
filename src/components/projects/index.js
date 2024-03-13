import ProjectsAction from './Action';
import ProjectsDescription from './Description';
import ProjectsImage from './Image';
import ProjectsItem from './Item';
import ProjectsLink from './Link';
import ProjectsRoot from './Root';
import ProjectsTitle from './Title';

const Projects = ProjectsRoot;

Projects.Action = ProjectsAction;
Projects.Description = ProjectsDescription;
Projects.Image = ProjectsImage;
Projects.Item = ProjectsItem;
Projects.Link = ProjectsLink;
Projects.Title = ProjectsTitle;

export default Projects;
export {
  ProjectsRoot as Projects,
  ProjectsAction,
  ProjectsDescription,
  ProjectsImage,
  ProjectsItem,
  ProjectsLink,
  ProjectsTitle,
};
