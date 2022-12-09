using GraphQLApi.Core.Models;
using GraphQLApi.Core.Services;

namespace GraphQLApi.Core.Resolvers
{
    public class PeopleResolver : IPeopleResolver
    {
        private ISwapiClient _swapiClient;

        public PeopleResolver(ISwapiClient swapiClient)
        {
            _swapiClient = swapiClient ?? throw new ArgumentNullException(nameof(swapiClient));
        }

        public async Task<List<Film>> FilmsByPerson(string personUid) {
            var films = new List<Film>();

            var allFilms = await _swapiClient.GetFilms();
            if(allFilms==null) return films;

            foreach(var film in allFilms.Results) {
                if(film.Characters.Contains($"https://www.swapi.tech/api/people/{personUid}")) films.Add(film);
            }

            return films;
        }
    }
}