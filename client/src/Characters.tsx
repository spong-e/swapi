import {
  useState,
  useEffect,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import { ListGroup, Pagination } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { graphql } from "./gql/gql";

const getPeopleDocument = graphql(/* GraphQL */ `
  query getPeopleQuery($page: Int!) {
    people(page: $page) {
      message
      totalRecords
      totalPages
      results {
        name
        uid
      }
    }
  }
`);

function Characters() {
  const [page, setPage] = useState<number>(1);
  const { loading, error, data } = useQuery(getPeopleDocument, {
    variables: { page: page },
  });

  if (loading || !data)
    return (
      <div>
        <h1>SWAPI</h1>
        <p>loading</p>
      </div>
    );

  const { people } = data;

  if (!people || !people.results)
    return (
      <div>
        <h1>SWAPI</h1>
        <p>None found</p>
      </div>
    );

  console.log(people);
  const { results, totalPages } = people;
  return (
    <div>
      <h1>SWAPI</h1>

      <ListGroup>
        {results &&
          results.map((person) => {
            return (
              <ListGroup.Item
                action
                href={`/character/${person.uid}`}
                key={person.uid}
              >
                {person.name}
              </ListGroup.Item>
            );
          })}
      </ListGroup>

      <Pagination size="sm">
        <Pagination.Prev onClick={() => setPage(page - 1)} />
        {page < totalPages && (
          <Pagination.Next onClick={() => setPage(page + 1)} />
        )}
      </Pagination>
    </div>
  );
}

export default Characters;
