/* Verified public destinations from the completed Tableau audit. No institutional data is stored here. */
export const reports=[
  {
    "id": "global-footprint",
    "title": "Global Footprint",
    "branch": null,
    "description": "An overview of international activity, with country-level exploration.",
    "note": "The overview combines different units and reporting periods. Read each metric’s period and country tooltip; the detailed reports may use different windows.",
    "url": "https://analytics.uky.edu/t/iraa/views/GFHomepage/GFFrontPage",
    "embedUrl": "https://tableauprd.uky.edu/t/iraa/views/GFHomepage/GFFrontPage",
    "verified": "2026-10-10",
    "mode": "live"
  },
  {
    "id": "education-abroad",
    "title": "Education Abroad",
    "branch": "global-mobility",
    "description": "Credit-bearing education abroad participation, destinations and program comparisons.",
    "note": "Counts and participation rates are different measures. Check year and college selections. The published phone layout omits several desktop controls; demographic denominators and historical tooltip labels require source-owner clarification.",
    "url": "https://tableauprd.uky.edu/t/iraa/views/GLOBALMOBILITY/EAData",
    "embedUrl": "https://tableauprd.uky.edu/t/iraa/views/GLOBALMOBILITY/EAData",
    "verified": "2026-10-10",
    "mode": "live"
  },
  {
    "id": "international-alumni",
    "title": "International Alumni",
    "branch": "global-mobility",
    "description": "UK degree earners with UK-sponsored F or J visas; visiting students and students sponsored by others are excluded.",
    "note": "Use Academic Year and College to compare degree completions. Country refers to origin, not current residence; the historical series may remain visible when a selected year changes.",
    "url": "https://tableauprd.uky.edu/t/iraa/views/GLOBALMOBILITY/Alumni",
    "embedUrl": "https://tableauprd.uky.edu/t/iraa/views/GLOBALMOBILITY/Alumni",
    "verified": "2026-10-10",
    "mode": "live"
  },
  {
    "id": "international-faculty-and-staff",
    "title": "International Faculty and Staff",
    "branch": "global-mobility",
    "description": "Visa-related reporting for faculty, staff and visiting scholars.",
    "note": "Check the fiscal year. The official webpage describes new visas while the workbook describes current personnel; the population needs institutional clarification.",
    "url": "https://tableauprd.uky.edu/t/iraa/views/GLOBALMOBILITY/J1andH1BData",
    "embedUrl": "https://tableauprd.uky.edu/t/iraa/views/GLOBALMOBILITY/J1andH1BData",
    "verified": "2026-10-10",
    "mode": "live"
  },
  {
    "id": "international-student-enrollment",
    "title": "International Student Enrollment",
    "branch": "global-mobility",
    "description": "International enrollment composition and term trends using the workbook’s CPE population.",
    "note": "Small values are masked in the source report and are not exact counts. Read the workbook’s population note and Academic Term selection. Access-required detail remains outside this demonstration.",
    "url": "https://tableauprd.uky.edu/t/iraa/views/GLOBALMOBILITY/InternationalStudentEnrollment",
    "embedUrl": "https://tableauprd.uky.edu/t/iraa/views/GLOBALMOBILITY/InternationalStudentEnrollment",
    "verified": "2026-10-10",
    "mode": "live"
  },
  {
    "id": "international-travel",
    "title": "International Travel",
    "branch": "global-mobility",
    "description": "International travel registered through International Health, Safety, and Security.",
    "note": "Trips, country visits, city visits and days are different units. Personnel filters can change map and bars while the institutional trip total remains unchanged.",
    "url": "https://tableauprd.uky.edu/t/iraa/views/GLOBALMOBILITY/IHSS",
    "embedUrl": "https://tableauprd.uky.edu/t/iraa/views/GLOBALMOBILITY/IHSS",
    "verified": "2026-10-10",
    "mode": "live"
  },
  {
    "id": "active-partnerships",
    "title": "Active Partnerships",
    "branch": "global-engagement",
    "description": "Find international partners and active agreements by geography, agreement type and university unit.",
    "note": "The institutional headline can remain global while selections narrow agreements and the table. An explicit snapshot date was not visible in the audit.",
    "url": "https://tableauprd.uky.edu/t/iraa/views/GlobalEngagement/ActivePartnerships",
    "embedUrl": "https://tableauprd.uky.edu/t/iraa/views/GlobalEngagement/ActivePartnerships",
    "verified": "2026-10-10",
    "mode": "live"
  },
  {
    "id": "global-rankings",
    "title": "Global Rankings",
    "branch": "global-engagement",
    "description": "Explore institutional and program rankings within named ranking systems.",
    "note": "Compare ranks within the same provider and reporting period. Dense labels may require a tooltip or the original full report.",
    "url": "https://tableauprd.uky.edu/t/iraa/views/GlobalEngagement/GlobalRankings",
    "embedUrl": "https://tableauprd.uky.edu/t/iraa/views/GlobalEngagement/GlobalRankings",
    "verified": "2026-10-10",
    "mode": "live"
  },
  {
    "id": "technology-commercialization",
    "title": "Technology Commercialization",
    "branch": "global-engagement",
    "description": "Explore active technology-commercialization agreements by location and agreement type.",
    "note": "This is an agreement inventory; it does not measure commercialization revenue or impact. Use the original report’s type labels and tooltips.",
    "url": "https://tableauprd.uky.edu/t/iraa/views/GlobalEngagement/OTC",
    "embedUrl": "https://tableauprd.uky.edu/t/iraa/views/GlobalEngagement/OTC",
    "verified": "2026-10-10",
    "mode": "live"
  },
  {
    "id": "uk-fulbright",
    "title": "UK Fulbright Awardees",
    "branch": "global-engagement",
    "description": "Historical outbound Fulbright awards for research, teaching and study abroad.",
    "note": "Award selections can change map and bars while cumulative narrative stays fixed. Webpage and workbook totals differ; their coverage and dates require institutional reconciliation.",
    "url": "https://tableauprd.uky.edu/t/iraa/views/GlobalEngagement/UKYFulbrightAwardees",
    "embedUrl": "https://tableauprd.uky.edu/t/iraa/views/GlobalEngagement/UKYFulbrightAwardees",
    "verified": "2026-10-10",
    "mode": "live"
  },
  {
    "id": "visiting-fulbright",
    "title": "Visiting Fulbright Awardees",
    "branch": "global-engagement",
    "description": "Historical reporting on international Fulbright awardees hosted at UK.",
    "note": "Check award type and year coverage. Fixed cumulative narrative is not necessarily a selected total; webpage and workbook snapshots require reconciliation.",
    "url": "https://tableauprd.uky.edu/t/iraa/views/GlobalEngagement/VisitingFulbrightAwardees",
    "embedUrl": "https://tableauprd.uky.edu/t/iraa/views/GlobalEngagement/VisitingFulbrightAwardees",
    "verified": "2026-10-10",
    "mode": "live"
  },
  {
    "id": "international-scholarships",
    "title": "International Scholarships",
    "branch": "global-engagement",
    "description": "Historical scholarship award-recipient reporting.",
    "note": "This report is not an application finder. Award selections can affect the map while college bars retain multiple award types.",
    "url": "https://tableauprd.uky.edu/t/iraa/views/GlobalEngagement/InternationalScholarships",
    "embedUrl": "https://tableauprd.uky.edu/t/iraa/views/GlobalEngagement/InternationalScholarships",
    "verified": "2026-10-10",
    "mode": "live"
  },
  {
    "id": "coauthorship",
    "title": "International Coauthorship Bibliometrics",
    "branch": "global-research",
    "description": "Explore international research collaboration using SciVal/Elsevier-indexed publications.",
    "note": "Publication counts and field-weighted citation impact are different measures. Country selections may narrow institution detail while global headline metrics stay fixed. Read this report’s own period.",
    "url": "https://tableauprd.uky.edu/t/iraa/views/GlobalResearch/Co-AuthoredPublications",
    "embedUrl": "https://tableauprd.uky.edu/t/iraa/views/GlobalResearch/Co-AuthoredPublications",
    "verified": "2026-10-10",
    "mode": "live"
  },
  {
    "id": "research-expertise",
    "title": "UK Faculty and Staff Research and Expertise",
    "branch": "global-research",
    "description": "Discover survey-reported research, instruction, broader experience and language expertise.",
    "note": "Voluntary survey responses are not a census of all UK expertise. Use the four published views; the phone layout omits some desktop context and filtering.",
    "url": "https://tableauprd.uky.edu/t/iraa/views/GlobalResearch/Research",
    "embedUrl": "https://tableauprd.uky.edu/t/iraa/views/GlobalResearch/Research",
    "verified": "2026-10-10",
    "mode": "live"
  },
  {
    "id": "ukic-awards",
    "title": "UKIC Awards",
    "branch": "global-research",
    "description": "Look up UK International Center award and project records.",
    "note": "Use Award Selection to change award family. The published portrait layout can omit recipient and college columns; landscape or the original report may offer more detail.",
    "url": "https://tableauprd.uky.edu/t/iraa/views/GlobalResearch/UKICAwards",
    "embedUrl": "https://tableauprd.uky.edu/t/iraa/views/GlobalResearch/UKICAwards",
    "verified": "2026-10-10",
    "mode": "live"
  }
];
export const branches=[
  {
    "id": "global-mobility",
    "title": "Global Mobility",
    "description": "Student and scholar mobility and activities across the globe and here at UK."
  },
  {
    "id": "global-engagement",
    "title": "Global Engagement",
    "description": "Partnerships, Fulbright, scholarships and rankings data."
  },
  {
    "id": "global-research",
    "title": "Global Research",
    "description": "International research, publications and awards."
  }
];
