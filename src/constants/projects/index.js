import projectsDetails from './details';
import projectsImages from './images';
import projectsRoot from './root';

const projects = projectsRoot;

projects.details = projectsDetails;
projects.images = projectsImages;

export default projects;
export { projectsRoot as projects, projectsDetails, projectsImages };
