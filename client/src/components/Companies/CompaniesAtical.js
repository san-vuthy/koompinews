import React from 'react';
import CompanyData from '../data/CompanyData';
import Navbar from '../Layouts/Navbar';
import SubNavbar from '../Layouts/Subnavbar';
import parse from 'html-react-parser';
import { Col, Row, Card } from 'antd';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_A_COMPANY } from '../../graphql/query';

const CompaniesAtical = (props) => {
  const { id } = useParams();
  const { loading, error, data, refetch } = useQuery(GET_A_COMPANY, {
    variables: { id },
  });
  if (loading) return 'loading......';
  console.log(data);
  if (error) return `Error! ${error.message}`;
  // console.log(props.match.params.id)
  // const companys = CompanyData.company.find(x => x._id == props.match.params.id);
  return (
    <React.Fragment>
      <Navbar />
      <SubNavbar />
      {/* <div className="banner-company">
        <img src={'http://localhost:8080/' + data.aCompany.image} />
      </div> */}
      {/* <div className="container-company position-work-company">
        <Row gutter={[64]}>
          <Col lg={2}>
            <h1>Logo</h1>
          </Col>
          <Col lg={20}>
            <h1>{data.aCompany.name}</h1>
          </Col>
          <Col lg={2}>hel</Col>
        </Row>
      </div>
      <div className="container-company"></div> */}
      <div className="container-company " style={{ marginTop: '43px' }}>
        <Card>
          <div style={{ display: 'flex' }}>
            <div>
              <img
                style={{ height: '100px' }}
                src={'http://localhost:8080/' + data.aCompany.image}
              />
            </div>
            <div style={{ paddingLeft: '12px' }}>
              <h1>{data.aCompany.name}</h1>
            </div>
          </div>
          <Card type="inner" style={{ marginTop: '12px' }} title="Description">
            <p>{parse(data.aCompany.des)}</p>
          </Card>
          <Card type="inner" style={{ marginTop: '12px' }} title="Address">
            <div>
              <p>{data.aCompany.address}</p>
            </div>
          </Card>
          <Card type="inner" style={{ marginTop: '12px' }} title="WebSite">
            <div>
              <a href={data.aCompany.website}>{data.aCompany.website}</a>
            </div>
          </Card>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default CompaniesAtical;
