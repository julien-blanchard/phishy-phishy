import axios from "axios";
import * as cheerio from "cheerio";
import * as fs from "fs";

export const openJSONFile = (path_to_file: string): object => {
    const json_file: string = fs.readFileSync(path_to_file, "utf-8");
    const result: object = JSON.parse(json_file);
    return result;
};

export const fetchData = async (path_to_url: string, user_agent: {[key: string]: string}, num1: number, num2: number, time_today: str): Promise<PhishingEmails> => {
    try {
        const resp = await axios.get(path_to_url, {user_agent});
        const selector = cheerio.load(resp.data);
        const outcome: string = `[${num1.toString()}/${num2.toString()}] \x1b[32mPASSED\x1b[0m ${path_to_url}`;
        let result: PhishingEmails = {
            "Url": path_to_url,
            "Posted": time_today,
            "Title": selector("title").text(),
            // "HTML": resp.data
        };
        console.log(outcome);
        return result;
    }
    catch (err) {
        const outcome: string = `[${num1.toString()}/${num2.toString()}] \x1b[31mFAILED\x1b[0m ${path_to_url}`;
        console.log(outcome);
    }
};

export const writeToJSON = (path_to_file: string, data: string): void => {
    fs.writeFile(path_to_file, JSON.stringify(data), (err) => {
        if (err) throw err;
        }
    )
};