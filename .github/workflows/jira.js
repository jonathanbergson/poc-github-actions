var { Document } = require('adf-builder');

const pullRequestCreated = () => {
  const doc = new Document();


  doc.panel("info")
    .paragraph()
    .text("Pull Request criado: \n")
    .text("Assignees: @jonathanbergson \n")
    .text("Link: ")
    .link("https://github.com/Tracksale/cxm-app/pull/1507")

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
  // doc.codeBlock("javascript")
  //   .text('var i = 0;\nwhile(true) {\n  i++;\n}');

  return doc.toJSON();
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
