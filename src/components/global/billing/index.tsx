"use client";
import React from "react";
import PaymentCard from "./payment-card";

type Props = {};

const Billing = (props: Props) => {
  // Static data
  const data: { subscription: { plan: "PRO" | "FREE" } } = {
    subscription: {
      plan: "FREE", // Swap the plan to FREE
    },
  };

  return (
    <div className="flex lg:flex-row flex-col gap-5 w-full lg:w-10/12 xl:w-8/12 container">
      {/* FREE Plan */}
      <PaymentCard current={data.subscription.plan} label="FREE" />

      {/* PRO Plan */}
      <PaymentCard current={data.subscription.plan} label="PRO" />
    </div>
  );
};

export default Billing;
