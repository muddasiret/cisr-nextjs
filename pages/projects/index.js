import Layout from "../../components/layout";
import MainLayout from "../../components/mainLayout";
import PageTitle from "../../components/pageTitle";
import ProjectCard from "../../components/ProjectCard";
import { fetchAPI } from "../../lib/api";

const Projects = ({ projects }) => {
  return (
    <Layout>
      <PageTitle title="PROJECTS" title_image={""} />
      <MainLayout>
        {/* {research_project_title && (
          <h1 className="my-5 md:text-5xl text-4xl sanspro font-black text-primaryblue uppercase text-center">
            {research_project_title}
          </h1>
        )} */}
        <p className="my-2 sanspro md:text-2xl font-semibold text-black-700 text-center">
          {/* {page_desc
            ? page_desc
            : `Cambridge Muslim College is pleased to support and host a number of
            Research Fellowships each year. All of our active research projects
            can be explored below.`} */}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((item, ind) => {
            return <ProjectCard details={item} key={ind} />;
          })}
        </div>
      </MainLayout>
    </Layout>
  );
};

export async function getStaticProps() {
  const [projects] = await Promise.all([fetchAPI("/projects")]);

  return {
    props: {
      projects: projects.allProjects,
    },
    revalidate: 1,
  };
}

export default Projects;
