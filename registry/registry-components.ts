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

    }
]