package com.devlens.api.ast;

import com.github.javaparser.StaticJavaParser;
import com.github.javaparser.ast.CompilationUnit;
import com.github.javaparser.ast.body.ClassOrInterfaceDeclaration;
import com.github.javaparser.ast.body.FieldDeclaration;
import com.github.javaparser.ast.body.MethodDeclaration;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.nio.file.Path;

@Slf4j
@Service
public class JavaAstParser implements AstParser {

    @Override
    public boolean supports(Path filePath) {
        return filePath != null && filePath.toString().endsWith(".java");
    }

    @Override
    public AstContext parse(Path filePath) {
        AstContext context = new AstContext();
        context.setFilePath(filePath);

        if (!supports(filePath)) {
            context.setSuccessful(false);
            context.setErrorMessage("Unsupported file type");
            return context;
        }

        try {
            CompilationUnit cu = StaticJavaParser.parse(filePath);
            
            // Extract Package
            cu.getPackageDeclaration().ifPresent(pd -> 
                context.addNode(AstNode.builder()
                        .type(AstNodeType.PACKAGE)
                        .name(pd.getNameAsString())
                        .startLine(pd.getBegin().map(p -> p.line).orElse(-1))
                        .endLine(pd.getEnd().map(p -> p.line).orElse(-1))
                        .build())
            );

            // Extract Imports
            cu.getImports().forEach(id -> 
                context.addNode(AstNode.builder()
                        .type(AstNodeType.IMPORT)
                        .name(id.getNameAsString())
                        .startLine(id.getBegin().map(p -> p.line).orElse(-1))
                        .endLine(id.getEnd().map(p -> p.line).orElse(-1))
                        .build())
            );

            // Extract Classes and Interfaces
            cu.findAll(ClassOrInterfaceDeclaration.class).forEach(cid -> {
                AstNodeType type = cid.isInterface() ? AstNodeType.INTERFACE : AstNodeType.CLASS;
                context.addNode(AstNode.builder()
                        .type(type)
                        .name(cid.getNameAsString())
                        .startLine(cid.getBegin().map(p -> p.line).orElse(-1))
                        .endLine(cid.getEnd().map(p -> p.line).orElse(-1))
                        .build());
            });

            // Extract Methods
            cu.findAll(MethodDeclaration.class).forEach(md -> 
                context.addNode(AstNode.builder()
                        .type(AstNodeType.METHOD)
                        .name(md.getNameAsString())
                        .details(md.getDeclarationAsString(false, false, false))
                        .startLine(md.getBegin().map(p -> p.line).orElse(-1))
                        .endLine(md.getEnd().map(p -> p.line).orElse(-1))
                        .build())
            );

            // Extract Fields
            cu.findAll(FieldDeclaration.class).forEach(fd -> 
                fd.getVariables().forEach(vd -> 
                    context.addNode(AstNode.builder()
                            .type(AstNodeType.FIELD)
                            .name(vd.getNameAsString())
                            .startLine(fd.getBegin().map(p -> p.line).orElse(-1))
                            .endLine(fd.getEnd().map(p -> p.line).orElse(-1))
                            .build())
                )
            );

            context.setSuccessful(true);
        } catch (Exception e) {
            log.warn("Failed to parse Java file: {}", filePath, e);
            context.setSuccessful(false);
            context.setErrorMessage(e.getMessage());
        }

        return context;
    }
}
