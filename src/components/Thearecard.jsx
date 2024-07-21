import {
  faCaretDown,
  faCaretUp,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {
  deleteTheatreApi,
  getTheatreApi,
  getMovieApi,
  addScheduleApi,
  getScheduleApi,
} from "../services/allApi";
import Collapse from "react-bootstrap/Collapse";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import ScheduleCard from "./ScheduleCard";
import { Col, Row } from "react-bootstrap";

function Thearecard() {
  const [Schedule, setSchedule] = useState({
    Movie_Name: "",
    Show_Time: "",
    theatre_id: "",
  });
  const [show, setShow] = useState(false);
  const [showCollapseId, setShowCollapseId] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [open, setOpen] = useState(false);
  const [Movies, setMovies] = useState([]);
  const [Theatre, setTheatre] = useState([]);
  const [schedulee, setschedulee] = useState([]);
  const [scheduledetaile, setscheduledetails] = useState([]);
  const getmovie = async () => {
    const result = await getMovieApi();
    setMovies(result.data);
  };
  const scheduledetails = async () => {
    const result = await getScheduleApi();
    setschedulee(result.data);
  };
  const gettheatre = async () => {
    const result = await getTheatreApi();
    setTheatre(result.data);
  };
  const handleSchedule = async () => {
    //e.preventDefault()
    const result = await addScheduleApi(Schedule);
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      toast.success("Schedule Uploaded Successfully");
      // setaddStatus(result.data)
      handleClose();
      console.log(Schedule);
    } else {
      toast.error("Something Went Wrong");
      handleClose();
      console.log(Schedule);
    }
  };
  const handleshowmodal = (id) => {
    Schedule.theatre_id = id;
    handleShow();
  };
  const viewDetails = async (Sid) => {
    let Sdetails = await getScheduleApi();
    console.log(Sdetails.data);
    const data = Sdetails.data;
    console.log(data);
    console.log(typeof Sdetails);
    const selSchedule = data.filter((item) => item.theatre_id == Sid);
    console.log(selSchedule);
    setscheduledetails(selSchedule);
    console.log(scheduledetaile);
    setOpen(!open);
  };

  useEffect(() => {
    gettheatre();
    scheduledetails();
    getmovie();
  }, []);
  return (
    <div>
      {Theatre?.length > 0 ? (
        Theatre?.map((item) => (
          <Card style={{ width: "100%" }} className="mt-2">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <Card.Title className="" style={{ fontWeight: "700" }}>
                  {item.Name}
                </Card.Title>
                <div className="ms-auto">
                  <button
                    value={item.id}
                    type="button"
                    className="btn btn-dark"
                    fdprocessedid="szfewf"
                    onClick={() => {
                      handleshowmodal(item.id);
                    }}
                  >
                    Schedule
                  </button>
                  <Button
                    variant="secondary"
                    className="ms-2"
                    onClick={() => {
                      viewDetails(item.id), setShowCollapseId(item.id);
                    }}
                  >
                    View Detaile
                    {/* {!open?<FontAwesomeIcon icon={faCaretDown} />
                  :<FontAwesomeIcon icon={faCaretUp} />} */}
                  </Button>
                </div>{" "}
              </div>
              <Collapse in={open && showCollapseId == item.id}>
                <Row>
                  <Col>
                    {/* <ScheduleCard scheduledetails={scheduledetaile}/> */}
                    {scheduledetaile?.length > 0 ? (
                      scheduledetaile?.map((itemm) => (
                        <div className="col-md-4 col-sm-12">
                          <div className="d-flex align-items-left mt-3">
                            <div className="p-2 border border-primary">
                              <h5 className="text-primary">
                                {itemm.Show_Time}
                              </h5>
                              <h5 className="text-primary">
                                {itemm.Movie_Name}
                              </h5>
                            </div>
                            <button
                              className="btn btn-primary rounded-0"
                              fdprocessedid="w09pwr"
                              onClick={() => handleDelete(item?.id)}
                            >
                              <FontAwesomeIcon icon={faTrashCan} />
                            </button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>No Schedule Yet</p>
                    )}
                  </Col>
                </Row>
              </Collapse>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Schedule Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form className="p-3">
                    <div className="mb-3">
                      <label>Movie Name</label>
                      <select
                        className="form-select"
                        id="exampleSelect1"
                        fdprocessedid="8p7ai8"
                        onChange={(e) =>
                          setSchedule({
                            ...Schedule,
                            Movie_Name: e.target.value,
                          })
                        }
                      >
                        <option>Select...</option>
                        {Movies?.length > 0 ? (
                          Movies?.map((itemmovie) => (
                            <option>{itemmovie.Title}</option>
                          ))
                        ) : (
                          <option>No Movies yet</option>
                        )}
                      </select>
                    </div>
                    <div className="mb-3">
                      <label>Show Time</label>
                      <input
                        type="time"
                        className="form-control"
                        onChange={(e) =>
                          setSchedule({
                            ...Schedule,
                            Show_Time: e.target.value,
                          })
                        }
                      />
                      {/* <input value={tid} type="text" className='form-control' onChange={(e)=>setSchedule({...Schedule,theatre_id:e.target.value})} style={{display:"none"}}  />*/}
                    </div>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleSchedule}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>

              {/* <button type="button" class="btn btn-warning ms-2" fdprocessedid="szfewf" onClick={handleDelete}>Delete</button> */}
              {/* <Card.Text>
            2024 · Action · 3h
            </Card.Text> */}
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No Theatres Yet</p>
      )}

      <ToastContainer theme="colored" position="top-center" autoClose={2000} />
    </div>
  );
}

export default Thearecard;
