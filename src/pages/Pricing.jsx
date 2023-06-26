import React from "react";
import Card from "./Cards/Card";

export default function Pricing() {
  const data = [
    {
      id: 1,
      type: "Personal",
      desc: "Special first packet for all",
      priceM: "Free",
      details: {
        note_1: "Free package: quality content, interaction.",
        note_2: "self-paced learning.",
        note_3: "basic progress tracking."
      }
    },
    {
      id: 2,
      type: "Regular",
      desc: "Recommended for personal pro learning",
      priceM: "$10",
      details: {
        note_1: "Pro package: more quality content, live videos.",
        note_2: "guided learning experience.",
        note_3: "in-depth performance analytics."
      }
    },
    {
      id: 3,
      type: "Premium",
      desc: "Packet for Startup & advanced students",
      priceM: "$2.2",
      details: {
        note_1: "extensive content library, personalized coaching.",
        note_2: "one-on-one mentoring sessions.",
        note_3: "detailed learning insights, certification options."
      }
    }
  ];

  const [choose, setChoose] = React.useState("Monthly");

  function handleChange() {
    setChoose(prevChoose => (prevChoose === "Monthly" ? "Yearly" : "Monthly"));
  }

  const elements = data.map(element => {
    const price = choose === "Monthly" ? element.priceM : element.priceM==="Free"? "Free" :calculateYearlyPrice(element.priceM);
    return (
      <Card
        key={element.id}
        type={element.type}
        desc={element.desc}
        price={price}
        note_1={element.details.note_1}
        note_2={element.details.note_2}
        note_3={element.details.note_3}
        id={element.id}
        choose={choose}
        setChoose={setChoose}
      />
    );
  });

  function calculateYearlyPrice(monthlyPrice) {
    const priceWithoutSymbol = monthlyPrice.slice(1);
    const monthlyPriceNumeric = parseFloat(priceWithoutSymbol);
    const yearlyPriceNumeric = monthlyPriceNumeric * 12*0.85;
    const yearlyPrice = "$" + yearlyPriceNumeric.toFixed(2);
    return yearlyPrice;
  }

  return (
    <>
      <div className="pricing">
        <h1 className="title_Pricing">Get your best deal</h1>
        <div className="switch">
          <h1 className={`monthly ${choose === "Monthly" ? "active" : ""}`}>Monthly</h1>
          <input type="checkbox" id="switch" onChange={handleChange} />
          <label htmlFor="switch">Toggle</label>
          <h1 className={`yearly ${choose === "Yearly" ? "active" : ""}`}>Yearly</h1>
        </div>
        <div className="elements" data-aos="fade-up" data-aos-duration="1500">
          {elements}
        </div>
        <div className="section2" data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
          <h1 data-aos="fade-up" data-aos-duration="1500">Join us on email for</h1>
          <h1 className="fade"  >More Information about TAALIM</h1>
          <button className="join_btn"  >Join Now</button>
        </div>
      </div>
    </>
  );
}
