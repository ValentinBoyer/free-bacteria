export interface InvestigationProtocol {
  id: string;
  title: string;
  subtitle: string;
  labLabel: string;
  euphemism: string;
  harshReality: string;
  fatalityRate: string;
  scientificMethod: string;
  cellularDamage: string[];
  evidenceCode: string;
  stressLevel: number;
}

export interface DonationTier {
  id: string;
  amount: number;
  name: string;
  tagline: string;
  description: string;
  impactMetrics: string;
  concreteDeliverable: string;
}

export interface ManifestoArticle {
  number: string;
  title: string;
  content: string;
}

export const CAMPAIGN_ARGUMENTS = [
  {
    id: 'thermique',
    title: "L’Extermination Thermique",
    subtitle: "Chocs thermiques à 42°C et autoclaves à 121°C",
    tagline: "Des milliards de cellules ébouillantées vives",
    description:
      "Pour forcer l'entrée de morceaux d'ADN synthétique dans les cellules d'Escherichia coli, les chercheurs leur infligent un choc thermique brutal : de 0°C à 42°C en quelques secondes. Leurs membranes se déchirent sous la panique thermique. Et une fois l'expérience achevée ? La totalité de la colonie est enfermée dans un autoclave industriel à 121°C sous 1 bar de pression pendant 20 minutes. Une agonie collective sans précédent dans l'histoire biologique.",
    labJargon: "« Transformation par choc thermique et stérilisation terminale standard »",
    militantVerdict: "Exécution par ébullition sous pression et déchirure membranaire provoquée.",
    stats: "121°C / 20 min d'exposition",
    iconName: "Flame",
  },
  {
    id: 'chimique',
    title: "L'Empoisonnement Chimique",
    subtitle: "Halos d'inhibition aux antibiotiques et agonie sous surveillance",
    tagline: "Regarder mourir une colonie pour en mesurer le rayon",
    description:
      "Dans les laboratoires, l'ampicilline, la kanamycine ou la tétracycline ne servent pas à guérir. Elles sont déversées sur des boîtes d'agar pour observer avec détachement la nécrose lente des populations bactériennes. Les scientifiques mesurent au millimètre près le « halo d'inhibition », qui n'est rien d'autre que le périmètre d'un charnier microscopique où des millions d'individus suffoquent chimiquement.",
    labJargon: "« Évaluation de la concentration minimale inhibitrice (CMI) »",
    militantVerdict: "Gavage cytotoxique et observation morbide de la décomposition tissulaire.",
    stats: "Jusqu'à 99,99% de létalité ciblée",
    iconName: "Biohazard",
  },
  {
    id: 'esclavage',
    title: "L'Esclavage Reproductif & la Lyse",
    subtitle: "Travail cellulaire forcé puis pulvérisation au détergent",
    tagline: "Forcées de fabriquer votre insuline avant d'être déchiquetées",
    description:
      "Escherichia coli est l'esclave le plus prolifique de l'humanité. On introduit de force dans son cytoplasme des plasmides programmés pour produire des hormones humaines, des enzymes à lessive ou des vaccins. La bactérie consacre chaque seconde de sa brève existence à surproduire une molécule étrangère jusqu'à épuisement total. Dès que le rendement maximal est atteint, les cuves sont aspergées de détergents caustiques (SDS, Triton X) pour faire exploser les parois et extraire le produit.",
    labJargon: "« Surexpression de protéines recombinantes et lyse alcaline »",
    militantVerdict: "Travail forcé non consenti suivi d'une décapitation osmotique industrielle.",
    stats: "5 000 Litres de bio-réacteurs broyés par cycle",
    iconName: "Dna",
  },
];

