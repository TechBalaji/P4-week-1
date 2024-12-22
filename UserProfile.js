import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const UserProfile = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, Anytown, USA",
    orders: [
      { id: 1, product: "iPad S13+ Pro", date: "2023-10-01", status: "Delivered" },
      { id: 2, product: "MacBook Pro", date: "2023-09-15", status: "Shipped" },
    ],
  };

  return (
    <>
      <Meta title={"User Profile"} />
      <BreadCrumb title="User Profile" />
      <Container className="user-profile-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">User Profile</h3>
            <div className="user-details">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
              <p><strong>Address:</strong> {user.address}</p>
            </div>
            <h3 className="section-heading">Order History</h3>
            <div className="order-history">
              {user.orders.map((order) => (
                <div key={order.id} className="order-item">
                  <p><strong>Product:</strong> {order.product}</p>
                  <p><strong>Date:</strong> {order.date}</p>
                  <p><strong>Status:</strong> {order.status}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default UserProfile;
