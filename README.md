![Project status](https://img.shields.io/badge/version-0.1-yellow)
![Bun version](https://img.shields.io/badge/requires-bun_1.0-blue)

# :fish: :fish: **Phishy Phishy!**

*Disclaimer: The code that you'll find in this repository, as well as this README file, were created and written by me. No AI was used.*

**Phishy Phishy!** is a simple library for the scraping of phishing websites. Its purpose is to help cybersecurity students and researchers create datasets that they can train various machine learning models on.

![alt text](https://github.com/julien-blanchard/phishy-phishy/blob/main/images/phishyphishy.png "Image")

**Phishy Phishy!** retrieves phishing urls from [OpenPhish](https://openphish.com/)'s *Community feed*, and scrapes the content of the landing webpages for these urls. 

Pros and cons of using **OpenPhish**'s *Community* version:

* :x: You'll only be getting new urls every 12 hours.
* :white_check_mark: You don't need to create an account and generate an API key.

**Disclaimer**: in order to use **Phishy Phishy!** you must first read and acknowledge **OpenPhish**'s [terms of use](https://openphish.com/terms.html).

# Catch your first phish

After running the script, you'll find a freshly created JSON file at the root of your `phishyphishy` folder. Each record contains:

1.  The url of the webpage that was scraped.
2.  The text that was found between the `<title></title>` tags of the landing webpage.
3.  The full html content of that webpage.

See the [sample JSON file](https://github.com/julien-blanchard/phishy-phishy/blob/main/datasets/2025-05-25_phishing_urls.json) for more information.

# Instructions

**Step 1**: To run **Phishy Phishy!**, you'll first need to have the [**Bun**](https://bun.sh/) runtime installed.

*  On a Windows machine you might want to use [Chocolatey](https://community.chocolatey.org/packages/bun) (recommended):

```
choco install bun
```

*  On MacOS / Ubuntu:

```
curl -fsSL https://bun.sh/install | bash
```

**Step 2**: Create the following folders:

```
mkdir phishyphishy
cd phishyphishy
mkdir datasets src
```

**Step 3**: Start a new **Bun** project:

```
bun init
```

**Step 4**: Install the required packages:

```
bun install axios cheerio
```

**Step 5**: Download the `index.ts` and `scraping_functions.ts` into the root and `src` folders respectively.

To start scraping your first phishing websites, simply type in the following command:

```
bun run index.ts
```

By default, **Phishy Phishy!** will only retrieve the text that can be found within the `<title></title>` of the targeted webpage. To also retrieve the text contained within the `<body></body>`, you'll need to append the following flag:

```
bun run index.ts --fullpage
```

# Feedback

Feel free to reach out if you want to contribute or suggest improvements.
