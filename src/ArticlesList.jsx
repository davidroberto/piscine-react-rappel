const ArticlesList = ({ articlesFromApi }) => {
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
