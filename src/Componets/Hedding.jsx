import PropTypes from "prop-types";

const Hedding = ({ tittle, subtittle }) => {
  return (
    <div className="flex flex-col justify-center items-center my-12">
      <h1 className="text-5xl w-full text-center">{tittle}</h1>
      <h1>{subtittle}</h1>
    </div>
  );
};

export default Hedding;
Hedding.propTypes = [
    {
        title: PropTypes.string, 
        subtitle: PropTypes.string, 
      }
]
