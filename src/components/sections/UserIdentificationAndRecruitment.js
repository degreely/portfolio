import React from 'react';

import { Section, Container } from '@components/global';

import '../../styles/style.css';

class UserIdentificationAndRecruitment extends React.Component {
  render() {
    return (
      <Section id="user-identification-and-recruitment">
        <Container>
          <div style={{ marginTop: '3rem' }}>
            <h2>User Identification And Recruitment</h2>
            <p>
              Our target users are NUS students who are expected to plan their
              modules and track their degree progress to ensure graduation, i.e.
              students without fixed degree curriculums. We conducted the study
              through convenience sampling by approaching our friends and
              classmates across various faculties and levels.
            </p>
            <p>
              In light of the ongoing pandemic, the entire study was conducted
              remotely over Zoom and Google Forms. A total of 9 students
              participated in the remote observation and interview, while 52
              others completed our survey.
            </p>
          </div>
        </Container>
      </Section>
    );
  }
}

export default UserIdentificationAndRecruitment;
