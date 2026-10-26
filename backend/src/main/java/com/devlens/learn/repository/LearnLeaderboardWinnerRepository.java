package com.devlens.learn.repository;

import com.devlens.learn.entity.LearnLeaderboardWinner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface LearnLeaderboardWinnerRepository extends JpaRepository<LearnLeaderboardWinner, UUID> {
    List<LearnLeaderboardWinner> findByMonthAndYearOrderByRankAsc(int month, int year);
    boolean existsByMonthAndYear(int month, int year);
}