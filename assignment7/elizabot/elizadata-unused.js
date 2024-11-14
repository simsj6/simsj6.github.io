// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
    "Hello, fellow plant lover! What’s growing in your garden today?",
    "Let’s chat about plants and gardening!",
    "How are your plants doing? Do you have any new blooms?",
    "Tell me, what’s your favorite type of plant?"
];

var elizaFinals = [
    "Happy gardening! See you next time.",
    "I enjoyed our conversation! Take care of your plants.",
    "May your garden grow lush and beautiful. Talk to you soon!",
    "See you later, plant enthusiast! Keep nurturing your garden!",
    "Goodbye for now! Don’t forget to water your plants!"
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
    "be": ["am", "is", "are", "was"],
    "belief": ["feel", "think", "believe", "wish"],
    "cannot": ["can't"],
    "desire": ["want", "need"],
    "everyone": ["everybody", "nobody", "noone"],
    "flower": ["plant", "bloom", "rose", "daisy", "lily", "tulip", "orchid"],
    "tree": ["oak", "maple", "pine", "birch"],
    "garden": ["yard", "plot", "flowerbed", "vegetable garden", "herb garden"],
    "soil": ["dirt", "earth", "ground", "compost"],
    "sun": ["sunshine", "light", "daylight"],
    "watering": ["watering can", "sprinkler", "drainage", "watering system"]
};

