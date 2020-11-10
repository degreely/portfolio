import React from 'react';
import { Section, Container } from '@components/global';

import { TabsManager, Tabs, TabPanels, TabPanel } from '@react-md/tabs';
import { Text } from '@react-md/typography';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@react-md/table';

import templateSquare from '../../images/design/task/template-square.png';
import templateRectangle from '../../images/design/task/template-rectangle.png';
import selectSquare from '../../images/design/task/select-square.png';
import selectRectangle from '../../images/design/task/select-rectangle.png';
import overlaySquare from '../../images/design/task/overlay-square.png';
import dropdownRectangle from '../../images/design/task/dropdown-rectangle.png';
import toggleGif from '../../images/design/task/toggle.gif';

import '../../styles/style.css';

const tabs = ['Part 1: Usability Testing', 'Part 2: A/B Testing'];

class MethodOfEvaluation extends React.Component {
  render() {
    return (
      <Section id="method-of-evaluation">
        <Container>
          <div style={{ marginTop: '3rem' }}>
            <h2>Method of Evaluation</h2>
            <div id="intro">
              <p>
                Our main method of evaluation was user evaluations. We conducted
                usability tests twice: the first round with 4 classmates taking
                the same module; then the second round with 4 potential users.
              </p>
              <p>
                All of our participants are students from the National
                University of Singapore (NUS) with the following key
                characteristics:
              </p>
              <ul>
                <li>
                  Already are planning, or have the intention to plan, their
                  degree progress
                </li>
                <li>
                  Undergraduates from faculties that require students to plan
                  their own modules (i.e. curriculum and syllabus are not
                  pre-determined by the faculty).
                </li>
              </ul>
              <p>
                The tests required participants to perform a series of critical
                tasks necessary to the success of degree.ly. The nature of these
                tasks will be elaborated on in the later section (Test Tasks).
              </p>
              <p>
                To conduct the user evaluation, we were assigned a participant
                each to facilitate the test for. Tests were conducted remotely
                via the video-conferencing platform, Zoom, and participants were
                required to complete tasks by interacting with our high-fidelity
                prototype on Figma. As facilitators, we had to record our
                observations as participants completed the various tasks we had
                prepared ahead of time. Once the tasks were completed, we asked
                a series of questions for participants to reflect on their
                experience with our prototype, and recorded those responses as
                well.
              </p>
            </div>
            <h3>Test Tasks</h3>
            <TabsManager tabs={tabs} tabsId="basic-usage-tabs">
              <Tabs />
              <TabPanels>
                <TabPanel id="usability-testing">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableCell>Step</TableCell>
                        <TableCell>Task</TableCell>
                        <TableCell>Reasons for including tasks</TableCell>
                      </TableRow>
                    </TableHeader>
                    <TableBody lineWrap="padded" vAlign="middle">
                      <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>
                          Sign in and select a predefined degree template
                        </TableCell>
                        <TableCell>
                          Check that the user flow from signing in to setting up
                          a predefined template that could help expedite the
                          degree planning process is smooth. This is a frequent
                          task as we expect most users to make use of the
                          templates provided.
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>2</TableCell>
                        <TableCell>
                          After choosing a degree template, add a module from
                          dashboard edit mode, try to add the module CS3103
                          Computer Networks Practice to the first semester of
                          your second year.
                        </TableCell>
                        <TableCell>
                          Since degree.ly is a platform for degree planning,
                          adding and removing modules from semesters as part of
                          the planning would be a critical task. This makes
                          performing usability tests for essential. At the same
                          time, we could verify the intuitivity of our design by
                          gauging participants’ understanding that modules can
                          be dragged and dropped.
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>3</TableCell>
                        <TableCell>
                          Find out how to add an unallocated module that is
                          needed for your graduation requirements. Not all the
                          degree requirements interactions may work but the
                          purpose of this step is to test if you are able to
                          find out the unallocated module from the interface and
                          add it to semester.
                        </TableCell>
                        <TableCell>
                          Verify that users are able to identify which
                          graduation requirements are unmet, and find that the
                          information is reflected accurately. This is a
                          critical task as since degree.ly aims to replace the
                          existing what-if reports provided by EduRec that
                          present the same data.
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>4</TableCell>
                        <TableCell>
                          Find out how to modify your degree plan via settings
                          The focus areas/specialisations and add major/minor
                          interactions may not work but the purpose of this step
                          is to test if you are able to navigate to these
                          settings
                        </TableCell>
                        <TableCell>
                          This is a critical task that ties in the usability and
                          reliability of degree.ly as a degree planning platform
                          for students. Users should be able to customize their
                          degree plans to chart the different paths they can
                          take, as well as account for additional requirements
                          arising from choosing to take additional minors,
                          majors or selecting focus area(s).
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>5</TableCell>
                        <TableCell>Sign out of your account.</TableCell>
                        <TableCell>-</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabPanel>
                <TabPanel id="ab-testing">
                  <p>
                    During the test, the facilitator also directed the
                    participant back to the relevant screens from our Figma
                    prototype, before then asking for their opinion on which
                    version of the prototype they preferred.
                  </p>
                  <Text type="headline-5">Modules on Dashboard</Text>
                  <img src={toggleGif} width="500rem" />
                  <Text type="headline-5">Template Layout</Text>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Version A</TableCell>
                        <TableCell>Version B</TableCell>
                      </TableRow>
                    </TableHeader>
                    <TableBody lineWrap="padded" vAlign="middle">
                      <TableRow>
                        <TableCell>Template layout</TableCell>
                        <TableCell>
                          <img src={templateRectangle} width="500rem" />
                          Templates appear as rectangles
                        </TableCell>
                        <TableCell>
                          <img src={templateSquare} width="500rem" />
                          Templates appear as squares
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Template selection</TableCell>
                        <TableCell>
                          <img src={selectRectangle} width="500rem" />
                          <ul>
                            <li>Click on the circle on the left to select</li>
                            <li>
                              Click on the rectangle to view the modules in the
                              template
                            </li>
                          </ul>
                        </TableCell>
                        <TableCell>
                          <img src={selectSquare} width="100rem" />
                          <ul>
                            <li>
                              Click on the circle on the top right to select
                            </li>
                            <li>
                              Click on the whole square to view modules in the
                              template
                            </li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Template module look</TableCell>
                        <TableCell>
                          <img src={dropdownRectangle} width="500rem" />

                          <ul>
                            <li>Template mods are in a dropdown</li>
                            <li>Template mods are rectangles in a grid</li>
                          </ul>
                        </TableCell>
                        <TableCell>
                          <img src={overlaySquare} width="500rem" />

                          <ul>
                            <li>Template mods appear as an overlay/popup</li>
                            <li>Template mods are squares in a row</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TabPanel>
              </TabPanels>
            </TabsManager>
            <h3>Post-test Interview</h3>
            <div id="post-test">
              <p>
                Once the A/B testing was completed, the facilitator asked
                several questions to get participants to reflect on their
                experience with our prototype.
              </p>
              <p>Questions asked:</p>
              <ul>
                <li>What worked for you during each task/screen?</li>
                <li>What did not work for you during each task/screen?</li>
                <li>What did you like most about each task/screen?</li>
                <li>What did you dislike most about each task/screen?</li>
                <li>What would you change for each task process/screen?</li>
                <li>
                  Overall, how would you rate your experiences with degree.ly?{' '}
                  <i>
                    (From 1 being strongly disagree to 5 being strongly agree)
                  </i>
                </li>
                <ul>
                  <li>The website is easy to use</li>
                  <li>
                    The dashboard was helpful for me to see an overview of my
                    degree progress
                  </li>
                  <li>
                    The dashboard was helpful for me to understand what modules
                    I have not taken but need to before graduation
                  </li>
                  <li>
                    I feel confident that I will know how to use the website
                    without problems or questions
                  </li>
                  <li>I feel that the website looks clean and pleasing</li>
                  <li>
                    I feel that I will use this platform in the future in place
                    of my current methods for degree planning
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    );
  }
}

export default MethodOfEvaluation;
