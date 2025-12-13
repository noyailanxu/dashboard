const fetch = require("node-fetch");

exports.handler = async (event) => {
    const url = event.queryStringParameters.url;

    try {
        const res = await fetch(url);
        const text = await res.text();

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": res.headers.get("content-type")
            },
            body: text
        };
    } catch (err) {
        return { statusCode: 500, body: "Proxy error" };
    }
};
