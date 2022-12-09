using GraphQLApi.Core.Models;

namespace GraphQLApi.Core.Services;

public interface ISwapiClient
{


    Task<People?> GetPeople(int page);

    Task<Person?> GetPerson(int id);

    Task<Films?> GetFilms();
    Task<Film?> GetFilm(int id);
}