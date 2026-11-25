/* =====================================================================
   GENETICS II — complementation (Lecture 8)
   ---------------------------------------------------------------------
   Course file for the lecture-quiz app. Drop it in courses/ and add
        { id: 'genetics2', file: 'genetics2.js', active: true },
   to courses/courses.js. Check it first at <site>/#check.
   All questions are single choice, so the whole set also works in live mode.
   Order: Yeast (ade, then leu/cdc) -> Worms (C. elegans vulva) -> Flies (Drosophila) -> General rules & limits.
   ===================================================================== */
QUIZ.course('genetics2', ({ r, ffl, table }) => ({

  title: 'Genetics II',
  description: 'Genome sequencing, genome content, gene regulation and genetic screens.',
  unit: 'Lecture',
  defaultOrder: 'lec',
  defaultN: 0,

  lectures: {
    8: 'Gene identification, gene regulation and genetic screens',
  },

  tools: [
    { title: 'Complementation: one gene or two?', desc: 'Interactive crosses in yeast (ade & cdc), C. elegans vulva and Drosophila', href: 'complementation/' },
    { title: 'CRISPR design: tag vhp-1 with GFP', desc: 'Interactive HDR knock-in design exercise', href: 'crispr/' },
  ],

  questions: [

    /* ========== 1a. YEAST (ade): two mutants & complementation matrix ========== */

    { id: 'G8-C01', lec: 8, diff: 1, topic: 'Complementation · yeast (ade)',
      q: r`<i>ADE1</i> and <i>ADE2</i> are two genes of the adenine pathway, and a recessive mutation in
           either one gives a red colony that needs adenine. Two red haploid mutants, m1 and m2, are mated.
           <b>If both mutations are in <i>ADE2</i></b>, what is the genotype of the diploid?`,
      fig: { img: 'genetics2/ade_pathway.svg',
             cap: r`Loss of either Ade2 or Ade1 blocks adenine synthesis and causes a red intermediate to accumulate.` },
      opts: [r`ade2-1 / ade2-2`,
             r`ade2-1 / ADE2`,
             r`ade2-1 ADE1 / ADE2 ade1`,
             r`ADE2 / ADE2`],
      exp: r`Each parent brings its own damaged copy of <i>ADE2</i>, so the diploid carries two mutant
             alleles of that gene and no intact one. <i>ade2-1 / ADE2</i> is the heterozygote you would get
             by crossing to wild-type; the third option describes mutations in two different genes.`,
      expfig: { img: 'genetics2/yeast_same_gene_diploid.svg',
                cap: r`Each haploid contributes one mutant copy of chromosome XV (<i>ade2-1</i> and <i>ade2-2</i>).` } },

    { id: 'G8-C02', lec: 8, diff: 1, topic: 'Complementation · yeast (ade)',
      q: r`A diploid yeast of genotype <i>ade2-1 / ade2-2</i> — two different mutant alleles of the same
           gene. What does the colony look like?`,
      fig: { img: 'genetics2/yeast_same_gene_diploid.svg' },
      opts: [r`Red, and it still needs adenine`,
             r`White, and it grows without adenine`,
             r`White, but it still needs adenine`,
             r`Red, but it grows without adenine`],
      exp: r`No functional Ade2 protein can be made from either allele, so the pathway stays blocked, the
             intermediate still accumulates as red pigment and the cells still require adenine. The two
             alleles <b>fail to complement</b>.`,
      expfig: { img: 'genetics2/yeast_plate_labeled.jpg',
                cap: r`Lecture 8 · slide 66: crossing two alleles of the same gene (e.g. <i>al1</i> × <i>al1</i>) leaves the diploid red.` } },

    { id: 'G8-C03', lec: 8, diff: 1, topic: 'Complementation · yeast (ade)',
      q: r`The same two red haploids are mated, but now m1 carries a mutation in <i>ADE1</i> and m2 a
           mutation in <i>ADE2</i>. What is the genotype of the diploid?`,
      fig: { img: 'genetics2/yeast_two_genes_cross.svg' },
      opts: [r`ade1 ADE2 / ADE1 ade2`,
             r`ade1 ade2 / ADE1 ADE2`,
             r`ade1 / ade2`,
             r`ade1 ADE1 / ade2 ADE2`],
      exp: r`Write both genes for both genomes. The m1 genome is mutant for <i>ADE1</i> and wild-type for
             <i>ADE2</i>, and the m2 genome is the mirror image. The second option would require one parent
             to be mutant for both genes; the third leaves out the wild-type copies, which are exactly what
             matters here.`,
      expfig: { img: 'genetics2/yeast_two_genes_diploid.svg',
                cap: r`The diploid inherits <i>ade1 ADE2</i> from m1 and <i>ADE1 ade2</i> from m2.` } },

    { id: 'G8-C04', lec: 8, diff: 1, topic: 'Complementation · yeast (ade)',
      q: r`A diploid yeast of genotype <i>ade1 ADE2 / ADE1 ade2</i>. What does the colony look like?`,
      fig: { img: 'genetics2/yeast_two_genes_diploid.svg' },
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

    { id: 'G8-C09', lec: 8, diff: 2, topic: 'Complementation groups · yeast (ade)',
      q: r`Five red, adenine-requiring haploid yeast strains were mated in all pairwise combinations. The
           table gives the colour of each diploid colony.<br>How many genes are represented among the five
           mutations?` +
         table(['', 'A', 'B', 'C', 'D', 'E'],
               [['A', '—', 'red', 'white', 'white', 'red'],
                ['B', 'red', '—', 'white', 'white', 'red'],
                ['C', 'white', 'white', '—', 'red', 'white'],
                ['D', 'white', 'white', 'red', '—', 'white'],
                ['E', 'red', 'red', 'white', 'white', '—']]),
      fig: { img: 'genetics2/yeast_5strains_matrix.svg',
             cap: r`Pairwise diploid colony colours for the five red haploid mutants A–E.` },
      opts: [r`2`, r`1`, r`3`, r`5`],
      exp: r`Red means the pair fails to complement, so those two mutations are in the same gene. A, B and E
             fail with each other; C and D fail with each other; every A/B/E × C/D pair complements. That is
             two complementation groups, and therefore two genes.`,
      expfig: { img: 'genetics2/yeast_plate.jpg',
                cap: r`What the plate looks like: red diploids failed to complement, white ones complemented.` } },

    { id: 'G8-C10', lec: 8, diff: 2, topic: 'Complementation groups · yeast (ade)',
      q: r`In a yeast complementation experiment, red haploid strain A gives a <b>red</b> diploid with B and
           with E, and a <b>white</b> diploid with C and with D. Which strains carry mutations in the same
           gene as A?`,
      fig: { img: 'genetics2/yeast_strainA_crosses.svg' },
      opts: [r`B and E`, r`C and D`, r`All four of them`, r`None of them — A is alone in its gene`],
      exp: r`Failure to complement — the red diploids — is what marks two mutations as alleles of one gene.
             The white diploids with C and D say the opposite: those mutations are in a different gene.` },

    /* ========== 1b. YEAST (auxotrophy & fission yeast cdc allelism test) ========== */

    { id: 'G8-C17', lec: 8, diff: 1, topic: 'Complementation · yeast screen',
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
      src: 'Lecture 8 · slide 74 (auxotrophic screen)' },

    { id: 'G8-C16', lec: 8, diff: 2, topic: 'Complementation · yeast (cdc)',
      q: r`Three temperature-sensitive cell-division mutants of fission yeast — <i>cdcA</i>, <i>cdcB</i> and
           <i>cdcC</i> — were combined pairwise into diploids, and the spores of each diploid were scored for
           growth at the restrictive temperature. Which conclusion follows?`,
      fig: [{ img: 'genetics2/allelism_test.jpg',
              cap: r`Pairwise diploids and spore phenotypes at the restrictive temperature.` },
            { img: 'genetics2/pombe_cdc_cells.jpg',
              cap: r`Wild-type <i>S. pombe</i> vs elongated <i>cdc</i> mutant arrested in cell division (Lecture 8 · slide 78).` }],
      opts: [r`<i>cdcA</i> and <i>cdcB</i> are alleles of one gene; <i>cdcC</i> is a second gene`,
             r`All three are alleles of the same gene`,
             r`All three are in different genes`,
             r`<i>cdcA</i> and <i>cdcC</i> are alleles of one gene; <i>cdcB</i> is a second gene`],
      exp: r`The <i>cdcA</i> × <i>cdcB</i> diploid gives only temperature-sensitive spores — no complementation,
             so both mutations hit the same gene. The combinations with <i>cdcC</i> give some non-ts spores:
             complementation, so <i>cdcC</i> is a different gene. Two groups, two genes, named <i>cdc1</i>
             and <i>cdc2</i>.`,
      expfig: { img: 'genetics2/allelism_test_answer.jpg' },
      src: 'Lecture 8 · slide 80 (test of allelism)' },

    /* ========== 2. WORMS: C. elegans vulval induction (let-23 & lin-45) ========== */

    { id: 'G8-W01', lec: 8, diff: 2, topic: 'Complementation · C. elegans (vulva)',
      q: r`<i>C. elegans</i> hermaphrodites (<i>XX</i>) fertilise themselves, so crossing a recessive
           Vulvaless (<i>Vul</i>) hermaphrodite w1 with males (<i>X0</i>) from another Vul strain w2 yields a
           plate containing both self-progeny and cross-progeny. How do you recognise that the cross worked?`,
      fig: { img: 'genetics2/celegans_xx_xo_cross.svg' },
      opts: [r`About half of the cross-progeny are males, whereas selfing makes almost none`,
             r`Cross-progeny hermaphrodites always have a normal vulva and self-progeny do not`,
             r`Cross-progeny are visibly larger than self-progeny`,
             r`Cross-progeny lay more eggs than self-progeny`],
      exp: r`A male's sperm carries an <i>X</i> or no <i>X</i> in equal numbers, so half of all cross-progeny
             are <i>X0</i> males (~50 %), whereas a selfing hermaphrodite produces males only via rare <i>X</i>
             non-disjunction (~0.1 %). Whether the vulva forms cannot mark the cross, because that is the very
             phenotype being tested.`,
      expfig: { img: 'genetics2/celegans_vulva_lineage.jpg',
                cap: r`Lecture 8 · slide 87: anchor cell induction of the vulval precursor cells P5.p–P7.p.` },
      src: 'Lecture 8 · C. elegans vulva' },

    { id: 'G8-W02', lec: 8, diff: 1, topic: 'Complementation · C. elegans (vulva)',
      q: r`Recessive loss-of-function mutations in <i>let-23</i> (the EGF receptor, chromosome II) or in
           <i>lin-45</i> (Raf kinase, chromosome IV) prevent vulval induction, producing a Vulvaless
           (<i>Vul</i>, “bag of worms”) hermaphrodite. Homozygous w1 hermaphrodites are crossed with w2 males.
           <b>If both mutations are in <i>let-23</i></b>, what is the genotype of an F1 cross-progeny hermaphrodite?`,
      fig: { img: 'genetics2/worm_let23_cross.svg' },
      opts: [r`let-23(a) / let-23(b)`,
             r`let-23(a) / +`,
             r`let-23(a) / let-23(a)`,
             r`let-23(a) / + ; lin-45(b) / +`],
      exp: r`Each parent is homozygous and passes on one copy of chromosome II, so the cross-progeny carry one
             mutant allele from each parent and no wild-type <i>let-23</i>. <i>let-23(a) / +</i> comes from a
             cross to wild-type; <i>let-23(a) / let-23(a)</i> is maternal self-progeny.`,
      expfig: { img: 'genetics2/worm_let23_f1.svg' },
      src: 'Lecture 8 · C. elegans vulva' },

    { id: 'G8-W03', lec: 8, diff: 1, topic: 'Complementation · C. elegans (vulva)',
      q: r`What does a cross-progeny <i>C. elegans</i> hermaphrodite of genotype <i>let-23(a) / let-23(b)</i>
           look like?`,
      fig: { img: 'genetics2/worm_let23_f1.svg' },
      opts: [r`Vulvaless — no vulva forms and eggs hatch inside the mother (“bag of worms”)`,
             r`Wild-type — a single normal vulva forms and eggs are laid`,
             r`Multivulva — several ectopic vulvae form along the ventral side`,
             r`Half the F1 hermaphrodites are wild-type and half are Vulvaless`],
      exp: r`Both copies of <i>let-23</i> are defective, so no working EGF receptor reaches the vulval
             precursor cells and the LIN-3 signal is not read: the cross-progeny are <b>Vulvaless</b>. The two
             alleles <b>fail to complement</b>.`,
      expfig: { img: 'genetics2/celegans_vulva_phenotypes.jpg',
                cap: r`Lecture 8 · slide 90: wild-type single vulva vs Vulvaless “bag of worms” (and Multivulva when signaling is overactive).` },
      src: 'Lecture 8 · slide 90' },

    { id: 'G8-W04', lec: 8, diff: 1, topic: 'Complementation · C. elegans (vulva)',
      q: r`Now w1 carries a recessive Vul mutation in <i>let-23</i> (chromosome II) and w2 carries a recessive
           Vul mutation in <i>lin-45</i> (chromosome IV). What is the genotype of an F1 cross-progeny
           hermaphrodite?`,
      fig: { img: 'genetics2/worm_let23_lin45_cross.svg' },
      opts: [r`let-23(a) / + ; lin-45(b) / +`,
             r`let-23(a) / lin-45(b)`,
             r`let-23(a) / let-23(a) ; lin-45(b) / lin-45(b)`,
             r`let-23(a) / + ; lin-45(b) / lin-45(b)`],
      exp: r`<i>let-23</i> is on chromosome II and <i>lin-45</i> on chromosome IV, separated by a semicolon.
             The mother supplies mutant <i>let-23</i> and wild-type <i>lin-45</i>; the father supplies the
             reverse, making the F1 heterozygous at both loci.`,
      expfig: { img: 'genetics2/worm_let23_lin45_f1.svg' },
      src: 'Lecture 8 · C. elegans vulva' },

    { id: 'G8-W05', lec: 8, diff: 1, topic: 'Complementation · C. elegans (vulva)',
      q: r`What is the phenotype of a cross-progeny <i>C. elegans</i> hermaphrodite of genotype
           <i>let-23(a) / + ; lin-45(b) / +</i>?`,
      fig: { img: 'genetics2/worm_let23_lin45_f1.svg' },
      opts: [r`Wild-type (normal vulva, eggs are laid) — the mutations complement`,
             r`Vulvaless (“bag of worms”), because both parents were Vulvaless`,
             r`Vulvaless, because two links of the signaling cascade carry mutations`,
             r`Multivulva, because both LET-23 and LIN-45 are expressed`],
      exp: r`Each parent supplies the intact copy of the gene the other lacks: functional LET-23 from the
             father and functional LIN-45 from the mother. The entire EGF/Ras/MAPK signaling chain works, the
             vulva forms normally, and the mutations <b>complement</b>.`,
      expfig: [{ img: 'genetics2/celegans_egf_ras_pathway.svg',
                 cap: r`Both LET-23 (receptor) and LIN-45 (Raf) are present in the trans-heterozygote, restoring vulval induction.` },
               { img: 'genetics2/celegans_vulva_phenotypes.jpg',
                 cap: r`Lecture 8 · slide 90: wild-type single vulva vs Vulvaless.` }],
      src: 'Lecture 8 · slides 90 & 97' },

    { id: 'G8-W06', lec: 8, diff: 2, topic: 'Complementation groups · C. elegans (vulva)',
      q: r`Five recessive Vulvaless strains of <i>C. elegans</i> (V1–V5) from one screen were crossed pairwise;
           the matrix shows the F1 cross-progeny hermaphrodite phenotype (<b>WT</b> = normal vulva,
           <b>Vul</b> = bag of worms). How many genes were hit, and which strain is the sole allele of its gene?`,
      fig: { img: 'genetics2/worm_5strains_matrix.svg' },
      opts: [r`3 genes — V3 is alone in its complementation group`,
             r`2 genes — V1/V3/V4 and V2/V5`,
             r`3 genes — V1 is alone in its complementation group`,
             r`5 genes — each Vul strain defines a distinct link in the pathway`],
      exp: r`<b>Vul</b> F1 cross-progeny mark failure to complement (same gene): V1 and V4 fail with each
             other, V2 and V5 fail with each other, and V3 complements every other strain. That gives <b>three</b>
             complementation groups ({V1, V4}, {V2, V5}, {V3}) — three genes (such as <i>let-23</i>,
             <i>lin-45</i> and <i>mpk-1</i>). Finding a gene hit only once (V3) indicates the screen is not yet
             saturated; ordering the genes along the pathway requires epistasis, not complementation.`,
      expfig: { img: 'genetics2/heidelberg_saturation.jpg',
                cap: r`Screen saturation curve (Lecture 10 · slide 18): single-allele groups show that additional pathway genes likely remain unhit.` },
      src: 'Lecture 8 · C. elegans vulval screen' },

    /* ========== 3. FLIES: Drosophila eye-colour mutants (bw & ry) ========== */

    { id: 'G8-C05', lec: 8, diff: 1, topic: 'Complementation · Drosophila',
      q: r`Recessive mutations in <i>brown</i> (<i>bw</i>, chromosome 2) or in <i>rosy</i> (<i>ry</i>,
           chromosome 3) both give brownish eyes instead of wild-type red. Two homozygous brown-eyed stocks
           are crossed. <b>If both are mutant in <i>bw</i></b>, what is the genotype of the F1?`,
      fig: { img: 'genetics2/fly_bw_cross.svg' },
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
      fig: { img: 'genetics2/fly_bw_heteroallelic.svg' },
      opts: [r`Brown — the alleles fail to complement`,
             r`Red — the alleles complement`,
             r`Red, because one allele is always dominant`,
             r`White, because two mutant alleles give a stronger phenotype`],
      exp: r`Both copies of the gene are defective and no functional product is made, so the F1 looks like
             its parents.`,
      expfig: { img: 'genetics2/drosophila_eye_colors.jpg',
                cap: r`<i>Drosophila melanogaster</i> eye-colour phenotypes: wild-type bright red vs brown and white mutants (Wikimedia Commons, public domain).` } },

    { id: 'G8-C07', lec: 8, diff: 1, topic: 'Complementation · Drosophila',
      q: r`Now one brown-eyed stock is mutant in <i>bw</i> (chromosome 2) and the other in <i>ry</i>
           (chromosome 3). What is the genotype of the F1?`,
      fig: [{ img: 'genetics2/fly_bw_ry_chromosomes.svg' },
            { img: 'genetics2/drosophila_karyotype.jpg',
              cap: r`<i>Drosophila</i> karyotype showing autosomes II and III (Lecture 9 · slide 75).` }],
      opts: [r`bw / + ; + / ry`,
             r`bw / ry`,
             r`bw / bw ; ry / ry`,
             r`bw ry / + +`],
      exp: r`The semicolon separates genes on different chromosomes. The F1 is heterozygous at both loci:
             a mutant <i>bw</i> from one parent against a wild-type <i>bw</i> from the other, and the same
             for <i>ry</i>. <i>bw / ry</i> would only make sense if the two were alleles of one gene.` },

    { id: 'G8-C08', lec: 8, diff: 1, topic: 'Complementation · Drosophila',
      q: r`An F1 fly of genotype <i>bw / + ; + / ry</i>. What colour are its eyes?`,
      fig: { img: 'genetics2/fly_bw_ry_f1.svg' },
      opts: [r`Red — wild-type, because the mutations complement`,
             r`Brown, because both parents were brown-eyed`,
             r`Brown, because two eye-colour genes are mutated`,
             r`Half the flies are red and half brown`],
      exp: r`Each chromosome carries a wild-type copy of the gene the other has lost, both products are
             made, and the F1 is wild-type. That the parents were both brown is irrelevant: what counts is
             what the F1 genome can make.`,
      expfig: { img: 'genetics2/drosophila_eye_colors.jpg',
                cap: r`Complementation restores both pigment pathways in trans, yielding wild-type bright red eyes (Wikimedia Commons, public domain).` } },

    { id: 'G8-C13', lec: 8, diff: 2, topic: 'Complementation · Drosophila',
      q: r`Five fly stocks all have the same brown eyes, yet they belong to two different genes. What does
           that illustrate?`,
      fig: { img: 'genetics2/fly_pathway_two_genes.svg' },
      opts: [r`The phenotype alone cannot count genes — only the crosses can`,
             r`Brown eyes are always caused by two genes at once`,
             r`The two genes must be next to each other on the chromosome`,
             r`One of the two genes is epistatic to the other`],
      exp: r`Several genes of one pigment pathway can give the same visible defect. Sorting mutants by
             appearance therefore groups them by pathway step at best; the complementation test is what
             counts genes.`,
      expfig: { img: 'genetics2/heidelberg_saturation.jpg',
                cap: r`In forward genetic screens (e.g. the Heidelberg screen, Lecture 10 · slide 18), hundreds of mutant alleles collapse into a smaller number of complementation groups (genes).` } },

    /* ========== 4. GENERAL LOGIC & LIMITS OF THE TEST ========== */

    { id: 'G8-C11', lec: 8, diff: 2, topic: 'Complementation groups',
      q: r`You have five mutants with the same phenotype and want to know how they fall into complementation
           groups. All ten pairwise crosses are possible, but each one costs time. What is the smallest
           number of crosses that can settle the grouping?`,
      fig: { img: 'genetics2/five_mutants_unconnected.svg' },
      opts: [r`4`, r`10`, r`5`, r`2`],
      exp: r`Each cross answers one yes/no question — same gene or not. Four crosses, each chosen to test a
             mutant that has not yet been placed against one that has, connect all five into groups. Ten is
             the complete matrix, which is what you do when crosses are cheap and you want the redundancy.`,
      expfig: { img: 'genetics2/five_mutants_spanning_tree.svg',
                cap: r`Four well-chosen crosses connect all five strains into complementation groups.` } },

    { id: 'G8-C12', lec: 8, diff: 2, topic: 'Complementation',
      q: r`Two recessive mutants with the same phenotype are crossed and the diploid is <b>mutant</b>.
           What does that tell you?`,
      fig: { img: 'genetics2/mutant_diploid_test.svg' },
      opts: [r`The two mutations are alleles of the same gene`,
             r`The two mutations are in different genes`,
             r`At least one of the mutations is dominant`,
             r`The two genes act in the same pathway`],
      exp: r`A mutant diploid means no genome in the cell can supply the missing function, which happens
             when both mutations hit the same gene. Acting in the same <i>pathway</i> is a different
             statement — that is what an extragenic suppressor or an epistasis experiment shows.`,
      expfig: { img: 'genetics2/complementation_rule_summary.svg' } },

    { id: 'G8-C14', lec: 8, diff: 3, topic: 'Complementation · limits',
      q: r`Why does the complementation test require the mutations to be <b>recessive</b>?`,
      fig: { img: 'genetics2/recessive_vs_dominant_test.svg' },
      opts: [r`A dominant allele keeps the heterozygote mutant whatever the other genome supplies, so it
                would be scored as "same gene" however the cross is set up`,
             r`Dominant mutations cannot be induced by chemical mutagens`,
             r`Recessive mutations are always null alleles`,
             r`Dominant mutations are lethal in the diploid`],
      exp: r`The logic of the test is that a wild-type copy rescues. A dominant-negative allele, for
             instance, poisons the normal product in the same cell, so the diploid stays mutant even when
             the second mutation lies in a different gene — the test then reports "same gene", wrongly. This
             is why a screen's alleles are checked for recessiveness first, by crossing to wild-type.`,
      expfig: { img: 'genetics2/dominant_negative_gal80.jpg',
                cap: r`Lecture 8 · slide 63: a dominant-negative <i>gal80</i> allele blocks Gal4 activation even when a wild-type copy is present.` } },

    { id: 'G8-C15', lec: 8, diff: 3, topic: 'Complementation · limits',
      q: r`Two alleles of a single gene occasionally give a partly wild-type diploid — intragenic
           complementation. What explains it?`,
      fig: { img: 'genetics2/intragenic_question.svg' },
      opts: [r`The protein works as a multimer, and subunits damaged in different domains can partly
                compensate for each other in a mixed complex`,
             r`One of the two alleles has reverted to wild-type`,
             r`The gene is duplicated elsewhere in the genome`,
             r`The two alleles are in fact in different genes`],
      exp: r`In a homomultimer assembled from both mutant products, a subunit defective in one domain can be
             rescued by a neighbour that is intact there. It is the standard exception to the rule that one
             complementation group equals one gene, and the reason a surprising result is worth repeating
             before it is believed.`,
      expfig: { img: 'genetics2/intragenic_multimer_answer.svg',
                cap: r`Two differently damaged subunits of one gene can form a partially active mixed multimer.` } },

  ]
}));