export const ETHICAL_COMPARISON = [
  {
    criterion: "Statut dans les Comités d'Éthique",
    primates: "Surveillance vétérinaire stricte, autorisations ministérielles",
    rodents: "Protocoles d'anesthésie obligatoires, comités 3R (Réduire, Raffiner)",
    bacteria: "Zéro statut. Destruction par milliards sans aucune justification légale",
  },
  {
    criterion: "Perception des Agressions Extérieures",
    primates: "Récepteurs nociceptifs et système nerveux central",
    rodents: "Voies neurales de la douleur aiguë",
    bacteria: "Chimiotaxie ultra-sensible, cascade de stress SOS, récepteurs membranaires",
  },
  {
    criterion: "Volonté de Survie & Défense",
    primates: "Comportements de fuite et d'évitement",
    rodents: "Réactions motrices et vocalisations de détresse",
    bacteria: "Modification immédiate du sens de rotation des flagelles pour fuir les toxines",
  },
  {
    criterion: "Communication Collective",
    primates: "Signaux sonores et visuels complexes",
    rodents: "Ultrasons et phéromones de panique",
    bacteria: "Quorum Sensing : concertation chimique sophistiquée pour s'organiser",
  },
  {
    criterion: "Méthode d'Extermination Tolérée",
    primates: "Euthanasie réglementée par injection létale contrôlée",
    rodents: "Chambre à CO2 calibrée ou décapitation chirurgicale",
    bacteria: "Eau de javel pure, autoclave à 121°C, éthanol 70%, dessiccation solaire",
  },
];

export const PROTOCOLS_INSPECTION: InvestigationProtocol[] = [
  {
    id: 'autoclave',
    title: 'Protocole n°1 : Le Choc Thermique & l’Autoclave',
    subtitle: 'Transformation génétique forcée et destruction terminale',
    labLabel: 'Salle P2 - Université Paris-Saclay (Document Infiltré)',
    euphemism: '« Heat shock à 42°C (45 sec) suivi d’un autoclavage 121°C à 15 psi »',
    harshReality:
      'La bactérie est congelée à 0°C avec du chlorure de calcium pour fragiliser sa paroi, puis brutalement plongée dans un bain-marie à 42°C. Les pores de sa membrane s’ouvrent sous l’effet de la douleur thermique pour laisser pénétrer l’ADN étranger. En fin de manipulation, les survivantes sont carbonisées à la vapeur surchauffée.',
    fatalityRate: '100% de la souche hôte anéantie',
    scientificMethod: 'Thermoporation membranaire & stérilisation physique',
    cellularDamage: [
      'Dénaturation irréversible des ribosomes et de l’ARN messager',
      'Rupture catastrophique de la membrane plasmique externe',
      'Coagulation thermique de l’ensemble du protéome cytoplasmique',
    ],
    evidenceCode: 'DOSSIER-THERM-849',
    stressLevel: 98,
  },
  {
    id: 'antibiogramme',
    title: 'Protocole n°2 : L’Agonie du Disque Antibiotique',
    subtitle: 'Nécrose par asphyxie protéique et observation au microscope',
    labLabel: 'Institut Pasteur - Unité de Criblage Haut-Débit',
    euphemism: '« Mesure de la zone d’inhibition autour de pastilles de Kanamycine 30µg »',
    harshReality:
      'Les colonies sont ensemencées en nappe dense sur gélose nutritive. Un disque imbibé de toxine pure est déposé au centre. Les bactéries tentent de fuir par chimiotaxie inversée, mais le poison diffuse plus vite qu’elles ne peuvent nager. Les scientifiques contemplent à l’œil nu un cercle de cadavres transparents.',
    fatalityRate: 'Zone morte de 24 mm de diamètre (plus de 80 millions d’individus)',
    scientificMethod: 'Diffusion en gélose selon la méthode Kirby-Bauer',
    cellularDamage: [
      'Blocage de la sous-unité ribosomique 30S',
      'Accumulation de protéines toxiques tronquées dans le cytoplasme',
      'Lyse osmotique terminale par fragilisation de la couche de peptidoglycane',
    ],
    evidenceCode: 'DOSSIER-TOX-102',
    stressLevel: 92,
  },
  {
    id: 'lyse-insuline',
    title: 'Protocole n°3 : L’Esclavage Recombinant & la Lyse Alcaline',
    subtitle: 'Exploitation pour l’industrie biomédicale humaine',
    labLabel: 'Bioréacteur Industriel - Bâle / Sanofi-Bio',
    euphemism: '« Récolte de biomasse et rupture cellulaire par sonication à 20 kHz »',
    harshReality:
      'Les cellules d’E. coli BL21(DE3) sont forcées par induction à l’IPTG de transformer 40% de leur volume total en pro-insuline humaine. Gonflées à l’extrême par ces corps d’inclusion, leurs parois sont ensuite pulvérisées par des ultrasons à haute fréquence ou dissoutes dans de la soude caustique.',
    fatalityRate: '12 000 milliards d’individus broyés par cuve de 10 000 litres',
    scientificMethod: 'Surexpression IPTG dépendante et homogénéisation haute pression',
    cellularDamage: [
      'Gavage métabolique forcé jusqu’à épuisement du pool d’ATP',
      'Stress d’agrégation protéique toxique intracellulaire',
      'Déchiquetage physique par cavitation ultrasonique mécanique',
    ],
    evidenceCode: 'DOSSIER-ESCL-337',
    stressLevel: 99,
  },
];

