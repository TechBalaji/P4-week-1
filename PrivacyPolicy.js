import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const PrivacyPolicy = () => {
  return (
    <>
      <Meta title={"Privacy Policy"} />
      <BreadCrumb title="Privacy Policy" />
      <Container className="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h3>1. Introduction</h3>
              <p>
                Welcome to CartCorner! This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
              <h3>2. Information We Collect</h3>
              <p>
                We may collect personal information such as your name, email address, phone number, and payment details when you register on our site or make a purchase.
              </p>
              <h3>3. How We Use Your Information</h3>
              <p>
                We use the information we collect to process transactions, send periodic emails, and improve our services.
              </p>
              <h3>4. Sharing Your Information</h3>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to outside parties except as required by law.
              </p>
              <h3>5. Security</h3>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information.
              </p>
              <h3>6. Cookies</h3>
              <p>
                Our website may use cookies to enhance your experience. You can choose to disable cookies through your browser settings.
              </p>
              <h3>7. Changes to This Privacy Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page.
              </p>
              <h3>8. Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
                Email: venkatabalaji529@gmail.com
                Phone: 6304187514
                Address: NA
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PrivacyPolicy;