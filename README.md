![Project status](https://img.shields.io/badge/version-0.1-yellow)
![Bun version](https://img.shields.io/badge/requires-bun_1.0-blue)

# :fish: Phishy Phishy!

**Phishy Phishy!** is a simple library for the scraping of phishing websites. Its purpose is to help cybersecurity students and researchers create phishing websites datasets that they can train machine learning models on.

**Phishy Phishy!** is written in [**TypeScript](https://www.typescriptlang.org/) and retrieves a list of phishing urls from [OpenPhish](https://openphish.com/)'s *Community feed*, meaning that:

* The list of urls only gets updated every 12 hours.
* You don't need an API key to retrieve.

**Disclaimer**: in order to use **Phishy Phishy!** you must first read and aknowledge **OpenPhish**'s [terms of use](https://openphish.com/terms.html).

## What you get

After running 

1.  The url of the website.
2.  The x its `<title></title>` tags.
3.  x

See the [sample JSON file](https://github.com/julien-blanchard/phishy-phishy/blob/main/datasets/2025-05-25_phishing_urls.json) for more information.


## Instructions

**Step 1**: To run **Phishy Phishy!**, you'll need to have the [**Bun**](https://bun.sh/) runtime installed.

*  On Windows machines through [Chocolatey](https://community.chocolatey.org/packages/bun) (recommended):

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

**Step 1**: Download the `index.ts` and `scraping_functions.ts` into the root and `src` folders respectively:

To start scraping your first phishing websites, simply type:

```
bun run index.ts
```

Enjoy!
