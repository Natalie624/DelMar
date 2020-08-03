import React from "react"
import ReservationModalStyle from "./reservation-modal.module.css"
import Close from "./close-img"

const ReservationModal = () => (
    /*! Modal */
    <div className="modal fade" data-backdrop="false" id="reservationBtn" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" id={ReservationModalStyle.modalDialog} role="document">
            <div className="modal-content" id={ReservationModalStyle.modalContent}>
                <div className="modal-body">
                    <button type="button" className="close" id={ReservationModalStyle.closeBtn} data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><Close /></span>
                    </button>

                    <div className={ReservationModalStyle.modalContentDiv}>
                        <h1 className={ReservationModalStyle.modalTitle}>Reservations</h1>
                        <p className={ReservationModalStyle.modalDescription}>Please fill in the information below and we will contact you to confirm your reservation.</p>
                
                        {/*! Reservation form from Netlify */}
                        <form className={ReservationModalStyle.form}  name="Reservation" method="POST" netlify-honeypot="bot-field" data-netlify="true">
                            <input type="hidden" aria-label="form-name" name="form-name" value="Reservation" />
                            <p>
                                <input className={ReservationModalStyle.input} type="text" aria-label="full-name" name="name" placeholder="full name (required)" required />
                            </p>
                            <p>
                                <input className={ReservationModalStyle.input} type="email" aria-label="email" name="email" placeholder="email address (required)" required />
                            </p>
                            <p>
                                <input className={ReservationModalStyle.input} type="phone" aria-label="phone" name="phone" placeholder="phone number (required)" required />
                            </p>
                            <p>
                                <textarea className={ReservationModalStyle.textArea} type="text-area" aria-label="info" name="info" placeholder="date &amp; time / special requests or restrictions (required)" required />
                            </p>
                            <p>
                                <button className={ReservationModalStyle.submitBtn} type="submit">Submit</button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default ReservationModal