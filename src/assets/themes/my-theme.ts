import {definePreset} from "@primevue/themes";
import Lara from "@primevue/themes/lara";

export const MyTheme = definePreset(Lara, {
    semantic: {
        primary: {
            50: '{orange.50}',
            100: '{orange.100}',
            200: '{orange.200}',
            300: '{orange.300}',
            400: '{orange.400}',
            500: '{orange.500}',
            600: '{orange.600}',
            700: '{orange.700}',
            800: '{orange.800}',
            900: '{orange.900}',
            950: '{orange.950}'
        },
        colorScheme: {
            light: {
                primary: {
                    color: '{orange.600}',
                    inverseColor: '#ffffff',
                    hoverColor: '{orange.900}',
                    activeColor: '{orange.800}'
                },
                highlight: {
                    background: '{orange.950}',
                    focusBackground: '{orange.700}',
                    color: '#ffffff',
                    focusColor: '#ffffff'
                },
                surface: {
                    0: '#ffffff',
                    50: '{orange.50}',
                    100: '{orange.100}',
                    200: '{orange.200}',
                    300: '{orange.300}',
                    400: '{orange.400}',
                    500: '{orange.500}',
                    600: '{orange.600}',
                    700: '{orange.700}',
                    800: '{orange.800}',
                    900: '{orange.900}',
                    950: '{orange.950}'
                }
            },
            dark: {
                primary: {
                    color: '{orange.800}',
                    inverseColor: '{orange.950}',
                    hoverColor: '{orange.100}',
                    activeColor: '{orange.200}'
                },
                highlight: {
                    background: 'rgba(250, 250, 250, .16)',
                    focusBackground: 'rgba(250, 250, 250, .24)',
                    color: 'rgba(255,255,255,.87)',
                    focusColor: 'rgba(255,255,255,.87)'
                },
                surface: {
                    0: '#ffffff',
                    50: '{orange.50}',
                    100: '{orange.100}',
                    200: '{orange.200}',
                    300: '{orange.300}',
                    400: '{orange.400}',
                    500: '{orange.500}',
                    600: '{orange.600}',
                    700: '{orange.700}',
                    800: '{orange.800}',
                    900: '{orange.900}',
                    950: '{orange.950}'
                }
            }
        },
    },
    components: {
        menubar: {
            colorScheme: {
                light: {
                    root: {
                        background: '{surface.400}'
                    },
                    item: {
                        color: "white",
                        icon: {
                            color: 'white'
                        },
                    }
                },
                dark: {
                    root: {
                        background: '{surface.900}'
                    },
                }
            },
            border: {
                radius: '0'
            },
        }
    }
})
