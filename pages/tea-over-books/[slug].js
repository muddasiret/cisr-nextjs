import Layout from "../../components/layout";
import { fetchAPI } from "../../lib/api";
import YoutubeEmbed from "../../Common/YoutubeEmbed";
import MainLayout from "../../components/mainLayout";
import Markdown from "markdown-to-jsx";

const Book = ({ books }) => {
  const { title: book_name, image, youtube_link, description, author } = books;
  const cover_image = image;

  return (
    <Layout>
      <MainLayout>
        <h1 className="text-4xl my-10 py-5 sanspro font-black text-darkbrown">
          {book_name}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <img src={cover_image} className="book-cover" />
          <div className="book-details col-span-4">
            <p className="text-skyblue font-semibold text-lg mb-0">{author}</p>
            <div className="pr-10 py-5 markdown-reset">
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
            {youtube_link && (
              <YoutubeEmbed
                embedLink={youtube_link}
                classes="mt-5 mb-10 py-10 md:px-25 md:h-[34rem]"
              />
            )}
          </div>
        </div>
      </MainLayout>
    </Layout>
  );
};

export async function getStaticPaths() {
  const books = await fetchAPI("/books", { fields: ["slug"] });
  return {
    paths: books.allBooks.map((books) => ({
      params: {
        slug: books.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const books = await fetchAPI("/books" + "/" + params.slug);
  return {
    props: { books: books },
    revalidate: 1,
  };
}

export default Book;
