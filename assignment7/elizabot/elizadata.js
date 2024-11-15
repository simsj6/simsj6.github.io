// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
    "Hello, I'm your gardening assistant. What would you like help with today?",
    "Hi there! Tell me what you need help with in your garden.",
    "How can I assist you in taking care of your plants today?"
];

var elizaFinals = [
    "Anytime! I hope your plants thrive.",
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
    "good bye",
    "thanks",
    "thank you",
    "no"
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
    "care": ["tend to", "look after", "manage", "cultivate"],
    "pest": ["pests"],
    "houseplant": ["house plant", "houseplants", "house plants"]
};

var elizaKeywords = [
    ["xnone", 0, [
        ["*", [
            "To improve your plant care, make sure to monitor water levels and adjust for each plant's specific needs.",
            "Regularly check for pests and diseases to keep your plants healthy.",
            "Provide a suitable environment for each plant, considering its light and temperature preferences.",
            "Be patient with your plants – growth takes time, but with consistent care, they'll thrive."
        ]]
    ]],
    ["watering", 5, [
        ["* watering *", [
            "Deeply water your plants, allowing water to reach their roots. Most plants prefer infrequent, thorough watering to shallow, frequent watering.",
            "Check the moisture level of the soil by sticking your finger into it. If the soil is dry an inch down, it’s time to water.",
            "Consider using self-watering techniques or watering systems to make your plant care routine easier."
        ]]
    ]],
    ["how often do you water", 5, [
        ["* how often do you water *", [
            "Water your plants when the top inch of soil feels dry. The frequency will depend on the type of plant and the environment.",
            "Succulents need water less often than tropical plants. Be mindful of their specific needs to avoid overwatering."
        ]]
    ]],
    ["do you water", 5, [
        ["* do you water *", [
            "Water thoroughly, ensuring that the water reaches the root zone. Don't just moisten the surface of the soil.",
            "If your plants are in containers, make sure there is drainage to prevent waterlogging and root rot."
        ]]
    ]],
    ["dry", 5, [
        ["* dry *", [
            "If your soil is drying out too quickly, try adding mulch around your plants to help retain moisture.",
            "Consider using a heavier soil mix or adding moisture-retaining ingredients like peat moss to help your plants stay hydrated longer."
        ]]
    ]],
    ["moist", 5, [
        ["* moist *", [
            "Maintain a consistent moisture level, especially for plants that prefer humid environments like ferns and tropicals.",
            "Check your plants regularly to ensure they aren’t drying out or staying too soggy – both extremes can be harmful."
        ]]
    ]],
    ["soggy soil", 5, [
        ["* soggy soil *", [
            "If the soil is consistently soggy, reduce watering and ensure your plant's pot has good drainage.",
            "Overwatering is a common cause of root rot. Let the soil dry out slightly before watering again."
        ]]
    ]],
    ["sunlight", 5, [
        ["* sunlight *", [
            "Ensure your plants receive the right amount of sunlight. Many houseplants thrive in bright, indirect light, while succulents prefer direct sunlight.",
            "If your plants seem to be stretching toward the light, they may need more exposure. Consider moving them to a brighter location."
        ]]
    ]],
    ["sun", 5, [
        ["* sun *", [
            "Monitor the amount of sunlight your plants receive. Some need full sun to thrive, while others, like ferns, prefer partial shade.",
            "If you grow houseplants, try rotating them periodically to ensure even exposure to light."
        ]]
    ]],
    ["soil", 5, [
        ["* soil *", [
            "Choose the right soil for your plants. Most houseplants do well in a well-draining, all-purpose potting mix.",
            "Add organic matter or compost to your soil to improve drainage and provide your plants with necessary nutrients."
        ]]
    ]],
    ["fertilizer", 5, [
        ["* fertilizer *", [
            "Fertilize your plants regularly, especially during the growing season, to encourage healthy growth.",
            "Opt for organic or slow-release fertilizers to avoid overfeeding and nutrient burn. Always follow the manufacturer's instructions."
        ]]
    ]],
    ["plants", 5, [
        ["* plants *", [
            "Provide appropriate care for each type of plant, as their needs can vary widely based on the species.",
            "Regularly check for pests, trim dead leaves, and adjust your watering and sunlight based on the plant’s specific needs."
        ]]
    ]],
    ["do you have plants", 5, [
        ["* do you have plants", [
            "Each plant has unique care needs, so it's important to research the specific care for each variety in your collection.",
            "For healthy plants, make sure each one has its own space to grow, adequate light, and appropriate watering conditions."
        ]]
    ]],
    ["succulents", 5, [
        ["* succulents *", [
            "Succulents need plenty of sunlight and well-draining soil to thrive. Consider using cactus mix soil for best results.",
            "Water your succulents sparingly, allowing the soil to dry out completely between waterings. They’re drought-tolerant and don't require frequent watering."
        ]]
    ]],
    ["herbs", 5, [
        ["* herbs *", [
            "Herbs like basil and thyme need plenty of sunlight and a well-draining, slightly alkaline soil. Regularly prune them to encourage growth.",
            "Water your herbs deeply but infrequently, ensuring the soil dries out slightly between waterings. Herbs don’t like to be waterlogged."
        ]]
    ]],
    ["container", 0, [
        ["* container *", [
            "Choose the right-sized container for your plants. A pot that’s too small can stunt growth, while one that's too large can lead to overwatering.",
            "For container plants, ensure that your pots have good drainage holes to prevent water from collecting at the bottom and causing root rot."
        ]]
    ]],
    ["pruning", 0, [
        ["* pruning *", [
            "Regular pruning helps maintain plant shape and health by removing dead or damaged stems.",
            "Use sharp, clean scissors or pruning shears to avoid damaging your plants. Prune during the growing season to encourage fresh growth.",
            "Regular pruning encourages healthy growth by removing dead or damaged parts. It can also help shape your plant.",
            "Trim back leggy or overgrown stems to encourage bushier growth. Pruning after flowering can also promote future blooms.",
            "Pruning helps to shape your plant and remove dead or diseased growth. Regular pruning encourages new growth, increases air circulation, and can prevent pests and diseases. Always use clean, sharp pruning shears to avoid damage."
        ]]
    ]],
    ["houseplant", 10, [
        ["* houseplant *", [
            "Keep your houseplants in a well-lit area with plenty of indirect sunlight. Rotate them periodically to ensure even light exposure.",
            "Houseplants need regular watering, but ensure the soil dries out between waterings to prevent root rot. Avoid letting water sit in the saucer."
        ]]
    ]],
    ["succulent", 5, [
        ["* succulent *", [
            "Succulents thrive in bright, direct sunlight. Make sure to water them sparingly, allowing the soil to dry completely between waterings.",
            "A well-draining potting mix is essential for succulents to prevent root rot. Choose a cactus or succulent soil blend."
        ]]
    ]],
    ["fern", 5, [
        ["* fern *", [
            "Ferns prefer a humid environment. To increase humidity, mist the leaves or place a humidifier near them.",
            "Keep ferns in a spot with indirect light. Direct sunlight can scorch their delicate fronds."
        ]]
    ]],
    ["cactus", 5, [
        ["* cactus *", [
            "Cacti need bright, direct sunlight and infrequent watering. Let the soil dry out completely before watering again.",
            "Ensure your cactus is planted in well-draining soil to prevent root rot. Water less frequently in the winter months when they’re dormant."
        ]]
    ]],
    ["growth", 5, [
        ["* growth *", [
            "Healthy plant growth requires consistent care, including appropriate watering, sunlight, and nutrition. Be patient and provide a stable environment.",
            "If your plant’s growth slows down, try increasing the amount of light or adjusting your watering routine."
        ]]
    ]],
    ["bloom", 5, [
        ["* bloom *", [
            "Many plants need additional care to bloom, such as proper lighting, pruning, and occasionally a fertilizer boost.",
            "If your plant isn’t blooming, check for the right light conditions and consider using a bloom-boosting fertilizer."
        ]]
    ]],
    ["pest", 5, [
        ["* pest *", [
            "Keep an eye out for pests like aphids, spider mites, and mealybugs. You can remove them by wiping leaves with soapy water or using neem oil.",
            "For serious infestations, consider using organic insecticides or introducing beneficial insects like ladybugs to your garden."
        ]]
    ]],
    ["aphid", 5, [
        ["* aphid *", [
            "Aphids can be removed by spraying plants with a mixture of water and mild soap, or using neem oil to kill them naturally.",
            "Regularly inspect the undersides of leaves where aphids tend to hide. Wipe down leaves with a damp cloth to remove any pests.",
            "Aphids are small insects that suck sap from your plants. You can remove them by spraying your plants with a mixture of soapy water or neem oil. A strong stream of water from a hose can also help dislodge them."
        ]]
    ]],
    ["spider mite", 5, [
        ["* spider mite *", [
            "Spider mites can be controlled by spraying your plants with water or insecticidal soap. Boost humidity to make the environment less favorable for them.",
            "Check the undersides of leaves for fine webbing, a common sign of spider mites. Remove infested leaves if necessary."
        ]]
    ]],
    ["mealybug", 5, [
        ["* mealybug *", [
            "Mealybugs can be wiped off with a cotton swab dipped in rubbing alcohol or insecticidal soap.",
            "To prevent mealybug infestations, check your plants regularly, especially in hidden spots like leaf axils and stems."
        ]]
    ]],
    ["dying", 10, [
        ["* dying *", [
            "If your plant is struggling, adjust watering and check the light conditions. Sometimes they need more light or less water.",
            "Remove any dead or yellowing leaves to help your plant conserve energy for new growth."
        ]]
    ]],
    ["dead", 5, [
        ["* dead *", [
            "Cut away any dead or decaying parts of the plant to prevent them from affecting healthy growth.",
            "If the whole plant seems to be dying, check the roots for rot. Trim any affected areas and repot in fresh soil if necessary."
        ]]
    ]],
    ["wilt", 5, [
        ["* wilt *", [
            "Wilted leaves may indicate underwatering or overwatering. Check the soil moisture level and adjust accordingly.",
            "If the soil is dry, give your plant a thorough watering. If the soil is soggy, allow it to dry out before watering again."
        ]]
    ]],
    ["root rot", 5, [
        ["* root rot *", [
            "Root rot occurs when plant roots become waterlogged, causing them to decay. If your plant is showing signs of root rot, you may need to trim away the affected roots and repot it in fresh, well-draining soil."
        ]]
    ]],
    // Watering & Frequency
    ["watering schedule", 5, [
        ["* watering schedule *", [
            "Establishing a consistent watering schedule is key for plant health. Most plants prefer to dry out slightly between waterings. Water deeply when the top inch of soil feels dry, but avoid overwatering as it can cause root rot."
        ]]
    ]],
    ["how often should I water", 5, [
        ["* how often should I water *", [
            "The watering frequency depends on the type of plant and the environment. In general, water when the top inch of soil feels dry. Some plants like succulents need less water, while tropical plants may need more."
        ]]
    ]],
    ["dry soil", 5, [
        ["* dry soil *", [
            "If the soil is drying out too quickly, it may be a sign that you need to water your plant more frequently or that the potting mix isn't holding moisture well. Consider switching to a moisture-retaining soil mix."
        ]]
    ]],
    ["overwatering", 5, [
        ["* overwatering *", [
            "Overwatering can lead to root rot. Make sure your pots have drainage holes and allow the soil to dry out between waterings. If you notice yellowing leaves or mushy stems, reduce watering immediately."
        ]]
    ]],
    ["how to check water needs", 5, [
        ["* how to check water needs *", [
            "The best way to check if your plant needs water is by sticking your finger into the soil. If it feels dry an inch down, it’s time to water. Otherwise, wait a bit longer to avoid overwatering."
        ]]
    ]],

    // Light & Positioning
    ["lighting", 5, [
        ["* lighting *", [
            "Most plants thrive with bright, indirect light. Place your plants near windows with sheer curtains to protect them from harsh sunlight, or in areas with good natural light. Avoid direct afternoon sunlight, which can scorch delicate leaves."
        ]]
    ]],
    ["sun exposure", 5, [
        ["* sun exposure *", [
            "Some plants, like succulents and tomatoes, prefer full sun, while others, like ferns or peace lilies, do better in low to medium light. Make sure you know your plant's specific light requirements to keep it thriving."
        ]]
    ]],
    ["indoor lighting", 5, [
        ["* indoor lighting *", [
            "If you're growing plants indoors, consider investing in grow lights, especially during winter months when natural light can be scarce. LED grow lights provide the spectrum of light plants need for healthy growth."
        ]]
    ]],
    ["shade-loving plants", 5, [
        ["* shade-loving plants *", [
            "Plants like ferns, calatheas, and peace lilies thrive in low light conditions. While they don’t need direct sunlight, they still need some ambient light, so avoid dark corners where light is limited."
        ]]
    ]],
    ["moving plants", 5, [
        ["* moving plants *", [
            "If your plant isn’t thriving, try adjusting its location. Moving it closer to a light source or further from direct sunlight may help boost its health."
        ]]
    ]],

    // Soil & Fertilization
    ["soil quality", 5, [
        ["* soil quality *", [
            "Healthy plants need healthy soil. Most plants prefer well-draining soil that is rich in organic matter. If your soil doesn’t drain well, consider adding perlite or sand to improve drainage."
        ]]
    ]],
    ["repotting", 5, [
        ["* repotting *", [
            "Repotting your plant every 1-2 years can help refresh the soil and provide more room for root growth. Choose a pot that’s 1-2 inches larger than the current one, and replace the old soil with fresh, nutrient-rich mix."
        ]]
    ]],
    ["fertilizing", 5, [
        ["* fertilizing *", [
            "Fertilize your plants regularly to encourage healthy growth. Use a balanced, water-soluble fertilizer during the growing season (spring and summer) and reduce feeding in fall and winter when plant growth slows."
        ]]
    ]],
    ["composting", 5, [
        ["* composting *", [
            "Composting is a great way to naturally fertilize your plants. Mix compost into your soil to improve its nutrient content and structure, which helps retain moisture and promotes strong root growth."
        ]]
    ]],
    ["pH of soil", 5, [
        ["* pH of soil *", [
            "Soil pH affects nutrient absorption. Some plants, like blueberries, prefer acidic soil, while others, like lilacs, thrive in alkaline soil. You can test your soil’s pH using a simple kit and adjust it if needed by adding lime (for alkaline soil) or sulfur (for acidic soil)."
        ]]
    ]],

    // Pruning & Maintenance
    ["deadheading", 5, [
        ["* deadheading *", [
            "Deadheading, or removing spent flowers, encourages plants to focus energy on producing more blooms instead of seeds. Remove the flower stalks at the base, just above the first set of leaves, to promote further flowering."
        ]]
    ]],
    ["trimming", 5, [
        ["* trimming *", [
            "Trimming your plant’s leggy stems or overgrown branches can help it stay compact and healthy. If you’re growing a vine or trailing plant, trim back the long stems to maintain its shape and encourage fuller growth."
        ]]
    ]],
    ["yellow leaves", 5, [
        ["* yellow leaves *", [
            "If you notice yellowing leaves, it’s a sign your plant may be overwatered or stressed. Removing the yellow leaves can help the plant focus its energy on healthy growth.",
            "Yellowing leaves can be a sign of overwatering or nutrient deficiencies. Have you been watering regularly?",
            "Is the plant getting enough sunlight? Sometimes too little light causes leaves to yellow.",
            "Check the roots. Yellow leaves might indicate root rot or a need for repotting."
        ]]
    ]],
    ["brown leaves", 5, [
        ["* brown leaves *", [
            "Brown leaves can be caused by a few things. Is the plant getting enough water?",
            "If the edges of the leaves are turning brown, it might be a sign of overwatering or underwatering.",
            "Are the brown spots on the leaves dry and crispy, or are they soft and mushy?",
            "It could also be a sign of too much direct sunlight or nutrient deficiencies."
        ]]
    ]],
    ["cutting back", 5, [
        ["* cutting back *", [
            "For plants like fuchsias or geraniums, cutting back stems during early spring promotes bushier, more vigorous growth. Trim back 1/3 of the plant to encourage new shoots and fuller foliage."
        ]]
    ]],

    // Pest Control
    ["spider mites", 5, [
        ["* spider mites *", [
            "Spider mites are tiny pests that thrive in dry conditions. They can be controlled by misting your plant regularly to maintain humidity or by wiping leaves with a damp cloth. Neem oil is also effective against spider mites."
        ]]
    ]],
    ["mealybugs", 5, [
        ["* mealybugs *", [
            "Mealybugs appear as white, cotton-like clusters on the leaves and stems. Remove them by wiping them off with a cotton swab dipped in rubbing alcohol or by spraying the plant with insecticidal soap."
        ]]
    ]],
    ["slugs and snails", 5, [
        ["* slugs and snails *", [
            "Slugs and snails can damage your plants by eating holes in the leaves. Place beer traps or diatomaceous earth around your plants to prevent them from feasting on your garden."
        ]]
    ]],
    ["general pest prevention", 5, [
        ["* general pest prevention *", [
            "Regularly inspect your plants for signs of pests like discolored spots, webs, or holes in the leaves. Quarantining new plants for a few weeks before introducing them to your garden can help prevent pest infestations."
        ]]
    ]],

    // Temperature & Humidity
    ["temperature range", 5, [
        ["* temperature range *", [
            "Most houseplants prefer temperatures between 60°F–75°F (15°C–24°C). Keep plants away from heat sources or cold drafts, as extreme temperatures can stress them and hinder growth."
        ]]
    ]],
    ["humidity", 5, [
        ["* humidity *", [
            "Many plants, especially tropical species like ferns and orchids, thrive in high humidity. Increase humidity by grouping plants together, placing them on a humidity tray, or using a humidifier."
        ]]
    ]],
    ["temperature fluctuation", 5, [
        ["* temperature fluctuation *", [
            "Sudden temperature changes, such as placing plants near air conditioning vents or radiators, can stress them. Try to keep your plants in a stable environment, away from temperature extremes."
        ]]
    ]],
    ["cold damage", 5, [
        ["* cold damage *", [
            "Cold temperatures can damage delicate plants. Keep plants away from drafty windows or doors in winter. If your plant has been exposed to cold, check for signs like yellowing leaves or wilting."
        ]]
    ]],
    ["winter care", 5, [
        ["* winter care *", [
            "In winter, reduce watering as most plants' growth slows down. Keep plants near a light source but avoid direct exposure to heating sources that may dry them out."
        ]]
    ]],
    ["rootbound", 5, [
        ["* rootbound *", [
            "Is your plant rootbound? You can tell if roots are growing out of the drainage holes or if they’re circling the bottom of the pot.",
            "If your plant is rootbound, it might not be able to take up enough water or nutrients. Repotting it into a larger container might help."
        ]]
    ]],
    ["pot", 5, [
        ["* pot *", [
            "Have you checked to see if your plant needs a bigger pot? Sometimes plants stop growing because their roots run out of space.",
            "Repotting a rootbound plant can give it a fresh start and room to grow. What size pot are you using?"
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