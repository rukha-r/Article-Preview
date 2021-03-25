import React from "react";
import data from "./data";
import ArticleComponent from "./ArticleComponent";

function App() {
  return (
    <div>
      {data.map((data) => (
        <ArticleComponent
          name={data.name}
          date={data.date}
          title={data.title}
          article={data.article}
          image={data.image}
          title_pic={data.title_pic}
          key={data.id}
        />
      ))}
    </div>
  );
}

export default App;
