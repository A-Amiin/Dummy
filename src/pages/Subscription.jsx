import { useDispatch, useSelector } from "react-redux";
import { viewSubscriptionData } from "../network/subscription";
import bubble_affordable_pricing from "../assets/images/bubble1.png";
import { useParams } from "react-router";
import { useEffect } from "react";
import "../assets/styles/home.css";
import AffordablePricingCard from "../components/AffordablePricing/AffordablePricingCard";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import figure_affordable_pricing from "../assets/images/figure1.png";

function Subscription() {
  const { subscriptionId } = useParams();
  const subscription = useSelector((state) => state.AffordablePricing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewSubscriptionData(subscriptionId));
    console.log("Fetching data for subscriptionId:", subscriptionId);
  }, [subscriptionId, dispatch]);

  console.log("Subscription details:", subscription.subscriptionDetails);

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center my-4 py-3">
        {!subscription.loading && subscription.subscriptionDetails ? (
          <section className="affordable_pricing col-12 position-relative py-5">
            <img
              src={bubble_affordable_pricing}
              alt="bubble1"
              className="left position-absolute top-0"
            />
            <img
              src={bubble_affordable_pricing}
              alt="bubble1"
              className="right position-absolute bottom-0"
            />
            <div className="container">
              <SectionTitle
                imgSrc={figure_affordable_pricing}
                title="Affordable Pricing"
                wrapper="affordable_pricing"
                colorHeading="text-white"
                colorParagraph="text-white"
              />
              <div className="row mt-5 mb-5">
                {subscription.subscriptionDetails && (
                  <div className="col-6 m-auto">
                    <AffordablePricingCard
                      imgSrc={bubble_affordable_pricing}
                      title={subscription.subscriptionDetails.title || "N/A"}
                      price={subscription.subscriptionDetails.price || "N/A"}
                      description={subscription.subscriptionDetails.description || "N/A"}
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default Subscription;