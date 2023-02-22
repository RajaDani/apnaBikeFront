import React, { useState } from "react";
import { Container, Row, Col, Table, Card, CardBody } from "reactstrap";

import { Link } from "react-router-dom";

const orderSummary = [
  {
    id: 1,
    productTitle: "Nike N012 Running Shoes",
    price: 260,
    qty: 2,
  },
  { id: 2, productTitle: "Adidas Running Shoes", price: 260, qty: 1 },
];

const EcommerceCheckout = () => {
  return (
    <React.Fragment>
      <div className="page-content p-5">
        <Container fluid>
          <div className="checkout-tabs">
            <Row>
              <Col xl="8">
                <Card className="p-1">
                  <img
                    src={process.env.PUBLIC_URL + "/images/bg6.jpg"}
                    alt="checkout"
                  ></img>
                </Card>
              </Col>

              <Col xl="4">
                <Card className="checkout-order-summary">
                  <CardBody>
                    <div className="p-3 bg-light mb-4">
                      <h5 className="font-size-16 mb-0">Order Details</h5>
                    </div>

                    <div className="table-responsive">
                      <Table className="table-centered mb-0 table-nowrap">
                        <thead className="thead-light">
                          <tr>
                            <th
                              className="border-top-0"
                              style={{ width: "110px" }}
                              scope="col"
                            >
                              Pickup
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {orderSummary.map((orderitem, key) => (
                            <tr key={"_orderSummary_" + key}>
                              <td>
                                <h5 className="font-size-14 text-truncate">
                                  <Link
                                    to="/ecommerce-product-detail"
                                    className="text-dark"
                                  >
                                    {orderitem.productTitle}{" "}
                                  </Link>
                                </h5>
                              </td>
                            </tr>
                          ))}
                          <tr>
                            <td colSpan="2">
                              <h6 className="font-size-14 m-0">Sub Total:</h6>
                            </td>
                            <td>$ 780</td>
                          </tr>

                          <tr>
                            <td colSpan="2">
                              <h5 className="font-size-14 m-0">
                                Delivery Charges:{" "}
                              </h5>
                            </td>
                            <td>$ 25</td>
                          </tr>

                          <tr className="bg-light">
                            <td colSpan="2">
                              <h5 className="font-size-14 m-0">Total: </h5>
                            </td>
                            <td>$ 745.2</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default EcommerceCheckout;
