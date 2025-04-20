import { Registry } from "./schema";

export const ui: Registry=[
    {
        name:"basic-button",
        type: "registry:block",
        registryDependencies:[], //dependencied that i am using on my component
        // dependencies:["motion","lucid-icons"] - dependencies that are needed to install
        files:[
            "ui/buttons/basicButton.tsx"
        ]

    },{
        name:"crackling-card",
        type: "registry:block",
        registryDependencies:[], //dependencied that i am using on my component
        // dependencies:["motion","lucid-icons"] - dependencies that are needed to install
        files:[
            "ui/animatedCards/CracklingCard.tsx"
        ]

    },{
        name:"fire-cracker",
        type: "registry:block",
        registryDependencies:[], //dependencied that i am using on my component
        // dependencies:["motion","lucid-icons"] - dependencies that are needed to install
        files:[
            "ui/animatedCards/FireCrackerCard.tsx"
        ]

    },{
        name:"flip-card",
        type: "registry:block",
        registryDependencies:[], //dependencied that i am using on my component
        // dependencies:["motion","lucid-icons"] - dependencies that are needed to install
        files:[
            "ui/animatedCards/FlipAnimatedCard.tsx"
        ]

    },{
        name:"login-one",
        type: "registry:block",
        registryDependencies:[], //dependencied that i am using on my component
        // dependencies:["motion","lucid-icons"] - dependencies that are needed to install
        files:[
            "ui/cards/login.tsx"
        ]

    }
    ,{
        name:"signup-one",
        type: "registry:block",
        registryDependencies:[], //dependencied that i am using on my component
        // dependencies:["motion","lucid-icons"] - dependencies that are needed to install
        files:[
            "ui/cards/signup.tsx",
            "ui/buttons/basicButton.tsx"
        ]

    },{
        name:"glowcard",
        type: "registry:block",
        registryDependencies:[], //dependencied that i am using on my component
        // dependencies:["motion","lucid-icons"] - dependencies that are needed to install
        files:[
            "ui/cards/glowLift.tsx",
            
        ]

    },
    {
        name:"accordian",
        type: "registry:block",
        registryDependencies:[], //dependencied that i am using on my component
        // dependencies:["motion","lucid-icons"] - dependencies that are needed to install
        files:[
            "ui/chaiThemed/accordion.tsx",
            
        ]

    },
    {
        name:"chai-tabs",
        type: "registry:block",
        registryDependencies:[], //dependencied that i am using on my component
        // dependencies:["motion","lucid-icons"] - dependencies that are needed to install
        files:[
            "ui/chaiThemed/chaiTabs.tsx",
            
        ]

    },
    {
        name:"course-card",
        type: "registry:block",
        registryDependencies:[], //dependencied that i am using on my component
        // dependencies:["motion","lucid-icons"] - dependencies that are needed to install
        files:[
            "ui/chaiThemed/courseCard.tsx",
            
        ]

    },
    {
        name:"double-count-card",
        type: "registry:block",
        registryDependencies:[], //dependencied that i am using on my component
        // dependencies:["motion","lucid-icons"] - dependencies that are needed to install
        files:[
            "ui/chaiThemed/doubleCountCard.tsx",
            
        ]

    },
    {
        name:"feature-card",
        type: "registry:block",
        registryDependencies:[], //dependencied that i am using on my component
        // dependencies:["motion","lucid-icons"] - dependencies that are needed to install
        files:[
            "ui/chaiThemed/featureCard.tsx",
            
        ]

    }, {
        name:"simple-card",
        type: "registry:block",
        registryDependencies:[], //dependencied that i am using on my component
        // dependencies:["motion","lucid-icons"] - dependencies that are needed to install
        files:[
            "ui/chaiThemed/simpleCard.tsx",
            
        ]

    },{
        name:"solo-count-card",
        type: "registry:block",
        registryDependencies:[], //dependencied that i am using on my component
        // dependencies:["motion","lucid-icons"] - dependencies that are needed to install
        files:[
            "ui/chaiThemed/soloCountCard.tsx",
            
        ]

    },{
        name:"testimonial-card",
        type: "registry:block",
        registryDependencies:[], //dependencied that i am using on my component
        // dependencies:["motion","lucid-icons"] - dependencies that are needed to install
        files:[
            "ui/chaiThemed/testimonialCard.tsx",
            
        ]

    },{
        name:"reflection-text",
        type: "registry:block",
        registryDependencies:[], //dependencied that i am using on my component
        // dependencies:["motion","lucid-icons"] - dependencies that are needed to install
        files:[
            "ui/textAnimations/reflection.tsx",
            
        ]

    },
    {
        name:"sliding-text",
        type: "registry:block",
        registryDependencies:[], //dependencied that i am using on my component
        // dependencies:["motion","lucid-icons"] - dependencies that are needed to install
        files:[
            "ui/textAnimations/sliding.tsx",
            
        ]

    },
    {
        name:"typing-text",
        type: "registry:block",
        registryDependencies:[], //dependencied that i am using on my component
        // dependencies:["motion","lucid-icons"] - dependencies that are needed to install
        files:[
            "ui/textAnimations/typingAnimation.tsx",
            
        ]

    },   {
        name:"login-two",
        type: "registry:block",
        registryDependencies:[], //dependencied that i am using on my component
        dependencies:["motion"], //- dependencies that are needed to install
        files:[
            "ui/loginCards/loginCard.tsx",        
        ]

    }
]