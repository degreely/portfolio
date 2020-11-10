import React from 'react';
import { Section, Container } from '@components/global';
import { TabsManager, Tabs, TabPanels, TabPanel } from '@react-md/tabs';
import { Text } from '@react-md/typography';
import '../../styles/style.css';

import degOne from '../../images/design/keychanges/1/KC1.png';
import degTwo from '../../images/design/keychanges/1/KC2.png';
import degThree from '../../images/design/keychanges/1/KC3.png';

const tabs = ['Degree Requirements List', 'Redesign Buttons', 'Navigation Flow', 'Module Preview', 'Essential Tooltips'];

class KeyChanges extends React.Component {
  render() {
    return (
      <Section id="key-changes">
        <Container>
          <div>
            <h2>Key Changes</h2>
            <p>
              These were some of the major design changes we made for our design
              aspect that were unsuccessful.
            </p>
            <p>
              <i>
                Note: v1, v2, v3 refers to Prototype Iterations 1, 2 and 3
                (final) respectively.
              </i>
            </p>
            <TabsManager tabs={tabs} tabsId="basic-usage-tabs">
              <Tabs />
              <TabPanels>
                <TabPanel>
                  <h3>
                    Degree/Graduation Requirements List - Indication for
                    unallocated/allocated modules
                  </h3>
                  <p>
                    The initial interface design under the Degree Requirements
                    list (which shows important modules that are needed to be
                    taken before graduation) was that the “red” dropdown arrows
                    and “green” dropdown arrows should indicate to the user
                    which levels of degree requirements that have not been
                    completely fulfilled. They were meant to prompt users to
                    expand the list to see which modules were not allocated.
                  </p>
                  <img src={degOne} width="200rem" />
                  <p>
                    However, our users raised concerns that the red and green
                    colours were <b>not intuitive enough</b> and seemed almost
                    like a pattern (of alternating between red and green), which
                    they did not associate as indicators of fulfilled or
                    unfulfilled requirements. To minimise this error we decided
                    to change this aspect of the prototype into red or default
                    colour schemes in v2.
                  </p>
                  <img src={degTwo} width="200rem" />
                  <p>
                    The second round of usability testing revealed that users still did not find this essential design aspect of the website obvious and and intuitive enough. Hence, to <b>increase the visibility and comprehension</b> of this design aspect, we decided to include <b>badges</b> as indicators of urgency as well as a short <b>tooltip</b> to explain the color coding.
                  </p>
                  <img src={degThree} width="200rem" />
                </TabPanel>
                <TabPanel>
                  <h3>
                    Redesigning Buttons and Page Sections for Increased
                    Understanding
                  </h3>
                  <p>
                    “Edit” buttons on the Dashboard (V1, V2) and on the Degree
                    Settings Page (V1, V2) were initially visually identical
                    buttons placed in identical placement on the page for
                    consistency. These buttons, however, are functionally
                    different - on the Dashboard, the “Edit” button enables the
                    edit mode for users to add or remove modules from the
                    semesters; whereas on the Degree Settings Page, the “Edit”
                    button allows users to add to or remove from their
                    specialisations, majors and minors.
                  </p>
                  <p>
                    Through the second user evaluation, participants confused
                    the two buttons due to their identical naming and placement
                    on the page. Thus, we changed these “Edit” buttons.
                  </p>
                  <p>
                    By changing the labels, appearances, and positions of the
                    “Edit” buttons, as well as adding a page title to the Degree
                    Settings Page, helped to better distinguish the pages and
                    the functions of the buttons. The icon used for the
                    “Dashboard” button on the Degree Settings page was also
                    changed from a back arrow to a home icon to represent the
                    Dashboard better.
                  </p>
                  <p>
                    Through our internal evaluation, the Degree Settings Page
                    was further modified to reduce clutter on the top section of
                    the page, as well as to take into account its “Edit” mode.
                  </p>
                </TabPanel>
                <TabPanel>
                  <Text type="headline-4">Panel 3</Text>
                </TabPanel>
                <TabPanel>
                  <Text type="headline-4">Panel 4</Text>
                </TabPanel>
                <TabPanel>
                  <Text type="headline-4">Panel 5</Text>
                </TabPanel>
              </TabPanels>
            </TabsManager>
          </div>
        </Container>
      </Section>
    );
  }
}

export default KeyChanges;
