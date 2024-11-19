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
  "~group(salmonella_enterica) + days_of_life",
  "~group(salmonella_enterica) + days_of_life + (1|subject_id)",
  "~ordered(salmonella_enterica)",
  "~ordered(salmonella_enterica) + days_of_life",
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
  "a+b", //(fixed) main effects of a and b (and no interaction)
  "a:b", // only interaction of a and b (and no main effects)
  "a*b", //main effects and interaction of a and b (expands to: a + b + a:b)
  "a + b + a:b",
  "(a+b+c)^2",//main effects and two-way interactions, but no three-way interaction (expands to: a + b + c + a:b + b:c + a:c)
  "a + b + c + a:b + b:c + a:c",
  "(a+b)*c", //all main effects and pairwise interactions between c and a or b (expands to: a + b + c + a:c + b:c)
  "a + b + c + a:c + b:c",
  "0 + a", //0 suppresses the intercept resulting in a model that has one parameter per level of a (identical to: a - 1)
  "a - 1", 
  "(1|s)", //random intercepts for unique level of the factor s
  "(1|s) + (1|i)",  // random intercepts for each unique level of s and for each unique level of i
  "(1|s/i)",/*random intercepts for factor s and i, 
            where the random effects for i are nested in s. */
  "(1|s) + (1|s:i)",// expands to this, example: `s` refer to schools, and i to classrooms within
  "(a|s)",//random intercepts and random slopes for a, for each level of s
  "(a*b|s)", // expanded (a|s)
  "(0+a|s)", //random slopes for a for each level of s, but no random intercepts
  "(a||s)", /* random intercepts and random slopes for a, 
            for each level of s, but no correlations between the 
            random effects (i.e. they are set to 0). */
  "(0+a|s) + (1|s)" //This expands to: (0+a|s) + (1|s))
];

export { lme4_examples };
