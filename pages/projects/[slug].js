import Layout from "../../components/layout";
import { fetchAPI } from "../../lib/api";
import MainLayout from "../../components/mainLayout";

const ProjectOpen = ({ project }) => {
  // const imageUrl = getStrapiMedia(article.attributes.image);
  // const seo = {
  //   metaTitle: article.attributes.title,
  //   metaDescription: article.attributes.title,
  //   shareImage: article.attributes.image,
  //   article: true,
  // };
  const {
    title,
    body,
    event_title,
    events,
    publications_title,
    publications,
    team,
  } = project;

  return (
    <Layout>
      {/* <Seo seo={seo} /> */}
      <MainLayout>
        {/* <PageTitle title={title} /> */}
        <div className="sm:px-10">
          <h1 className="py-2 text-sm md:text-4xl text-primaryblue font-bold text-center my-5">
            {title}
          </h1>
          <div className="mb-5">
            {body && (
              <div className="my-3 text-slate-600 text-left rounded-md bg-white p-5">
                <div className="markdown-reset">
                  <div dangerouslySetInnerHTML={{ __html: body }} />
                </div>
              </div>
            )}
          </div>
          <div className="mb-5 text-center">
            {team && team.length !== 0 && (
              <h1 className="text-2xl mb-5 text-blue-700 font-bold">TEAM</h1>
            )}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {team &&
                team.map((member, ind) => {
                  const { name, designation, description, image } = member;
                  const thumb = image.data
                    ? image.data.attributes.url
                    : "/images/dummy-profile-pic.jpeg";
                  return (
                    <div className="mb-10" key={ind}>
                      <div className="text-center flex flex-col items-center">
                        <img
                          src={thumb}
                          alt="profile"
                          className="text-center h-32 flex programfaculty"
                        />
                        <p className="text-center font-bold my-2">{name}</p>
                      </div>
                      <div className="my-0 text-center">
                        <span>
                          <b>{designation}</b>{" "}
                          <div
                            dangerouslySetInnerHTML={{ __html: description }}
                          />
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          {/* <div className="my-5">
            {events && (
              <div className="my-3 text-slate-600 text-left p-5">
                {event_title && (
                  <div className="text-center mb-3 uppercase text-3xl font-bold text-primaryblue">
                    {event_title}
                  </div>
                )}
                <div className="pb-5">
                  <div className="markdown-reset">
                    <div dangerouslySetInnerHTML={{ __html: events }} />
                  </div>
                </div>
              </div>
            )}
          </div> */}
          {/* <div className="my-5">
            {publications && (
              <div className="my-3 text-slate-600 text-left p-5">
                {publications_title && (
                  <div className="text-center mb-3 uppercase text-3xl font-bold text-primaryblue">
                    {publications_title}
                  </div>
                )}
                <div className="pb-5">
                  <div className="markdown-reset">
                    <div dangerouslySetInnerHTML={{ __html: publications }} />
                  </div>
                </div>
              </div>
            )}
          </div> */}
          {/* {pdf &&
        pdf.data &&
        pdf.data.map((pdf, ind) => {
          const pdfLink = pdf.attributes.url;
          const pdfName = pdf.attributes.name;
          return (
            <a key={ind} href={pdfLink} target="_blank" rel="noreferrer">
              <div className="py-2 mb-4 w-fit text-center px-3 bg-blue-700 text-white text-sm font-semibold rounded-md shadow focus:outline-none">
                Download {pdfName}
              </div>
            </a>
          );
        })} */}
        </div>
      </MainLayout>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/projects", { fields: ["slug"] });

  return {
    paths: articlesRes?.allProjects?.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/projects" + "/" + params.slug);
  return {
    props: { project: articlesRes },
    revalidate: 1,
  };
}

export default ProjectOpen;
