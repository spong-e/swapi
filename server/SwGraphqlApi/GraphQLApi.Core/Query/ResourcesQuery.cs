using GraphQLApi.Core.Models;
using GraphQLApi.Core.Services;

namespace GraphQLApi.Core.Query;

[ExtendObjectType(OperationTypeNames.Query)]
public class ResourcesQuery
{

    private ISwapiClient _swapiClient;

    public ResourcesQuery(ISwapiClient swapiClient)
    {
        _swapiClient = swapiClient ?? throw new ArgumentNullException(nameof(swapiClient));
    }

    public async Task<Resources?> GetRoot()
    {
        {
            var root = await _swapiClient.GetResources();
            return root ?? null;
        }
    }
}