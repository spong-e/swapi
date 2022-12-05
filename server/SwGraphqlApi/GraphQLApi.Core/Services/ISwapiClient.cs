using GraphQLApi.Core.Models;

namespace GraphQLApi.Core.Services;

public interface ISwapiClient
{
    Task<Resources?> GetResources();

    Task<List<People>?> GetPeople(int page);
}