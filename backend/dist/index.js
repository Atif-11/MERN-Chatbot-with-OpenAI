import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
// Connections & Listeners
const PORT = process.env.PORT || 5000;
connectToDatabase()
    .then(() => {
    app.listen(PORT, () => console.log("Port started at 5000 and MongoDB is connected 👌"));
})
    .catch((err) => console.log(err));
//# sourceMappingURL=index.js.map