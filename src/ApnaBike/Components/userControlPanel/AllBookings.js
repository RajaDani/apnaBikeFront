import React, { useState, useEffect } from 'react'
import { BaseUrl } from '../../BaseUrl';
import Breadcrumbs from "./Breadcrumb";
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';

export default function AllBookings() {

    const [bookings, setbookings] = useState([]);
    const history = useNavigate();

    async function getAllBookings() {
        let token = localStorage.getItem('token');
        let userId = localStorage.getItem('userId');

        if (token && userId) {
            let Bookings = await fetch(BaseUrl + `client/dashboard/getbookings?userId=${userId}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'Application/json',
                    "Authorization": `Bearer ${token}`
                }
            });
            let allBookings = await Bookings.json();
            if (Bookings.status === 200) {
                setbookings(allBookings);
                console.log('All bookings ==>', allBookings);
            }
            else alert(allBookings.message);
        }
        else {
            history.push('/home');
        }
    }

    $(document).ready(function () {
        $('.searchField').on('keyup', function () {
            var searchTerm = $(this).val().toLowerCase();
            $('#detailTbl tbody tr').each(function () {
                var lineStr = $(this).text().toLowerCase();
                if (lineStr.indexOf(searchTerm) === -1) {
                    $(this).hide();
                } else {
                    $(this).show();
                }
            });
        });
    });


    useEffect(() => {
        getAllBookings()
    }, [])

    return (
        <React.Fragment>
            <div className="page-content userPanel" style={{ marginLeft: '270px', marginTop: '-10px' }}>
                {/* <Breadcrumbs title="Danish" breadcrumbItem="Dashboard" /> */}

                <div class="row clearfix mt-3 p-4">
                    <div class="col-lg-12 ">
                        <div class="card bikesTable ">
                            <h3 class="card-header text-center font-weight-bold text-uppercase py-4"> All Bookings</h3>
                            <div class="card-body mt-5">
                                <div id="table" class="table-editable">
                                    <table id="detailTbl" class="table table-bordered table-responsive-md text-center">
                                        <thead>
                                            <tr>
                                                <th class="text-center">Bike</th>
                                                <th class="text-center">Booked From</th>
                                                <th class="text-center">Booked Till</th>
                                                <th class="text-center">Total</th>
                                                <th class="text-center">Payment Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {bookings.map(booking =>
                                                <tr key={booking.booked_bikes_id}>
                                                    <td id={"bikeId" + booking.booked_bikes_id} class="pt-3-half" contenteditable="true">{booking.bike_id}</td>
                                                    <td id={"booked_from" + booking.booked_bikes_id} class="pt-3-half" contenteditable="true">{booking.booked_from}</td>
                                                    <td id={"booked_till" + booking.booked_bikes_id} class="pt-3-half" contenteditable="true">{booking.booked_till}</td>
                                                    <td id={"total" + booking.booked_bikes_id} class="pt-3-half" contenteditable="true">{booking.total_amount}</td>
                                                    <td id={"payment_status" + booking.booked_bikes_id} class="pt-3-half" contenteditable="true">{booking.payment_status}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
