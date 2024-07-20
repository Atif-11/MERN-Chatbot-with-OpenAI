import { Configuration, OpenAIApi } from "openai";
export const configureOpenAI = () => {
    const config = new Configuration({
        apiKey: process.env.OPEN_AI_SECRET,
        organization: process.env.OPENAI_ORGANIZATION_ID,
    });
    return new OpenAIApi(config);
};
//# sourceMappingURL=openai-config.js.map