import React, { Fragment } from "react";
import MovieTable from "../../Comoponent/MovieList/Movie";
import { Breadcrumbs } from "../../Comman/index";

const Management = () => {
  return (
    <Fragment>
      <div>
        <Breadcrumbs
          parent="Movie Management"
          title="Movie Listing"
          parentLink="/movie"
          titleLink="/add-movie"
        />
        <MovieTable />
      </div>
    </Fragment>
  );
};
export default Management;
