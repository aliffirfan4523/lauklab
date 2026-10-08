export const project = { name: 'lauklab', brand: 'Chiai', email: 'aliff@chiai.my', portfolioUrl: 'https://chiai.my' }

export const metadata = {
  title: project.name + ' by ' + project.brand + ' | A cooking idea in development',
  description: 'An independent cooking project for Malaysian home cooks. See pre-written meal ideas using ingredients already at home, and share your feedback with Chiai.',
}

export const earlyAccessHref = 'mailto:' + project.email + '?subject=' +
  encodeURIComponent(project.name + ' by ' + project.brand + ' - early access interest')

export const navigation = [
  { label: 'The idea', href: '#idea' }, { label: 'Preview', href: '#preview' },
  { label: 'Roadmap', href: '#roadmap' }, { label: 'Contact', href: '#contact' },
]

export const copy = {
  hero: {
    status: 'An independent project by ' + project.brand + ' · In development',
    headline: 'Good meals start with what you already have.',
    description: 'We’re building a cooking assistant for Malaysian home cooks: practical meal ideas based on your ingredients, available time, and kitchen equipment.',
    previewAction: 'See the sample meals', contactAction: 'Ask about early access',
    emailNote: 'Early access opens your email application.',
    pantryTitle: 'A little in the kitchen.',
    pantryIntro: 'A fixed example of what two people could cook with.',
    pantryFooter: 'Oil and salt are listed too. Nothing is assumed.',
  },
  idea: {
    label: 'The idea', title: 'Less time deciding. More of what’s already there.',
    description: 'A few eggs. Some cabbage. Rice from an earlier meal. The ingredients are there, but choosing what to make can still take time.',
    goal: 'We want to make that decision a little easier, with a short list of practical meals and a clear view of anything you would need to buy.',
    goals: ['Make use of ingredients already at home.', 'Spend less time choosing what to cook.', 'See what is missing before choosing a meal.'],
    stepsTitle: 'The experience we’re working towards',
    steps: [
      { title: 'Tell us what you have.', description: 'Include quantities, ingredients to use first, and anything you want to leave out.' },
      { title: 'Set the practical details.', description: 'Your cooking time, servings, and the equipment in your kitchen.' },
      { title: 'Choose from three meal ideas.', description: 'Compare what you can cook now with what needs a few extras.' },
    ],
  },
  preview: {
    label: 'The sample kitchen', title: 'Three ways to use this pantry.',
    description: 'The same starting ingredients, a frying pan, and twenty minutes. Each meal below is an alternative; choose one.',
    disclaimer: 'Illustrative preview — sample data, not live AI.',
    note: 'These are pre-written sample ideas. Times include preparation and are illustrative. The recipes have not been professionally tested.',
    usedTitle: 'From your pantry', extraTitle: 'Extra ingredients',
    readyLabel: 'You have the ingredients', extraLabel: 'Needs a few extra ingredients',
    noExtras: 'None needed.', stepsAction: 'See sample steps', stepsLabel: 'Sample cooking flow',
  },
  planned: {
    label: 'Planned capabilities', title: 'Built around everyday cooking.',
    description: 'These capabilities are planned. The sample above only shows the idea.',
    features: [
      { name: 'Ingredient-aware meal suggestions', description: 'Start with what you have, including quantities and ingredients to use first.' },
      { name: 'Time, servings, and equipment', description: 'Keep suggestions within the practical limits of your kitchen.' },
      { name: 'Ingredient substitutions', description: 'Find supported alternatives when something is missing or excluded.' },
      { name: 'English and Bahasa Malaysia', description: 'Use the language you are most comfortable cooking in.' },
    ],
    status: 'Planned',
  },
  roadmap: {
    label: 'Development roadmap', title: 'One useful step at a time.',
    stages: [
      { label: 'Current', title: 'An idea you can explore', description: 'Concept development and this illustrative product preview.' },
      { label: 'Next', title: 'A working first version', description: 'An ingredient-to-meal MVP with grounded suggestions.' },
      { label: 'Then', title: 'A small home-cook pilot', description: 'Learn from people who cook the suggestions in their own kitchens.' },
      { label: 'Later', title: 'Beyond tonight’s meal', description: 'Saved meals, meal planning, and shopping-list improvements.' },
    ],
  },
  about: {
    label: 'About ' + project.brand, title: 'An independent project, with a practical purpose.',
    description: project.name + ' is an early-stage software project under ' + project.brand + ', focused on a practical AI-assisted cooking tool. The application is still in development; this page is a way to share the idea and hear what home cooks need.',
  },
  faq: {
    title: 'A few things to know.',
    questions: [
      { question: 'Can I use the application yet?', answer: 'Not yet. This is a landing page and an illustrative preview. A working ingredient-to-meal application is the next development stage.' },
      { question: 'Does this preview use live AI?', answer: 'No. The three sample meals and cooking flows are pre-written and included with this page. The preview does not send ingredients to an AI provider.' },
      { question: 'Is the project focused on Malaysian cooking?', answer: 'Yes. We’re designing it for adult home cooks in Malaysia, especially people cooking simple weekday meals for one or two.' },
      { question: 'Which features are still planned?', answer: 'Ingredient-aware suggestions, time and equipment constraints, substitutions, and English and Bahasa Malaysia support are planned. Saved meals, meal planning, and shopping-list improvements are longer-term ideas.' },
      { question: 'Can I rely on it for dietary or medical advice?', answer: 'The project is not intended to provide medical or nutritional advice. The sample recipes have not been professionally tested. We do not claim allergen safety, halal certification, or suitability for medical diets.' },
      { question: 'How can I share feedback or ask about early access?', answer: 'Email ' + project.email + '. The early-access link opens your email application with a subject filled in. It does not register you on a waitlist.' },
    ],
  },
  contact: {
    label: 'Help shape ' + project.name, title: 'What would make cooking easier for you?',
    description: 'Tell us about the ingredients you often have, the meals you struggle to choose, or what you would want from an early version.',
    action: 'Email about early access',
    note: 'Opens your email application. Your interest is sent by email, not stored through this page.',
    portfolioAction: 'Back to the Chiai portfolio',
  },
  ui: { skipLink: 'Skip to content', menu: 'Menu', navigationLabel: 'Page sections', servings: '2 servings', time: '20 minutes', equipment: '1 frying pan', minutes: 'min', backToTop: 'Back to top' },
}

