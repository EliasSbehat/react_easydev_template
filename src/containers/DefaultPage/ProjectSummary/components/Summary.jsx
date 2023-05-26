import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import ProgressBar from '@/shared/components/ProgressBar';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import { Button } from '@/shared/components/Button';
import { colorAdditional } from '@/utils/palette';
import {
 row, paddingLeft, marginLeft, left, marginRight, paddingRight,
} from '@/utils/directions';
import Statistics from './Statistics';

const Summary = ({ dir }) => (
  <Col md={12} lg={8} xl={8}>
    <Card>
      <CardBody>
        <ProjectSummaryWrap>
          <ProjectSummaryCardTitleWrap>
            <CardTitle>Nes website for Global company</CardTitle>
            <ProjectSummaryButton variant="outline-secondary" size="sm">
              Edit
            </ProjectSummaryButton>
          </ProjectSummaryCardTitleWrap>
          <ProjectSummaryInfo>
            <tbody>
              <tr>
                <th>Project owner:</th>
                <td>Mary McCorny</td>
              </tr>
              <tr>
                <th>Due date:</th>
                <td>21/12/2018</td>
              </tr>
              <tr>
                <th>Client Brief:</th>
                <td><a href="/">Design Brief_Global Co.txt</a></td>
              </tr>
            </tbody>
          </ProjectSummaryInfo>
          <p className="typography-message">
            Knowledge nay estimable questions repulsive daughters boy. Solicitude gay way unaffected expression for.
            His mistress ladyship required off horrible disposed rejoiced. Unpleasing pianoforte unreserved as oh he
            unpleasant no inquietude insipidity. Advantages can discretion possession add favourable cultivated
            admiration far. Why rather assure how esteem end hunted nearer and before. By an truth after heard going
            early given he.
          </p>
          <ProjectSummaryStats>
            <ProjectSummaryStat>
              <p>123 <span>Tasks</span></p>
            </ProjectSummaryStat>
            <ProjectSummaryStat>
              <p>12 <span>Users</span></p>
            </ProjectSummaryStat>
            <ProjectSummaryStat>
              <p>71 <span>Bugs</span></p>
            </ProjectSummaryStat>
            <ProjectBarWrap>
              <ProgressBar now={74} label="74% completed" size="middle" />
            </ProjectBarWrap>
          </ProjectSummaryStats>
          <hr />
          <Statistics dir={dir} />
        </ProjectSummaryWrap>
      </CardBody>
    </Card>
  </Col>
);

Summary.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default Summary;

// region STYLES

const ProjectSummaryWrap = styled.div`
  position: relative;

  hr {
    margin: 30px 0;
  }
`;

const ProjectSummaryCardTitleWrap = styled(CardTitleWrap)`
  display: flex;
  flex-direction: ${row};
  justify-content: space-between;
`;

const ProjectSummaryButton = styled(Button)`
  width: 100px;
  ${marginLeft}: 5px;
  margin-bottom: 0;
`;

const ProjectSummaryInfo = styled.table`
  margin-bottom: 5px;
  text-align: ${left};

  td {
    ${paddingLeft}: 10px;
  }

  th {
    color: ${colorAdditional};
    font-weight: 500;
  }

  td, th {
    padding-bottom: 5px;
  }
`;

const ProjectSummaryStats = styled.div`
  display: flex;
  margin-top: 20px;
  flex-wrap: wrap;
`;

const ProjectBarWrap = styled.div`
  max-width: 460px;
  width: 100%;
  margin: auto 0;
`;

const ProjectSummaryStat = styled.div`
  ${marginRight}: auto;
  ${paddingRight}: 20px;

  p {
    font-size: 24px;
    line-height: 32px;
    margin: 0;
  }

  span {
    color: ${colorAdditional};
    font-size: 13px;
  }
`;

// endregion
