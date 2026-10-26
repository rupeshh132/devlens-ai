package com.devlens.api.dto.payment;

import lombok.Data;
import java.util.UUID;

@Data
public class CreateOrderRequestDto {
    private UUID courseId;
}
