export const project = { name: 'lauklab', brand: 'Chiai' }

export const metadata = {
  title: project.name + ' by ' + project.brand + ' | Closed beta testing',
  description: 'LaukLab by Chiai is currently in closed beta testing. Explore the app and Malaysian meals built around your pantry.',
}

export const kitchen = {
  servings: 2, minutes: 45, equipment: 'frying pan',
  ingredients: [
    { id: 'eggs', name: 'Eggs', alias: 'Telur', amount: 4, unit: 'eggs', label: '4 eggs', group: 'Proteins' },
    { id: 'rice', name: 'Cooked rice', alias: 'Nasi', amount: 400, unit: 'g', label: '400 g cooked rice', group: 'Staples' },
    { id: 'shallots', name: 'Shallots', alias: 'Bawang merah', amount: 60, unit: 'g', label: '60 g shallots', group: 'Produce' },
    { id: 'garlic', name: 'Garlic', alias: 'Bawang putih', amount: 20, unit: 'g', label: '20 g garlic', group: 'Produce' },
    { id: 'oil', name: 'Cooking oil', alias: 'Minyak masak', amount: 6, unit: 'tbsp', label: '6 tbsp cooking oil', group: 'Staples' },
    { id: 'salt', name: 'Salt', alias: 'Garam', amount: 1, unit: 'tsp', label: '1 tsp salt', group: 'Staples' },
  ],
  meals: [
    {
      id: 'nasi-goreng-kampung', name: 'Nasi goreng kampung', minutes: 35, servings: 2, equipment: 'frying pan',
      source: { name: 'Che Nom', url: 'https://resepichenom.com/resepi/nasi-goreng-kampung-betul-betul-cara-kampung' },
      version: 'Egg, anchovy and kangkung version',
      ingredients: [
        { id: 'rice', amount: 400, label: '400 g cooked rice' }, { id: 'eggs', amount: 2, label: '2 eggs' },
        { id: 'shallots', amount: 30, label: '30 g shallots' }, { id: 'garlic', amount: 10, label: '10 g garlic' },
        { id: 'oil', amount: 2, label: '2 tbsp cooking oil' }, { id: 'salt', amount: 0.25, label: '¼ tsp salt' },
      ],
      extras: [
        { id: 'anchovies', name: 'Dried anchovies', alias: 'Ikan bilis', amount: 20, unit: 'g', label: '20 g dried anchovies', group: 'Proteins' },
        { id: 'kangkung', name: 'Kangkung', alias: 'Kangkung', amount: 100, unit: 'g', label: '100 g kangkung', group: 'Produce' },
        { id: 'chilies', name: 'Bird’s eye chilies', alias: 'Cili padi', amount: 3, unit: 'pieces', label: '3 bird’s eye chilies', group: 'Produce' },
        { id: 'belacan', name: 'Belacan', alias: 'Belacan', amount: 3, unit: 'g', label: '3 g belacan', group: 'Staples' },
      ],
      fit: 'Uses your cooked rice, eggs, garlic and shallots. Check the anchovies, kangkung, chilies and belacan before starting.',
      steps: [
        'Loosen the chilled cooked rice. Slice the shallots and garlic, chop the chilies, and separate the kangkung stems from the leaves.',
        'Heat the cooking oil in a frying pan. Fry the dried anchovies until crisp, then lift them out. Scramble the eggs in the same pan and set aside.',
        'Cook the shallots, garlic, chilies and belacan in the remaining oil until fragrant. Add the kangkung stems, then the rice and salt.',
        'Add the kangkung leaves and return the eggs. Stir until the rice is steaming hot throughout. Divide between two plates and finish with the anchovies.',
      ],
    },
    {
      id: 'mee-goreng-mamak', name: 'Mee goreng mamak', minutes: 40, servings: 2, equipment: 'frying pan',
      source: { name: 'Che Nom', url: 'https://resepichenom.com/resepi/mee-goreng-mamak' },
      version: 'Egg and tofu version · uses already-boiled potato',
      ingredients: [
        { id: 'eggs', amount: 2, label: '2 eggs' }, { id: 'shallots', amount: 30, label: '30 g shallots' },
        { id: 'garlic', amount: 10, label: '10 g garlic' }, { id: 'oil', amount: 2, label: '2 tbsp cooking oil' },
      ],
      extras: [
        { id: 'noodles', name: 'Yellow noodles', alias: 'Mi kuning', amount: 300, unit: 'g', label: '300 g yellow noodles', group: 'Staples' },
        { id: 'tofu', name: 'Firm tofu', alias: 'Tauhu', amount: 100, unit: 'g', label: '100 g firm tofu', group: 'Proteins' },
        { id: 'potato', name: 'Boiled potato', alias: 'Kentang rebus', amount: 100, unit: 'g', label: '100 g already-boiled potato', group: 'Produce' },
        { id: 'sawi', name: 'Sawi', alias: 'Sawi', amount: 100, unit: 'g', label: '100 g sawi', group: 'Produce' },
        { id: 'sprouts', name: 'Bean sprouts', alias: 'Taugeh', amount: 50, unit: 'g', label: '50 g bean sprouts', group: 'Produce' },
        { id: 'chiliPaste', name: 'Chili paste', alias: 'Cili kisar', amount: 1.5, unit: 'tbsp', label: '1½ tbsp chili paste', group: 'Staples' },
        { id: 'curry', name: 'Curry powder', alias: 'Serbuk kari', amount: 0.5, unit: 'tbsp', label: '½ tbsp curry powder', group: 'Staples' },
        { id: 'chiliSauce', name: 'Chili sauce', alias: 'Sos cili', amount: 1, unit: 'tbsp', label: '1 tbsp chili sauce', group: 'Staples' },
        { id: 'ketchup', name: 'Tomato sauce', alias: 'Sos tomato', amount: 1.5, unit: 'tbsp', label: '1½ tbsp tomato sauce', group: 'Staples' },
        { id: 'oysterSauce', name: 'Oyster sauce', alias: 'Sos tiram', amount: 1, unit: 'tbsp', label: '1 tbsp oyster sauce', group: 'Staples' },
        { id: 'sweetSoy', name: 'Sweet soy sauce', alias: 'Kicap manis', amount: 1, unit: 'tbsp', label: '1 tbsp sweet soy sauce', group: 'Staples' },
        { id: 'tamarind', name: 'Tamarind water', alias: 'Air asam jawa', amount: 1, unit: 'tbsp', label: '1 tbsp tamarind water', group: 'Staples' },
      ],
      fit: 'Uses your eggs, garlic, shallots and oil. The noodles, tofu, cooked potato, vegetables and sauces are listed separately.',
      steps: [
        'Rinse and drain the yellow noodles. Chop the shallots and garlic; slice the firm tofu, boiled potato and sawi. Rinse the bean sprouts.',
        'Heat the cooking oil in a frying pan. Brown the tofu, then set it aside. Cook the shallots, garlic and chili paste until the paste is cooked through.',
        'Stir in the curry powder, chili sauce, tomato sauce, oyster sauce, sweet soy sauce and tamarind water. Add the potato and sawi stems. Add the eggs and stir until set.',
        'Fold in the noodles, tofu, sawi leaves and bean sprouts. Toss until everything is hot and the noodles are coated. Divide between two plates.',
      ],
    },
    {
      id: 'bihun-goreng', name: 'Bihun goreng', minutes: 35, servings: 2, equipment: 'frying pan',
      source: { name: 'Che Nom', url: 'https://resepichenom.com/resepi/bihun-goreng' },
      version: 'Chicken and prawn version',
      ingredients: [
        { id: 'shallots', amount: 30, label: '30 g shallots' }, { id: 'garlic', amount: 10, label: '10 g garlic' },
        { id: 'oil', amount: 2, label: '2 tbsp cooking oil' }, { id: 'salt', amount: 0.25, label: '¼ tsp salt' },
      ],
      extras: [
        { id: 'bihun', name: 'Rice vermicelli', alias: 'Bihun', amount: 160, unit: 'g', label: '160 g dry rice vermicelli', group: 'Staples' },
        { id: 'chicken', name: 'Chicken', alias: 'Ayam', amount: 100, unit: 'g', label: '100 g chicken, thinly sliced', group: 'Proteins' },
        { id: 'prawns', name: 'Prawns', alias: 'Udang', amount: 80, unit: 'g', label: '80 g peeled prawns', group: 'Proteins' },
        { id: 'tomatoes', name: 'Tomato', alias: 'Tomato', amount: 1, unit: 'tomatoes', label: '1 tomato', group: 'Produce' },
        { id: 'sawi', name: 'Sawi', alias: 'Sawi', amount: 100, unit: 'g', label: '100 g sawi', group: 'Produce' },
        { id: 'sprouts', name: 'Bean sprouts', alias: 'Taugeh', amount: 50, unit: 'g', label: '50 g bean sprouts', group: 'Produce' },
        { id: 'chiliPaste', name: 'Chili paste', alias: 'Cili kisar', amount: 1, unit: 'tbsp', label: '1 tbsp chili paste', group: 'Staples' },
        { id: 'chiliSauce', name: 'Chili sauce', alias: 'Sos cili', amount: 1, unit: 'tbsp', label: '1 tbsp chili sauce', group: 'Staples' },
        { id: 'oysterSauce', name: 'Oyster sauce', alias: 'Sos tiram', amount: 0.5, unit: 'tbsp', label: '½ tbsp oyster sauce', group: 'Staples' },
        { id: 'sweetSoy', name: 'Sweet soy sauce', alias: 'Kicap manis', amount: 0.5, unit: 'tbsp', label: '½ tbsp sweet soy sauce', group: 'Staples' },
        { id: 'soy', name: 'Light soy sauce', alias: 'Kicap cair', amount: 0.5, unit: 'tbsp', label: '½ tbsp light soy sauce', group: 'Staples' },
        { id: 'pepper', name: 'White pepper', alias: 'Lada sulah', amount: 0.125, unit: 'tsp', label: '⅛ tsp white pepper', group: 'Staples' },
        { id: 'water', name: 'Water', alias: 'Air', amount: 60, unit: 'ml', label: '60 ml water', group: 'Staples' },
      ],
      fit: 'Uses your garlic, shallots, oil and salt. Check the vermicelli, protein, vegetables and sauces before you start.',
      steps: [
        'Soak the rice vermicelli according to its packet, then drain. Chop the shallots, garlic and tomato; slice the sawi and chicken. Keep raw chicken and prawns separate from ready-to-eat ingredients.',
        'Heat the cooking oil in a frying pan. Cook the shallots, garlic and chili paste until fragrant. Add the chicken and cook through, then add the prawns and cook until opaque.',
        'Add the tomato, sawi stems, chili sauce, oyster sauce, sweet soy sauce, light soy sauce, white pepper, salt and water. Stir in the drained vermicelli.',
        'Toss in the sawi leaves and bean sprouts. Continue cooking until the noodles soften and everything is hot. Divide between two plates.',
      ],
    },
  ],
}

