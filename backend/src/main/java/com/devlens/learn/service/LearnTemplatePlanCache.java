package com.devlens.learn.service;

import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class LearnTemplatePlanCache {

    private final Map<String, String> cache = new HashMap<>();

    public LearnTemplatePlanCache() {
        initTemplates();
    }

    public String getTemplateForGoal(String examGoal, String dailyHours) {
        if (examGoal == null) examGoal = "Class 9";
        String normalizedGoal = examGoal.toUpperCase();

        if (normalizedGoal.contains("9")) {
            return cache.get("CLASS_9");
        } else if (normalizedGoal.contains("10")) {
            return cache.get("CLASS_10");
        } else if (normalizedGoal.contains("11")) {
            return cache.get("CLASS_11");
        } else if (normalizedGoal.contains("12")) {
            return cache.get("CLASS_12");
        } else if (normalizedGoal.contains("JEE") || normalizedGoal.contains("NEET")) {
            return cache.get("JEE_NEET");
        } else if (normalizedGoal.contains("SSC") || normalizedGoal.contains("UPSC") || normalizedGoal.contains("GOVT") || normalizedGoal.contains("CIVIL")) {
            return cache.get("GOVT_EXAMS");
        }
        return cache.get("CLASS_9"); // default fallback
    }

    private void initTemplates() {
        cache.put("CLASS_9", """
        {
          "plan_title": "Master Syllabus Roadmap for Class 9",
          "estimated_duration": "Complete 3-Month Plan",
          "modules": [
            {
              "module_name": "Phase 1: Mathematics & Science Foundations",
              "duration": "Weeks 1-3",
              "tasks": [
                {"id": "c9_m1_t1", "title": "Number Systems & Real Numbers (Maths Ch 1)", "completed": false},
                {"id": "c9_m1_t2", "title": "Matter in Our Surroundings (Science Ch 1)", "completed": false},
                {"id": "c9_m1_t3", "title": "Polynomials & Algebraic Identities (Maths Ch 2)", "completed": false},
                {"id": "c9_m1_t4", "title": "Is Matter Around Us Pure? (Science Ch 2)", "completed": false}
              ]
            },
            {
              "module_name": "Phase 2: Physics, Chemistry & Geometry",
              "duration": "Weeks 4-6",
              "tasks": [
                {"id": "c9_m2_t1", "title": "Motion, Velocity & Acceleration (Physics Ch 8)", "completed": false},
                {"id": "c9_m2_t2", "title": "Atoms and Molecules (Chemistry Ch 3)", "completed": false},
                {"id": "c9_m2_t3", "title": "Lines, Angles & Triangles (Maths Ch 6 & 7)", "completed": false},
                {"id": "c9_m2_t4", "title": "Forces & Laws of Motion (Physics Ch 9)", "completed": false}
              ]
            },
            {
              "module_name": "Phase 3: Biology, Social Studies & Revision",
              "duration": "Weeks 7-9",
              "tasks": [
                {"id": "c9_m3_t1", "title": "The Fundamental Unit of Life: Cell (Biology Ch 5)", "completed": false},
                {"id": "c9_m3_t2", "title": "Tissues: Plant & Animal Tissues (Biology Ch 6)", "completed": false},
                {"id": "c9_m3_t3", "title": "Surface Areas & Volumes (Maths Ch 13)", "completed": false},
                {"id": "c9_m3_t4", "title": "Full Syllabus Revision & Sample Paper Mock Test 1", "completed": false}
              ]
            }
          ]
        }
        """);

        cache.put("CLASS_10", """
        {
          "plan_title": "Master Syllabus Roadmap for Class 10 Board Exams",
          "estimated_duration": "Complete 3-Month Plan",
          "modules": [
            {
              "module_name": "Phase 1: Board Exam Core Foundations",
              "duration": "Weeks 1-3",
              "tasks": [
                {"id": "c10_m1_t1", "title": "Real Numbers & Polynomials (Maths Ch 1 & 2)", "completed": false},
                {"id": "c10_m1_t2", "title": "Chemical Reactions & Equations (Science Ch 1)", "completed": false},
                {"id": "c10_m1_t3", "title": "Pair of Linear Equations in 2 Variables (Maths Ch 3)", "completed": false},
                {"id": "c10_m1_t4", "title": "Acids, Bases & Salts (Science Ch 2)", "completed": false}
              ]
            },
            {
              "module_name": "Phase 2: Physics Electricity & Trigonometry",
              "duration": "Weeks 4-6",
              "tasks": [
                {"id": "c10_m2_t1", "title": "Introduction to Trigonometry & Applications (Maths Ch 8 & 9)", "completed": false},
                {"id": "c10_m2_t2", "title": "Electricity & Electric Current (Physics Ch 12)", "completed": false},
                {"id": "c10_m2_t3", "title": "Quadratic Equations & Arithmetic Progressions (Maths Ch 4 & 5)", "completed": false},
                {"id": "c10_m2_t4", "title": "Magnetic Effects of Electric Current (Physics Ch 13)", "completed": false}
              ]
            },
            {
              "module_name": "Phase 3: Biology Life Processes & Board Revisions",
              "duration": "Weeks 7-9",
              "tasks": [
                {"id": "c10_m3_t1", "title": "Life Processes: Nutrition & Respiration (Biology Ch 6)", "completed": false},
                {"id": "c10_m3_t2", "title": "Control & Coordination (Biology Ch 7)", "completed": false},
                {"id": "c10_m3_t3", "title": "Circles & Surface Areas (Maths Ch 10 & 13)", "completed": false},
                {"id": "c10_m3_t4", "title": "CBSE Official Sample Paper & Final Board Mock Test", "completed": false}
              ]
            }
          ]
        }
        """);

        cache.put("CLASS_11", """
        {
          "plan_title": "Master Syllabus Roadmap for Class 11",
          "estimated_duration": "Complete 3-Month Plan",
          "modules": [
            {
              "module_name": "Phase 1: Physics Kinematics & Physical Chemistry",
              "duration": "Weeks 1-3",
              "tasks": [
                {"id": "c11_m1_t1", "title": "Units, Measurements & Motion in a Straight Line", "completed": false},
                {"id": "c11_m1_t2", "title": "Some Basic Concepts of Chemistry & Atomic Structure", "completed": false},
                {"id": "c11_m1_t3", "title": "Sets, Relations & Functions (Maths Ch 1 & 2)", "completed": false}
              ]
            },
            {
              "module_name": "Phase 2: Newton's Laws & Organic Chemistry Intro",
              "duration": "Weeks 4-6",
              "tasks": [
                {"id": "c11_m2_t1", "title": "Laws of Motion, Work, Energy & Power", "completed": false},
                {"id": "c11_m2_t2", "title": "Organic Chemistry: Basic Principles & Techniques", "completed": false},
                {"id": "c11_m2_t3", "title": "Trigonometric Functions & Complex Numbers", "completed": false}
              ]
            }
          ]
        }
        """);

        cache.put("CLASS_12", """
        {
          "plan_title": "Master Syllabus Roadmap for Class 12 Boards",
          "estimated_duration": "Complete 3-Month Plan",
          "modules": [
            {
              "module_name": "Phase 1: Electrostatics & Calculus Basics",
              "duration": "Weeks 1-3",
              "tasks": [
                {"id": "c12_m1_t1", "title": "Electric Charges, Fields & Potential", "completed": false},
                {"id": "c12_m1_t2", "title": "Solutions & Electrochemistry (Chemistry Ch 1 & 2)", "completed": false},
                {"id": "c12_m1_t3", "title": "Continuity, Differentiability & Derivatives", "completed": false}
              ]
            }
          ]
        }
        """);

        cache.put("JEE_NEET", """
        {
          "plan_title": "Master Syllabus Roadmap for JEE / NEET Competitive Prep",
          "estimated_duration": "Complete High-Intensity Plan",
          "modules": [
            {
              "module_name": "Phase 1: High-Weightage Physics & Physical Chemistry",
              "duration": "Weeks 1-3",
              "tasks": [
                {"id": "jn_m1_t1", "title": "Mechanics: Vectors, Kinematics & NLM Deep-Dive", "completed": false},
                {"id": "jn_m1_t2", "title": "Mole Concept, Thermodynamics & Chemical Equilibrium", "completed": false},
                {"id": "jn_m1_t3", "title": "Calculus, Limits, Integration & Coordinate Geometry", "completed": false}
              ]
            },
            {
              "module_name": "Phase 2: Organic Mechanisms & Electromagnetism",
              "duration": "Weeks 4-6",
              "tasks": [
                {"id": "jn_m2_t1", "title": "Electrostats, Capacitance & Current Electricity", "completed": false},
                {"id": "jn_m2_t2", "title": "GOC, Hydrocarbons & Reaction Mechanisms", "completed": false},
                {"id": "jn_m2_t3", "title": "Previous Years Questions (PYQs) Mock Test Series 1", "completed": false}
              ]
            }
          ]
        }
        """);

        cache.put("GOVT_EXAMS", """
        {
          "plan_title": "Master Syllabus Roadmap for Govt Exams (SSC CGL & UPSC CSE)",
          "estimated_duration": "Complete 3-Month Strategic Plan",
          "modules": [
            {
              "module_name": "Phase 1: Quantitative Aptitude & General Awareness",
              "duration": "Weeks 1-3",
              "tasks": [
                {"id": "gov_m1_t1", "title": "Arithmetic & Number Systems, Percentages & Profit-Loss", "completed": false},
                {"id": "gov_m1_t2", "title": "Indian Polity & Constitution Fundamentals", "completed": false},
                {"id": "gov_m1_t3", "title": "General Intelligence & Logical Reasoning Mastery", "completed": false}
              ]
            },
            {
              "module_name": "Phase 2: Advanced Reasoning, English & Indian Economy",
              "duration": "Weeks 4-6",
              "tasks": [
                {"id": "gov_m2_t1", "title": "English Comprehension, Grammar & Vocabulary", "completed": false},
                {"id": "gov_m2_t2", "title": "Indian History, Geography & Macroeconomics", "completed": false},
                {"id": "gov_m2_t3", "title": "Current Affairs (Past 6 Months) & Full Mock Test 1", "completed": false}
              ]
            }
          ]
        }
        """);
    }
}
