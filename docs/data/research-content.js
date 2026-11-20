// Concise research findings: purpose, key result and role in the project.
window.RESEARCH_CONTENT = {
  "version": "research-r9",
  "pages": {
    "behavior-summary": {
      "layout": "summary",
      "figures": [
        {
          "imageKey": "behavior_cell20",
          "title": "Cell 20",
          "subtitle": "Stronger response to Start 2",
          "imageCaption": "Start 1 (left) / Start 2 (right)",
          "metric": {
            "value": "1.000",
            "label": "Selected-cell ROC AUC"
          }
        },
        {
          "imageKey": "behavior_cell96",
          "title": "Cell 96",
          "subtitle": "Stronger response to Start 1",
          "imageCaption": "Start 1 (left) / Start 2 (right)",
          "metric": {
            "value": "0.0224",
            "label": "Selected-cell ROC AUC"
          }
        }
      ],
      "summary": [
        {
          "label": "Purpose",
          "text": "I asked whether neuronal activity distinguishes behaviorally defined task conditions."
        },
        {
          "label": "Key result",
          "text": "These selected neurons showed opposite response preferences for the same task conditions: cell 20 favored Start 2, while cell 96 favored Start 1."
        },
        {
          "label": "Role in my project",
          "text": "This gives my project a starting point: test how condition-specific neuronal responses relate to population signals across scales."
        }
      ],
      "source": {
        "title": "Neuronal response evidence",
        "items": [
          {
            "label": "Original results",
            "text": "Mini_E_4oscial_beforeReverse.pptx, slides 5 and 6. Start 1 / Start 2: cell 20, ROC AUC = 1.000; cell 96, ROC AUC = 0.0224. Both original embedded images are unchanged."
          },
          {
            "label": "Analysis context",
            "text": "The presenter applies/adapts the laboratory workflow documented in matlab_TRSanalyseprotocol.docx, credited to wzy. The protocol uses the second condition as the positive ROC label."
          }
        ],
        "limitations": [
          "These examples were selected for extreme AUC values. They are response comparisons within the supplied result set, not held-out decoding accuracy or a population-wide summary.",
          "Start 2 is the positive ROC label. The low AUC for cell 96 indicates response separation in the opposite direction, rather than classification failure.",
          "Original horizontal axes remain sample indices. A sampling rate was not supplied.",
          "No corrected statistical significance or causal mechanism is established by these examples. Their role in the broader project is a proposed research direction.",
          "The displayed figures and AUC values come from the supplied exports; the underlying recordings were not reanalysed for this presentation."
        ]
      },
      "takeaway": ""
    },
    "sers-summary": {
      "layout": "summary",
      "figures": [
        {
          "imageKey": "sers_result_4",
          "title": "Prediction within P03",
          "subtitle": "Within one laboratory",
          "imageCaption": "P03 test spectra · n = 35",
          "metric": {
            "value": "0.800",
            "label": "RBF-SVR R²"
          }
        },
        {
          "imageKey": "sers_result_7",
          "title": "Prediction across laboratories",
          "subtitle": "An entire laboratory held out",
          "imageCaption": "Eight laboratory holdouts · mean ± SD",
          "metric": {
            "value": "0.205 ± 0.470",
            "label": "RBF-SVR R²"
          }
        }
      ],
      "summary": [
        {
          "label": "Purpose",
          "text": "I tested whether SERS models could recover concentration and remain reliable across laboratories."
        },
        {
          "label": "Key result",
          "text": "RBF-SVR performed well in P03, while prediction performance varied substantially across held-out laboratories."
        },
        {
          "label": "Role in my project",
          "text": "My current proposal targets CD45+ extracellular vesicles with CD28/CD16 dual-channel SERS.",
          "text2": "This result makes independent validation a requirement for my molecular readout and the wider cross-scale project."
        }
      ],
      "source": {
        "title": "SERS transfer evidence",
        "items": [
          {
            "label": "Reported results",
            "text": "交叉科研轮转2_研究报告.docx, Figure 4 left (P03 prediction scatter), Figure 5 right (laboratory-holdout R² heatmap), Table 5 (P03 metrics), and Table 6 (laboratory-holdout metrics)."
          },
          {
            "label": "P03 test",
            "text": "RBF-SVR R² = 0.800, RMSE = 1.309; 35 specified test spectra. Targets use the dataset concentration-label scale."
          },
          {
            "label": "Laboratory holdouts",
            "text": "RBF-SVR mean R² = 0.205, SD = 0.470 across eight laboratories. The heatmap retains each laboratory and all three tested classical models."
          }
        ],
        "limitations": [
          "The P03 and laboratory-holdout values come from different evaluation settings. Their difference is not a paired effect estimate.",
          "The ± value is the standard deviation across laboratories, not a confidence interval.",
          "Completed results concern public adenine spectra. They do not validate the proposed CD45+ EV assay or establish clinical diagnosis.",
          "No claim of statistical significance or a universally best algorithm is made. The plots and numbers are the supplied report results, not a new model fit."
        ]
      },
      "takeaway": ""
    }
  }
};
