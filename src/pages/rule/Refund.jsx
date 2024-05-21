import React from "react";

const Refund = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="container mt-5">
          <h2>Order Policies</h2>

          <section className="mt-4">
            <h4>Cancellation Policy</h4>
            <p>
              Prepaid orders can be cancelled within 1 hour of placing the
              order. Please email us at{" "}
              <a href="mailto:maadico.in@gmail.com">maadico.in@gmail.com</a>{" "}
              with your cancellation request.
            </p>
            <p>
              In case your order has already been shipped, it cannot be canceled
              as our logistics partners charge us as soon as the pickup is
              completed.
            </p>
          </section>

          <section className="mt-4">
            <h4>Refunds</h4>
            <p>
              Refunds will be processed within 7-10 working days after
              intimation. Customers will be liable to pay for delivery and
              packaging charges in case of a refund for prepaid orders. A
              packaging charge of Rs. 20/- will be applicable on refunds for
              prepaid orders that are returned back to us.
            </p>
          </section>

          <section className="mt-4">
            <h4>Returns/ Replacements</h4>
            <p>
              A request for Return/Replacement should be made within 2 days from
              the delivery of the goods along with proper images. The company
              will be liable to return or replace the goods only if they are:
            </p>
            <ul>
              <li>Damaged/Expired/Incorrect product received.</li>
              <li>Missing item received.</li>
            </ul>
            <p>
              No order will be entertained for replacement or return other than
              the above stated reasons.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Refund;
