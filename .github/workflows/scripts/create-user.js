const fs = require('fs');
const axios = require('axios');

const issueData = JSON.parse(process.argv[2]);
const issueTitle = issueData.slug;
const fileName = issueTitle.toLowerCase().replace(/\s+/g, '-');

axios.get(`https://api.github.com/repos/hi-kartik2004/craftfolio/issues?state=closed`)
  .then(response => {
    const closedIssue = response.data.find(issue => issue.title === issueTitle);
    if (closedIssue) {
      const filePath = `app/users/${fileName}.js`;
      const fileContent = `// Content for the user ${fileName}\n\nconst userData = ${JSON.stringify(issueData, null, 2)};\n\nexport default userData;\n`;
      fs.writeFileSync(filePath, fileContent);
      console.log(`File ${filePath} created successfully.`);
    } else {
      console.error(`Closed issue with title '${issueTitle}' not found.`);
    }
  })
  .catch(error => {
    console.error('Error fetching closed issues:', error);
    process.exit(1);
  });
