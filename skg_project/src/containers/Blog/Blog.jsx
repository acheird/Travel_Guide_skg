import "./blog.css";
import { Article } from "../../components";
import { article1, article2, article3, article4, article5 } from "../../assets";

const Blog = () => {
  return (
    <div className="app__blog section__padding" id="blog">
      <div className="app__blog-heading">
        <h2 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h2>
      </div>
      <div className="app__blog-container">
        <div className="app__blog-container_groupA">
          <Article
            imgUrl={article1}
            date="June 24, 2024"
            title="Festival Eptapyrgiou: Music, singing, opera and poetry!"
          />
        </div>
        <div className="app__blog-container_groupB">
          <Article
            imgUrl={article2}
            date="June 26, 2024"
            title="48 Hours in Thessaloniki: Louloudadika and Beyond"
          />
          <Article
            imgUrl={article3}
            date="June 27, 2024"
            title="From Olympus to Meteora: Day Trips from Thessaloniki"
          />
          <Article
            imgUrl={article4}
            date="June 28, 2024"
            title="Culinary Adventures: Thessaloniki’s Food Scene Unveiled"
          />
          <Article
            imgUrl={article5}
            date="June 29, 2024"
            title="Exploring Ancient Treasures: A Weekend Itinerary in Thessaloniki"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
