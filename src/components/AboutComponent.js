import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Media,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

function About(props) {
  function RenderLeader({ leader }) {
    return (
      <Fade in>
        <Media tag="li" key={leader.id} className="col-12 mt-5">
          <Media left middle>
            <Media object src={leader.image} alt={leader.name} />
          </Media>
          <Media body className="ml-5">
            <Media heading>{leader.name}</Media>
            <p>{leader.designation}</p>
            <p>{leader.description}</p>
          </Media>
        </Media>
      </Fade>
    );
  }

  function RenderLeaders({ leaders, isLoading, errMess }) {
    if (isLoading) {
      return <Loading />;
    } else if (errMess) {
      return <h4>{errMess}</h4>;
    } else
      return (
        <Stagger in>
          {leaders.map((leader) => (
            <Fade in key={leader.id}>
              <RenderLeader key={leader.id} leader={leader} />
            </Fade>
          ))}
        </Stagger>
      );
  }

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>About Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>About Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12 col-md-6">
          <h2>Our History</h2>
          <p>
            The term 'restaurant' first appeared in the 18th century in France.
            It referred to a reinvigorating meat broth which people ate to
            refortify the body. It was not until the French Revolution and
            subsequent industrialisation that culinary establishments such as we
            know them today began to appear and develop.
          </p>
          <p>
            During Classical Antiquity, thermopolia served food and drink to
            customers of all social classes. Archaeological digs uncovered more
            than 150 such places in the city of Pompeii, highlighting the
            importance of this type of establishment. The rather basic{" "}
            <em>thermopolium</em> served food in bowls carved into an L-shaped
            counter.
          </p>
        </div>
        <div className="col-12 col-md-5">
          <Card>
            <CardHeader className="bg-primary text-white">
              Facts At a Glance
            </CardHeader>
            <CardBody>
              <dl className="row p-1">
                <dt className="col-6">Started</dt>
                <dd className="col-6">3 Feb. 2013</dd>
                <dt className="col-6">Major Stake Holder</dt>
                <dd className="col-6">HK Fine Foods Inc.</dd>
                <dt className="col-6">Last Year's Turnover</dt>
                <dd className="col-6">$1,250,375</dd>
                <dt className="col-6">Employees</dt>
                <dd className="col-6">40</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
        <div className="col-12">
          <Card>
            <CardBody className="bg-faded">
              <blockquote className="blockquote">
                <p className="mb-0">
                  You better cut the pizza in four pieces because I'm not hungry
                  enough to eat six.
                </p>
                <footer className="blockquote-footer">
                  Yogi Berra,
                  <cite title="Source Title">
                    The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books,
                    2014
                  </cite>
                </footer>
              </blockquote>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h2>Corporate Leadership</h2>
        </div>
        <div className="col-12">
          <RenderLeaders
            leaders={props.leaders.leaders}
            isLoading={props.leaders.isLoading}
            errMess={props.leaders.errMess}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
