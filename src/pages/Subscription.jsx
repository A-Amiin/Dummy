import { useDispatch, useSelector } from "react-redux";
import { viewSubscriptionData } from "../network/subscription";
import bubble_affordable_pricing from "../assets/images/bubble1.png";
import { useParams } from "react-router";
import AffordablePricingDetails from "../components/AffordablePricing/AffordablePricingDetails";
import { useEffect } from "react";

function Subscription() {
  const { subscriptionId } = useParams();
  console.log(subscriptionId);
  const subscription = useSelector((state) => {
    return state.AffordablePricing;
  });
  console.log(subscription.subscriptionDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewSubscriptionData(subscriptionId));
  }, [subscriptionId, dispatch]);
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center my-4 py-3">
        {subscription.loading ? (
          <h1>loading</h1>
        ) : (
          <AffordablePricingDetails
            imgSrc={bubble_affordable_pricing}
            title={subscription.subscriptionDetails.title}
            price={subscription.subscriptionDetails.price}
            description={subscription.subscriptionDetails.description}
          />
        )}
      </div>
    </div>
  );
}

export default Subscription;
