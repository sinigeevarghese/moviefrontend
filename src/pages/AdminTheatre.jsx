import React, { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addTheatreApi,
  deleteTheatreApi,
  getTheatreApi,
} from "../services/allApi";
import "../bootstrap.min.css";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import HeaderAdmin from "../components/HeaderAdmin";

function AdminTheatre() {
  const [open, setOpen] = useState(false);
  const [addNewModal, setAddNewModal] = useState(false);
  const [teaterShowId, setteaterShowId] = useState("");
  const [theatredeatils, settheatredetails] = useState([]);
  const [Theatre, setTheatre] = useState({
    Name: "",
    Address: "",
  });

  const handleUpload = async (e) => {
    e.preventDefault(); // in order to eliminate data lost
    const { Name, Address } = Theatre;
    if (!Name || !Address) {
      toast.info("Please Fill the Form Completly");
      console.log({ Name, Address });
    } else {
      const result = await addTheatreApi(Theatre);
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        toast.success("Theatre Uploaded Successfully");
        // setaddStatus(result.data)
      } else {
        toast.error("Something Went Wrong");
      }
    }
  };
  const gettheatredetails = async () => {
    const result = await getTheatreApi();
    settheatredetails(result.data);
  };

  const handleDelete = async (id) => {
    console.log(id);
    const result = await deleteTheatreApi(id);
    console.log(result);
    if (result.status >= 200 && result.status < 300) {
      // setdeletevideostatus(result.data)
    }
  };

  useEffect(() => {
    setTheatre();
    gettheatredetails();
  }, []);
  return (
    <div>
      <HeaderAdmin />
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="container-fluid mt-5">
            <div>
              <div className="d-flex justify-content-between shadow bg-secondary p-3">
                <h3 className="text-primary">Theatres</h3>
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={() => setAddNewModal(!addNewModal)}
                >
                  Add New
                </button>
              </div>
              <Collapse in={addNewModal}>
                <div className="shadow bg-secondary">
                  <form className="p-3">
                    <h5>Add New Theatre</h5>
                    <div className="mb-3">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control w-100"
                        onChange={(e) =>
                          setTheatre({ ...Theatre, Name: e.target.value })
                        }
                      />
                    </div>
                    <div className="mb-3">
                      <label>Address</label>
                      <input
                        type="text"
                        className="form-control w-100"
                        onChange={(e) =>
                          setTheatre({ ...Theatre, Address: e.target.value })
                        }
                      />
                    </div>
                    {/* <div className="mb-3">
        <label>Number of Screens</label>
        <input type="number" className='form-control w-100' onChange={(e)=>setTheatre({...Theatre,Screen_no:e.target.value})} />
        </div> */}
                    <div className="mb-3">
                      <button
                        type="button"
                        class="btn btn-success"
                        fdprocessedid="qvbdkp"
                        onClick={handleUpload}
                      >
                        Add
                      </button>
                    </div>
                  </form>
                </div>
              </Collapse>
            </div>
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-10 mt-2">
                <div>
                  {theatredeatils?.length > 0 ? (
                    theatredeatils?.map((item) => (
                      <Card style={{ width: "100%" }} className="mt-2">
                        <Card.Body>
                          <div className="d-flex justify-content-between">
                            <Card.Title
                              className=""
                              style={{ fontWeight: "700" }}
                            >
                              {item.Name}
                            </Card.Title>
                            <div className="ms-auto">
                              <Button
                                variant="secondary"
                                className="ms-2"
                                onClick={() => {
                                  setteaterShowId(item.id), setOpen(!open);
                                }}
                              >
                                {!open ? (
                                  <FontAwesomeIcon icon={faCaretDown} />
                                ) : (
                                  <FontAwesomeIcon icon={faCaretUp} />
                                )}
                              </Button>
                            </div>
                          </div>
                          <Collapse in={open && teaterShowId == item.id}>
                            <div>
                              <Card.Text>
                                <p>{item.Address}</p>
                              </Card.Text>
                              <button
                                type="button"
                                className="btn btn-dark"
                                fdprocessedid="szfewf"
                              >
                                Update
                              </button>
                              <button
                                type="button"
                                className="btn btn-warning ms-2"
                                fdprocessedid="szfewf"
                                onClick={() => handleDelete(item?.id)}
                              >
                                Delete
                              </button>
                            </div>
                          </Collapse>
                        </Card.Body>
                      </Card>
                    ))
                  ) : (
                    <p>No Theatres Yet</p>
                  )}
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
            {/* <div className=''>
            <Row className="mt-5 p-5">
                <Col xs={12} md={6} lg={4} xl={3} className='d-flex align-items-center justify-content-center' >
                  
                </Col>
            </Row>
        </div> */}

            <ToastContainer
              theme="colored"
              position="top-center"
              autoClose={2000}
            />
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>

      <ToastContainer theme="colored" position="top-center" autoClose={2000} />
    </div>
  );
}

export default AdminTheatre;
