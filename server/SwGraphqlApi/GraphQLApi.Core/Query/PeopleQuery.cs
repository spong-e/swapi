using GraphQLApi.Core.Models;
using GraphQLApi.Core.Services;

namespace GraphQLApi.Core.Query;

[ExtendObjectType(OperationTypeNames.Query)]
public class PeopleQuery
{

    private ISwapiClient _swapiClient;

    public PeopleQuery(ISwapiClient swapiClient)
    {
        _swapiClient = swapiClient ?? throw new ArgumentNullException(nameof(swapiClient));
    }

    public async Task<List<People>?> GetPeople(int page)
    {
        {
            var root = await _swapiClient.GetPeople(page);
            return root ?? null;
        }
    }
}