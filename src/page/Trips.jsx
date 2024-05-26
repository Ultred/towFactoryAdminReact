import { useState } from "react";
import SecondNavbar from "../components/SecondNavbar";
import styles from "./Trips.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import * as apiClient from "../service/ApiClient";
import CardDatas from "../components/CardDatas";
import useDebounce from "../hooks/useDebounce";
import CardDataLoader from "../feature/loaders/CardDataLoader";

const TripsNavbarSampleData = ["ALL", "In Transit", "Cancelled", "Delivered"];

const Trips = () => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("ALL");
  const debouncedPage = useDebounce(page, 500);
  const debouncedFilter = useDebounce(filter, 500);

  const {
    data: tripData,
    isLoading,
    isFetching,
    isPending,
  } = useQuery({
    queryKey: ["tripData", debouncedPage, debouncedFilter],
    queryFn: apiClient.getAllBookingsPagination,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });

  const handleShowItemTrips = (item) => {
    setFilter(item);
    setPage(1);
    console.log(item);
  };

  //Pagination
  const handlePrevClick = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextClick = () => {
    console.log(debouncedPage);
    //const hasMore = tripData && tripData.currentPage < tripData.totalPages;
    //console.log(hasMore);
    setPage((old) => old + 1);
    //console.log(tripData?.result.hasMore);
    if (tripData.hasMore) {
      console.log("has more");
    }
  };
  return (
    <>
      <div className={styles.tripsContainer}>
        <SecondNavbar
          onItemClick={handleShowItemTrips}
          data={TripsNavbarSampleData}
        />
        <div className={styles.buttonPagination}>
          <button
            className="border bg-slate-400"
            disabled={page === 1}
            onClick={handlePrevClick}
          >
            <IoIosArrowBack />
          </button>
          {page}
          <button
            //disabled={isPlaceholderData || tripData?.hasMore}
            className="border bg-slate-400"
            onClick={handleNextClick}
          >
            <IoIosArrowForward />
          </button>
        </div>
        {isLoading || isPending || isFetching ? (
          <>
            <CardDataLoader />
            <CardDataLoader />
          </>
        ) : (
          tripData?.result?.map((trip) => (
            <CardDatas key={trip.id} data={trip} />
          ))
        )}
      </div>
    </>
  );
};

export default Trips;
