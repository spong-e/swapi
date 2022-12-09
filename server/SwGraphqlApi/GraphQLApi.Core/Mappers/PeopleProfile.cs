using AutoMapper;
using GraphQLApi.Core.Models;
using GraphQLApi.Core.Models.Dto;

namespace GraphQLApi.Core.Mappers;

public class PeopleProfile : Profile
{

        public PeopleProfile()
        {
            CreateMap<PeopleRoot, People>()
                .ForMember(dest => dest.TotalRecords, opt => opt.MapFrom(src => src.total_records))
                .ForMember(dest => dest.TotalPages, opt => opt.MapFrom(src => src.total_pages))
                .ForMember(dest => dest.Results, opt => opt.MapFrom(src => src.results));


            CreateMap<PeopleResult, Person>();


            CreateMap<PersonRoot, Person>()
                .ForMember(dest => dest.Uid, opt => opt.MapFrom(src => src.Result.Uid))
                .ForMember(dest => dest.Homeworld, opt => opt.MapFrom(src => src.Result.Properties.Homeworld))
                .ForMember(dest => dest.Gender, opt => opt.MapFrom(src => src.Result.Properties.Gender))
                .ForMember(dest => dest.Height, opt => opt.MapFrom(src => src.Result.Properties.Height))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Result.Properties.Name))
                .ForMember(dest => dest.Mass, opt => opt.MapFrom(src => src.Result.Properties.Mass))
                .ForMember(dest => dest.SkinColor, opt => opt.MapFrom(src => src.Result.Properties.Skin_Color))
                .ForMember(dest => dest.BirthYear, opt => opt.MapFrom(src => src.Result.Properties.Birth_Year))
                .ForMember(dest => dest.HairColor, opt => opt.MapFrom(src => src.Result.Properties.Hair_Color))
                .ForMember(dest => dest.EyeColor, opt => opt.MapFrom(src => src.Result.Properties.Eye_Color));
                // .ForMember(dest => dest.Created, opt => opt.MapFrom(src => src.Result.Properties.Created))
                // .ForMember(dest => dest.Edited, opt => opt.MapFrom(src => src.Result.Properties.Edited));
                

        }
}