import React from "react";
import InfoCard from "./InfoCard";

function CardList({ dataList, type = "locations" }) {
  let cardsMarkup = dataList ? (
    dataList.map((data, index) => (
      <InfoCard data={data} type={type} index={index} key={data.id} />
    ))
  ) : (
    <div className="flex flex-row w-full items-center justify-center">
      <p className="m-auto text-gray-300 dark:text-gray-700 animate-pulse">
        loading...
      </p>
    </div>
  );
  return (
    <div
      data-testid="cardList-component"
      className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-gray-100 dark:bg-gray-900"
    >
      {cardsMarkup}
    </div>
  );
}

export default CardList;
