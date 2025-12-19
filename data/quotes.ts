export interface Quote {
  text: string;
  category: 'love' | 'newBeginnings' | 'together' | 'engagement' | 'home' | 'future' | 'playful';
}

export const quotes: Quote[] = [
  // Love & Partnership
  { text: "Home is wherever I'm with you.", category: 'love' },
  { text: "You are my today and all of my tomorrows.", category: 'love' },
  { text: "I love you not only for what you are, but for what I am when I am with you.", category: 'love' },
  { text: "In all the world, there is no heart for me like yours.", category: 'love' },
  { text: "You're my favorite hello and my hardest goodbye.", category: 'love' },
  { text: "I fell in love the way you fall asleep: slowly, then all at once.", category: 'love' },
  { text: "Whatever our souls are made of, yours and mine are the same.", category: 'love' },
  { text: "I would rather spend one lifetime with you than face all the ages of this world alone.", category: 'love' },
  { text: "You are the best thing that's ever been mine.", category: 'love' },
  { text: "My heart is, and always will be, yours.", category: 'love' },
  { text: "I choose you. And I'll choose you over and over and over.", category: 'love' },
  { text: "You're the one I want to annoy for the rest of my life.", category: 'love' },
  { text: "I love you more than yesterday, less than tomorrow.", category: 'love' },
  { text: "You're my person.", category: 'love' },
  { text: "I never want to stop making memories with you.", category: 'love' },

  // New Beginnings
  { text: "Every love story is beautiful, but ours is my favorite.", category: 'newBeginnings' },
  { text: "The best is yet to come.", category: 'newBeginnings' },
  { text: "Here's to new beginnings and happy endings.", category: 'newBeginnings' },
  { text: "A new chapter begins.", category: 'newBeginnings' },
  { text: "This is the start of something beautiful.", category: 'newBeginnings' },
  { text: "And so the adventure begins.", category: 'newBeginnings' },
  { text: "New place, same love.", category: 'newBeginnings' },
  { text: "Every ending is a new beginning.", category: 'newBeginnings' },
  { text: "Life is about creating yourself.", category: 'newBeginnings' },
  { text: "The beginning is always today.", category: 'newBeginnings' },
  { text: "Start where you are. Use what you have. Do what you can.", category: 'newBeginnings' },
  { text: "Every day is a fresh start.", category: 'newBeginnings' },
  { text: "New keys, new doors, new adventures.", category: 'newBeginnings' },
  { text: "The first step is always the hardest, but it's also the most exciting.", category: 'newBeginnings' },
  { text: "Here's to turning the page to a beautiful new chapter.", category: 'newBeginnings' },

  // Building a Life Together
  { text: "Together is a wonderful place to be.", category: 'together' },
  { text: "Two hearts, one home.", category: 'together' },
  { text: "Better together.", category: 'together' },
  { text: "Side by side or miles apart, we're connected by heart.", category: 'together' },
  { text: "Life is better when we're together.", category: 'together' },
  { text: "You + Me = Home.", category: 'together' },
  { text: "Where we love is home.", category: 'together' },
  { text: "Love grows best in little houses.", category: 'together' },
  { text: "Let's build a life we don't need a vacation from.", category: 'together' },
  { text: "Home is not a place, it's a feeling.", category: 'together' },
  { text: "The best things in life are the people you love.", category: 'together' },
  { text: "We make a good team.", category: 'together' },
  { text: "Partners in crime, partners in life.", category: 'together' },
  { text: "You're my favorite adventure.", category: 'together' },
  { text: "Together we have it all.", category: 'together' },

  // Engagement & Commitment
  { text: "I can't wait to marry you.", category: 'engagement' },
  { text: "Forever and always.", category: 'engagement' },
  { text: "You're my happily ever after.", category: 'engagement' },
  { text: "I said yes!", category: 'engagement' },
  { text: "My favorite fairytale is our love story.", category: 'engagement' },
  { text: "I found the one my heart loves.", category: 'engagement' },
  { text: "You had me at hello.", category: 'engagement' },
  { text: "I promise to love you forever, every single day of forever.", category: 'engagement' },
  { text: "You're my once in a lifetime.", category: 'engagement' },
  { text: "I'm so glad I swiped right.", category: 'engagement' },
  { text: "From this moment on.", category: 'engagement' },
  { text: "You're worth the wait.", category: 'engagement' },
  { text: "I can't wait to spend forever with you.", category: 'engagement' },
  { text: "My soulmate, my best friend, my forever.", category: 'engagement' },
  { text: "Engaged to my favorite person.", category: 'engagement' },

  // Cozy/Home Vibes
  { text: "Let's stay home.", category: 'home' },
  { text: "Home sweet home.", category: 'home' },
  { text: "Our happy place.", category: 'home' },
  { text: "Bless this mess.", category: 'home' },
  { text: "This is our happy place.", category: 'home' },
  { text: "Welcome to our story.", category: 'home' },
  { text: "Home is where the heart is.", category: 'home' },
  { text: "All you need is love and a good couch.", category: 'home' },
  { text: "There's no place like home.", category: 'home' },
  { text: "Home: where life begins and love never ends.", category: 'home' },
  { text: "Our nest is best.", category: 'home' },
  { text: "A house is made of walls and beams; a home is built with love and dreams.", category: 'home' },
  { text: "May our walls know joy.", category: 'home' },
  { text: "Peace, love, and cozy vibes.", category: 'home' },
  { text: "Welcome home.", category: 'home' },

  // Future Dreams
  { text: "Here's to the next chapter.", category: 'future' },
  { text: "Dream big, start small, begin now.", category: 'future' },
  { text: "The future belongs to those who believe in the beauty of their dreams.", category: 'future' },
  { text: "Our future looks bright.", category: 'future' },
  { text: "Building our dreams, one day at a time.", category: 'future' },
  { text: "Can't wait to see what the future holds for us.", category: 'future' },
  { text: "Growing old with you is the greatest adventure.", category: 'future' },
  { text: "Here's to love, laughter, and happily ever after.", category: 'future' },
  { text: "Our story is just beginning.", category: 'future' },
  { text: "The best is yet to be.", category: 'future' },
  { text: "Making plans, building dreams.", category: 'future' },
  { text: "Every day with you is a step toward our dreams.", category: 'future' },
  { text: "Let's create a life we love.", category: 'future' },
  { text: "Excited for all our tomorrows.", category: 'future' },
  { text: "Our journey has just begun.", category: 'future' },

  // Playful/Fun
  { text: "You're my favorite person to do nothing with.", category: 'playful' },
  { text: "You're weird. I like it.", category: 'playful' },
  { text: "Let's be weird together.", category: 'playful' },
  { text: "You're the cheese to my macaroni.", category: 'playful' },
  { text: "I love you more than pizza. And I really love pizza.", category: 'playful' },
  { text: "You're my favorite notification.", category: 'playful' },
  { text: "Netflix and actually chill.", category: 'playful' },
  { text: "Home is where the WiFi connects automatically.", category: 'playful' },
  { text: "I like you even when I'm hungry.", category: 'playful' },
  { text: "You're the avocado to my toast.", category: 'playful' },
  { text: "Let's cuddle on the couch forever.", category: 'playful' },
  { text: "You make me smile for no reason.", category: 'playful' },
  { text: "Relationship status: couch potatoes together.", category: 'playful' },
  { text: "Love you more than my phone battery.", category: 'playful' },
  { text: "Finally, someone to blame for the thermostat.", category: 'playful' },
  { text: "You're stuck with me now.", category: 'playful' },
  { text: "Can't wait to argue about what's for dinner every night.", category: 'playful' },
  { text: "Our love story: Started with Netflix, ended with IKEA furniture.", category: 'playful' },
  { text: "I promise to always let you have the last slice.", category: 'playful' },
  { text: "You're my favorite human.", category: 'playful' },
];

// Welcome home quotes for after move-in day
export const welcomeHomeQuotes: string[] = [
  "Welcome home, Trenton & Sydney!",
  "Home at last!",
  "This is where your story continues.",
  "May your new home be filled with love and laughter.",
  "A new chapter begins here.",
  "Home is where your story begins.",
  "Welcome to your happily ever after.",
  "Love lives here now.",
  "The adventure continues in your new home.",
  "May these walls witness only joy.",
];

export function getRandomQuote(): string {
  return quotes[Math.floor(Math.random() * quotes.length)].text;
}

export function getRandomWelcomeQuote(): string {
  return welcomeHomeQuotes[Math.floor(Math.random() * welcomeHomeQuotes.length)];
}
