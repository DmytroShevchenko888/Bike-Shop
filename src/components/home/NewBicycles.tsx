import React from "react";

import { useAppSelector } from "../../redux/hook";
import { COUNT_PER_PAGE } from "../../constants";

import ItemsBicycle from "./ItemsBicycle";
import Pagination from "./Pagination";

interface NewBicyclesProps {}

const NewBicycles: React.FC<NewBicyclesProps> = () => {
  const [page, setPage] = React.useState<number>(1);
  const [showMore, setShowMore] = React.useState<boolean>(false);

  const { allbicycles } = useAppSelector((state) => state.bicycles.bicycles);
  // const listNoveltyBicycles = allbicycles.filter((bicycle) => bicycle.novelty);

  const lastBicyclesIndex = page * COUNT_PER_PAGE;
  const firstBicyclesIndex = lastBicyclesIndex - COUNT_PER_PAGE;

  const currentBicyclesPage = (listOfFilteredBikes: BicycleType[]) => {
    return listOfFilteredBikes.slice(firstBicyclesIndex, lastBicyclesIndex);
  };

  return (
    <section className="new-bicycles">
      <div className="container">
        <h2>Novelties</h2>

        <ItemsBicycle
          bicycles={allbicycles} // bicycles={listNoveltyBicycles}
          bicyclesOnCurrentPage={currentBicyclesPage(allbicycles)} // bicycles={currentBicyclesPage(listNoveltyBicycles)}
          showMore={showMore}
          setShowMore={setShowMore}
          page={page}
        />

        {showMore && (
          <Pagination
            countPerPage={COUNT_PER_PAGE}
            totalBicycles={allbicycles.length} // totalBicycles={listNoveltyBicycles.length}
            page={page}
            setPage={setPage}
          />
        )}
      </div>
    </section>
  );
};

export default NewBicycles;
