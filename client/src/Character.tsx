import { useState, useEffect } from "react";
import { ListGroup, Pagination } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { graphql } from "./gql/gql";

const getPersonDocument = graphql(/* GraphQL */ `
  query getPersonQuery($id: Int!) {
    person(id: $id) {
      name
      homeworld
      birthYear
      hairColor
      eyeColor
      gender
      height
      mass
      skinColor
      films {
        uid
        title
      }
    }
  }
`);

function Character() {
  let { uid } = useParams();

  const { loading, error, data } = useQuery(getPersonDocument, {
    variables: { id: parseInt(uid ?? "0") },
  });

  if (loading || !data)
    return (
      <div>
        <h1>SWAPI</h1>
        <p>loading</p>
      </div>
    );

  if (!data.person)
    return (
      <div>
        <h1>SWAPI</h1>
        <p>Not found</p>
      </div>
    );

  const { person } = data;

  return (
    <div>
      <h1>SWAPI</h1>

      {person && (
        <>
          <h2>{person.name}</h2>

          <h3>Details</h3>

          <p>Homeworld: {person.homeworld}</p>
          <p>Birth year: {person.birthYear}</p>
          <p>Hair colour: {person.hairColor}</p>
          <p>Eye colour: {person.eyeColor}</p>
          <p>Gender: {person.gender}</p>
          <p>Height: {person.height}</p>
          <p>Mass: {person.mass}</p>
          <p>Skin colour: {person.skinColor}</p>

          {person.films && (
            <p>
              Films:{" "}
              {person.films.map((film) => {
                if (!film) return;

                const { title, uid } = film;

                return (
                  <Nav.Item>
                    <Nav.Link href={`/film/${uid}`}>{title}</Nav.Link>
                  </Nav.Item>
                );
              })}
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default Character;
