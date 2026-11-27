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
        } else if (normalizedGoal.contains("JEE") && (normalizedGoal.contains("ADV") || normalizedGoal.contains("IIT"))) {
            return cache.get("JEE_ADVANCED");
        } else if (normalizedGoal.contains("JEE")) {
            return cache.get("JEE_MAINS");
        } else if (normalizedGoal.contains("NEET")) {
            return cache.get("NEET_UG");
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

        cache.put("JEE_MAINS", """
        {
          "plan_title": "NTA JEE Mains 2026 Rationalized Syllabus Roadmap (75 Qs / 300 Marks)",
          "estimated_duration": "Complete 16-Week High-Percentile Plan",
          "modules": [
            {
              "module_name": "Phase 1: High-Yield Mechanics, Thermodynamics & Core Maths (NTA Synced)",
              "duration": "Weeks 1-4",
              "tasks": [
                {"id": "jm_m1_t1", "title": "Physics: Units & Experimental Skills, Kinematics, NLM & Work-Energy (No deleted subtopics)", "completed": false},
                {"id": "jm_m1_t2", "title": "Chemistry: Mole Concept, Atomic Structure, Chemical Bonding & Thermodynamics (States/Solid excluded)", "completed": false},
                {"id": "jm_m1_t3", "title": "Maths: Quadratics, Sequence & Series, Sets/Functions & Straight Lines-Circles", "completed": false}
              ]
            },
            {
              "module_name": "Phase 2: Electrodynamics, Equilibrium & Calculus Mastery",
              "duration": "Weeks 5-10",
              "tasks": [
                {"id": "jm_m2_t1", "title": "Physics: Rotational Motion, Electrostatics, Current Electricity & Magnetic Effects", "completed": false},
                {"id": "jm_m2_t2", "title": "Chemistry: Chemical & Ionic Equilibrium, Electrochemistry, Kinetics & GOC-Hydrocarbons", "completed": false},
                {"id": "jm_m2_t3", "title": "Maths: Limits, Continuity, Definite Integrals, Differential Equations & Vectors-3D Lines (No Planes)", "completed": false}
              ]
            },
            {
              "module_name": "Phase 3: Optics, Modern Physics, Named Organic & 75-Q Compulsory CBT Drills",
              "duration": "Weeks 11-16",
              "tasks": [
                {"id": "jm_m3_t1", "title": "Physics: Ray & Wave Optics, Dual Nature, Atoms-Nuclei & Semiconductors (+4/-1 Sec B Numericals)", "completed": false},
                {"id": "jm_m3_t2", "title": "Chemistry: Coordination Compounds, d & f Block, Aldehydes-Ketones-Amines & Biomolecules", "completed": false},
                {"id": "jm_m3_t3", "title": "Full-Length 75-Question (20 MCQ + 5 Compulsory Numerical per Subject) Shift-Wise Mock Marathon", "completed": false}
              ]
            }
          ]
        }
        """);

        cache.put("JEE_ADVANCED", """
        {
          "plan_title": "IIT JEE Advanced Dual-Paper Ranker Roadmap (Paper 1 + Paper 2)",
          "estimated_duration": "Complete 18-Week Multi-Concept & IIT Plan",
          "modules": [
            {
              "module_name": "Phase 1: Deep Mechanics, Rotational Dynamics & Core Algebra",
              "duration": "Weeks 1-6",
              "tasks": [
                {"id": "ja_m1_t1", "title": "Physics: Multi-Body Constraints, Rotational Roll+Slip, Angular Momentum & Fluid Statics", "completed": false},
                {"id": "ja_m1_t2", "title": "Chemistry: Real Gases (States of Matter), Solid State Defects & Surface Chem (ADV ONLY)", "completed": false},
                {"id": "ja_m1_t3", "title": "Maths: Complex Numbers Geometry, P&C Combinatorics, Matrices & Determinants", "completed": false}
              ]
            },
            {
              "module_name": "Phase 2: Electromagnetism, Reaction Mechanisms & Advanced Calculus",
              "duration": "Weeks 7-12",
              "tasks": [
                {"id": "ja_m2_t1", "title": "Physics: Gauss Law Symmetry, RC/RL Transients, EMI & Variable-B Circuits", "completed": false},
                {"id": "ja_m2_t2", "title": "Chemistry: Stereo-chemical Reaction Mechanisms, Qualitative Analysis, s-Block, Metallurgy & Polymers (ADV ONLY)", "completed": false},
                {"id": "ja_m2_t3", "title": "Maths: Definite Integral Properties, Differential Equations, Conics & Scalar/Vector Triple Products", "completed": false}
              ]
            },
            {
              "module_name": "Phase 3: Paper 1 + Paper 2 Stamina (SCQ, Partial-Marking MSQ, Decimal Integer & Matrix)",
              "duration": "Weeks 13-18",
              "tasks": [
                {"id": "ja_m3_t1", "title": "Physics: Optics (YDSE Shift, Lens Combinations), Thermal Radiation & Modern Physics Q-Value", "completed": false},
                {"id": "ja_m3_t2", "title": "MSQ Partial Marking (+4/+3/+2/+1/-2) Trap Elimination Drills across PCM", "completed": false},
                {"id": "ja_m3_t3", "title": "Full 6-Hour Twin Simulation (Paper 1 Morning + Paper 2 Afternoon) Series", "completed": false}
              ]
            }
          ]
        }
        """);

        cache.put("NEET_UG", """
        {
          "plan_title": "NMC NEET UG 79-Chapter Synced Master Roadmap (180 Compulsory Qs / 720 Marks)",
          "estimated_duration": "Complete 16-Week Medical Ranker Plan",
          "modules": [
            {
              "module_name": "Phase 1: NCERT Biology Foundation (Botany & Zoology) + Core Physics-Chem",
              "duration": "Weeks 1-5",
              "tasks": [
                {"id": "nu_m1_t1", "title": "Botany: Living World, Biological Classification, Plant Kingdom & Cell Cycle (Transport/Mineral deleted)", "completed": false},
                {"id": "nu_m1_t2", "title": "Zoology: Animal Kingdom, Structural Organisation (Cockroach & Frog) & Human Breathing-Circulation", "completed": false},
                {"id": "nu_m1_t3", "title": "Physics & Chem: Kinematics, NLM, Unit 20 Experimental Skills, Mole Concept & Chemical Bonding", "completed": false}
              ]
            },
            {
              "module_name": "Phase 2: High-Weightage Genetics, Biotechnology, Organic & Electrodynamics",
              "duration": "Weeks 6-11",
              "tasks": [
                {"id": "nu_m2_t1", "title": "Botany: Plant Physiology (Photosynthesis, Respiration, PGR), Sexual Reproduction & Updated Plant Families", "completed": false},
                {"id": "nu_m2_t2", "title": "Zoology: Genetics, Molecular Basis (Lac Operon), Human Reproduction, Immunity & Biotechnology", "completed": false},
                {"id": "nu_m2_t3", "title": "Chem & Physics: GOC, Aldehydes-Ketones, Solutions-Electrochemistry, Electrostatics & Current Electricity", "completed": false}
              ]
            },
            {
              "module_name": "Phase 3: NCERT Statement I/II, Assertion-Reason & 180-Min Speed Simulation",
              "duration": "Weeks 12-16",
              "tasks": [
                {"id": "nu_m3_t1", "title": "Physics & Chem Fast Revision: Optics, Modern Physics, Semiconductors & Coordination Compounds", "completed": false},
                {"id": "nu_m3_t2", "title": "NCERT Line-by-Line Diagram & Statement Trap Mastery (Botany 45 + Zoology 45)", "completed": false},
                {"id": "nu_m3_t3", "title": "Full 180-Compulsory-MCQ (720 Marks / 180 Mins, +4/-1) Mock Test Marathon", "completed": false}
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