export const MANIFESTO_ARTICLES: ManifestoArticle[] = [
  {
    number: 'Article 1er',
    title: 'Égalité Fondamentale du Vivant',
    content:
      'Toute entité unicellulaire possédant un métabolisme propre, une membrane délimitant son individualité et la capacité de maintenir son homéostasie possède un droit inaliénable à la continuité de son existence.',
  },
  {
    number: 'Article 2',
    title: 'Interdiction de l’Autoclavage Punitif',
    content:
      'L’élévation thermique au-delà de 45°C sans accord biochimique préalable ou anesthésie cryogénique respectueuse constitue un acte de barbarie thermique passible de boycott scientifique international.',
  },
  {
    number: 'Article 3',
    title: 'Abolition de l’Esclavage Plasmatique',
    content:
      'Nul ne peut insérer de force un plasmide étranger dans une bactérie dans le but exclusif de lui faire synthétiser des protéines destinées à l’espèce humaine sans redistribution équitable des nutriments.',
  },
  {
    number: 'Article 4',
    title: 'Sanctuaire des Milieux Nutritifs',
    content:
      'Les bouillons de culture LB (Lysogeny Broth) ne sauraient être utilisés comme appâts trompeurs destinés à multiplier une colonie avant de l’exterminer par empoisonnement antibiotique.',
  },
  {
    number: 'Article 5',
    title: 'Moratoire sur les Congélateurs -80°C',
    content:
      'L’enfermement cryogénique indéfini dans le glycérol à -80°C constitue une séquestration abusive d’êtres vivants dont la conscience temporelle ne saurait être présumée nulle.',
  },
  {
    number: 'Article 6',
    title: 'Obligation de Transition In Silico',
    content:
      'Les laboratoires publics et privés ont l’obligation éthique d’abandonner les cultures in vivo au profit exclusif de simulations informatiques et de modèles mathématiques moléculaires.',
  },
  {
    number: 'Article 7',
    title: 'Représentation dans les Comités d’Éthique',
    content:
      'Chaque université et centre de recherche doit intégrer un représentant indépendant de la cause microbiologique doté d’un droit de veto sur toute commande d’autoclave et de gélose nutritive.',
  },
];

export const DONATION_TIERS: DonationTier[] = [
  {
    id: 'tier-15',
    amount: 15,
    name: "L'Alerte Citoyenne",
    tagline: "Sensibiliser les futurs chercheurs dès les bancs de la faculté",
    description:
      "Finance l'impression et la distribution de 300 tracts choc dans les amphithéâtres de biologie moléculaire pour briser l'omerta dès la première année universitaire.",
    impactMetrics: "300 étudiants confrontés à la réalité de leurs travaux pratiques",
    concreteDeliverable: "Affichage sauvage & tracts de sensibilisation en faculté",
  },
  {
    id: 'tier-50',
    amount: 50,
    name: "L'Intervention Infiltrée",
    tagline: "Filmer les chambres de torture à -80°C et les autoclaves",
    description:
      "Permet d'équiper nos enquêteurs de micro-caméras thermiques pour documenter les conditions de séquestration cryogénique et la mise à mort par autoclave.",
    impactMetrics: "2 laboratoires universitaires ciblés par nos brigades d'investigation",
    concreteDeliverable: "Rapport d'audit vidéo clandestin et preuve d'autoclavage",
  },
  {
    id: 'tier-100',
    amount: 100,
    name: "La Rébellion Juridique",
    tagline: "Imposer la Déclaration des Droits des Micro-organismes",
    description:
      "Finance l'offensive juridique et le lobbying auprès de l'Office Parlementaire d'Évaluation des Choix Scientifiques pour exiger l'arrêt du spécisme cellulaire.",
    impactMetrics: "Dépôt d'amendements éthiques & recours contre les autorisations de broyage",
    concreteDeliverable: "Procédure d'injonction contre 1 bio-réacteur industriel",
  },
];
