import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import Summary from './components/Summary';
import ProjectTeam from './components/ProjectTeam';

const ProjectSummary = () => {
  const rtl = useSelector(state => state.rtl);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Project Summary</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <Summary dir={rtl.direction} />
        <ProjectTeam />
      </Row>
    </Container>
  );
};

export default ProjectSummary;
