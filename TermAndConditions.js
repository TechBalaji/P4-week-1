import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const TermAndContions = () => {
  return (
    <>
      <Meta title={"Term And Conditions"} />
      <BreadCrumb title="Term And Conditions" />
      <Container className="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
              <h3>1. Introduction</h3>
            <p>Welcome to CartCorner! These Terms and Conditions govern your use of our website and services. By accessing or using our website, you agree to these terms in full. If you disagree with any part of these terms, please do not use our website.
            </p>
            <h2>2. General Information</h2>
            <p>
              Owner: A.Venkata Balaji
              Address: NA
              Contact Information: [venkatabalaji529@gmail.com, 6304187514]
              Website URL: [Website URL]
            </p>
            <h3>3. Account and Registration</h3>
            <p>
              You must be 18 years or older to register for an account.
              Ensure that the information provided during registration is accurate and up-to-date.
              You are responsible for maintaining the confidentiality of your account and password.
              Notify us immediately of any unauthorized use of your account.
            </p>
            <h3>4. Products and Services</h3>
            <p>
              All products displayed on the website are subject to availability.
              We reserve the right to limit the quantity of items available for purchase.
              Prices are subject to change without notice.
              Product images are for illustration purposes; the actual product may vary slightly.
            </p>
            <h3>5. Orders and Payments</h3>
            <p>
              Placing an order on our website constitutes an offer to buy the product.
              Orders are only confirmed once you receive an email from us.
              Payment must be made in full at the time of purchase.
              Accepted payment methods include [e.g., credit/debit cards, PayPal, etc.].
            </p>
            <h3>6. Shipping and Delivery</h3>
            <p>
              Shipping times may vary based on your location and chosen shipping method.
              We are not responsible for delays caused by courier services or customs.
              Ensure the shipping address is correct; we are not liable for delivery to incorrect addresses.
            </p>
            <h3>7. Returns and Refunds</h3>
            <p>
              Products can be returned within [number of days] days of delivery.
              Items must be in original condition with all tags and packaging intact.
              Refunds will be processed once the returned item is inspected.
              Non-returnable items include [e.g., personalized goods, perishable items, etc.].
            </p>
            <h3>8. User Conduct</h3>
            <p>
              You agree not to use the website for illegal purposes or to harm others.
              Do not post or transmit any material that is defamatory, offensive, or infringes on third-party rights.
              We reserve the right to terminate accounts for violations of these terms.
            </p>
            <h3>9. Intellectual Property</h3>
            <p>
              All content on this website, including text, images, logos, and designs, is owned by [Your Company Name] and protected under intellectual property laws.
              You may not reproduce, distribute, or exploit any content without prior written permission.
            </p>
            <h3>10. Limitation of Liability</h3>
            <p>
              We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of our website.
              This includes, but is not limited to, loss of data, profits, or business interruption.
            </p>
            <h3>11. Privacy Policy</h3>
            <p>
              Your personal information is processed in accordance with our Privacy Policy, which is available [here/link to Privacy Policy].
              By using our website, you consent to such processing.
            </p>
            <h3>12. Modifications to Terms</h3>
            <p>
              We reserve the right to modify these Terms and Conditions at any time.
              Changes will be posted on this page, and your continued use of the website constitutes acceptance of such changes.
            </p>
            <h3>13. Governing Law</h3>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of [Your Country/State].
              Any disputes shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
            </p>
            <h3>14. Contact Us</h3>
            <p>
              For questions or concerns about these Terms and Conditions, please contact us:
              Email: venkatabalaji529@gmail.com
              Phone: 6304187514
              Address: NA
            </p>
            <h3>15. Acknowledgment</h3>
            <p>
              By using our website, you acknowledge that you have read and agree to these Terms and Conditions.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermAndContions;