import Footer from "./Footer";
import Header from "./Header";
import ArticlesList from "./ArticlesList";

function App() {
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
    <>
      <Header articlesFromApi={articlesFromApi} />
      <ArticlesList articlesFromApi={articlesFromApi} />
      <Footer />
    </>
  );
}

export default App;
