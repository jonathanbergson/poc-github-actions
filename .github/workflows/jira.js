// var { Document } = require('adf-builder');
//
// const doc = new Document();
// doc.paragraph()
//   .text('Here is some ')
//   .strong('bold test')
//   .text(' and ')
//   .em('text in italics')
//   .text(' as well as ')
//   .link(' a link', 'https://www.atlassian.com')
//   .text(' , emojis ')
//   .emoji(':smile:')
//   .emoji(':rofl:')
//   .emoji(':nerd:')
//   .text(' and some code: ')
//   .code('var i = 0;')
//   .text(' and a bullet list');
// doc.bulletList()
//   .textItem('With one bullet point')
//   .textItem('And another');
// doc.panel("info")
//   .paragraph()
//   .text("and an info panel with some text, with some more code below");
// doc.codeBlock("javascript")
//   .text('var i = 0;\nwhile(true) {\n  i++;\n}');
//
// var reply = doc.toJSON();

const pullRequestCreated = () => {
  console.log('pullRequestCreated');
  console.log('fetch', fetch);
  console.log('body', body);
};

module.exports = {
  pullRequestCreated,
};


const body = {
  "body": {
  "type": "doc",
    "version": 1,
    "content": [
    {
      "type": "panel",
      "attrs": {
        "panelType": "info"
      },
      "content": [
        {
          "type": "paragraph",
          "content": [
            {
              "type": "text",
              "text": "Pull Request criado:"
            }
          ]
        },
        {
          "type": "paragraph",
          "content": [
            {
              "type": "text",
              "text": "Assignees: @jonathanbergson"
            }
          ]
        },
        {
          "type": "paragraph",
          "content": [
            {
              "type": "text",
              "text": "Link: "
            },
            {
              "type": "text",
              "text": "https://github.com/Tracksale/cxm-app/pull/1507",
              "marks": [
                {
                  "type": "link",
                  "attrs": {
                    "href": "https://github.com/Tracksale/cxm-app/pull/1507",
                    "title": "Pull Request link"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
}
