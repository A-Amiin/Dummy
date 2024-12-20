import { useEffect } from "react";
import bubble_affordable_pricing from "../../assets/images/bubble1.png";
import figure_affordable_pricing from "../../assets/images/figure1.png";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubscriptionData } from "../../network/subscription";
import AffordablePricingCard from "./AffordablePricingCard";

function AffordablePricing() {
  const subscription = useSelector((state) => {
    return state.AffordablePricing;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSubscriptionData());
  }, [dispatch]);
  return (
    <>
      <section className="affordable_pricing position-relative py-5">
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
            {subscription.subscriptionData.map((subscripe) => (
              <div key={subscripe.id} className="col-12 col-sm-6 col-lg-4 mt-sm-3 mt-4">
                <AffordablePricingCard
                  key={subscripe.id}
                  subscripeId={subscripe.id}
                  imgSrc={bubble_affordable_pricing}
                  title={subscripe.title}
                  price={subscripe.price}
                  description={subscripe.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AffordablePricing;
