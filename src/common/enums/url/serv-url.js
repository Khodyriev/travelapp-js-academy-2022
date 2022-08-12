const servUrl = {
    AUTH: {
        GETUSR: "https://travel-app-api.glitch.me/api/v1/auth/authenticated-user",
        SIGNIN: "https://travel-app-api.glitch.me/api/v1/auth/sign-in",
        SIGNUP: "https://travel-app-api.glitch.me/api/v1/auth/sign-up"
    },
    TRIPS: {
        GETALL: "https://travel-app-api.glitch.me/api/v1/trips",
        GETONE: "https://travel-app-api.glitch.me/api/v1/trips/"
    },
    BOOKINGS: {
        GETLIST: "https://travel-app-api.glitch.me/api/v1/bookings",
        BOOK: "https://travel-app-api.glitch.me/api/v1/bookings",
        DELL: "https://travel-app-api.glitch.me/api/v1/bookings/"
    }
};

export { servUrl }