export const sample = {
  servings: 2, minutes: 20, equipment: 'frying pan',
  ingredients: [
    { id: 'eggs', amount: 4, label: '4 eggs' }, { id: 'cabbage', amount: 200, label: '200 g cabbage' },
    { id: 'onion', amount: 100, label: '1 onion (100 g)' }, { id: 'rice', amount: 400, label: '400 g cooked rice' },
    { id: 'oil', amount: 2, label: '2 tbsp cooking oil' }, { id: 'salt', amount: 0.5, label: '½ tsp salt' },
  ],
  meals: [
    {
      id: 'fried-rice', name: 'Egg and cabbage fried rice', minutes: 18, servings: 2, equipment: 'frying pan',
      ingredients: [
        { id: 'eggs', amount: 2, label: '2 eggs' }, { id: 'cabbage', amount: 200, label: '200 g cabbage' },
        { id: 'onion', amount: 100, label: '100 g onion' }, { id: 'rice', amount: 400, label: '400 g cooked rice' },
        { id: 'oil', amount: 1, label: '1 tbsp cooking oil' }, { id: 'salt', amount: 0.25, label: '¼ tsp salt' },
      ],
      extras: [], fit: 'One pan, with a little of everything from the example pantry.',
      steps: [
        'Thinly slice the onion and cabbage. Beat the eggs and loosen the rice.',
        'Heat the oil. Stir-fry the onion and cabbage until softened.',
        'Push the vegetables aside. Add the eggs and scramble until set.',
        'Mix in the rice and salt. Stir until the rice is steaming hot throughout, then divide between two plates.',
      ],
    },
    {
      id: 'omelette', name: 'Cabbage omelette with rice', minutes: 20, servings: 2, equipment: 'frying pan',
      ingredients: [
        { id: 'eggs', amount: 4, label: '4 eggs' }, { id: 'cabbage', amount: 150, label: '150 g cabbage' },
        { id: 'onion', amount: 50, label: '50 g onion' }, { id: 'rice', amount: 400, label: '400 g cooked rice' },
        { id: 'oil', amount: 1, label: '1 tbsp cooking oil' }, { id: 'salt', amount: 0.25, label: '¼ tsp salt' },
      ],
      extras: [], fit: 'A different way to use the eggs and vegetables, with rice on the side.',
      steps: [
        'Finely slice the cabbage and onion. Beat the eggs with the salt.',
        'Heat 1 tsp of the oil. Warm the rice until steaming hot throughout, then divide between two plates.',
        'Add the remaining 2 tsp oil. Cook the onion and cabbage until softened.',
        'Pour in the eggs. Cook over medium-low heat, lifting the edges and turning the omelette to finish, until fully set.',
        'Divide the omelette between the rice plates.',
      ],
    },
    {
      id: 'tomato-bowls', name: 'Tomato, egg and cabbage rice bowls', minutes: 20, servings: 2, equipment: 'frying pan',
      ingredients: [
        { id: 'eggs', amount: 2, label: '2 eggs' }, { id: 'cabbage', amount: 100, label: '100 g cabbage' },
        { id: 'onion', amount: 50, label: '50 g onion' }, { id: 'rice', amount: 400, label: '400 g cooked rice' },
        { id: 'oil', amount: 1, label: '1 tbsp cooking oil' }, { id: 'salt', amount: 0.25, label: '¼ tsp salt' },
      ],
      extras: [{ id: 'tomatoes', amount: 250, label: '2 tomatoes (250 g)' }],
      fit: 'One named extra gives the same pantry a different meal.',
      steps: [
        'Chop the tomatoes. Thinly slice the cabbage and onion, and beat the eggs.',
        'Heat 1 tsp of the oil. Warm the rice until steaming hot throughout, then divide between two bowls.',
        'Add 1 tsp oil. Scramble the eggs until set and transfer to a plate.',
        'Add the remaining 1 tsp oil. Cook the onion, cabbage, tomatoes, and salt until softened.',
        'Return the eggs, heat through, and spoon over the rice.',
      ],
    },
  ],
}
