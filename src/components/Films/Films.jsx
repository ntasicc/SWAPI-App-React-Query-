import Modal from "../UI/Modal";
import { useSelector } from "react-redux";
import useSpinner from "../../hooks/use-spinner";

const Films = (props) => {
  const spinner = useSpinner("filmsData");
  const filmsData = useSelector((state) => state.filmsData.filmsArray);

  return (
    <Modal onClose={props.onClose}>
      <div className="text-center">
        <h1 className=" font-serif text-amber-500 mt-2 mb-4 text-3xl">
          - Film List -
        </h1>
        {spinner && <div className="text-left mt-6">{spinner}</div>}
        {filmsData.map((film, i) => {
          return (
            <p key={i} className="mb-7 font-serif">
              <span className="text-gray-600 font-semibold italic mr-3">
                {i + 1}:{" "}
              </span>
              "{film.title}" by {film.producer} (
              {new Date(film.release_date).toLocaleDateString()})
            </p>
          );
        })}
      </div>
    </Modal>
  );
};

export default Films;
