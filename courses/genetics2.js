/* =====================================================================
   GENETICS II — complementation (Lecture 8)
   ---------------------------------------------------------------------
   Course file for the lecture-quiz app. Drop it in courses/ and add
        { id: 'genetics2', file: 'genetics2.js', active: true },
   to courses/courses.js. Check it first at <site>/#check.
   All questions are single choice, so the whole set also works in live mode.
   Further lectures can be added later under their own number in `lectures`.
   ===================================================================== */
QUIZ.course('genetics2', ({ r, ffl, table }) => ({

  title: 'Genetics II',
  description: 'Genome sequencing, genome content, gene regulation and genetic screens.',
  unit: 'Lecture',

  lectures: {
    8: 'Gene identification, gene regulation and genetic screens',
  },

  questions: [

    /* ---------- two mutants: yeast ---------- */

    { id: 'G8-C01', lec: 8, diff: 1, topic: 'Complementation · yeast',
      q: r`<i>ADE1</i> and <i>ADE2</i> are two genes of the adenine pathway, and a recessive mutation in
           either one gives a red colony that needs adenine. Two red haploid mutants, m1 and m2, are mated.
           <b>If both mutations are in <i>ADE2</i></b>, what is the genotype of the diploid?`,
      opts: [r`ade2-1 / ade2-2`,
             r`ade2-1 / ADE2`,
             r`ade2-1 ADE1 / ADE2 ade1`,
             r`ADE2 / ADE2`],
      exp: r`Each parent brings its own damaged copy of <i>ADE2</i>, so the diploid carries two mutant
             alleles of that gene and no intact one. <i>ade2-1 / ADE2</i> is the heterozygote you would get
             by crossing to wild-type; the third option describes mutations in two different genes.` },

    { id: 'G8-C02', lec: 8, diff: 1, topic: 'Complementation · yeast',
      q: r`A diploid yeast of genotype <i>ade2-1 / ade2-2</i> — two different mutant alleles of the same
           gene. What does the colony look like?`,
      opts: [r`Red, and it still needs adenine`,
             r`White, and it grows without adenine`,
             r`White, but it still needs adenine`,
             r`Red, but it grows without adenine`],
      exp: r`No functional Ade2 protein can be made from either allele, so the pathway stays blocked, the
             intermediate still accumulates as red pigment and the cells still require adenine. The two
             alleles <b>fail to complement</b>.` },

    { id: 'G8-C03', lec: 8, diff: 1, topic: 'Complementation · yeast',
      q: r`The same two red haploids are mated, but now m1 carries a mutation in <i>ADE1</i> and m2 a
           mutation in <i>ADE2</i>. What is the genotype of the diploid?`,
      opts: [r`ade1 ADE2 / ADE1 ade2`,
             r`ade1 ade2 / ADE1 ADE2`,
             r`ade1 / ade2`,
             r`ade1 ADE1 / ade2 ADE2`],
      exp: r`Write both genes for both genomes. The m1 genome is mutant for <i>ADE1</i> and wild-type for
             <i>ADE2</i>, and the m2 genome is the mirror image. The second option would require one parent
             to be mutant for both genes; the third leaves out the wild-type copies, which are exactly what
             matters here.` },

    { id: 'G8-C04', lec: 8, diff: 1, topic: 'Complementation · yeast',
      q: r`A diploid yeast of genotype <i>ade1 ADE2 / ADE1 ade2</i>. What does the colony look like?`,
      opts: [r`White, and it grows without adenine`,
             r`Red, and it still needs adenine`,
             r`Red, but it grows without adenine`,
             r`White, but it still needs adenine`],
      exp: r`Each genome supplies the intact copy the other lacks — <i>ADE2</i> from one parent,
             <i>ADE1</i> from the other. Both enzymes are made, the pathway runs, and the diploid is white
             and prototrophic. The mutations <b>complement</b>.`,
      expfig: { img: 'genetics2/yeast_plate.jpg',
                cap: r`The real experiment: bars are the mutagenised haploid strains, circles the diploids made from
                       them. A white diploid means the two mutations complement — they are in different genes.` } },

    /* ---------- two mutants: Drosophila ---------- */

    { id: 'G8-C05', lec: 8, diff: 1, topic: 'Complementation · Drosophila',
      q: r`Recessive mutations in <i>brown</i> (<i>bw</i>, chromosome 2) or in <i>rosy</i> (<i>ry</i>,
           chromosome 3) both give brownish eyes instead of wild-type red. Two homozygous brown-eyed stocks
           are crossed. <b>If both are mutant in <i>bw</i></b>, what is the genotype of the F1?`,
      opts: [r`bw<sup>1</sup> / bw<sup>2</sup>`,
             r`bw<sup>1</sup> / +`,
             r`bw / + ; + / ry`,
             r`bw / bw ; ry / ry`],
      exp: r`Each stock is homozygous, so each contributes one mutant <i>bw</i> allele: the F1 is a
             heteroallelic combination with no wild-type <i>bw</i> at all. <i>bw<sup>1</sup> / +</i> would
             be the result of a cross to wild-type.` },

    { id: 'G8-C06', lec: 8, diff: 1, topic: 'Complementation · Drosophila',
      q: r`An F1 fly of genotype <i>bw<sup>1</sup> / bw<sup>2</sup></i> — two different mutant alleles of
           <i>brown</i>. What colour are its eyes?`,
      opts: [r`Brown — the alleles fail to complement`,
             r`Red — the alleles complement`,
             r`Red, because one allele is always dominant`,
             r`White, because two mutant alleles give a stronger phenotype`],
      exp: r`Both copies of the gene are defective and no functional product is made, so the F1 looks like
             its parents.` },

    { id: 'G8-C07', lec: 8, diff: 1, topic: 'Complementation · Drosophila',
      q: r`Now one brown-eyed stock is mutant in <i>bw</i> (chromosome 2) and the other in <i>ry</i>
           (chromosome 3). What is the genotype of the F1?`,
      opts: [r`bw / + ; + / ry`,
             r`bw / ry`,
             r`bw / bw ; ry / ry`,
             r`bw ry / + +`],
      exp: r`The semicolon separates genes on different chromosomes. The F1 is heterozygous at both loci:
             a mutant <i>bw</i> from one parent against a wild-type <i>bw</i> from the other, and the same
             for <i>ry</i>. <i>bw / ry</i> would only make sense if the two were alleles of one gene.` },

    { id: 'G8-C08', lec: 8, diff: 1, topic: 'Complementation · Drosophila',
      q: r`An F1 fly of genotype <i>bw / + ; + / ry</i>. What colour are its eyes?`,
      opts: [r`Red — wild-type, because the mutations complement`,
             r`Brown, because both parents were brown-eyed`,
             r`Brown, because two eye-colour genes are mutated`,
             r`Half the flies are red and half brown`],
      exp: r`Each chromosome carries a wild-type copy of the gene the other has lost, both products are
             made, and the F1 is wild-type. That the parents were both brown is irrelevant: what counts is
             what the F1 genome can make.` },

    /* ---------- five mutants: reading a complementation matrix ---------- */

    { id: 'G8-C09', lec: 8, diff: 2, topic: 'Complementation groups',
      q: r`Five red, adenine-requiring haploid yeast strains were mated in all pairwise combinations. The
           table gives the colour of each diploid colony.<br>How many genes are represented among the five
           mutations?` +
         table(['', 'A', 'B', 'C', 'D', 'E'],
               [['A', '—', 'red', 'white', 'white', 'red'],
                ['B', 'red', '—', 'white', 'white', 'red'],
                ['C', 'white', 'white', '—', 'red', 'white'],
                ['D', 'white', 'white', 'red', '—', 'white'],
                ['E', 'red', 'red', 'white', 'white', '—']]),
      opts: [r`2`, r`1`, r`3`, r`5`],
      exp: r`Red means the pair fails to complement, so those two mutations are in the same gene. A, B and E
             fail with each other; C and D fail with each other; every A/B/E × C/D pair complements. That is
             two complementation groups, and therefore two genes.`,
      expfig: { img: 'genetics2/yeast_plate.jpg',
                cap: r`What the plate looks like: red diploids failed to complement, white ones complemented.` } },

    { id: 'G8-C10', lec: 8, diff: 2, topic: 'Complementation groups',
      q: r`In the same experiment, strain A gives a <b>red</b> diploid with B and with E, and a
           <b>white</b> diploid with C and with D. Which strains carry mutations in the same gene as A?`,
      opts: [r`B and E`, r`C and D`, r`All four of them`, r`None of them — A is alone in its gene`],
      exp: r`Failure to complement — the red diploids — is what marks two mutations as alleles of one gene.
             The white diploids with C and D say the opposite: those mutations are in a different gene.` },

    { id: 'G8-C11', lec: 8, diff: 2, topic: 'Complementation groups',
      q: r`You have five mutants with the same phenotype and want to know how they fall into complementation
           groups. All ten pairwise crosses are possible, but each one costs time. What is the smallest
           number of crosses that can settle the grouping?`,
      opts: [r`4`, r`10`, r`5`, r`2`],
      exp: r`Each cross answers one yes/no question — same gene or not. Four crosses, each chosen to test a
             mutant that has not yet been placed against one that has, connect all five into groups. Ten is
             the complete matrix, which is what you do when crosses are cheap and you want the redundancy.` },

    { id: 'G8-C12', lec: 8, diff: 2, topic: 'Complementation',
      q: r`Two recessive mutants with the same phenotype are crossed and the diploid is <b>mutant</b>.
           What does that tell you?`,
      opts: [r`The two mutations are alleles of the same gene`,
             r`The two mutations are in different genes`,
             r`At least one of the mutations is dominant`,
             r`The two genes act in the same pathway`],
      exp: r`A mutant diploid means no genome in the cell can supply the missing function, which happens
             when both mutations hit the same gene. Acting in the same <i>pathway</i> is a different
             statement — that is what an extragenic suppressor or an epistasis experiment shows.` },

    /* ---------- the limits of the test ---------- */

    { id: 'G8-C13', lec: 8, diff: 2, topic: 'Complementation',
      q: r`Five fly stocks all have the same brown eyes, yet they belong to two different genes. What does
           that illustrate?`,
      opts: [r`The phenotype alone cannot count genes — only the crosses can`,
             r`Brown eyes are always caused by two genes at once`,
             r`The two genes must be next to each other on the chromosome`,
             r`One of the two genes is epistatic to the other`],
      exp: r`Several genes of one pigment pathway can give the same visible defect. Sorting mutants by
             appearance therefore groups them by pathway step at best; the complementation test is what
             counts genes.` },

    { id: 'G8-C14', lec: 8, diff: 3, topic: 'Complementation',
      q: r`Why does the complementation test require the mutations to be <b>recessive</b>?`,
      opts: [r`A dominant allele keeps the heterozygote mutant whatever the other genome supplies, so it
                would be scored as "same gene" however the cross is set up`,
             r`Dominant mutations cannot be induced by chemical mutagens`,
             r`Recessive mutations are always null alleles`,
             r`Dominant mutations are lethal in the diploid`],
      exp: r`The logic of the test is that a wild-type copy rescues. A dominant-negative allele, for
             instance, poisons the normal product in the same cell, so the diploid stays mutant even when
             the second mutation lies in a different gene — the test then reports "same gene", wrongly. This
             is why a screen's alleles are checked for recessiveness first, by crossing to wild-type.` },

    { id: 'G8-C15', lec: 8, diff: 3, topic: 'Complementation',
      q: r`Two alleles of a single gene occasionally give a partly wild-type diploid — intragenic
           complementation. What explains it?`,
      opts: [r`The protein works as a multimer, and subunits damaged in different domains can partly
                compensate for each other in a mixed complex`,
             r`One of the two alleles has reverted to wild-type`,
             r`The gene is duplicated elsewhere in the genome`,
             r`The two alleles are in fact in different genes`],
      exp: r`In a homomultimer assembled from both mutant products, a subunit defective in one domain can be
             rescued by a neighbour that is intact there. It is the standard exception to the rule that one
             complementation group equals one gene, and the reason a surprising result is worth repeating
             before it is believed.` },

    /* ---------- reading the lecture's own figures ---------- */

    { id: 'G8-C16', lec: 8, diff: 2, topic: 'Complementation groups',
      q: r`Three temperature-sensitive cell-division mutants of fission yeast — <i>cdcA</i>, <i>cdcB</i> and
           <i>cdcC</i> — were combined pairwise into diploids, and the spores of each diploid were scored for
           growth at the restrictive temperature. Which conclusion follows?`,
      fig: { img: 'genetics2/allelism_test.jpg' },
      opts: [r`<i>cdcA</i> and <i>cdcB</i> are alleles of one gene; <i>cdcC</i> is a second gene`,
             r`All three are alleles of the same gene`,
             r`All three are in different genes`,
             r`<i>cdcA</i> and <i>cdcC</i> are alleles of one gene; <i>cdcB</i> is a second gene`],
      exp: r`The <i>cdcA</i> × <i>cdcB</i> diploid gives only temperature-sensitive spores — no complementation,
             so both mutations hit the same gene. The combinations with <i>cdcC</i> give some non-ts spores:
             complementation, so <i>cdcC</i> is a different gene. Two groups, two genes, named <i>cdc1</i>
             and <i>cdc2</i>.`,
      expfig: { img: 'genetics2/allelism_test_answer.jpg' },
      src: 'Lecture 9 · test of allelism' },

    { id: 'G8-C17', lec: 8, diff: 1, topic: 'Complementation groups',
      q: r`Mutagenised yeast cells are replica-plated and the colonies that fail to grow without leucine are
           picked. All of them have the same phenotype: they need leucine. What does that tell you about the
           number of genes involved?`,
      fig: { img: 'genetics2/leu_screen.jpg' },
      opts: [r`Nothing yet — a shared phenotype can come from several genes, and only crosses between the mutants can count them`,
             r`They must all be mutations in one gene, since the phenotype is identical`,
             r`There must be as many genes as there are mutants`,
             r`The number of genes can be read off the number of colonies picked`],
      exp: r`Leucine biosynthesis is a pathway of several enzymes, and losing any one of them gives the same
             requirement for leucine. Sorting the mutants by phenotype groups them by pathway, not by gene;
             the allelism test is what counts the genes. In this screen they fall into three complementation
             groups — <i>leu1</i>, <i>leu2</i> and <i>leu3</i>.`,
      expfig: { img: 'genetics2/leu_screen_answer.jpg' },
      src: 'Lecture 9 · auxotrophic screen' },

  ]
}));
