export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        BUCKET: "mb-notes-app-uploads"
    },
    apiGateway: {
        URL: "https://giptoz337b.execute-api.us-east-2.amazonaws.com/prod",
        REGION: "us-east-2"
    },
    cognito: {
        REGION: "us-east-2",
        IDENTITY_POOL_ID: "us-east-2:5e5978c1-ea0c-4a2e-a2ba-4cfb18353ab0",

        USER_POOL_ID: "us-east-2_OR5dA6moA",
        APP_CLIENT_ID: "3oh1f0agnqr48bqoq23arue5li"
    }
};