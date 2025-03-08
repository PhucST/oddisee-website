import "./TripStyles.css";
import "./CardStyles.css"
import FoodCard from "./FoodCard";
import { MenuFood } from "./FoodMenu";

function FoodBlog() {
  return (
    <>
      <div className="card">
        <div className="chilcard">
          {MenuFood.length > 0 && (
            MenuFood.map((food, index) => (
              <FoodCard
                key={index}
                image={food.image}
                heading={food.heading}
                text={food.text}
                price={food.price}
              />
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default FoodBlog;