export const navigation = [
  { label: 'The idea', href: '#idea' }, { label: 'The app', href: '#app-preview' }, { label: 'Meals', href: '#preview' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'About us', href: '#about' },
]

export const copy = {
  hero: {
    status: 'An independent project by ' + project.brand + ' · Currently in closed beta testing',
    headline: 'Good meals start with what you already have.',
    description: 'Your pantry, a few practical choices, and a Malaysian meal for tonight. Keep ingredients in view, compare what fits, and follow clear cooking steps.',
    previewAction: 'Explore the app', mealsAction: 'Browse Malaysian meals',
    pantryTitle: 'A little in the kitchen.',
    pantryIntro: 'A starting pantry for two. Each recipe shows the extra ingredients you will need.',
    pantryFooter: 'Oil and salt are listed too. Nothing is assumed.',
  },
  idea: {
    label: 'The idea', title: 'Less time deciding. More of what’s already there.',
    description: 'A few eggs. Garlic and shallots. Rice from an earlier meal. The ingredients are there, but choosing what to make can still take time.',
    goal: 'Start with a short list of curated recipes. Compare what you can cook now with what needs an extra ingredient, then follow clear cooking steps.',
    goals: ['Make use of ingredients already at home.', 'Spend less time choosing what to cook.', 'See what is missing before choosing a meal.'],
    stepsTitle: 'From your pantry to the table',
    steps: [
      { title: 'Tell us what you have.', description: 'Enter ingredients in English or Malay, check the interpreted names, and confirm quantities and staples.' },
      { title: 'Set the practical details.', description: 'Your cooking time, servings, and the equipment in your kitchen.' },
      { title: 'Choose from three meal ideas.', description: 'Compare what you can cook now with what needs a few extras.' },
    ],
  },
  preview: {
    label: 'Malaysian meals', title: 'Familiar meals. A clearer plan.',
    description: 'Start with nasi goreng kampung, mee goreng mamak, or bihun goreng. Compare quantities and extra ingredients before choosing a meal.',
    note: 'LaukLab kitchen versions inspired by the recipes linked below. Times include preparation; mee goreng uses a potato that is already boiled. Adjust heat and seasoning to your taste.',
    usedTitle: 'From your pantry', extraTitle: 'Extra ingredients',
    readyLabel: 'You have the ingredients', extraLabel: 'Needs a few extra ingredients',
    noExtras: 'None needed.', stepsAction: 'See cooking steps', stepsLabel: 'Cooking method', sourceLabel: 'Recipe inspiration',
  },
  planned: {
    label: 'Planned capabilities', title: 'A focused first version.',
    description: 'The closed beta focuses on the everyday journey from a confirmed pantry to a meal you can cook.',
    features: [
      { name: 'Three meals that fit', description: 'Match curated recipes to confirmed quantities, time, servings, and equipment. Show shortages before you choose.' },
      { name: 'English and Malay ingredient input', description: 'Review ingredient names before saving them. The planned interface starts in English.' },
      { name: 'Clear cooking steps', description: 'Follow a recipe step by step, then review pantry deductions before applying them.' },
      { name: 'Save meals to cook again', description: 'Keep useful recipes close without making an account a requirement for getting started.' },
    ],
    status: 'Beta focus',
  },
  roadmap: {
    label: 'Development roadmap', title: 'One useful step at a time.',
    stages: [
      { label: 'Current', title: 'Closed beta testing', description: 'Refining the pantry-to-meal journey before wider access.' },
      { label: 'Next', title: 'Learn from the beta', description: 'Review recipe clarity, ingredient quantities, and the steps that make cooking easier.' },
      { label: 'Then', title: 'Open access thoughtfully', description: 'Broaden availability when the core cooking flow is ready.' },
      { label: 'Later', title: 'Plan beyond tonight', description: 'Weekly planning and a combined shopping list, if the pilot shows people need them.' },
    ],
  },
  about: {
    title: 'About us.',
    introduction: 'Cooking starts long before the pan gets hot. It starts with knowing what you have and deciding what to make.',
    description: 'LaukLab is an independent software project by ' + project.brand + ', built around the everyday kitchen. We’re designing it for home cooks in Malaysia who want a clearer way to turn ingredients into familiar meals.',
    purpose: 'The cooking pot and flask in our mark bring those two ideas together: everyday cooking, with room to experiment. Curated recipes, visible quantities, and practical choices guide the experience.',
    approachAction: 'Read our approach',
  },
  approach: {
    title: 'How we build LaukLab.',
    description: 'A useful cooking app should help with the decisions between opening the fridge and serving dinner.',
    principles: [
      { title: 'Start with your pantry.', description: 'Ingredients, quantities, and equipment come first. Oil, salt, and other staples need confirmation too.' },
      { title: 'Keep recipes grounded.', description: 'Curated recipes provide the quantities and cooking steps. Recipe inspiration is credited, and extra ingredients stay visible before you choose.' },
      { title: 'Keep you in control.', description: 'Review English or Malay ingredient input before saving. Check substitutions and exclusions, then confirm pantry deductions after cooking.' },
    ],
  },
  beta: {
    title: 'Currently in closed beta testing.',
    description: 'We’re refining the pantry-to-meal journey: ingredient input, recipe quantities, meal choices, and cooking steps.',
    access: 'Public registration is not open yet. Wider access will follow when the core cooking flow is ready; there is no announced release date.',
    action: 'See what comes next',
  },
  faq: {
    title: 'A few things to know.',
    questions: [
      { question: 'Can I join the beta?', answer: 'LaukLab is currently in closed beta testing. Public registration is not open yet. You can explore the app screens and recipes on this page.' },
      { question: 'How are the recipes chosen?', answer: 'Start with familiar Malaysian meals and clear ingredient quantities. Each kitchen version links to its recipe inspiration. Your pantry, servings, time, and equipment guide the choice.' },
      { question: 'Is the project focused on Malaysian cooking?', answer: 'Yes. We’re designing it for adult home cooks in Malaysia, especially people cooking simple weekday meals for one or two.' },
      { question: 'Which features are still planned?', answer: 'Pantry quantities, English and Malay ingredient input, curated matching, guided cooking, and saved recipes are planned for a first version. Weekly planning and combined shopping lists will follow only if pilot feedback supports them.' },
      { question: 'Can I rely on it for dietary or medical advice?', answer: 'The project is not intended to provide medical or nutritional advice. We do not claim allergen safety, halal certification, or suitability for medical diets.' },
    ],
  },
  appPreview: {
    title: 'A look inside your kitchen.',
    description: 'Keep your pantry in view, choose a meal, and follow the recipe. Explore the screens below.',
    navigationLabel: 'App preview screens',
    screens: [
      { id: 'cook', label: 'Cook', heading: 'A meal that fits your evening.', caption: 'Set servings, time, and equipment before finding a meal.', alt: 'LaukLab Cook screen with pantry summary and cooking choices' },
      { id: 'pantry', label: 'Pantry', heading: 'Know what is in your kitchen.', caption: 'Review ingredient amounts and confirm your kitchen staples.', alt: 'LaukLab Pantry screen with quantities and reviewed ingredients' },
      { id: 'recipe', label: 'Recipe', heading: 'From ingredients to dinner.', caption: 'Nasi goreng kampung, with quantities and ingredient gaps in view.', alt: 'LaukLab nasi goreng kampung recipe screen with available and extra ingredients' },
    ],
  },
  ui: {
    skipLink: 'Skip to content', menu: 'Menu', navigationLabel: 'Page sections',
    appearanceLabel: 'Theme', appearanceOptions: [
      { value: 'system', label: 'System' }, { value: 'light', label: 'Light' }, { value: 'dark', label: 'Dark' },
    ],
    servings: '2 servings', time: 'Up to 45 minutes', equipment: '1 frying pan', minutes: 'min', backToTop: 'Back to top',
    companyNavigationLabel: 'Company',
    companyLinks: [
      { label: 'About us', href: '#about' }, { label: 'Our approach', href: '#approach' },
      { label: 'Closed beta', href: '#beta' }, { label: 'FAQ', href: '#faq' },
    ],
  },
}
