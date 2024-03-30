const PageTitle = ({ title, title_image }) => {
  const cover_img = title_image
    ? title_image
    : "https://img.freepik.com/free-photo/abundant-collection-antique-books-wooden-shelves-generated-by-ai_188544-29660.jpg";
  return (
    <div className="view-content relative">
      <div
        style={{
          backgroundImage: `url(${cover_img})`,
        }}
        className="w-100 pagetitle-bg"
      >
        <div className="bg-overlay"></div>
        <h1 className="absolute bottom-0 left-0 page-title">{title}</h1>
      </div>
    </div>
  );
};

export default PageTitle;
