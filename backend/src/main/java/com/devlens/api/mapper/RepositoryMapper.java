package com.devlens.api.mapper;

import com.devlens.api.dto.CreateRepositoryRequest;
import com.devlens.api.dto.RepositoryResponse;
import com.devlens.api.entity.Repository;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring", nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
public interface RepositoryMapper {

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "status", ignore = true)
    @Mapping(target = "user", ignore = true)
    @Mapping(target = "isFavorite", ignore = true)
    @Mapping(target = "createdAt", ignore = true)
    @Mapping(target = "updatedAt", ignore = true)
    @Mapping(target = "language", ignore = true)
    @Mapping(target = "description", ignore = true)
    @Mapping(target = "stars", ignore = true)
    Repository toEntity(CreateRepositoryRequest request);

    RepositoryResponse toResponse(Repository repository);
}
