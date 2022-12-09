using GraphQLApi.Core.Models;

namespace GraphQLApi.Core.Resolvers
{
    public interface IPeopleResolver
    {
        Task<List<Film>> FilmsByPerson(string personUid);
    }
}