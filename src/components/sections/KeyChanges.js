import React from 'react';
import { Section, Container } from '@components/global';
import { TabsManager, Tabs, TabPanels, TabPanel } from '@react-md/tabs';

import '../../styles/style.css';

import degOne from '../../images/design/keychanges/1/KC1.png';
import degTwo from '../../images/design/keychanges/1/KC2.png';
import degThree from '../../images/design/keychanges/1/KC3.png';

import redOne from '../../images/design/keychanges/2/KC4.png';
import redTwo from '../../images/design/keychanges/2/KC5.png';
import redThree from '../../images/design/keychanges/2/KC6.png';
import redFour from '../../images/design/keychanges/2/KC7.png';
import redFive from '../../images/design/keychanges/2/KC8.png';
import redSix from '../../images/design/keychanges/2/KC9.png';

import navOne from '../../images/design/keychanges/3/KC10.png';
import navTwo from '../../images/design/keychanges/3/KC11.png';
import navThree from '../../images/design/keychanges/3/KC12.png';

import modOne from '../../images/design/keychanges/4/KC13.png';
import modTwo from '../../images/design/keychanges/4/KC14.png';

import essOne from '../../images/design/keychanges/5/KC15.png';

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
                    The second round of usability testing revealed that users
                    still did not find this essential design aspect of the
                    website obvious and and intuitive enough. Hence, to{' '}
                    <b>increase the visibility and comprehension</b> of this
                    design aspect, we decided to include <b>badges</b> as
                    indicators of urgency as well as a short <b>tooltip</b> to
                    explain the color coding.
                  </p>
                  <img src={degThree} width="200rem" />
                </TabPanel>
                <TabPanel>
                  <h3>
                    Redesigning Buttons and Page Sections for Increased
                    Understanding
                  </h3>
                  <p>
                    “Edit” buttons on the Dashboard (v1, v2) and on the Degree
                    Settings Page (v1, v2) were initially visually identical
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
                  <img src={redOne} width="500rem" />
                  <img src={redTwo} width="500rem" />

                  <p>
                    By changing the labels, appearances, and positions of the
                    “Edit” buttons, as well as adding a page title to the Degree
                    Settings Page, helped to better distinguish the pages and
                    the functions of the buttons. The icon used for the
                    “Dashboard” button on the Degree Settings page was also
                    changed from a back arrow to a home icon to represent the
                    Dashboard better.
                  </p>
                  <img src={redThree} width="500rem" />
                  <img src={redFour} width="500rem" />

                  <p>
                    Through our internal evaluation, the Degree Settings Page
                    was further modified to reduce clutter on the top section of
                    the page, as well as to take into account its “Edit” mode.
                  </p>
                  <img src={redFive} width="500rem" />
                  <img src={redSix} width="500rem" />
                </TabPanel>
                <TabPanel>
                  <h3>Navigation to the Degree Settings Page</h3>
                  <p>
                    When participants were tasked to change their current degree
                    plan to reflect by adding to or removing from their majors,
                    minors and focus areas, participants from both rounds of
                    usability tests mistakenly clicked into the plan selection
                    dropdown. The intended behaviour was for participants to
                    access the Degree Settings page through the profile dropdown
                    on the right side of the navigation bar, shown below.
                    Participants made it known that our interface lacked
                    visibility and affordance for users to enter the correct
                    page for such settings quickly.
                  </p>
                  <p>
                    Hence, to increase the accessibility of the Degree Settings
                    page and to increase ease of navigation, the link to the
                    page was moved out of the dropdown and into the navigation
                    bar as a linked cogwheel icon.
                  </p>
                  <img src={navOne} width="200rem" />
                  <img src={navTwo} width="200rem" />
                  <p>
                    Following the changes to the navigation bar, the profile
                    dropdown was also reimagined to closely resemble Google’s
                    profile dropdown, which most users should be familiar with.
                  </p>
                  <img src={navThree} width="200rem" />
                </TabPanel>
                <TabPanel>
                  <h3>
                    Redesign of Modules on Module Search Column for Less
                    Cognitive Load and Faster Browsing
                  </h3>
                  <p>
                    Users in our usability tests also indicated that the module
                    information description was undesirable, as it provided less
                    crucial information and also resulted in only two modules
                    being able to be seen at once. Hence, this would translate
                    to a lot of scrolling should users have many search results.
                  </p>
                  <img src={modOne} width="200rem" />
                  <p>
                    We decided to remove the module descriptions to allow more
                    modules to be seen at once and reduce the cognitive load on
                    the Module Search column.
                  </p>
                  <img src={modTwo} width="200rem" />
                </TabPanel>
                <TabPanel>
                  <h3>
                    Adding essential tooltips to add user comprehension of
                    platform features
                  </h3>
                  <p>
                    Due to feedback of the novel nature of providing curated templates for NUS students to start their degree planning from, we included a tooltip to help users understand what is meant by “Choose a Template”.
                  </p>
                  <img src={essOne} width="400rem" />
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
