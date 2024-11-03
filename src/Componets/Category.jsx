import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "../App.css";


const Category = ({ category }) => {

    // console.log(category);
    
  return (
    <div className="flex justify-between">
      {
        category.map((category, index) => (
          <Link to={`/category/${category.category}`} key={index}>
            <div className="category-item">{category.category}</div>
          </Link>
        ))
      }
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};




export default Category;
