import { useState, useEffect } from "react";
import { ListGroup, Pagination } from "react-bootstrap";

function People() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("https://www.swapi.tech/api/people/");

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch(url);

      const data = await resp.json();

      setData(data);
    }

    fetchData();

    return () => {};
  }, [url]);

  const { results: people, next, prev } = data;
  return (
    <div>
      <h1>SWAPI</h1>

      <ListGroup>
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
      </ListGroup>

      <Pagination size="sm">
        <Pagination.Prev onClick={() => prev && setUrl(prev)} />
        <Pagination.Next onClick={() => setUrl(next)} />
      </Pagination>
    </div>
  );
}

export default People;
