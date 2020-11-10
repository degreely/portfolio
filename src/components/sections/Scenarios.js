import React from 'react';

import { Section, Container } from '@components/global';

class Scenarios extends React.Component {
  render() {
    return (
      <Section id="scenarios">
        <Container>
          <div style={{ marginTop: '3rem' }}>
            <h2>Scenarios</h2>
            <p>
              The following are some task-oriented decompositions of how our
              target users may currently plan their semesters as well as how
              degree.ly may seek to smoothen the task process for our target
              users. They allow for further discussion on the contexts, needs,
              settings, actors, and actions that need to be accounted for in our
              future solution.
            </p>
            <ol>
              <li>
                <b>Based on someone who doesn’t use degree.ly.</b>
                Yilin stumbles upon an internship opening at Unilever, a
                prestigious firm for Life Science undergraduates. Excellent
                performance during the internship would mean conversion to a
                full-time role. She gets down to work and starts planning how
                she can meet her graduation requirements while leaving a whole
                semester for the internship and still graduating on time. Using
                her degree plan on Microsoft Word, she scrolls back and forth to
                check if she has met her degree requirements while switching
                windows to view the requirements on her browser. While pondering
                whether to take a module for the next semester, she makes a
                quick Google search on the module to get some reviews. Aside
                from the comments section on NUSMods for module reviews, she is
                also able to find numerous others on blogs written by seniors.
                At the end of it all, she is swamped with information and
                nowhere closer to knowing if she can take on that Unilever
                internship after all. With a sigh, she starts applying for it
                anyway. Things will sort themselves out eventually, she thinks
                to herself.
              </li>
              <li>
                <b>Based on someone who uses degree.ly.</b>
                Amit decides on Software Engineering as his focus area and
                starts planning the modules he needs to take. He uses degree.ly
                to choose a Software Engineering focus area template. It is a
                pretty common focus area, so it’s no surprise that alongside the
                faculty-provided one there are also templates prepared by
                seniors. With this, he doesn’t have to visit another site to
                view the requirements and pick them out one by one. By keying in
                an expected grade for each module, Amit is also able to estimate
                the best combination of modules he needs to take to secure his
                ideal CAP. Module planning isn’t that bad after all. He leans
                back in his chair and takes a sip of his coffee, moving on to
                his next task.
              </li>
            </ol>
          </div>
        </Container>
      </Section>
    );
  }
}

export default Scenarios;
