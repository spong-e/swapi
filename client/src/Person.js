import { useState, useEffect } from "react";
import { ListGroup, Pagination } from "react-bootstrap";
import { useParams } from "react-router-dom";

function Person() {
  let { uid } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch(`https://www.swapi.tech/api/people/${uid}`);

      const data = await resp.json();

      setData(data);
    }

    fetchData();

    return () => {};
  }, []);

  if (!data) return null;
  const { result } = data;

  if (!result) return null;
  const { description, properties } = result;
  return (
    <div>
      <h1>SWAPI</h1>

      {description}

      {properties &&
        Object.entries(properties).map(([key, value]) => {
          // Pretty straightforward - use key for the key and value for the value.
          // Just to clarify: unlike object destructuring, the parameter names don't matter here.
          return (
            <p key={key}>
              {key}: {value}
            </p>
          );
        })}

      {/* <ListGroup>
        {people &&
          people.map((person) => {
            return (
              <ListGroup.Item
                action
                href={`/people/${person.uid}`}
                key={person.uid}
              >
                {person.name}
              </ListGroup.Item>
            );
          })}
      </ListGroup> */}
    </div>
  );
}

export default Person;
