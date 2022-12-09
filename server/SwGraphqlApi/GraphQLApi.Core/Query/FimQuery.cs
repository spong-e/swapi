using GraphQLApi.Core.Models;
using GraphQLApi.Core.Services;

namespace GraphQLApi.Core.Query;

[ExtendObjectType(OperationTypeNames.Query)]
public class FilmQuery
{

    private ISwapiClient _swapiClient;

    public FilmQuery(ISwapiClient swapiClient)
    {
        _swapiClient = swapiClient ?? throw new ArgumentNullException(nameof(swapiClient));
    }

    public async Task<Films?> GetFilms()
    {
        {
            var root = await _swapiClient.GetFilms();
            return root ?? null;
        }
    }
    
    public async Task<Film?> GetFilm(int id)
    {
        {
            var root = await _swapiClient.GetFilm(id);
            return root ?? null;
        }
    }
}