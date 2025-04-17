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
        name:"login",
        type: "registry:block",
        registryDependencies:[], //dependencied that i am using on my component
        // dependencies:["motion","lucid-icons"] - dependencies that are needed to install
        files:[
            "ui/cards/login.tsx"
        ]

    }
    ,{
        name:"signup",
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

    }
]