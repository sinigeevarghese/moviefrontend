import React, { useEffect, useState } from "react";
import "../stylesheets/seats.css";
import { useLocation } from "react-router-dom";
import { bookMovieApi } from "../services/allApi";

const Seatbooking = () => {
  const location = useLocation();
  const { scheduleData, teatreData } = location.state;

  // states
  const [seat, setSeat] = useState([""]);
  const [seatAvailable, setSeatAvailable] = useState([]);
  const [seatReserved, setSeatReserved] = useState([]);
  const [seatSelected, setSeatSelected] = useState([]);

  const onClickData = (seat) => {
    if (seatReserved.includes(seat)) {
      setSeatAvailable([...seatAvailable, seat]);
      setSeatReserved(seatReserved.filter((res) => res !== seat));
    } else {
      setSeatReserved([...seatReserved, seat]);
      setSeatAvailable(seatAvailable.filter((res) => res !== seat));
    }
  };

  const checktrue = (row) => !seatSelected.includes(row);

  const handleSubmited = async () => {
    const { reserved_seat } = scheduleData;
    const reqBody = {
      ...scheduleData,
      reserved_seat: [...reserved_seat, ...seatReserved],
    };
    const res = await bookMovieApi(scheduleData.id, reqBody);
    if (res.status < 300 && res.status >= 200) {
      const numberOfTicket = seatReserved.length;
      const ticketPrice = numberOfTicket * teatreData.Ticket_cost;
      alert(`SuccessFully Booked
             Seat Reserved: ${numberOfTicket} seats
             Total Price: ${ticketPrice}`);
    } else {
      alert("Something went wrong");
    }
    setSeatSelected([...seatSelected, ...seatReserved]);
    setSeatReserved([]);
  };

  const initialDataHandler = () => {
    const { reserved_seat } = scheduleData;
    setSeatSelected([...reserved_seat]);

    const availableSeat = seat.filter((item) => !reserved_seat?.includes(item));
    setSeatAvailable(availableSeat);
  };

  useEffect(() => {
    setSeat(teatreData.Total_seat_cpacity);
    initialDataHandler();
  }, [teatreData]);

  return (
    <div>
      <h1>Seat Reservation System</h1>
      <DrawGrid
        seat={seat}
        available={seatAvailable}
        reserved={seatReserved}
        selected={seatSelected}
        onClickData={onClickData}
        checktrue={checktrue}
        handleSubmited={handleSubmited}
      />
    </div>
  );
};

const DrawGrid = ({
  seat,
  available,
  reserved,
  selected,
  onClickData,
  checktrue,
  handleSubmited,
}) => {
  return (
    <div className="container">
      <h2></h2>
      <table className="grid">
        <tbody>
          <tr>
            {seat.map((row) => (
              <td
                style={{
                  fontSize: "12px",
                  fontWeight: "bolder",
                  display: "grid",
                }}
                className={
                  selected.includes(row)
                    ? "reserved"
                    : reserved.includes(row)
                    ? "selected"
                    : "available"
                }
                key={row}
                onClick={checktrue(row) ? () => onClickData(row) : null}
              >
                {row}
              </td>
            ))}
          </tr>
          <div
            className="mt-3"
            style={{
              width: "1080px",
              height: "50px",
              backgroundColor: "black",
              marginLeft: "90px",
            }}
          ></div>
          <h5 className="justify-content-center d-flex mt-3">
            {" "}
            All Eyes This Way Please
          </h5>
        </tbody>
      </table>
      <button
        type="button"
        className="btn-success btn margin"
        onClick={handleSubmited}
        disabled={!reserved.length > 0}
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default Seatbooking;
