using GraphQLApi.Core.Models;
using GraphQLApi.Core.Resolvers;

namespace GraphQLApi.Core.Types
{
    public class PersonType : ObjectType<Person>
    {

        protected override void Configure(IObjectTypeDescriptor<Person> descriptor)
        {
            //TODO: Repeat the below for all connections
            descriptor.Field(d=>d.Films).Type<ListType<FilmType>>().Resolve(async (ctx, ct) =>
            {
                var peopleResolver = ctx.Service<IPeopleResolver>();
                var person = ctx.Parent<Person>();
                return await peopleResolver.FilmsByPerson(person.Uid);
            });
        }
    }

    public class FilmType : ObjectType<Film>
    {

    }
}