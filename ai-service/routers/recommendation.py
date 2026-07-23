from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, Field
from typing import List, Optional
import math
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

router = APIRouter(prefix="/api/v1/ai/recommend", tags=["Smart ML Recommendation"])

class TutorCandidate(BaseModel):
    id: str
    name: str
    subject: str
    bio: str
    subjects: List[str] = []
    hourly_rate: float
    rating: float
    reviews: str | int = "50 reviews"
    is_online: bool = True
    is_verified: bool = True
    institution: Optional[str] = "Academic Institution"
    experience: Optional[str] = "5+ yrs exp"

class StudentRequirement(BaseModel):
    student_id: Optional[str] = "guest_student"
    query: Optional[str] = ""
    subject: Optional[str] = "All"
    preferred_language: Optional[str] = "English"
    max_budget: Optional[float] = 100.0
    min_rating: Optional[float] = 0.0
    learning_style: Optional[str] = "Interactive & Problem Solving"
    candidates: Optional[List[TutorCandidate]] = None

class ScoredTutorMatch(BaseModel):
    tutor_id: str
    name: str
    match_score: int
    subject: str
    hourly_rate: float
    rating: float
    is_verified: bool
    is_online: bool
    matching_reasons: List[str]

class RecommendationResponse(BaseModel):
    success: bool
    total_matches: int
    recommendations: List[ScoredTutorMatch]
    algorithm: str = "TF-IDF Vector Cosine + MAUT Multi-Attribute Utility Scoring"

def extract_review_count(reviews: str | int) -> int:
    if isinstance(reviews, int):
        return reviews
    import re
    numbers = re.findall(r'\d+', str(reviews))
    return int(numbers[0]) if numbers else 40

def compute_ml_tutor_scores(
    candidates: List[TutorCandidate],
    req: StudentRequirement
) -> List[ScoredTutorMatch]:
    if not candidates:
        return []

    # Prepare corpus for TF-IDF Vectorization
    tutor_corpora = []
    for t in candidates:
        text = f"{t.name} {t.subject} {' '.join(t.subjects)} {t.bio} {t.institution} {t.experience}"
        tutor_corpora.append(text.lower())

    student_text = f"{req.query or ''} {req.subject if req.subject != 'All' else ''} {req.learning_style or ''}".lower().strip()
    if not student_text:
        student_text = "computer science mathematics physics algorithms web development linear algebra quantum tutoring"

    # 1. TF-IDF Cosine Similarity Matrix
    vectorizer = TfidfVectorizer(ngram_range=(1, 2), stop_words="english")
    try:
        all_texts = tutor_corpora + [student_text]
        tfidf_matrix = vectorizer.fit_transform(all_texts)
        tutor_vectors = tfidf_matrix[:-1]
        student_vector = tfidf_matrix[-1:]
        cosine_sims = cosine_similarity(student_vector, tutor_vectors).flatten()
    except Exception:
        # Fallback if corpus vocabulary is empty
        cosine_sims = np.array([0.5] * len(candidates))

    results: List[ScoredTutorMatch] = []

    for idx, tutor in enumerate(candidates):
        text_sim = float(cosine_sims[idx]) if idx < len(cosine_sims) else 0.5
        
        # 2. Bayesian Rating Confidence Score (0.0 to 1.0)
        review_cnt = extract_review_count(tutor.reviews)
        rating_score = (tutor.rating / 5.0) * min(1.0, math.log2(review_cnt + 1) / 6.0)

        # 3. Budget Affinity Score (0.0 to 1.0)
        budget = req.max_budget or 100.0
        if tutor.hourly_rate <= budget:
            budget_score = 1.0
        else:
            over = tutor.hourly_rate - budget
            budget_score = max(0.0, 1.0 - (over / (budget * 0.5)))

        # 4. Trust & Online Signals (0.0 to 1.0)
        trust_score = (0.6 if tutor.is_verified else 0.2) + (0.4 if tutor.is_online else 0.1)

        # Multi-Attribute Utility Weighting
        w_text = 0.40
        w_rating = 0.25
        w_budget = 0.15
        w_trust = 0.20

        composite = (
            w_text * text_sim +
            w_rating * rating_score +
            w_budget * budget_score +
            w_trust * trust_score
        )

        match_pct = int(min(99, max(50, round(composite * 100))))

        reasons = []
        if text_sim > 0.3 or req.subject in tutor.subjects or req.subject == tutor.subject:
            reasons.append(f"Domain Match: {tutor.subject}")
        if tutor.hourly_rate <= budget:
            reasons.append(f"Fits Budget (${int(tutor.hourly_rate)}/hr)")
        if tutor.is_verified:
            reasons.append("Verified Academic Scholar")
        if tutor.rating >= 4.9:
            reasons.append(f"Top Rated ({tutor.rating}★)")

        results.append(
            ScoredTutorMatch(
                tutor_id=tutor.id,
                name=tutor.name,
                match_score=match_pct,
                subject=tutor.subject,
                hourly_rate=tutor.hourly_rate,
                rating=tutor.rating,
                is_verified=tutor.is_verified,
                is_online=tutor.is_online,
                matching_reasons=reasons[:3]
            )
        )

    # Sort descending by ML match_score
    results.sort(key=lambda x: x.match_score, reverse=True)
    return results

@router.post("/tutors", response_model=RecommendationResponse)
async def recommend_tutors(payload: StudentRequirement):
    """
    ML-driven Tutor Recommendation Engine.
    Uses TF-IDF Vector Cosine Similarity & Multi-Attribute Utility Models (MAUT)
    to match student requirements with candidate tutors.
    """
    try:
        candidates = payload.candidates or [
            TutorCandidate(
                id="tut_101",
                name="Dr. Evelyn Reed",
                subject="Algorithms & Data Structures",
                bio="Specialized in Graph Theory, Dynamic Programming, and High-Performance Algorithm Design.",
                subjects=["Algorithms", "Data Structures", "Python", "C++"],
                hourly_rate=65.0,
                rating=4.98,
                reviews="142 reviews",
                is_online=True,
                is_verified=True,
                institution="Stanford University"
            ),
            TutorCandidate(
                id="tut_102",
                name="Marcus Chen",
                subject="Linear Algebra & AI Foundations",
                bio="Passionate about demystifying Matrix Decompositions, Neural Networks, and PyTorch.",
                subjects=["Linear Algebra", "PyTorch", "Machine Learning", "Python"],
                hourly_rate=55.0,
                rating=4.95,
                reviews="98 reviews",
                is_online=True,
                is_verified=True,
                institution="MIT"
            ),
            TutorCandidate(
                id="tut_103",
                name="Sophia Williams",
                subject="Quantum Mechanics & Physics",
                bio="Theoretical Physicist helping university students master Quantum Computing and Electromagnetism.",
                subjects=["Quantum Physics", "Calculus", "Thermodynamics"],
                hourly_rate=70.0,
                rating=5.0,
                reviews="210 reviews",
                is_online=False,
                is_verified=True,
                institution="Cambridge University"
            ),
        ]

        scored_matches = compute_ml_tutor_scores(candidates, payload)

        return RecommendationResponse(
            success=True,
            total_matches=len(scored_matches),
            recommendations=scored_matches
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Recommendation Engine error: {str(e)}"
        )
