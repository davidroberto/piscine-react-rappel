const ArticlesList = () => {
  const articlesFromApi = [
    {
      id: 1,
      title: "Mon premier article",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies ultricies, nisl nisl aliquet nisl, eget ali",
      image: "https://picsum.photos/200/300",
      isPublished: true,
    },
    {
      id: 2,
      title: "Mon deuxième article",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies ultricies, nisl nisl aliquet nisl, eget ali",
      image: "https://picsum.photos/200/300",
      isPublished: false,
    },
    {
      id: 3,
      title: "Encore un article",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies ultricies, nisl nisl aliquet nisl, eget ali",
      image: "https://picsum.photos/200/300",
      isPublished: true,
    },
  ];

  return (
    <main>
      {articlesFromApi.map((article) => {
        return (
          <>
            {article.isPublished && (
              <article>
                <h2>{article.title}</h2>
                <img src={article.image} alt={article.title} />
                <p>{article.content}</p>
              </article>
            )}
          </>
        );
      })}
    </main>
  );
};

export default ArticlesList;