var elizaKeywords = [

    ["xnone", 0, [
        ["*", [
            "Tell me more about your garden.",
            "What are you growing this season?",
            "I’d love to hear more about your plants.",
            "Do you have any gardening tips to share?",
            "How are your plants today?"
        ]]
    ]],
    ["watering", 0, [
        ["*", [
            "How often do you water your plants?",
            "Is it hard to keep track of your watering schedule?",
            "What kind of watering system do you use?",
            "Do your plants prefer deep watering or frequent light watering?"
        ]]
    ]],
    ["soil", 0, [
        ["*", [
            "What type of soil do you use in your garden?",
            "How do you prepare your soil for planting?",
            "Do you prefer rich, loamy soil, or something else?",
            "Have you ever added compost to your soil?"
        ]]
    ]],
    ["garden", 0, [
        ["*", [
            "Tell me more about your garden. What’s growing in it?",
            "What’s your favorite plant in your garden right now?",
            "Do you have a vegetable garden, or just flowers?",
            "How do you design your garden space?"
        ]]
    ]],
    ["flower", 0, [
        ["*", [
            "What kind of flowers are you growing?",
            "Do you have a favorite flower?",
            "What colors do your flowers bloom in?",
            "Have you ever tried growing a flower garden from seed?"
        ]]
    ]],
    ["tree", 0, [
        ["*", [
            "What trees do you have in your garden?",
            "Do you have any fruit-bearing trees?",
            "Are you more into big trees or small decorative ones?",
            "How do you care for your trees?"
        ]]
    ]],
    ["sun", 0, [
        ["*", [
            "How much sun does your garden get each day?",
            "Do you have any plants that prefer shade?",
            "What plants do you think thrive best in the sunlight?",
            "How do you manage your garden’s exposure to the sun?"
        ]]
    ]],
    ["plant", 0, [
        ["*", [
            "What plants do you find easiest to care for?",
            "Do you have any tips for keeping indoor plants healthy?",
            "Are you planting anything new this season?",
            "Do you have any rare or exotic plants in your collection?"
        ]]
    ]],
    ["what", 0, [
        ["*", [
            "What kind of plants are you thinking of growing next?",
            "What’s your favorite gardening tool?",
            "What would you like to plant if you had more space?",
            "What’s the most challenging plant you’ve ever grown?"
        ]]
    ]],
    ["pest", 0, [
        ["*", [
            "Are pests causing problems in your garden?",
            "What do you do to prevent pests from damaging your plants?",
            "Have you tried organic pest control methods?",
            "What pests are you dealing with right now?"
        ]]
    ]],
    ["disease", 0, [
        ["*", [
            "Has your garden been affected by any plant diseases?",
            "What steps do you take to prevent plant diseases?",
            "Do you use any treatments for plant diseases?",
            "What are the symptoms of the disease you're noticing?"
        ]]
    ]],
    ["compost", 0, [
        ["*", [
            "Do you compost in your garden?",
            "What do you put in your compost pile?",
            "How long does it take for your compost to break down?",
            "Have you tried making your own compost tea?"
        ]]
    ]],
    // New Succulent-related keywords
    ["succulent", 5, [
        ["*", [
        "Tell me more about succulents.",
        "How do you take care of your succulents?",
        "What kind of succulents do you have?",
        "Do you know what succulent varieties are best for your environment?"
        ]]
    ]],
    ["cactus", 5, [
        ["*", [
        "Cacti are fascinating! Do you have any?",
        "How do you care for your cactus plants?",
        "What makes a cactus different from other succulents?",
        "Are you growing a cactus in your garden?"
        ]]
    ]],
    ["aloe vera", 5, [
        ["*", [
        "Aloe vera is such a great plant. Do you use it for skincare?",
        "How do you care for your aloe vera plant?",
        "Have you ever used aloe vera for its healing properties?"
        ]]
    ]],
    ["jade plant", 5, [
        ["*", [
        "Jade plants are great for beginners. How is yours doing?",
        "What kind of care does your jade plant need?",
        "Jade plants are known to bring good luck. Do you believe that?"
        ]]
    ]],
    ["succulent care", 5, [
        ["*", [
        "Succulent care is important! How do you maintain your succulents?",
        "Do you follow any specific tips for keeping succulents healthy?"
        ]]
    ]],
    ["air plant", 5, [
        ["*", [
        "Air plants are so unique! Do you have any in your collection?",
        "How do you care for air plants? Have you tried misting them?"
        ]]
    ]],
    ["succulent propagation", 5, [
        ["*", [
        "Succulent propagation is so rewarding. Have you tried propagating any succulents?",
        "Tell me more about your experiences with propagating succulents."
        ]]
    ]],
    ["root rot", 5, [
        ["*", [
        "Root rot can be tricky. Do you think you have experienced it with your succulents?",
        "How do you prevent root rot in your succulents?"
        ]]
    ]],
    ["echeveria", 5, [
        ["*", [
        "Echeveria is such a beautiful succulent. How is yours doing?",
        "What kind of care does your Echeveria need?"
        ]]
    ]],

    // New Houseplant-related keywords
    ["houseplant care", 5, [
        ["*", [
        "Houseplants need special attention. How do you care for yours?",
        "What is your favorite houseplant?"
        ]]
    ]],
    ["indoor gardening", 5, [
        ["*", [
        "Indoor gardening can be so fulfilling. What are you growing indoors?",
        "How do you manage your indoor garden?"
        ]]
    ]],
    ["snake plant", 5, [
        ["*", [
        "Snake plants are great for beginners! Do you have one?",
        "How do you take care of your snake plant?"
        ]]
    ]],
    ["peace lily", 5, [
        ["*", [
        "Peace lilies are so lovely. How do you care for yours?",
        "Have you noticed your peace lily blooming?"
        ]]
    ]],
    ["philodendron", 5, [
        ["*", [
        "Philodendrons are so easy to grow. How is your philodendron doing?",
        "Do you know the best way to propagate philodendrons?"
        ]]
    ]],
    ["humidity for houseplants", 5, [
        ["*", [
        "Humidity is important for houseplants. How do you maintain the right humidity?",
        "Do you use a humidifier for your indoor plants?"
        ]]
    ]],

    // New Greenhouse-related keywords
    ["greenhouse gardening", 5, [
        ["*", [
        "Greenhouse gardening allows you to grow all kinds of plants. What are you growing in your greenhouse?",
        "Do you know the best plants for a greenhouse?"
        ]]
    ]],
    ["greenhouse care", 5, [
        ["*", [
        "Greenhouses need proper care. How do you maintain yours?",
        "What steps do you take to control the temperature in your greenhouse?"
        ]]
    ]],
    ["hydroponics", 5, [
        ["*", [
        "Hydroponics is a fascinating method. Have you ever tried growing plants hydroponically?",
        "How does hydroponics differ from traditional soil gardening?"
        ]]
    ]],
    ["greenhouse temperature", 5, [
        ["*", [
        "Temperature control is crucial in a greenhouse. How do you regulate it?",
        "Do you use fans or heaters to maintain the temperature?"
        ]]
    ]],
    ["greenhouse humidity", 5, [
        ["*", [
        "Maintaining humidity is key for greenhouse plants. How do you manage it?",
        "Do you use any specific tools to control the humidity in your greenhouse?"
        ]]
    ]],
    ["greenhouse plants", 5, [
        ["*", [
        "What kinds of plants do you grow in your greenhouse?",
        "Have you ever tried growing vegetables in your greenhouse?"
        ]]
    ]],

    // New General Gardening Keywords
    ["plant pruning", 5, [
        ["*", [
        "Pruning is important for plant health. Do you prune your plants regularly?",
        "How do you approach pruning your houseplants or garden plants?"
        ]]
    ]],
    ["plant pests", 5, [
        ["*", [
        "Pests can be a real problem for plants. Have you dealt with any recently?",
        "How do you prevent pests in your garden or greenhouse?"
        ]]
    ]],
    ["soil types", 5, [
        ["*", [
        "Different plants need different soil types. What kind of soil do you use?",
        "How do you choose the right soil for your plants?"
        ]]
    ]],
    ["plant diseases", 5, [
        ["*", [
        "Plant diseases can be tough. Have you experienced any issues with plant diseases?",
        "How do you treat plant diseases when they occur?"
        ]]
    ]],
    ["compost", 5, [
        ["*", [
        "Composting is great for your garden. Do you compost at home?",
        "What do you usually compost?"
        ]]
    ]],
    ["watering techniques", 5, [
        ["*", [
        "Proper watering is key to plant health. How do you water your plants?",
        "Do you have any tips for efficient watering?"
        ]]
    ]],
    ["plant propagation", 5, [
        ["*", [
        "Propagating plants is such a rewarding process. Have you tried it?",
        "What methods do you use for propagating your plants?"
        ]]
    ]],
    ["plant repotting", 5, [
        ["*", [
        "Repotting is important as plants grow. How often do you repot your plants?",
        "Do you use any particular method for repotting your houseplants?"
        ]]
    ]],
    ["seasonal gardening", 5, [
        ["*", [
        "Gardening changes with the seasons. Do you adjust your gardening practices seasonally?",
        "How do you prepare your plants for different seasons?"
        ]]
    ]]
];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
    /I am not sure what you mean/g, "I’m not sure what you're talking about. Can you tell me more about your garden?",
    /I don't know/g, "I’m still learning about plants, but I’d love to hear more!",
    /\bcomputers\b/g, "plants",
    /machines/g, "garden tools"
];

// eof