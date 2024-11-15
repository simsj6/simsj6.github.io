// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
    "Hello, I'm your gardening assistant. What would you like help with today?",
    "Hi there! Tell me what you need help with in your garden.",
    "How can I assist you in taking care of your plants today?"
];
  
var elizaFinals = [
    "Goodbye! I hope your plants thrive.",
    "It was a pleasure helping you with your garden. Take care!",
    "I look forward to assisting you with your plants again. Goodbye!",
    "Time to water your plants! Goodbye for now.",
    "Keep your garden healthy! Until next time!"
];
  

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit",
"good bye"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
    "plant": ["flower", "tree", "bush", "succulent", "herb", "tomato", "vegetable"],
    "watering": ["irrigating", "watering", "sprinkling", "drinking"],
    "sunlight": ["light", "sun", "sunny", "bright"],
    "soil": ["dirt", "earth", "ground", "compost"],
    "healthy": ["strong", "vibrant", "lush", "growing well"],
    "dead": ["dying", "withering", "wilting"],
    "growth": ["bloom", "growth", "flowering", "sprouting"],
    "care": ["tend to", "look after", "manage", "cultivate"]
};  

var elizaKeywords = [
    ["xnone", 0, [
        ["*", [
            "I'm not sure I understand. Could you tell me more about your plants?",
            "Please tell me more about your garden.",
            "What plants are you focusing on?",
            "Tell me about your gardening experience."
        ]]
    ]],
    ["watering", 5, [
        ["* watering *", [
            "How often do you water your plants?",
            "Are your plants getting enough water?",
            "Do you use a specific watering method?",
            "What kind of plants are you watering?",
            "Do you water them thoroughly or just a little at a time?",
            "What’s your method for watering your plants?",
            "Are you using any self-watering techniques?"
        ]],
        ["* how often do you water *", [
            "How often do you typically water your plants?",
            "What’s your watering schedule like for your garden?",
            "I recommend watering most plants every 1-2 weeks, depending on the type."
        ]],
        ["* do you water *", [
            "Do you water them thoroughly or just a little at a time?",
            "What’s your method for watering your plants?",
            "Are you using any self-watering techniques?"
        ]],
        ["* dry *", [
            "Is the soil in your garden drying out too quickly?",
            "If your soil dries out fast, have you thought about mulching?",
            "How do you keep the moisture in the soil during hot weather?",
            "Dry soil can stress plants. Do you have any strategies to retain moisture?"
        ]],
        ["* moist *", [
            "Moist soil is ideal for many plants. Are you achieving that balance?",
            "Do you check the moisture level before watering?",
            "Plants like ferns and tropical houseplants need moist environments. How do you manage that?"
        ]],
        ["* soggy soil *", [
            "Soggy soil could indicate that you are overwatering or that the plant's pot isn't draining properly.",
            "How often are you watering your plant? Sometimes letting the soil dry out completely between waterings helps prevent overwatering."
        ]]
    ]],
    ["sunlight", 5, [
        ["* sunlight *", [
            "Do your plants get enough sunlight?",
            "What direction does your garden face for sunlight?",
            "Are you growing plants that need full sunlight or partial shade?",
            "Is your plant getting enough light?",
            "Some plants need direct sunlight, others prefer indirect light. What does your plant require?",
            "Do you have a grow light for your indoor plants?",
            "Are you considering moving your plant to a brighter location?"
        ]],
        ["* sun *", [
            "Does your plant get full sun or partial shade?",
            "Tomatoes, peppers, and basil love full sunlight. Are they in the right spot?",
            "Do you move your indoor plants around to catch more sunlight?",
            "Are you using any special lighting for your plants during the winter months?"
        ]]
    ]],
    ["soil", 5, [
        ["* soil *", [
            "What type of soil are you using for your plants?",
            "Is your soil well-draining?",
            "Do you amend your soil with compost or other organic material?",
            "Soil pH is important for plant health. Have you checked yours recently?",
            "Do you use a specific type of soil for different kinds of plants?"
        ]],
        ["* fertilizer *", [
            "Do you use fertilizer for your houseplants or garden plants?",
            "How often do you fertilize your plants?",
            "Are you using organic or synthetic fertilizer?",
            "Different plants require different types of fertilizer. Have you researched the best for yours?"
        ]]
    ]],
    ["plants", 5, [
        ["* plants *", [
            "What kind of plants are you growing?",
            "Are you growing indoor or outdoor plants?",
            "What types of plants need attention in your garden right now?",
            "Tell me more about your plants."
        ]],
        ["* do you have * plants", [
            "I am just a bot, but I know a lot about plants. What types are you interested in?",
            "What plants do you have in your garden right now?"
        ]]
    ]],
    ["succulents", 5, [
        ["* succulents *", [
            "Succulents are great low-maintenance plants! Do you know how to care for them?",
            "Do you water your succulents differently from other plants?",
            "What kinds of succulents are you growing?"
        ]]
    ]],
    ["herbs", 5, [
        ["* herbs *", [
            "What herbs do you have in your garden?",
            "Herbs like basil and thyme can be great for cooking. Do you use yours for cooking?",
            "How do you care for your herb plants?"
        ]]
    ]],
    ["container", 0, [
        ["* container *", [
            "Are you growing plants in containers or raised beds?",
            "How are your container plants doing?",
            "Container gardening can be very rewarding. Do you find it easy to manage?"
        ]]
    ]],
    ["pruning", 0, [
        ["* pruning *", [
            "Have you pruned your plants recently?",
            "When was the last time you pruned your plants for better growth?",
            "What type of pruning method do you prefer for your plants?"
        ]]
    ]],
    ["houseplant", 10, [
        ["* houseplant *", [
            "Do you enjoy caring for your houseplants?",
            "How often do you water your houseplants?",
            "What type of houseplant are you currently taking care of?",
            "What is your favorite houseplant?",
            "Is your houseplant thriving or struggling?",
            "What kind of lighting does your houseplant prefer?"
        ]],
        ["* succulent *", [
            "Do you know the specific needs of your succulents?",
            "Succulents are low-maintenance plants. How often do you water them?",
            "What type of succulent do you have in your collection?",
            "Are your succulents getting enough sunlight?",
            "What do you like most about succulents?"
        ]],
        ["* fern *", [
            "Ferns love humidity. How do you keep the air moist for your ferns?",
            "Do you have a favorite type of fern?",
            "Ferns prefer indirect sunlight. Do you place them near a window?",
            "How often do you water your ferns?"
        ]],
        ["* cactus *", [
            "Cacti need very little water. How often do you water yours?",
            "Are you keeping your cactus in a sunny spot?",
            "Do you have trouble with overwatering your cactus?",
            "Cacti like dry, well-drained soil. Does your cactus thrive in it?"
        ]]
    ]],
    ["growth", 5, [
        ["* growth *", [
            "How is the growth of your plants progressing?",
            "Is your plant growing as expected?",
            "Are you noticing any signs of slow growth?",
            "What steps have you taken to promote healthy plant growth?"
        ]],
        ["* bloom *", [
            "Is your plant blooming yet?",
            "What kind of flowers are you hoping to see on your plant?",
            "Some plants need special care to bloom. Have you researched what your plant requires?"
        ]],
        ["* pruning *", [
            "Pruning helps with growth. Do you regularly prune your plants?",
            "Are you familiar with the best time to prune your plant?",
            "What parts of the plant do you prune to encourage more growth?"
        ]]
    ]],
    ["pest", 5, [
        ["* pest *", [
            "Are you dealing with any pests in your garden?",
            "What kind of pests are bothering your plants?",
            "Do you use any natural remedies to keep pests away from your plants?",
            "Have you tried any organic pest control methods?"
        ]],
        ["* aphid *", [
            "Aphids can be a nuisance. Are they affecting your plants?",
            "Have you considered using neem oil to get rid of aphids?",
            "Aphids like to feed on tender new growth. How is your plant doing?",
            "Are you treating your plants for aphids regularly?"
        ]],
        ["* spider mite *", [
            "Spider mites can be tricky. Are you noticing webbing on your plants?",
            "How do you manage spider mites in your garden?",
            "Have you tried spraying your plants with a mild soap solution to get rid of spider mites?"
        ]],
        ["* mealybug *", [
            "Mealybugs are white, cotton-like pests that can attack the leaves and stems. Are you seeing any white fuzz on your plant?",
            "Mealybugs can be removed with a cotton swab dipped in rubbing alcohol or insecticidal soap."
        ]]
    ]],
    ["dyingplant", 10, [
        ["* dying *", [
            "It sounds like your plant might be struggling. What symptoms are you noticing?",
            "What type of plant is it? Some plants have specific care needs.",
            "Are the leaves turning yellow or brown? That could indicate a problem.",
            "What kind of environment is your plant in? It may need changes in watering or sunlight."
        ]],
        ["* wilting *", [
            "Wilting can be a sign of too little or too much water. Have you checked your watering schedule?",
            "What’s the soil like? Is it too dry or too soggy?"
        ]],
        ["* yellow leaves *", [
            "Yellow leaves might indicate overwatering or a nutrient deficiency. Have you checked your plant’s soil?"
        ]],
        ["* brown tips *", [
            "Brown tips on leaves are often caused by low humidity or over-fertilizing. Could one of these be the issue?"
        ]]
    ]],
    ["watering", 5, [
        ["* watering *", [
            "Proper watering is essential for plant health. Most plants prefer deep, infrequent watering rather than frequent shallow watering. Are you allowing the soil to dry out between waterings?",
            "It’s important to water your plants thoroughly so that the water reaches the roots. You can check if they need water by sticking your finger in the soil. If it feels dry an inch down, it’s time to water!"
        ]],
        ["* how often * water *", [
            "The frequency of watering depends on the type of plant and the environment. In general, water when the top inch of soil feels dry. Some plants like cacti only need watering every couple of weeks, while others like ferns need moisture more often."
        ]],
        ["* overwatering *", [
            "Overwatering can lead to root rot. Make sure your plant’s pot has drainage holes, and only water when the top inch of soil feels dry. Are you seeing yellowing leaves or mushy stems? These are signs of overwatering."
        ]],
        ["* dry soil *", [
            "If the soil in your pot is drying out too quickly, it may be a sign that your plant needs more frequent watering or that the soil is too sandy. Try using a heavier, moisture-retaining mix if your plant needs more water."
        ]]
    ]],
    ["sunlight", 5, [
        ["* sunlight *", [
            "Most plants need plenty of natural light to thrive, but the amount and intensity of light they require can vary. For example, succulents prefer bright, direct sunlight, while ferns thrive in low to medium indirect light. What kind of plant are you caring for?"
        ]],
        ["* how much light *", [
            "If you're unsure whether your plant is getting enough light, you can look for signs like leggy growth, small leaves, or leaning toward the light. These are signs your plant may need more light. Consider moving it to a brighter spot!"
        ]],
        ["* shade *", [
            "Some plants, like ferns or peace lilies, prefer low to medium light and can do well in shaded spots. However, even shade-loving plants need a bit of indirect sunlight to stay healthy."
        ]],
        ["* bright light *", [
            "If your plant needs bright light, it’s best to place it near a south-facing window, where it will get the most exposure to direct sunlight. Be mindful that too much direct sunlight can scorch delicate leaves, so a spot with bright, indirect light is often ideal."
        ]]
    ]],
    ["soil", 5, [
        ["* soil *", [
            "Good soil is key to plant health. Most plants prefer well-draining soil with plenty of organic matter. Are you using a special mix for your plant, like cactus soil or a general-purpose potting mix?"
        ]],
        ["* compost *", [
            "Composting is a great way to improve soil fertility. Mixing compost into your soil can add nutrients and improve its structure, making it better at retaining moisture while still draining well. Consider adding compost or other organic material to your potting mix!"
        ]],
        ["* fertilizing *", [
            "Fertilizing is important for plant health, but it’s easy to overdo it. Use a balanced, water-soluble fertilizer for most plants, applying it once a month during the growing season. Always follow the instructions to avoid nutrient burn."
        ]],
        ["* soil pH *", [
            "Soil pH can affect your plant's nutrient absorption. Some plants prefer acidic soil (like blueberries), while others like alkaline conditions (such as lilacs). You can test your soil’s pH with a simple testing kit and adjust it if necessary."
        ]],
        ["* soil drainage *", [
            "Good drainage is crucial for healthy roots. Make sure your pot has drainage holes, and avoid using a heavy, clay-based soil for plants that require good airflow to their roots. For better drainage, mix in perlite or coarse sand."
        ]]
    ]],
    ["temperature", 5, [
        ["* temperature *", [
            "Most plants prefer moderate temperatures between 60–75°F (15–24°C). Extreme heat or cold can cause stress. Is your plant near a drafty window or a heater? Temperature fluctuations can affect plant health."
        ]],
        ["* humidity *", [
            "Many houseplants, like ferns and orchids, thrive in high humidity. You can increase humidity by placing a tray of water near your plants, grouping plants together, or using a humidifier."
        ]],
        ["* cold *", [
            "Cold drafts can harm plants, especially tropical ones. Keep your plants away from windows during winter or from cold air vents. If your plant is exposed to too much cold, you might notice yellowing or wilting."
        ]],
        ["* heat *", [
            "In hot weather, plants can dry out quickly. Make sure to water your plants more frequently during the summer, and avoid placing them in direct sunlight during the hottest part of the day, as the heat can scorch the leaves."
        ]],
        ["* air circulation *", [
            "Good air circulation helps prevent fungal infections and encourages healthy plant growth. Avoid overcrowding plants and make sure air can flow around them, especially in humid environments."
        ]]
    ]],
    ["pruning", 5, [
        ["* pruning *", [
            "Pruning helps promote healthy growth by removing dead or diseased stems and leaves. Be sure to use clean, sharp scissors or pruning shears to avoid damaging your plant. What part of your plant do you think needs pruning?"
        ]],
        ["* deadheading *", [
            "Deadheading is the practice of removing spent flowers. This encourages new blooms and helps keep the plant looking tidy. Try cutting off the flowers just above the next set of leaves to promote further growth."
        ]],
        ["* repotting *", [
            "If your plant’s roots are outgrowing their pot, it’s time to repot. Choose a pot that’s 1–2 inches larger in diameter than the current one and refresh the soil with a new potting mix to give your plant more room to grow."
        ]],
        ["* cutting back *", [
            "Cutting back encourages bushier growth, especially for plants like fuchsias and geraniums. Trim back leggy stems in early spring to promote a fuller plant."
        ]]
    ]],
    ["troubleshooting", 5, [
        ["* yellow leaves *", [
            "Yellow leaves can indicate overwatering, nutrient deficiencies, or poor lighting. Are you watering too frequently? Have you checked if your plant is getting enough light?"
        ]],
        ["* wilting *", [
            "Wilting can be caused by underwatering or overwatering. Check the soil to see if it’s too dry or too soggy. If the soil is dry, water your plant thoroughly. If it’s soggy, reduce watering and improve drainage."
        ]],
        ["* pests *", [
            "Are you dealing with pests? Aphids, spider mites, and mealybugs are common offenders. You can gently wipe your plant’s leaves with soapy water or use neem oil to treat them."
        ]],
        ["* disease *", [
            "Fungal diseases can affect plants, especially in humid environments. Make sure your plant has good air circulation and avoid overhead watering, which can spread spores."
        ]]
    ]]                        
];


// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
    /\bmachine\b/g, "garden",
    /\bcomputer\b/g, "plant care app",
    /\bcomputers\b/g, "plant care apps"
];

// eof