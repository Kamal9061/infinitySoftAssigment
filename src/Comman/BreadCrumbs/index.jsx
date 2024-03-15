import React, { Fragment } from "react";
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { Home } from "react-feather";
import "./Crumbs.css";

const Breadcrumbs = (props) => {
  const { title = "", parent = "", parentLink = "/" } = props;
  return (
    <Fragment>
      <Container fluid={true}>
        <div className="page-title margin_left">
          <Row>
            <Col xs="12">
              <h3>{title}</h3>
            </Col>
            <Col xs="12">
              <div className="breadcrumb">
                <Breadcrumb>
                  <BreadcrumbItem>
                    <Link style={{ textDecoration: 'none' }} to="/">
                      <Home style={{height:"16px" , width:"16px"}} />
                    </Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <Link style={{ textDecoration: "none" }} to={parentLink}>
                      {parent}
                    </Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem active>{title}</BreadcrumbItem>
                </Breadcrumb>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default Breadcrumbs;
