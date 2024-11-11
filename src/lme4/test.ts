/*
see:
https://cran.r-project.org/web/packages/lme4/vignettes/lmer.pdf
*/

const lme4_examples = [
  "~salmonella_enterica + days_of_life",
  "~salmonella_enterica + days_of_life +(1|subject_id)",
  "~salmonella_enterica + days_of_life + salmonella_enterica:days_of_life",
  "~salmonella_enterica + days_of_life + salmonella_enterica:days_of_life + (1|subject_id)",
  "~group(salmonella_enterica)",
  "~group(salmonella_enterica) + days_of_life ",
  "~group(salmonella_enterica) + days_of_life + (1|subject_id)",
  "~ordered(salmonella_enterica)",
  "~ordered(salmonella_enterica) + days_of_life ",
  "~ordered(salmonella_enterica) + days_of_life + (1|subject_id)",
  "~strata(salmonella_enterica)",
  "darknes ~ 1 + (1 | jedi_id)",
  "1 + x + (1 | g) + (0 + x | g)",
  "1 + x + (1 + x | g)",
  "(1 | g1) + (1 | g2)",
  "(1 | g1/g2)",
  "-1 + offset(o) + (1 | g)",
  "(1 | g1)+(1 | g1:g2)",
  "0 + offset(o) + (1 | g)",
  "x + (x || g)",
];

export { lme4_examples };
