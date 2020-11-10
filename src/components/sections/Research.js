import React from 'react';
import styled from 'styled-components';

import { Section, Container } from '@components/global';

class Research extends React.Component {
  render() {
    return (
      <Section id="research">
        <Container>
          <div style={{ marginTop: '3rem' }}>
            <h2>Research</h2>
            <p>Research stuff here.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              iaculis sodales eros, vitae euismod enim pharetra eu. Donec
              blandit elementum ultricies. Proin iaculis erat ac mollis
              tristique. Aliquam eu lobortis massa, nec efficitur lacus.
              Pellentesque tincidunt ipsum quis mollis venenatis. Aenean tempor
              urna quis aliquam porttitor. Nullam consectetur pretium lacus et
              ornare.
            </p>
            <p>
              Phasellus vel purus ornare, volutpat eros ut, sollicitudin nisi.
              Maecenas aliquet purus ac mollis gravida. Donec rutrum malesuada
              quam, non sollicitudin magna placerat eu. Aenean a turpis gravida
              leo facilisis ullamcorper. Aenean malesuada id libero et pharetra.
              Maecenas dictum consequat eros, faucibus pulvinar leo pulvinar
              non. Donec suscipit tristique turpis nec posuere. Aliquam odio
              quam, scelerisque id viverra quis, sagittis quis augue. In hac
              habitasse platea dictumst. Nulla non bibendum leo. Nullam pharetra
              mauris libero, luctus imperdiet enim posuere sed. Phasellus augue
              libero, fermentum id ultricies at, pretium eu ante.
            </p>
          </div>
        </Container>
      </Section>
    );
  }
}

export default Research;
