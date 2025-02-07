// taking a look at the documentation
// I want you to add a container
// add a row and column
// add an h1 that says using react bootstrap.

// if you go take a look at https://react-bootstrap.netlify.app/docs/layout/grid/#container
// documentation you will how to use this react container.
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


// our own custom import
import UILibraryList from '@/components/UILibraryLIst';

export default function Home() {
  return (
    <div>
      <main>
        <Container>
          <h1>Learning about React Bootstrap</h1>
          <p>Here we learned how to add the bootstrap and css to the <code>_app.js</code> in pages</p>
          <Row>
            <Col>
              <h2>A List of component librares</h2>
              {/* use our own components */}
              <UILibraryList />
            </Col>
            <Col>
              <h2>Some more functionality</h2>
              {/* add a button here an accordion */}
              <Button variant="danger">
                Don't click this button
              </Button>
              {/* You could porobably make this
              it's own component. */}
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    React bootstrap is really neat
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>
                    A second item.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
