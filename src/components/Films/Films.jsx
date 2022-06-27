import Modal from "../UI/Modal";
import useFilms from "../../hooks/use-films";
import LoadingSpinner from "../UI/LoadingSpinner";

const Films = (props) => {
  const films = useFilms();

  return (
    <Modal onClose={props.onClose}>
      <div className="text-center">
        <h1 className=" font-serif text-amber-500 mt-2 mb-4 text-3xl">
          - Film List -
        </h1>
        {films.isLoading && (
          <div className="text-left mt-6">{<LoadingSpinner />}</div>
        )}
        {films?.data?.map((film, i) => {
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
