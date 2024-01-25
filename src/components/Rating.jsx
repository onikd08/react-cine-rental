/* eslint-disable react/prop-types */
import star from "../assets/star.svg";
const Rating = ({ rating }) => {
  const stars = Array(rating).fill(star);

  return (
    <div className="flex items-center space-x-1 mb-5">
      {stars.map((item, idx) => (
        <img key={idx} src={item} width="14" height="14" alt="" />
      ))}
    </div>
  );
};

export default Rating;
