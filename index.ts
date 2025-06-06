import axios from "axios";
import * as cheerio from "cheerio";
import * as fs from "fs";
import {openJSONFile, fetchData, writeToJSON} from "./src/scraping_functions.ts";

const PATH_TO_PHISING_URLS: string = "https://raw.githubusercontent.com/openphish/public_feed/refs/heads/main/feed.txt";
const TIME_TODAY = new Date().toISOString().split("T")[0] as string;
const PATH_TO_JSON_FILE: string = `./datasets/${TIME_TODAY}_phishing_urls.json`;
const USER_AGENT: {[key: string]: string} = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36"
};

type PhishingEmails = {
    "Url": string,
    "Posted": string,
    "Title": string,
    "HTML": string
};

const runAll = async () => {
    const response = await axios.get(PATH_TO_PHISING_URLS);
    const new_urls: string[] = response.data.split("\n").slice(0,-1);
    const num_urls: number = new_urls.length;
    let count_start: number = 1;
    let result: any = [];
    for (let new_url of new_urls) {
        let new_entry: PhishingEmails = await fetchData(new_url, USER_AGENT, count_start, num_urls, TIME_TODAY);
        result.push(new_entry);
        count_start ++;
    }
    writeToJSON(PATH_TO_JSON_FILE, result);
};

await runAll();
