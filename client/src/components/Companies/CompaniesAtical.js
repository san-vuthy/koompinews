import React from 'react'
import CompanyData from '../data/CompanyData'
import Navbar from '../Layouts/Navbar'
import SubNavbar from '../Layouts/Subnavbar'
import { Col, Row } from 'antd'

const CompaniesAtical = (props) => {
    console.log(props.match.params.id)
    const companys = CompanyData.company.find(x => x._id == props.match.params.id);
    return (
        <React.Fragment>
            <Navbar />
            <SubNavbar />
            <div className="banner-company">
                <img src={companys.banner} />

            </div>
            <div className="container-company position-work-company">
                <Row gutter={[64]}>
                    <Col lg={2}>
                        <h1>Logo</h1>
                    </Col>
                    <Col lg={20}>
                        <h1>{companys.companyName}</h1>
                    </Col>
                    <Col lg={2}>
                        hel
                    </Col>
                </Row>
            </div>
            <div className="container-company">

            </div>
        </React.Fragment>
    )
}

export default CompaniesAtical
