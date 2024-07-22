import React, { useEffect, useState } from "react";
import { getScheduleApi, getTheatreApi } from "../services/allApi";
import { Link } from "react-router-dom";

function ViewTheater({ TheatreObject }) {
  const [schedule, setschedule] = useState([]);
  const [TheatreObj, settheatre] = useState([]);
  const [theatreid, setthetreid] = useState("");
  const [t, set] = useState([]);
  const getschedule = async () => {
    const result = await getScheduleApi();
    const allSchedule = result.data;
    const movieName = TheatreObject.Title;
    console.log(movieName);
    const selSchedule = allSchedule.filter(
      (item) => item.Movie_Name == movieName
    );
    console.log(selSchedule);
    setschedule(selSchedule);
    const id = allSchedule.map((item) => item.theatre_id);
    console.log(id);
    setthetreid(id);
    console.log(theatreid);

    const result2 = await getTheatreApi();
    const theatredetails = result2.data;
    const selid = theatredetails.filter((item, index) => item.id == id[index]);

    console.log(selid);
    set(selid);

    // console.log(schedule);
    // console.log(allSchedule);
  };
  const gettheatre = async () => {
    const result = await getTheatreApi();
    const theatredetails = result.data;
    console.log(theatredetails);
    settheatre(result.data);
    console.log(TheatreObj);
    let idd = theatreid;
    const selid = theatredetails.filter((item) => item.id == idd);
    console.log("detail:", selid);
  };
  useEffect(() => {
    getschedule();
    gettheatre();
  }, []);
  return (
    <>
      <div className="row w-100 mt-5">
        <div className="col-md-2"></div>
        <div className="col-md-7">
          <h4>VIEWING TIMES FOR BOOKING</h4>
          <hr />
          {schedule?.length > 0 ? (
            <div className="card my-3">
              <div className="card-body">
                {t?.length > 0 ? (
                  t.map((teatre) => (
                    <div className="row">
                      <div className="col-md-6  border border-bottom-1 border-end-0 border-start-0 border-top-0 my-3">
                        <h5 className="text-capitalize">{teatre.Name}</h5>
                        <h6 className="text-capitalize">{teatre.Address}</h6>
                      </div>
                      <div className="col-md-6 border border-bottom-1 border-end-0 border-start-0 border-top-0 my-3">
                        <div className="d-flex">
                          {schedule
                            ?.filter((ele) => ele.theatre_id == teatre.id)
                            .map((item) => (
                              <Link
                                to={"/seatselection"}
                                state={{
                                  scheduleData: item,
                                  teatreData: teatre,
                                }}
                              >
                                <button
                                  type="button"
                                  class="btn btn-outline-danger ms-2"
                                >
                                  {item.Show_Time}
                                </button>{" "}
                              </Link>
                            ))}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>error</p>
                )}
              </div>
            </div>
          ) : (
            <p>No Schedule Yet</p>
          )}
        </div>
        <div className="col-md-3"></div>
      </div>
    </>
  );
}

export default ViewTheater;
