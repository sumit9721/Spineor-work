import fetch from "node-fetch";

export const fetcher = url => (
    fetch(url).then(r => r).catch(err => err)
)