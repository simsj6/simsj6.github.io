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
    ["watering", 0, [
        ["* watering *", [
            "How often do you water your plants?",
            "Are your plants getting enough water?",
            "Do you use a specific watering method?",
            "What kind of plants are you watering?"
        ]]
    ]],
    ["sunlight", 0, [
        ["* sunlight *", [
            "Do your plants get enough sunlight?",
            "What direction does your garden face for sunlight?",
            "Are you growing plants that need full sunlight or partial shade?"
        ]]
    ]],
    ["soil", 0, [
        ["* soil *", [
            "What type of soil are you using for your plants?",
            "Have you considered adding compost to your soil?",
            "Is your soil rich in nutrients for healthy plant growth?"
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
    ["tomatoes", 5, [
        ["* tomatoes *", [
            "Tomatoes need plenty of sunlight and regular watering. How are your tomatoes doing?",
            "What variety of tomatoes are you growing?",
            "Are you using stakes or cages for your tomato plants?"
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
    ["watering", 0, [
        ["* how often do you water *", [
        "How often do you typically water your plants?",
        "What’s your watering schedule like for your garden?",
        "I recommend watering most plants every 1-2 weeks, depending on the type."
        ]],
        ["* do you water *", [
        "Do you water them thoroughly or just a little at a time?",
        "What’s your method for watering your plants?",
        "Are you using any self-watering techniques?"
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
        ]],
    ]],
    ["outdoorplant", 10, [
        ["* tomato *", [
            "Tomatoes love sunlight. How much sun does your tomato plant get?",
            "Are your tomatoes showing signs of fruit yet?",
            "How do you manage watering your tomatoes during hot weather?",
            "Tomatoes need well-drained soil. How is the drainage in your garden?"
        ]],
        ["* basil *", [
            "Basil needs warmth and sunlight. How does your basil plant look?",
            "Are you harvesting leaves from your basil yet?",
            "Basil is a great herb for cooking. Do you use it often?",
            "How often do you prune your basil to encourage more growth?"
        ]],
        ["* pepper *", [
            "Peppers love heat! Is your pepper plant thriving in warm conditions?",
            "Are you seeing any flowers on your pepper plant?",
            "How do you keep your pepper plants healthy throughout the growing season?",
            "Do you know the best time to harvest your peppers?"
        ]],
        ["* rose *", [
            "Roses need a lot of sun to bloom beautifully. Is yours getting enough light?",
            "How often do you fertilize your rose bush?",
            "Do you prune your rose plant regularly to encourage healthy growth?",
            "What color roses are you growing in your garden?"
        ]],
        ["* lavender *", [
            "Lavender loves full sunlight and well-drained soil. How are your plants doing?",
            "Lavender is very fragrant. Do you use it for cooking or aromatherapy?",
            "Are you growing lavender in a pot or directly in the ground?",
            "How often do you water your lavender plant?"
        ]],
        ["* cucumber *", [
            "Cucumbers need space to grow. Do your cucumber vines have room to spread out?",
            "How are your cucumbers doing in terms of growth?",
            "Do you know how often cucumbers need to be watered?",
            "Cucumbers are very sensitive to temperature. Have you had any heat issues with your plants?"
        ]],
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
        ]],
    ]],
    ["watering", 5, [
        ["* water *", [
            "How often do you water your plants?",
            "Do you let the soil dry out completely before watering?",
            "Overwatering can be a problem. How do you avoid it?",
            "Do you water your plants in the morning or evening?",
            "How do you monitor the moisture levels in your soil?"
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
    ]],
    ["light", 5, [
        ["* light *", [
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
        ]],
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
        ]],
    ]],
    ["dyingplant", 10, [
        ["* dying *", [
            "It sounds like your plant might be struggling. What symptoms are you noticing?",
            "What type of plant is it? Some plants have specific care needs.",
            "Are the leaves turning yellow or brown? That could indicate a problem.",
            "What kind of environment is your plant in? Light, temperature, and humidity all affect plant health.",
            "Have you checked the roots to see if there are any signs of rot?"
        ]],
        ["* wilting *", [
            "Wilting can be a sign of underwatering or overwatering. How often are you watering your plant?",
            "Are the leaves limp and drooping? Sometimes this happens when plants aren't getting enough water.",
            "Have you checked the soil to see if it's too dry or too soggy?"
        ]],
        ["* brown leaves *", [
            "Brown leaves can be caused by a few things. Is the plant getting enough water?",
            "If the edges of the leaves are turning brown, it might be a sign of overwatering or underwatering.",
            "Are the brown spots on the leaves dry and crispy, or are they soft and mushy?",
            "It could also be a sign of too much direct sunlight or nutrient deficiencies."
        ]],
        ["* yellow leaves *", [
            "Yellowing leaves can be a sign of overwatering or nutrient deficiencies. Have you been watering regularly?",
            "Is the plant getting enough sunlight? Sometimes too little light causes leaves to yellow.",
            "Check the roots. Yellow leaves might indicate root rot or a need for repotting."
        ]],
        ["* no new growth *", [
            "Lack of new growth could mean your plant isn't getting enough light or nutrients.",
            "Is the plant in a location where it gets plenty of indirect sunlight?",
            "Have you fertilized the plant recently? Sometimes a lack of nutrients can stunt growth."
        ]],
        ["* dropping leaves *", [
            "If your plant is losing leaves, it might be stressed from changes in temperature or humidity.",
            "Are you overwatering or underwatering? Either of those can cause leaf drop.",
            "Have you moved the plant recently? Sometimes plants drop leaves after being relocated."
        ]],
    ]],
    ["overwatering", 5, [
        ["* overwater *", [
            "Overwatering is a common problem for many plants. Have you noticed soggy soil or water sitting in the pot?",
            "Is your plant in a pot with drainage holes? Without proper drainage, the water can't escape.",
            "Do you let the soil dry out between waterings? Plants like succulents and cacti need less frequent watering."
        ]],
        ["* root rot *", [
            "Root rot is often caused by overwatering. Have you checked the roots for signs of mushiness or discoloration?",
            "If your plant is showing signs of root rot, you may need to trim away the affected roots and repot it in fresh, well-draining soil."
        ]],
        ["* soggy soil *", [
            "Soggy soil could indicate that you are overwatering or that the plant's pot isn't draining properly.",
            "How often are you watering your plant? Sometimes letting the soil dry out completely between waterings helps prevent overwatering."
        ]],
        ["* yellowing leaves *", [
            "Yellowing leaves can be a sign of overwatering. Have you noticed any unusual symptoms like a musty smell or mold on the soil surface?",
            "If your plant is getting too much water, it may not be able to absorb nutrients properly."
        ]],
    ]],
    ["underwatering", 5, [
        ["* underwater *", [
            "Underwatering is another common issue. Are you letting the soil dry out too much between waterings?",
            "When was the last time you watered your plant? Plants like ferns and tropicals prefer moist soil.",
            "How does the soil feel? If it’s dry and crumbly, your plant might be underwatered."
        ]],
        ["* dry leaves *", [
            "Dry, crispy leaves are often a sign of underwatering. Are you watering the plant regularly?",
            "Sometimes the edges of the leaves turn brown and dry out when a plant doesn't get enough water."
        ]],
        ["* wilting *", [
            "Wilting can also be caused by underwatering. How do the soil and roots feel? Is the soil very dry?",
            "Make sure you're watering thoroughly, so the roots get enough moisture."
        ]],
        ["* crispy edges *", [
            "Crispy leaf edges can indicate underwatering or too much dry air. Have you tried increasing humidity around your plant?",
            "Is your plant in a dry or hot area of your home? If so, it might need more frequent watering or humidity."
        ]],
    ]],
    ["lightissues", 5, [
        ["* too much sun *", [
            "Some plants can get sunburned if they're in too much direct sunlight. Are your plant's leaves turning brown or crispy?",
            "Do you notice your plant getting scorched or burned by the sun? It might need to be moved to a shadier spot."
        ]],
        ["* too little sun *", [
            "If your plant isn't getting enough light, it might start to stretch or become leggy. How much light does it get each day?",
            "Some plants, like succulents, need bright direct sunlight. Others, like ferns, prefer indirect light."
        ]],
        ["* leggy *", [
            "A leggy appearance could mean your plant is stretching toward a light source. Is it in a place that gets enough sunlight?",
            "If your plant is becoming leggy, it may need more light to stay compact and healthy."
        ]],
    ]],
    ["rootbound", 5, [
        ["* rootbound *", [
            "Is your plant rootbound? You can tell if roots are growing out of the drainage holes or if they’re circling the bottom of the pot.",
            "If your plant is rootbound, it might not be able to take up enough water or nutrients. Repotting it into a larger container might help."
        ]],
        ["* pot *", [
            "Have you checked to see if your plant needs a bigger pot? Sometimes plants stop growing because their roots run out of space.",
            "Repotting a rootbound plant can give it a fresh start and room to grow. What size pot are you using?"
        ]],
    ]],
    ["dyingplant", 10, [
        ["* plant is dying *", [
            "I’m sorry to hear your plant is struggling. Could you describe the symptoms more specifically? Please choose one of the following options:",
            "1. Yellowing leaves",
            "2. Brown, crispy edges",
            "3. Wilting or drooping",
            "4. Leaves falling off",
        ]],
        ["1", [
            "Yellowing leaves can mean overwatering or too little light. How often are you watering your plant? Is it getting enough sunlight?"
        ]],
        ["2", [
            "Brown, crispy edges can be a sign of underwatering or too much direct sunlight. How does the soil feel?"
        ]],
        ["3", [
            "Wilting can be caused by both overwatering and underwatering. Can you check if the soil is dry or soggy?"
        ]],
        ["4", [
            "Leaf drop can happen for several reasons. Have you recently moved your plant or changed its environment?"
        ]],
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