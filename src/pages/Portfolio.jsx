import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Portfolio() {
  const projects = [
    {
      title: "Ourspace",
      repoLink: "https://github.com/dianamariedischer/ourspace",
      deployedLink: "https://our--space-1c334f1f25f8.herokuapp.com/",
      imageFile: "",
      description: "An apartment search tool for groups to organize their listing searches in one place."
    },
    {
      title: "Luna",
      repoLink: "https://github.com/mathilde-01/luna-sleep-tracker",
      deployedLink: "https://mathilde-01.github.io/luna-sleep-tracker/",
      imageFile: "",
      description: "A sleep tracker and calendar that provides a moon illumination forecast."
    },
  ]
  return (
    <Row xs={1} md={2} className="g-4">
    {projects.map((project, i) => (
     <Col key={i}>
     <Card>
       <Card.Img variant="top" src={project.imageFile} alt={project.title} />
       <Card.Body>
         <Card.Title>{project.title}</Card.Title>
         <Card.Text>
           {project.description}
         </Card.Text>
         <div>
          <Button variant="primary"><a href={project.deployedLink}>Deployed</a></Button>
          <Button variant="primary"><a href={project.repoLink}>Repository</a></Button>
         </div>
       </Card.Body>
     </Card>
   </Col>
    ))}
    </Row>
  );
}
