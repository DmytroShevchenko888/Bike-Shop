import React from "react";
import ItemsBicycle from "./ItemsBicycle";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { useAppSelector } from "../../redux/hook";
import { COUNT_PER_PAGE } from "../../constants";
import Pagination from "./Pagination";

interface WinterBicyclesProps {}

const WinterBicycles: React.FC<WinterBicyclesProps> = () => {
  const breakpoint_sm = useMediaQuery("(max-width: 470px)");

  const [page, setPage] = React.useState<number>(1);
  const [showMore, setShowMore] = React.useState<boolean>(false);

  const { allbicycles } = useAppSelector((state) => state.bicycles.bicycles);
  const listNoveltyBicycles = allbicycles.filter((bicycle) => bicycle.novelty);

  const lastBicyclesIndex = page * COUNT_PER_PAGE;
  const firstBicyclesIndex = lastBicyclesIndex - COUNT_PER_PAGE;

  const currentBicyclesPage = (listOfFilteredBikes: BicycleType[]) => {
    return listOfFilteredBikes.slice(firstBicyclesIndex, lastBicyclesIndex);
  };

  const showTitle = breakpoint_sm ? (
    <h2>
      Winter
      <br />
      bicycles
    </h2>
  ) : (
    <h2>
      The best models
      <br />
      for winter drivings
    </h2>
  );

  return (
    <section className="winter-bicycles">
      <div className="container">
        {showTitle}

        <ItemsBicycle
          btnWhite
          bicyclesOnCurrentPage={currentBicyclesPage(listNoveltyBicycles)}
          bicycles={listNoveltyBicycles}
          showMore={showMore}
          setShowMore={setShowMore}
          page={page}
        />
        {showMore && (
          <Pagination
            countPerPage={COUNT_PER_PAGE}
            totalBicycles={listNoveltyBicycles.length}
            page={page}
            setPage={setPage}
          />
        )}
      </div>
    </section>
  );
};

export default WinterBicycles;
