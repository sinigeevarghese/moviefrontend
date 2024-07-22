import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { deleteMovieApi, getMovieApi } from "../services/allApi";
import Collapse from "react-bootstrap/Collapse";

function Moviecard(setdeletevideostatus) {
  const [open, setOpen] = useState(false);
  const [showMovieId, setShowMovieId] = useState("");

  const [Movies, setMovies] = useState([]);
  const getmovie = async () => {
    const result = await getMovieApi();
    setMovies(result.data);
  };

  const handleDelete = async (id) => {
    console.log(id);
    const result = await deleteMovieApi(id);
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      setdeletevideostatus(result.data);
    }
  };

  useEffect(() => {
    getmovie();
  }, []);
  return (
    <div>
      {Movies?.length > 0 ? (
        Movies?.map((item) => (
          <Card style={{ width: "100%" }} className="mt-2">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title className="" style={{ fontWeight: "700" }}>
                  {item.Title}
                </Card.Title>
                <Button
                  variant="secondary"
                  className="ms-auto"
                  onClick={() => {
                    setShowMovieId(item.id), setOpen(!open);
                  }}
                >
                  {!open ? (
                    <FontAwesomeIcon icon={faCaretDown} />
                  ) : (
                    <FontAwesomeIcon icon={faCaretUp} />
                  )}
                </Button>
              </div>
              <Collapse in={open && showMovieId == item.id}>
                <div className="row">
                  <div className="col-md-4">
                    <img src={item.poster_img} alt="" className="w-100" />
                  </div>
                  <div className="col-md-8 mt-1">
                    <div className="d-flex align-items-left">
                      <button
                        type="button"
                        class="btn btn-secondary btn-sm ms-1"
                        fdprocessedid="gbu5c"
                      >
                        {item.format}
                      </button>
                      <button
                        type="button"
                        class="btn btn-secondary btn-sm ms-1"
                        fdprocessedid="gbu5c"
                      >
                        {item.Language}
                      </button>
                      <button
                        type="button"
                        class="btn btn-secondary btn-sm ms-1"
                        fdprocessedid="gbu5c"
                      >
                        {item.Genres}
                      </button>
                    </div>
                    <div className="d-flex align-items-left mt-2 ms-2">
                      <h6>{item.Duration}</h6>
                      <h6>{item.Date}</h6>
                    </div>
                    <div className="align-items-left ms-2">
                      <h6>
                        Cast : {item.Actor}, {item.Actoress}
                      </h6>
                      <h6>Crew : {item.Director}</h6>
                    </div>
                    <div className="ms-2">
                      <p>
                        <span style={{ fontWeight: "500" }}>About :</span>
                        {item.Descrption}
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-left mt-2">
                    <button
                      type="button"
                      class="btn btn-dark"
                      fdprocessedid="szfewf"
                    >
                      Update
                    </button>
                    <button
                      type="button"
                      class="btn btn-warning ms-2"
                      fdprocessedid="szfewf"
                      onClick={() => handleDelete(item?.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </Collapse>
              {/* <Card.Text>
            2024 · Action · 3h
            </Card.Text> */}
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No Movies Yet</p>
      )}
    </div>
  );
}

export default Moviecard;
