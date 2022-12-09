import { useState, useEffect } from "react";
import { ListGroup, Pagination } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { graphql } from "./gql/gql";

const getFilmDocument = graphql(/* GraphQL */ `
  query getFilmQuery($id: Int!) {
    film(id: $id) {
      title
      openingCrawl
    }
  }
`);

function Film() {
  let { uid } = useParams();

  const { loading, error, data } = useQuery(getFilmDocument, {
    variables: { id: parseInt(uid ?? "0") },
  });

  if (loading || !data)
    return (
      <div>
        <h1>SWAPI</h1>
        <p>loading</p>
      </div>
    );

  if (!data.film)
    return (
      <div>
        <h1>SWAPI</h1>
        <p>Not found</p>
      </div>
    );

  const { film } = data;

  return (
    <div className="film-body">
      <h1>SWAPI</h1>

      {film && (
        <>
          <section className="star-wars">
            <div className="crawl">
              <div className="title">
                <p>Episode IV</p>
                <h1>{film.title}</h1>
              </div>

              <p>{film.openingCrawl}</p>
            </div>
          </section>

          {/* {film.characters && (
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
          )} */}
        </>
      )}
    </div>
  );
}

export default Film;
