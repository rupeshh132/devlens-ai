package com.devlens.api.mapper;

import com.devlens.api.dto.AnalysisResponse;
import com.devlens.api.entity.AnalysisJob;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface AnalysisMapper {

    @Mapping(source = "repository.id", target = "repositoryId")
    AnalysisResponse toResponse(AnalysisJob analysisJob);
}
