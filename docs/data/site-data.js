// Edit module text, figure titles and galleries here.
// Figure files are stored in site/assets/images/.
window.SITE_DATA = {
  "modules": [
    {
      "id": "problem",
      "eyebrow": "THE SCIENTIFIC QUESTION",
      "title": "One brain. Multiple descriptions. Missing bridges.",
      "intro": "Molecular & circuit mechanisms are rich in animal models. Human signals and cognition add a different observational vocabulary. The challenge is to identify relations that remain explanatory when scales and species change.",
      "gallery": [
        "animal_memory",
        "memory_spikes",
        "theta_example"
      ],
      "label": "What is already known — and what still needs an explanatory bridge?",
      "question": "Which micro-to-meso relations can remain testable in human dynamics?"
    },
    {
      "id": "light",
      "eyebrow": "ONE OPENING ANALOGY",
      "title": "One physical process. Quantum to classical.",
      "intro": "A photon, a wavepacket, an electromagnetic field and a detector trace are not interchangeable terms; a physical theory supplies the maps between regimes and observables. This motivates the modeling ambition without equating consciousness with light.",
      "gallery": [],
      "label": "",
      "question": "What is the neural analogue of a justified translation rule?"
    },
    {
      "id": "social",
      "eyebrow": "BEHAVIOR / CONTEXT",
      "title": "A behavioral state has boundaries.",
      "intro": "A social action depends on its partner, paradigm and history. The same movement in different tasks need not denote the same state. This becomes a question about what belongs inside an effective neural state.",
      "gallery": [
        "social_engram",
        "animal_memory",
        "theta_example"
      ],
      "label": "Behavioral definitions constrain what neural signals can mean.",
      "question": "What context must a predictive population state retain?"
    },
    {
      "id": "magnetic",
      "eyebrow": "MECHANISM / ANIMAL NAVIGATION",
      "title": "From navigational behavior to molecular candidates.",
      "intro": "Biological magnetosensing illustrates a difficult macro-to-micro program: identify a physical interaction, molecular candidate and a causal route to the behavior. A microscopic effect alone is not yet a complete circuit-level navigation theory.",
      "gallery": [
        "chirality_anim"
      ],
      "label": "Related training: spirulina chirality → shear-dependent drift → proposed microfluidic readout.",
      "question": "Where is the intermediate transduction and circuit evidence?"
    },
    {
      "id": "sens",
      "eyebrow": "REAL DATA / BIOSENSING",
      "title": "The instrument shapes the signal.",
      "intro": "In the SensUs 2026 TruSense project, the CoDH electrode makes a molecular state readable as an electrochemical current. Repeated measurements can drift even in one sample: recorded current depends on target concentration and the sensing interface.",
      "gallery": [
        "trusense_device",
        "trusense_electrode",
        "trusense_protein",
        "trusense_cv",
        "trusense_eleccompare",
        "trusense_ui"
      ],
      "label": "SensUs 2026: CoDH sensing and biology work · team Gold Award",
      "question": "When the trace changes, what physical or biological quantity changed?"
    },
    {
      "id": "sers",
      "eyebrow": "SERS / SCIENTIFIC VARIABLE",
      "title": "A chosen readout defines a chosen question.",
      "intro": "Your current proposal targets CD45+ extracellular vesicles with CD28/CD16 dual-channel SERS. Normalization is a scientific assumption about what should be preserved and what can be treated as nuisance variation; it remains to be validated.",
      "gallery": [
        "sers_anim",
        "ev_sers_reference"
      ],
      "label": "Dual-channel method proposal · reference assay shown separately",
      "question": "Which signal components estimate the intended biological quantity?"
    },
    {
      "id": "guo",
      "eyebrow": "GUO MIN LAB / SEPARATE CHAPTER",
      "title": "One image, several possible causes.",
      "intro": "Scattering and wavefront aberrations make inverse imaging non-unique. Phase diversity introduces a known optical change to constrain the inverse problem. Your LoRA work explores adaptation of 3D restoration models, with model limits still requiring testing.",
      "gallery": [
        "caoburden",
        "caopipeline",
        "caoprelim",
        "caohardware",
        "caooverview",
        "guo_anim"
      ],
      "label": "Computational adaptive optics · proposed system and initial validation",
      "question": "Which extra measurement reduces ambiguity rather than only fitting pixels?"
    },
    {
      "id": "optics",
      "eyebrow": "YUTONG CUP 2026 / OPTICAL DESIGN COMPETITION · ORIGINAL REPORT",
      "title": "AR imaging optics: the 2D design and 3D model.",
      "intro": "Yutong Cup 2026 · AR-glasses camera lens. My all-spherical proposal became the team baseline; further optimization produced a 17.443 mm EFL design within a 14.96 mm optical total length. Both figures are from our competition report, not photographs of a manufactured lens.",
      "gallery": [
        "contest_final2d",
        "contest_final3d"
      ],
      "label": "Original competition report · Fig. 4-1 (2D Zemax) · Fig. 4-2 (3D model) · July 2026",
      "question": "How do imaging performance and practical fabrication constraints shape a feasible optical design?"
    },
    {
      "id": "transfer",
      "eyebrow": "VALIDATION / TRANSFER",
      "title": "A predictive feature may not be invariant.",
      "intro": "In your SERS public-data analysis, cross-laboratory performance fell relative to within-laboratory validation; the fixed MDD signature did not transfer to a separate tissue and platform. These are real limits of that analysis, and a reason to explicitly test cross-species transfer assumptions.",
      "gallery": [],
      "label": "Rotation 2 · observed generalization limits",
      "question": "What relation stays stable when the measurement domain changes?"
    },
    {
      "id": "mind",
      "eyebrow": "CONCEPTUAL PRECISION",
      "title": "Consciousness is not a single operational variable.",
      "intro": "Awareness, report, perceptual content and arousal are distinct operational targets. The COGITATE adversarial collaboration illustrates how theoretical commitments produce different experiment-level predictions, while leaving broader questions open.",
      "gallery": [
        "cogitate",
        "memory_spikes"
      ],
      "label": "COGITATE Consortium · Nature 2025",
      "question": "Which contrast would make the concept experimentally decidable?"
    },
    {
      "id": "models",
      "eyebrow": "MATHEMATICAL NEUROSCIENCE / COMPLEMENTARY CONSTRAINTS",
      "title": "Modes. Control. Perturbation.",
      "intro": "Pang proposes a geometry-constrained description of large-scale activity; Gu connects structural networks to theoretical state controllability; Lyu measures human thalamocortical responses to stimulation. Three distinct levels of constraint — not yet a jointly verified model.",
      "gallery": [
        "model_pang",
        "model_gu",
        "model_lyu"
      ],
      "label": "Pang · Nature, 2023  |  Gu · Nature Communications, 2015  |  Lyu · Nature Neuroscience, 2025  · explanatory schematics",
      "question": "Could one circuit-constrained dynamical model predict a human response that was not used for fitting?"
    },
    {
      "id": "datasets",
      "eyebrow": "PUBLIC-DATA AUDIT / FIVE RESOLUTIONS",
      "title": "We have rich datasets. Do their variables connect?",
      "intro": "A survey of how published neuroscience data are organized — from human EEG to mouse circuits, single neurons, synapses and molecular identities.",
      "gallery": [],
      "label": "Sources: BIDS EEG · AllenSDK/NWB · MICrONS (Nature, 2025) · Allen Cell Types · Allen Brain Cell Atlas · sourced inventory, not newly analyzed data",
      "question": "A common file format is progress. A common explanatory variable is still a research problem."
    },
    {
      "id": "gaps",
      "eyebrow": "WHAT DATA CAN AND CANNOT ESTABLISH",
      "title": "Three different reasons a bridge may fail.",
      "intro": "Current limitations are not just a missing timestamp or an inconvenient file format. Some variables were never measured together; other circuit states remain indistinguishable in the recording; some constructs are not yet operationally stable.",
      "gallery": [],
      "label": "These are methodological diagnoses from the source survey; they are not claimed experimental results.",
      "question": "Which missing constraint would actually change the model we can test?"
    },
    {
      "id": "pilot",
      "eyebrow": "PROPOSED PILOT / NOT YET CONDUCTED",
      "title": "Can spiking activity predict a future population field?",
      "intro": "Start with one species and one simultaneously recorded phenomenon. Allen Visual Coding–Neuropixels provides unit spikes, local field potentials, visual stimulus times, running/pupil traces and session metadata in NWB.",
      "gallery": [],
      "label": "Allen Institute Visual Coding–Neuropixels · open data and analysis tutorials · proposed analysis only",
      "question": "Does lagged population activity add out-of-sample information beyond stimulus, behavior and LFP history?"
    },
    {
      "id": "future",
      "eyebrow": "FIRST TEST / EDITABLE RESEARCH PROPOSAL",
      "title": "An actionable first bridge, open to revision.",
      "intro": "The proposed first test is mouse spikes → local LFP, not a claim about human consciousness. Cross-species comparisons and molecular priors only become meaningful after this local mapping is validated and its limits are understood.",
      "gallery": [],
      "label": "Initial scope: VISp visual flashes · selected sessions with usable units and LFP · held-out trials and sessions · inspect negative controls",
      "question": "A useful first result could be a failure: it tells us which additional observation or model constraint is needed."
    }
  ],
  "images": {
    "animal_memory": {
      "title": "Animal memory: age-dependent engram recruitment",
      "source": "Fan et al. · Nature Communications · 2022",
      "group": "neural",
      "note": "From supplied research presentation; literature figure",
      "src": "./assets/images/animal_memory.jpg"
    },
    "memory_spikes": {
      "title": "Human memory retrieval: neuronal sequence replay",
      "source": "Vaz et al. · Science · 2020",
      "group": "neural",
      "note": "From supplied research presentation; literature figure",
      "src": "./assets/images/memory_spikes.jpg"
    },
    "social_engram": {
      "title": "Social reward and stress: memory engram states",
      "source": "Lei et al. · 2022 · supplied research slides",
      "group": "neural",
      "note": "Literature figure from earlier supplied research presentation",
      "src": "./assets/images/social_engram.jpg"
    },
    "cogitate": {
      "title": "COGITATE: competing consciousness predictions",
      "source": "COGITATE Consortium · Nature · 2025",
      "group": "neural",
      "note": "Literature figure from earlier supplied research presentation",
      "src": "./assets/images/cogitate.jpg"
    },
    "theta_example": {
      "title": "Theta timing and sequence representations",
      "source": "Liebe et al. · Nature Neuroscience · 2025",
      "group": "neural",
      "note": "Literature figure from earlier supplied research presentation",
      "src": "./assets/images/theta_example.jpg"
    },
    "cortex_fmri": {
      "title": "Cortical activity during memory processing",
      "source": "From supplied research literature slide · publication not independently verified",
      "group": "neural",
      "note": "Publication metadata not verified; shown as background example",
      "src": "./assets/images/cortex_fmri.jpg"
    },
    "caoburden": {
      "title": "Deep tissue: optical depth and image degradation",
      "source": "Guo Min lab · project proposal · 2026",
      "group": "guo",
      "note": "Proposal illustration, not a new experimental result",
      "src": "./assets/images/caoburden.jpg"
    },
    "caopipeline": {
      "title": "Phase diversity: image pairs and wavefront recovery",
      "source": "Guo Min lab · project proposal · 2026",
      "group": "guo",
      "note": "Method diagram from user-supplied proposal",
      "src": "./assets/images/caopipeline.jpg"
    },
    "caoprelim": {
      "title": "Wavefront estimation and recovery: initial validation",
      "source": "Guo Min lab · project proposal · 2026",
      "group": "guo",
      "note": "Initial validation figure presented in proposal",
      "src": "./assets/images/caoprelim.jpg"
    },
    "caohardware": {
      "title": "Adaptive-optics fluorescence microscopy setup",
      "source": "Guo Min lab · project proposal · 2026",
      "group": "guo",
      "note": "Optical layout and lab photo from proposal",
      "src": "./assets/images/caohardware.jpg"
    },
    "caooverview": {
      "title": "Deep-tissue computational microscopy study plan",
      "source": "Guo Min lab · project proposal · 2026",
      "group": "guo",
      "note": "Research design / proposed system",
      "src": "./assets/images/caooverview.jpg"
    },
    "trusense_device": {
      "title": "Wearable TruSense: exploded-device schematic",
      "source": "TruSense team · SensUs · 2026",
      "group": "sensor",
      "note": "Team source; device concept and engineering",
      "src": "./assets/images/trusense_device.jpg"
    },
    "trusense_electrode": {
      "title": "CoDH enzyme and electrode interface",
      "source": "TruSense team · SensUs · 2026",
      "group": "sensor",
      "note": "Team experiment schematic",
      "src": "./assets/images/trusense_electrode.jpg"
    },
    "trusense_protein": {
      "title": "Engineered CoDH protein: design comparison",
      "source": "TruSense team · SensUs · 2026",
      "group": "sensor",
      "note": "Team project biology figure",
      "src": "./assets/images/trusense_protein.jpg"
    },
    "trusense_cv": {
      "title": "Electrochemical signal and stability tests",
      "source": "TruSense team · SensUs · 2026",
      "group": "sensor",
      "note": "Raw project curves from team pitch",
      "src": "./assets/images/trusense_cv.jpg"
    },
    "trusense_eleccompare": {
      "title": "Electrochemical workstation comparison",
      "source": "TruSense team · SensUs · 2026",
      "group": "sensor",
      "note": "Team reference measurement",
      "src": "./assets/images/trusense_eleccompare.jpg"
    },
    "trusense_eleccompare2": {
      "title": "Electrochemical workstation calibration",
      "source": "TruSense team · SensUs · 2026",
      "group": "sensor",
      "note": "Team reference measurement",
      "src": "./assets/images/trusense_eleccompare2.jpg"
    },
    "trusense_board": {
      "title": "Electronics PCB",
      "source": "TruSense team · SensUs · 2026",
      "group": "sensor",
      "note": "Team hardware image",
      "src": "./assets/images/trusense_board.jpg"
    },
    "trusense_ui": {
      "title": "Concentration–time UI",
      "source": "TruSense team · SensUs · 2026",
      "group": "sensor",
      "note": "Team design figure",
      "src": "./assets/images/trusense_ui.jpg"
    },
    "ev_sers_reference": {
      "title": "Reference SERS sandwich-assay scheme",
      "source": "User-provided reference figure · source not specified",
      "group": "sers",
      "note": "Earlier EpCAM/TGF-β1 schematic; differs from current CD45/CD28/CD16 proposal",
      "src": "./assets/images/ev_sers_reference.jpg"
    },
    "chirality_anim": {
      "title": "Chirality selection in shear flow · animated",
      "source": "Your Xie Can rotation · conceptual mechanism",
      "group": "mechanism",
      "note": "Predicted separation; no completed device validation",
      "src": "./assets/images/chirality_anim.gif"
    },
    "sers_anim": {
      "title": "SERS dual-channel detection · animated",
      "source": "Your proposed CD45+ EV / CD28–CD16 work",
      "group": "sers",
      "note": "Conceptual animation; not a validated diagnostic result",
      "src": "./assets/images/sers_anim.gif"
    },
    "guo_anim": {
      "title": "Additional optical constraint · animation",
      "source": "Computational imaging · illustrative",
      "group": "guo",
      "note": "Illustrative, not a measured wavefront",
      "src": "./assets/images/guo_anim.gif"
    },
    "fields_anim": {
      "title": "Collective field and recorded rhythms · animated",
      "source": "Pang · Nature 2023; Lyu · Nature Neuroscience 2025",
      "group": "neural",
      "note": "Illustrative animation, not source paper data",
      "src": "./assets/images/fields_anim.gif"
    },
    "contest_final2d": {
      "title": "Final team lens · 2D Zemax ray trace",
      "source": "Competition report · Sec. 4.1, Fig. 4-1 · July 2026",
      "note": "Final optimized team optical structure. Zemax simulation, not a photograph of a manufactured lens.",
      "group": "optics",
      "src": "./assets/images/contest_final2d.jpg"
    },
    "contest_final3d": {
      "title": "Final optical system · 3D digital model",
      "source": "Competition report · Sec. 4.1, Fig. 4-2 · July 2026",
      "note": "Original 3D optical model from the submitted report. It is a digital design, not a physical prototype.",
      "group": "optics",
      "src": "./assets/images/contest_final3d.jpg"
    },
    "model_pang": {
      "title": "Geometry-based eigenmodes · conceptual explanation",
      "source": "Pang et al. · Nature · May 2023",
      "group": "neural",
      "note": "Illustrative decomposition, not a reproduction of the paper figure",
      "src": "./assets/images/model_pang.svg"
    },
    "model_gu": {
      "title": "From connectome to control of state transitions",
      "source": "Gu et al. · Nature Communications · October 2015",
      "group": "neural",
      "note": "Theory-based schematic; linear model assumptions matter",
      "src": "./assets/images/model_gu.svg"
    },
    "model_lyu": {
      "title": "Human thalamocortical stimulation–response constraints",
      "source": "Lyu et al. · Nature Neuroscience · July 2025",
      "group": "neural",
      "note": "Schematic only; waveforms are illustrative, not experimental data",
      "src": "./assets/images/model_lyu.svg"
    }
  }
};
