import Link from "next/link";

const BookCard = ({ bookDetails }) => {
  let imgSrc = "/images/newsdummy.jpeg";
  const { title: book_name, description, image, slug } = bookDetails;
  if (bookDetails) {
    imgSrc = image;
  }

  return (
    <div className="mt-5 text-left rounded-md bg-white  shadow-md group card-zoom hover:shadow-2xl">
      <img src={imgSrc} className="bookscardimg" />
      <Link href={`/tea-over-books/${slug}`} passHref={true}>
        <h2 className="text-left roboto-text cursor-pointer text-md uppercase text-lightdark px-3 py-2 leading-6">
          {book_name}
        </h2>
      </Link>
      <div className="text-left px-3 mb-5 text-xs text-slate-600">
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

export default BookCard;
