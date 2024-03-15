import React, { Fragment, useState } from "react";
import { Card, CardBody, Container, Row , Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import DataTable from "react-data-table-component";
import { Link, useNavigate } from "react-router-dom";
import "../Dashboard/Dashboard.css";
import "./Movie.css";
import { useEffect } from "react";
import axios from "axios";
import APIURL from "../../Utils/api-url";
import LoaderSpinner from "../Loader/Loader";
import { successMessage } from "../../Utils/ToasterMessage";
import { IconButton } from "@material-ui/core";
import { Delete, Edit , Visibility} from "@material-ui/icons";

import { useDispatch, useSelector } from "react-redux";
import {
  getAllMovies
} from "../../redux/actions/movieaction";

const MovieTable = () => {
  const [Sidebar, setSidebar] = useState(false);
  const [title , setTitle] = useState('')
  const dispatch = useDispatch();
  const OnClickHandel = () => {
    setSidebar(!Sidebar);
  };
  const { movies, loading, error } = useSelector(state => state.clientReducer);

  useEffect(() => {
      dispatch(getAllMovies());
  }, [dispatch]);

  const customStyles = {
    rows: {
      style: {
        minHeight: "46px",
      },
    },
    headCells: {
      style: {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "18px",
        lineHeight: "22px",
        color: "#000000",
        fontFamily: "Roboto",
        whiteSpace: "normal",
        maxWidth: "600px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "19px",
        textAlign: "center",
        color: "#000000",
        fontFamily: "Roboto",
      },
    },
  };

  console.log(movies, loading, error , "line not 456 ig ");
  const [search, setSearch] = useState([]);
  const [filterData, setfilterdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const columns = [
    {
      name: "Type",
      selector: (row) => row.Type,
      sortable: true,
    },
    {
      name: "Title",
      selector: (row) => row.Title,
      sortable: true,
    },
    {
      name: "Year",
      selector: (row) => row.Year,
      sortable: true,
    },
    {
      name: "Poster",
      selector: (row) => {
        return <>
          <img height={30} width={50} style={{border:"1px solid blue"}} src={row?.Poster}/>
        </>
      },
    },
    {
      name: "Action",
      sortable: true,
      selector: (row) => (
        <div className="d-flex gap-2">
          <IconButton
            title="Edit"
          >
            Delete
          </IconButton>
          <span
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => {
              setTitle(row?.Title);
            }}
          >
            <IconButton title="View" style={{ color: 'red' }}>
              <Visibility />
            </IconButton>
          </span>
        </div>
      ),
    },
  
  ];
  useEffect(() => {
    if (movies.length === 0) {
        setIsLoading(true);
    } else {
        setIsLoading(false); 
    }
    if (search) {
        let filteredData = movies.filter((movie) => {
            return String(movie.Title).toLowerCase().includes(String(search).toLowerCase());
        });
        setfilterdata(filteredData);
    } else {
        setfilterdata(movies);
    }
}, [search, movies]);

const handleSort = () => {
  const sortedData = [...filterData];
  // If the data is already sorted in ascending order, sort it in descending order
  if (sortedData[0]?.Title < sortedData[sortedData.length - 1]?.Title) {
    sortedData.sort((a, b) => b.Title.localeCompare(a.Title));
  } else {
    // If the data is not sorted or sorted in descending order, sort it in ascending order
    sortedData.sort((a, b) => a.Title.localeCompare(b.Title));
  }
  setfilterdata(sortedData);
};


const handleApply = () => {
  if (search) {
    let filteredData = movies.filter((movie) => {
      return String(movie.Title).toLowerCase().includes(String(search).toLowerCase());
    });
    setfilterdata(filteredData);
  }
};

const handleClear = () => {
  setSearch('');
  setfilterdata(movies);
};



  return (
    <Fragment>
      <Container fluid={true} className="" >
        <div className="margin_left">
        <Card className="shadow-sm corner mb-5">
          <CardBody>
          <div className="hedingTab">Filter List of the Movie Title</div>
          <div className="inputRowPages">
          <input
                  type="text"
                  placeholder="Search here"
                  className="w-25 form-control hereCol"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              <button type="button" className="btn btn-danger" onClick={handleApply}>Apply</button>
              <button type="button" className="btn btn-danger" onClick={handleClear}>Clear</button>
          </div>
          </CardBody>
        </Card>
        <div className="alingdd mt-3 mb-3">
          <button type="button"  onClick={handleSort} class="btn btn-danger">Sort</button>
          </div>
          <Card className="shadow-sm corner">
          <CardBody>
          <div className="hedingTab">View the List of the movie</div>
            <DataTable
              columns={columns}
              data={filterData}
              customStyles={customStyles}
              progressPending={isLoading}
              progressComponent={<LoaderSpinner />}
              pagination
              paginationPerPage={50}
              paginationRowsPerPageOptions={[50, 100, 200, 500]}
              paginationComponentOptions={{
                rowsPerPageText: "Records per page:",
                rangeSeparatorText: "out of",
              }}
              fixedHeader
              fixedHeaderScrollHeight="400px"
              highlightOnHover
            />
            </CardBody>
            </Card>
        </div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content modal-class">
              <div className="modal-header border-0  d-flex justify-content-center ">
              <h3 className="hedingTab">Update Movie Title</h3>
              </div>
              <div className="modal-body d-flex justify-content-center">
              <input
                  type="text"
                  placeholder="Search here"
                  className="form-control popUpint"
                  value={title}
                />
              </div>
              <div className="modal-footer border-0 d-flex justify-content-center ">
                <button
                  type="button"
                  className="btn btn-danger popUpint"
                  data-bs-dismiss="modal"
                >
                  Save & Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};
export default MovieTable;
