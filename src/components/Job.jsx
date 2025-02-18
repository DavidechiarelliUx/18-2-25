import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavouritesAction, removeFavouritesAction } from "../redux/actions";

const Job = ({ data }) => {
  const favourites = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();

  const isFav = favourites.includes(data.company_name);

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        {isFav ? (
          <Button
            variant="danger"
            onClick={() => {
              dispatch(removeFavouritesAction(data));
            }}
          >
            ❌
          </Button>
        ) : (
          <Button
            variant="info"
            onClick={() => {
              dispatch(addToFavouritesAction(data));
            }}
          >
            💼
          </Button>
        )}

        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
